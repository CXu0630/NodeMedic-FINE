#!/usr/bin/env python3
"""
Sharpen NodeMedic-FINE candidate selection.

Cheaply pre-screens npm packages WITHOUT running the pipeline: for each package
it downloads the tarball, greps for ACE/ACI sink calls, and ranks the survivors
by popularity (weekly downloads, as an impact proxy). Emits a candidates.txt
(name@version per line) ready to feed nodemedic_batch.py, plus a JSON report.

Seed candidates either from npm keyword search (default: the shell-wrapper / exec
genre, where tainted input is most often genuinely attacker-controlled) or from a
names file you provide.

Rationale: the NodeMedic papers pre-filtered to sink-containing packages. Feeding
the pipeline random names wastes most runs on packages with no sink at all. This
front-loads that filter for free (no Docker) and ranks by impact.

Usage:
    python3 nm_candidates.py --out candidates.txt
    python3 nm_candidates.py --names mylist.txt --out candidates.txt
    python3 nm_candidates.py --keywords exec,shell,ffmpeg,git --per-keyword 250
    # then:
    python3 nm_batch.py candidates.txt --mode analysis
"""
import argparse
import io
import json
import re
import sys
import tarfile
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

try:
    from tqdm import tqdm
except ImportError:
    tqdm = None

REGISTRY = "https://registry.npmjs.org"
SEARCH = "https://registry.npmjs.org/-/v1/search"
DOWNLOADS = "https://api.npmjs.org/downloads/point/last-week"
UA = {"User-Agent": "nm-candidates"}

# Genre bias: keywords that surface shell wrappers / code-runner libs, where the
# public API's input is most often attacker-reachable in real deployments.
DEFAULT_KEYWORDS = ["exec", "shell", "command", "spawn", "child_process", "cli",
                    "ffmpeg", "imagemagick", "git", "rsync", "ssh", "convert",
                    "template", "compile", "sandbox", "eval", "vm"]

# Sink patterns aligned with NodeMedic's ACE/ACI sinks (+ a few FINE extras).
SINK_RES = [
    (re.compile(r"\bchild_process\b"), "child_process"),
    (re.compile(r"\bexecSync\s*\("), "execSync"),
    (re.compile(r"\bexecFile\s*\("), "execFile"),
    (re.compile(r"\bexec\s*\("), "exec"),
    (re.compile(r"\bspawn\s*\("), "spawn"),
    (re.compile(r"\beval\s*\("), "eval"),
    (re.compile(r"\bnew\s+Function\s*\("), "new Function"),
    (re.compile(r"runInNewContext\s*\("), "vm.runInNewContext"),
    (re.compile(r"runInContext\s*\("), "vm.runInContext"),
    (re.compile(r"runInThisContext\s*\("), "vm.runInThisContext"),
]


def http_json(url, timeout=30):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.load(r)


def enc(name):
    if name.startswith("@"):
        return name.replace("/", "%2f")
    return urllib.parse.quote(name, safe="")


def search_names(keywords, per_keyword):
    names = set()
    for kw in keywords:
        kw = kw.strip()
        if not kw:
            continue
        try:
            data = http_json(f"{SEARCH}?text={urllib.parse.quote(kw)}&size={per_keyword}")
            for obj in data.get("objects", []):
                n = obj.get("package", {}).get("name")
                if n:
                    names.add(n)
        except Exception as e:
            print(f"! search '{kw}' failed: {e}", file=sys.stderr)
    return sorted(names)


def latest_tarball(name):
    data = http_json(f"{REGISTRY}/{enc(name)}")
    ver = data.get("dist-tags", {}).get("latest")
    dist = data.get("versions", {}).get(ver, {}).get("dist", {}) if ver else {}
    return ver, dist.get("tarball")


def weekly_downloads(name):
    try:
        return http_json(f"{DOWNLOADS}/{name}").get("downloads", 0) or 0
    except Exception:
        return 0


