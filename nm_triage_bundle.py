#!/usr/bin/env python3
"""Bundle NodeMedic-FINE flow findings for triage.

Walks an nm_batch_out directory, finds every package with a tainted flow
(runInstrumented completed) or a confirmed exploit, and collects each one's
triage artifacts into ./triage/<package>/ plus a consolidated triage_report.md
(read this) and triage_report.json (for an LLM pass).

Per flow it gathers: the sink, the entry points, why auto-synthesis failed, and
the raw provenance graph (taint_0.json / .pdf) + the generated drivers / PoC so
you can judge attacker-reachability and try to shape a payload by hand.

Usage:
    python nm_triage_bundle.py                 # reads ./nm_batch_out
    python nm_triage_bundle.py --out nm_batch_out --dest triage
"""
import argparse
import json
import shutil
from pathlib import Path


def load_row(pkg_dir):
    for fn in ("results.json", "results_gather.json"):
        p = pkg_dir / fn
        if p.exists():
            try:
                rows = json.loads(p.read_text()).get("rows") or []
                if rows:
                    return rows[0]
            except json.JSONDecodeError:
                pass
    return None


def is_flow(row):
    tasks = row.get("taskResults") or {}
    return (tasks.get("runInstrumented", {}) or {}).get("status") == "Continue"


def has_exploit(row):
    return bool(row.get("exploitResults"))


def abort_message(st):
    res = st.get("result")
    if isinstance(res, dict):
        msg = res.get("result") or res.get("output") or json.dumps(res)
    else:
        msg = res
    return (str(msg)[:400] + "…") if msg and len(str(msg)) > 400 else str(msg)


def why_no_exploit(row):
    tasks = row.get("taskResults") or {}
    for t in ("smt", "checkExploit", "trivialExploit", "setSinkType"):
        st = tasks.get(t, {}) or {}
        if st.get("status") == "Abort":
            return f"{t} aborted: {abort_message(st)}"
    if not isinstance(row.get("synthesisResult"), dict):
        return "synthesis produced no result (could not build a candidate)"
    return "flow found; synthesizer ran but produced no confirmed exploit"


def ep_summary(entry_points):
    eps = entry_points or []
    parts = []
    for e in eps:
        name = e.get("functionName", "?")
        n = e.get("numArguments", "?")
        kind = []
        if e.get("isMethod"):
            kind.append("method")
        if e.get("isConstructor"):
            kind.append("ctor")
        tag = ("[" + ",".join(kind) + "]") if kind else ""
        parts.append(f"{name}/{n}{tag}")
    return ", ".join(parts) if parts else "?"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="nm_batch_out", help="batch output dir")
    ap.add_argument("--dest", default="triage", help="where to write the bundle")
    args = ap.parse_args()

    out = Path(args.out).expanduser()
    dest = Path(args.dest).expanduser()
    dest.mkdir(parents=True, exist_ok=True)

    flows, vulns = [], []
    for pkg_dir in sorted(p for p in out.iterdir() if p.is_dir()):
        row = load_row(pkg_dir)
        if not row:
            continue
        if has_exploit(row):
            bucket = vulns
        elif is_flow(row):
            bucket = flows
        else:
            continue

        tag = pkg_dir.name
        d = dest / tag
        d.mkdir(parents=True, exist_ok=True)
        copied = []
        for fn in ("results.json", "taint_0.json", "taint_0.pdf"):
            src = pkg_dir / fn
            if src.exists():
                shutil.copy2(src, d / fn)
                copied.append(fn)
        for pat in ("poc*.js", "run-*.js"):
            for src in pkg_dir.glob(pat):
                shutil.copy2(src, d / src.name)
                copied.append(src.name)

        tp = pkg_dir / "taint_0.json"
        bucket.append({
            "package": tag,
            "sinkType": row.get("sinkType"),
            "sinks": row.get("sinks"),
            "sinksHit": row.get("sinksHit"),
            "entryPoints": row.get("entryPoints"),
            "candidateExploit": row.get("candidateExploit"),
            "synthesisResult": row.get("synthesisResult")
                if isinstance(row.get("synthesisResult"), dict) else None,
            "why_no_exploit": None if has_exploit(row) else why_no_exploit(row),
            "taint_bytes": tp.stat().st_size if tp.exists() else None,
            "files": copied,
        })

    (dest / "triage_report.json").write_text(
        json.dumps({"flows": flows, "vulns": vulns}, indent=2))

    md = ["# NodeMedic triage bundle", "",
          f"flows: **{len(flows)}**  |  confirmed exploits: **{len(vulns)}**",
          f"raw artifacts per package under `{dest}/<package>/`", ""]
    for title, items in (("Confirmed exploits", vulns),
                         ("Flows — no auto-exploit (TRIAGE THESE)", flows)):
        if not items:
            continue
        md.append(f"## {title} ({len(items)})\n")
        for r in items:
            md.append(f"### {r['package']}")
            md.append(f"- **sink**: `{r['sinkType']}`   sinksHit: {r.get('sinksHit')}")
            md.append(f"- **entry points**: {ep_summary(r.get('entryPoints'))}")
            if r.get("candidateExploit"):
                md.append(f"- candidateExploit: `{json.dumps(r['candidateExploit'])}`")
            if r.get("why_no_exploit"):
                md.append(f"- **why no exploit**: {r['why_no_exploit']}")
            tb = r.get("taint_bytes")
            md.append(f"- provenance: taint_0.json ({tb} bytes)" if tb
                      else "- provenance: (no taint_0.json)")
            md.append(f"- files: {', '.join(r['files'])}")
            md.append("")
    (dest / "triage_report.md").write_text("\n".join(md))

    print(f"bundled {len(flows)} flows, {len(vulns)} exploits -> {dest}/")
    print(f"  {dest}/triage_report.md     <- read / share this")
    print(f"  {dest}/triage_report.json   <- structured, for the LLM pass")
    print(f"  {dest}/<package>/           <- raw taint_0.json, drivers, poc, results.json")
    if not flows and not vulns:
        print("NOTE: found no flows/exploits in", out, "- check the path.")


if __name__ == "__main__":
    main()