#!/usr/bin/env python3
"""
Batch-run NodeMedic-FINE over a list of npm packages.

Standalone orchestrator: it only *invokes* the existing Docker image and reads
the JSON it emits. It does not modify anything inside the NodeMedic-FINE repo.

packages.txt: one package per line. Version is OPTIONAL — omit it (or use
@latest) and the newest published version is resolved from the npm registry.
    node-rsync            # -> resolves latest
    node-rsync@1.0.3      # pinned
    @scope/pkg            # scoped, latest
    @scope/pkg@2.0.0      # scoped, pinned
Blank lines and #comments are ignored.

Usage:
    python3 nodemedic_batch.py candidates.txt --mode analysis --jobs 6 --memory 4g
"""
import argparse
import json
import subprocess
import sys
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

try:
    from tqdm import tqdm
except ImportError:
    tqdm = None
    def _write(msg): print(msg, flush=True)
else:
    def _write(msg): tqdm.write(msg)


def safe(name: str) -> str:
    return name.replace("/", "%")


def parse_entry(line: str):
    """Return (name, version_or_None). Handles scoped @scope/name@version."""
    if line.startswith("@"):                 # scoped package
        idx = line.find("@", 1)              # version separator, if any
        if idx == -1:
            return line, None
        return line[:idx], line[idx + 1:]
    if "@" in line:
        idx = line.rfind("@")
        return line[:idx], line[idx + 1:]
    return line, None


def load_packages(path: Path):
    pkgs = []
    for raw in path.read_text().splitlines():
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        name, ver = parse_entry(line)
        if not name:
            _write(f"!  skipping malformed entry: {line!r}")
            continue
        pkgs.append((name, ver or None))
    return pkgs


def resolve_latest(name: str, timeout: int = 30):
    """Resolve the 'latest' dist-tag to a concrete version via the npm registry."""
    enc = name.replace("/", "%2f") if name.startswith("@") else name
    url = f"https://registry.npmjs.org/{enc}/latest"
    with urllib.request.urlopen(url, timeout=timeout) as r:
        return json.load(r).get("version")


def extract_row(out_dir: Path, mode: str, stdout: str):
    """Prefer results.json from the mounted artifacts dir; fall back to stdout."""
    fname = "results_gather.json" if mode == "gather" else "results.json"
    rj = out_dir / fname
    data = None
    if rj.exists():
        try:
            data = json.loads(rj.read_text())
        except json.JSONDecodeError:
            data = None
    if data is None:
        for line in stdout.splitlines():
            line = line.strip()
            if line.startswith("{") and '"rows"' in line:
                try:
                    data = json.loads(line)
                    break
                except json.JSONDecodeError:
                    continue
    if not data:
        return None
    rows = data.get("rows") or []
    return rows[0] if rows else None


def interpret(row):
    sink = row.get("sinkType") or "?"
    synth = row.get("synthesisResult")
    exploit_results = row.get("exploitResults") or []
    cand = row.get("candidateExploit")
    tasks = row.get("taskResults") or {}
    checked_ok = (tasks.get("checkExploit", {}) or {}).get("status") == "Continue"
    # runInstrumented completes ("Continue") only when a tainted flow to a sink was
    # actually observed at runtime; it aborts (no taint_0.json) when none is found.
    # Top-level `sinksHit`/`sinks` is just the STATIC set of sink calls in the source,
    # so it is NOT evidence of a real flow.
    flow_found = (tasks.get("runInstrumented", {}) or {}).get("status") == "Continue"
    if exploit_results and isinstance(synth, dict):
        return "vuln", sink, cand, checked_ok
    if flow_found:
        return "flow", sink, None, checked_ok
    return "clean", sink, None, checked_ok


def run_one(out_root, image, name, ver, mode, purge, timeout, memory):
    """One docker run with an ISOLATED per-package packageData dir (safe under
    parallelism — no shared npm cache contention) and a memory cap."""
    pkg_out = out_root / f"{safe(name)}@{ver}"
    pkg_out.mkdir(parents=True, exist_ok=True)
    pkg_data = pkg_out / "packageData"
    pkg_data.mkdir(exist_ok=True)
    cmd = [
        "docker", "run", "--rm",
        "--memory", memory, "--memory-swap", memory,   # cap RAM; no extra swap
        "-v", f"{pkg_data}:/nodetaint/packageData:rw",
        "-v", f"{pkg_out}:/nodetaint/analysisArtifacts:rw",
        image,
        f"--package={name}", f"--version={ver}", f"--mode={mode}",
    ]
    if purge:
        cmd += ["--flags", "--no-cache"]
    try:
        proc = subprocess.run(cmd, capture_output=True, text=True, timeout=timeout)
    except subprocess.TimeoutExpired:
        return "timeout", None, pkg_out
    except OSError as e:
        return f"error:docker could not be run ({e})", None, pkg_out
    row = extract_row(pkg_out, mode, proc.stdout)
    if row is None:
        tail = (proc.stderr or proc.stdout or "").strip().splitlines()[-3:]
        return "error:" + " | ".join(tail), None, pkg_out
    return "ok", row, pkg_out