def scan_tarball(url, cap=25_000_000, max_files=600):
    """Download the tgz and grep .js files for sink calls. (hits dict, oversized)."""
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=90) as r:
        raw = r.read(cap + 1)
    if len(raw) > cap:
        return {}, True  # too large to scan safely; skip
    hits = {}
    try:
        tf = tarfile.open(fileobj=io.BytesIO(raw), mode="r:gz")
        n = 0
        for m in tf:
            if n >= max_files:
                break
            if not m.isfile() or "/node_modules/" in m.name:
                continue
            if not m.name.endswith((".js", ".cjs", ".mjs", ".ts")):
                continue
            n += 1
            f = tf.extractfile(m)
            if f is None:
                continue
            text = f.read(3_000_000).decode("utf-8", "ignore")
            for rx, label in SINK_RES:
                c = len(rx.findall(text))
                if c:
                    hits[label] = hits.get(label, 0) + c
    except (tarfile.TarError, OSError, EOFError):
        pass
    return hits, False


def evaluate(name, want_downloads):
    try:
        ver, tarball = latest_tarball(name)
        if not ver or not tarball:
            return {"name": name, "error": "no version/tarball"}
        hits, oversized = scan_tarball(tarball)
        dl = weekly_downloads(name) if want_downloads else 0
        return {"name": name, "version": ver, "sinks": hits,
                "sink_hits": sum(hits.values()), "downloads": dl,
                "oversized": oversized}
    except Exception as e:
        return {"name": name, "error": str(e)}


def main():
    ap = argparse.ArgumentParser(description="Pre-screen npm packages into sink-positive, ranked candidates")
    src = ap.add_argument_group("seed source")
    src.add_argument("--keywords", default=",".join(DEFAULT_KEYWORDS),
                     help="comma-separated npm search terms (genre bias)")
    src.add_argument("--names", help="file of candidate package names (overrides keyword search)")
    src.add_argument("--per-keyword", type=int, default=250, help="max search hits per keyword (<=250)")
    ap.add_argument("--out", default="candidates.txt", help="ranked name@version list for nm_batch.py")
    ap.add_argument("--report", default="candidates.json", help="full JSON report")
    ap.add_argument("--min-sinks", type=int, default=1, help="minimum static sink hits to keep")
    ap.add_argument("--min-downloads", type=int, default=0, help="minimum weekly downloads to keep")
    ap.add_argument("--no-downloads", action="store_true", help="skip popularity lookup/ranking")
    ap.add_argument("--jobs", type=int, default=8, help="concurrent fetches")
    args = ap.parse_args()

    if args.names:
        names = [l.strip() for l in open(args.names) if l.strip() and not l.startswith("#")]
    else:
        print("Seeding candidate names from npm search...", file=sys.stderr)
        names = search_names(args.keywords.split(","), args.per_keyword)
    names = sorted(set(names))
    if not names:
        sys.exit("No candidate names to screen.")
    print(f"Screening {len(names)} packages for sinks...", file=sys.stderr)

    want_dl = not args.no_downloads
    results = []
    with ThreadPoolExecutor(max_workers=args.jobs) as ex:
        futs = {ex.submit(evaluate, n, want_dl): n for n in names}
        gen = as_completed(futs)
        if tqdm:
            gen = tqdm(gen, total=len(futs), desc="screening", unit="pkg")
        for fu in gen:
            results.append(fu.result())

    keep = [r for r in results
            if not r.get("error")
            and r.get("sink_hits", 0) >= args.min_sinks
            and r.get("downloads", 0) >= args.min_downloads]
    # rank: impact first (downloads), then sink density
    keep.sort(key=lambda r: (-r.get("downloads", 0), -r.get("sink_hits", 0)))

    with open(args.out, "w") as f:
        for r in keep:
            f.write(f"{r['name']}@{r['version']}\n")
    json.dump({"screened": len(results), "candidates": keep}, open(args.report, "w"), indent=2)

    errored = sum(1 for r in results if r.get("error"))
    print("\n" + "=" * 60)
    print(f"screened {len(results)}  |  sink-positive {len(keep)}  |  errors {errored}")
    print(f"ranked candidates -> {args.out}")
    print(f"full report       -> {args.report}")
    for r in keep[:12]:
        print(f"  {r['name']}@{r['version']}  dl/wk={r['downloads']:>9}  sinks={','.join(r['sinks']) or '-'}")


if __name__ == "__main__":
    main()