def process(name, raw_ver, args, out_root):
    """Resolve, cache-check, scan and classify ONE package. Returns a result
    record; all shared-state bookkeeping happens in the main thread. Never raises."""
    try:
        ver = raw_ver
        if ver in (None, "", "latest"):
            try:
                ver = resolve_latest(name)
                if not ver:
                    raise ValueError("no version in registry response")
            except Exception as e:
                return {"bucket": "error", "tag": f"{name}@latest",
                        "line": f"✖  ERROR    {name}@latest  (could not resolve latest: {e})"}

        tag = f"{name}@{ver}"

        # Skip packages already scanned (valid results present in --out).
        if not args.rescan:
            cached = extract_row(out_root / f"{safe(name)}@{ver}", args.mode, "")
            if cached is not None:
                kind, sink, payload, _ = interpret(cached)
                line = None
                if kind == "vuln":
                    line = f"\U0001f534 VULN     {tag}  [{sink}, cached]  exploit={json.dumps(payload)}"
                elif args.show_clean:
                    line = f"·  cached   {tag}  ({kind})"
                return {"bucket": kind, "tag": tag, "line": line, "skipped": True}

        status, row, _ = run_one(out_root, args.image, name, ver,
                                 args.mode, args.purge, args.timeout, args.memory)
        if status == "timeout":
            return {"bucket": "timeout", "tag": tag, "line": f"⏱  TIMEOUT  {tag}"}
        if status.startswith("error"):
            return {"bucket": "error", "tag": tag,
                    "line": f"✖  ERROR    {tag}  ({status[6:].strip() or 'no results.json'})"}

        kind, sink, payload, checked = interpret(row)
        if kind == "vuln":
            conf = "confirmed" if checked else "unconfirmed"
            return {"bucket": "vuln", "tag": tag,
                    "line": f"\U0001f534 VULN     {tag}  [{sink}, {conf}]  exploit={json.dumps(payload)}"}
        if kind == "flow":
            return {"bucket": "flow", "tag": tag,
                    "line": f"\U0001f7e0 FLOW     {tag}  [{sink}]  tainted flow, no exploit synthesized"}
        return {"bucket": "clean", "tag": tag,
                "line": (f"\U0001f7e2 clean    {tag}" if args.show_clean else None)}
    except Exception as e:
        return {"bucket": "error", "tag": f"{name}@{raw_ver or 'latest'}",
                "line": f"✖  ERROR    {name}  (unexpected: {e})"}


def main():
    ap = argparse.ArgumentParser(description="Batch NodeMedic-FINE scanner")
    ap.add_argument("packages", help="file with one package (name or name@version) per line")
    ap.add_argument("--out", default="./nm_batch_out", help="output dir")
    ap.add_argument("--image", default="nodemedic-fine:latest")
    ap.add_argument("--mode", default="analysis", choices=["gather", "analysis", "full"])
    ap.add_argument("--timeout", type=int, default=2400, help="per-package timeout (s)")
    ap.add_argument("--jobs", "-j", type=int, default=1,
                    help="packages to scan concurrently (one container each)")
    ap.add_argument("--memory", default="4g", help="per-container memory cap (docker --memory)")
    ap.add_argument("--no-purge", dest="purge", action="store_false",
                    help="keep each install after scan (default: purge on)")
    ap.set_defaults(purge=True)
    ap.add_argument("--show-clean", action="store_true", help="also log clean packages")
    ap.add_argument("--rescan", action="store_true",
                    help="re-scan packages even if results already exist in --out")
    args = ap.parse_args()

    out_root = Path(args.out).expanduser().resolve()
    out_root.mkdir(parents=True, exist_ok=True)
    pkgs = load_packages(Path(args.packages).expanduser())
    if not pkgs:
        sys.exit("No packages to scan.")

    summary = {"vuln": [], "flow": [], "clean": [], "error": [], "timeout": []}
    skipped = 0
    jobs = max(1, args.jobs)

    with ThreadPoolExecutor(max_workers=jobs) as ex:
        futs = [ex.submit(process, name, ver, args, out_root) for name, ver in pkgs]
        gen = as_completed(futs)
        if tqdm:
            gen = tqdm(gen, total=len(futs), desc="scanning", unit="pkg")
        for fu in gen:
            r = fu.result()
            summary[r["bucket"]].append(r["tag"])
            if r.get("skipped"):
                skipped += 1
            if r.get("line"):
                _write(r["line"])

    print("\n" + "=" * 60)
    print(f"scanned {len(pkgs)}  (jobs={jobs})  |  "
          f"vuln {len(summary['vuln'])}  flow {len(summary['flow'])}  "
          f"clean {len(summary['clean'])}  error {len(summary['error'])}  "
          f"timeout {len(summary['timeout'])}  |  cached {skipped}")
    if summary["vuln"]:
        print("\nVulnerable packages:")
        for t in summary["vuln"]:
            print(f"  \U0001f534 {t}")
    print(f"\nPer-package artifacts under: {out_root}")


if __name__ == "__main__":
    main()
