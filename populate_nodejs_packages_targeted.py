#!/usr/bin/env python3
"""Collect npm candidates for NodeMedic, ranked by DEPENDENTS (Python 3.10+).

Selection target: packages that many other packages depend on (impact via
transitive reach) but are not themselves heavily scrutinized. Vulnerabilities
concentrate in under-audited code with high reach, which direct download count
misses. The npm search endpoint returns a `dependents` count per package, so we
rank on that for free — no extra requests.

Usage:
    python populate_nodejs_packages.py --min-dependents 50
    python populate_nodejs_packages.py --min-dependents 100 --max-downloads 500000
    python populate_nodejs_packages.py --query keywords:exec --query keywords:shell

Writes npm_packages.txt, one name per line, ranked by dependents (desc). No
third-party deps. Candidates come from broad server-side topic searches, NOT a
complete registry scan; keywords are discovery signals, not proof of a sink,
reachability, or a vulnerability — all real analysis remains with NodeMedic.

Filters (cheapest first, to minimise requests):
  1. @types/* rejected.
  2. dependents < --min-dependents rejected        (free, from search result)
  3. monthly downloads outside [--min-downloads, --max-downloads] rejected (free)
  4. then, only for survivors, one manifest fetch for: deprecated, missing/
     declaration-file `main`, and OSI-approved license (SPDX).

Rate: strictly sequential with a --delay throttle (default 0.5s => ~2 req/s),
SQLite response cache (24h), and Retry-After-aware backoff on 429/5xx. Reruns
refetch nothing cached, so a ranked run is cheap to repeat.
"""

import argparse
from collections import Counter
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
import json
from pathlib import Path
import random
import re
import sqlite3
import sys
import time
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlencode
from urllib.request import Request, urlopen


# Broad server-side discovery terms (plain text search matches name, description
# and keywords). The seed is deliberately wide: NodeMedic (analysis mode, no
# filterSinks) does the actual sink detection, including sinks reached through
# dependencies, so pre-narrowing to self-tagged exec packages only loses recall.
TOPICS = """node server api http framework middleware express fastify koa
process child_process exec shell subprocess command execution vm sandbox eval
database sql postgres mysql mongodb redis orm query migration storage
validation schema json yaml xml parser serializer deserialize serialize
stream buffer file filesystem path glob watcher upload download
logging config environment websocket socket network tcp udp dns proxy
graphql grpc rpc authentication authorization jwt oauth session cookie
security crypto hash email template handlebars ejs pug markdown
compression archive zip tar queue worker job scheduler cron cache
async promise concurrency event metrics telemetry tracing search csv
aws azure cloud docker kubernetes deployment ssh remote""".split()


def parse_int(value):
    try:
        return int(value)
    except (TypeError, ValueError):
        return 0


def metadata_rejection(name, manifest):
    if name.startswith("@types/"):
        return "type_definitions"
    if manifest.get("deprecated"):
        return "deprecated"
    entry = manifest.get("main")
    if not isinstance(entry, str) or not entry.strip():
        return "missing_main"
    if entry.strip().lower().endswith((".d.ts", ".d.mts", ".d.cts")):
        return "declaration_main"
    return None


class Client:
    def __init__(self, cache, delay):
        self.db = sqlite3.connect(cache)
        self.db.execute("CREATE TABLE IF NOT EXISTS responses "
                        "(url TEXT PRIMARY KEY, fetched REAL, body TEXT)")
        self.delay = delay
        self.last_request = 0.0

    def get(self, url):
        row = self.db.execute("SELECT fetched, body FROM responses WHERE url=?",
                              (url,)).fetchone()
        if row and time.time() - row[0] < 86400:
            return json.loads(row[1])
        for attempt in range(6):
            time.sleep(max(0, self.delay - (time.monotonic() - self.last_request)))
            self.last_request = time.monotonic()
            try:
                request = Request(url, headers={
                    "User-Agent": "npm-package-list-collector/1.0",
                    "Accept": "application/json",
                })
                with urlopen(request, timeout=60) as response:
                    body = response.read().decode("utf-8")
                data = json.loads(body)
                self.db.execute("INSERT OR REPLACE INTO responses VALUES (?, ?, ?)",
                                (url, time.time(), body))
                self.db.commit()
                return data
            except HTTPError as error:
                if error.code not in (408, 429, 500, 502, 503, 504) or attempt == 5:
                    raise
                retry_after = error.headers.get("Retry-After", "")
                try:
                    wait = float(retry_after)
                except ValueError:
                    try:
                        wait = (parsedate_to_datetime(retry_after) -
                                datetime.now(timezone.utc)).total_seconds()
                    except (ValueError, TypeError, OverflowError):
                        wait = 2 ** attempt + random.random()
                time.sleep(max(0, wait))
            except (URLError, TimeoutError, ConnectionError, json.JSONDecodeError):
                if attempt == 5:
                    raise
                time.sleep(2 ** attempt + random.random())

    def close(self):
        self.db.close()


def license_is_open(value, approved):
    if isinstance(value, dict):
        value = value.get("type")  # legacy npm license objects
    if not isinstance(value, str) or not value.strip():
        return False
    tokens = re.findall(r"\(|\)|[A-Za-z0-9.+-]+|\S", value)
    position = 0

    def atom():
        nonlocal position
        if position >= len(tokens):
            raise ValueError("Missing operand")
        token = tokens[position]
        position += 1
        if token == "(":
            result = either()
            if position >= len(tokens) or tokens[position] != ")":
                raise ValueError("Missing parenthesis")
            position += 1
            return result
        if token not in approved:
            raise ValueError("Unknown license")
        return approved[token]

    def both():
        nonlocal position
        result = atom()
        while position < len(tokens) and tokens[position] == "AND":
            position += 1
            right = atom()
            result = result and right
        return result

    def either():
        nonlocal position
        result = both()
        while position < len(tokens) and tokens[position] == "OR":
            position += 1
            right = both()
            result = result or right
        return result

    try:
        result = either()
        return position == len(tokens) and result
    except (ValueError, RecursionError):
        return False


def collect(args, client, approved):
    seen = set()
    errors = 0
    rejected = Counter()
    candidates = []  # (dependents, monthly, name)

    for topic in args.query or TOPICS:
        print(f"Searching {topic!r}; kept={len(candidates)}, examined={len(seen)}",
              file=sys.stderr)
        for page in range(args.pages):
            params = urlencode({"text": topic, "size": 250, "from": page * 250,
                                "popularity": 1, "quality": 0, "maintenance": 0})
            try:
                data = client.get("https://registry.npmjs.org/-/v1/search?" + params)
                objects = data["objects"]
            except (OSError, ValueError, KeyError) as error:
                errors += 1
                print(f"Search failed for {topic!r}: {error}", file=sys.stderr)
                break
            if not objects:
                break
            for item in objects:
                name = item.get("package", {}).get("name")
                if not name or name in seen:
                    continue
                seen.add(name)
                if name.startswith("@types/"):
                    rejected["type_definitions"] += 1
                    continue
                # 1) dependents gate — free from the search result, applied first
                dependents = parse_int(item.get("dependents"))
                if dependents < args.min_dependents:
                    rejected["low_dependents"] += 1
                    continue
                # 2) download window — also free from the search result
                monthly = item.get("downloads", {}).get("monthly")
                monthly = monthly if isinstance(monthly, (int, float)) else 0
                if monthly < args.min_downloads:
                    rejected["low_downloads"] += 1
                    continue
                if args.max_downloads and monthly > args.max_downloads:
                    rejected["too_popular"] += 1
                    continue
                # 3) manifest fetch ONLY for survivors (main-check + license)
                try:
                    manifest = client.get("https://registry.npmjs.org/" +
                                          quote(name, safe="") + "/latest")
                    reason = metadata_rejection(name, manifest)
                    if reason:
                        rejected[reason] += 1
                        continue
                    search_license = item.get("package", {}).get("license")
                    if not (license_is_open(manifest.get("license"), approved)
                            or license_is_open(search_license, approved)):
                        rejected["unapproved_or_unknown_license"] += 1
                        continue
                except (OSError, ValueError, KeyError, TypeError) as error:
                    errors += 1
                    print(f"Skipping {name}: {error}", file=sys.stderr)
                    continue
                candidates.append((dependents, monthly, name))
            if len(objects) < 250:
                break

    # rank by dependents desc, downloads desc as tie-breaker
    candidates.sort(key=lambda c: (-c[0], -c[1]))
    chosen = candidates[:args.limit]

    output = Path(args.output).expanduser()
    output.parent.mkdir(parents=True, exist_ok=True)
    with output.open("w", encoding="utf-8", newline="\n") as destination:
        for _dep, _dl, name in chosen:
            destination.write(name + "\n")

    print("Exclusions: " + json.dumps(dict(rejected), sort_keys=True), file=sys.stderr)
    print(f"Saved {len(chosen)} names (ranked by dependents) to {output}; errors={errors}",
          file=sys.stderr)
    if chosen:
        print("Top candidates:", file=sys.stderr)
        for dep, dl, name in chosen[:12]:
            print(f"  {name:40s} dependents={dep:>7} monthly={dl}", file=sys.stderr)
    return 0 if chosen else 2


def main():
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--limit", type=int, default=10000, help="Max names to write")
    parser.add_argument("--min-dependents", type=int, default=25,
                        help="Minimum dependent packages (primary impact signal; default 50)")
    parser.add_argument("--min-downloads", type=int, default=0,
                        help="Minimum monthly downloads (default 0 — dependents is the gate)")
    parser.add_argument("--max-downloads", type=int, default=0,
                        help="Cap monthly downloads to target under-scrutinized pkgs (0 = no cap)")
    parser.add_argument("--output", default="npm_packages.txt")
    parser.add_argument("--cache", default="npm_package_cache.sqlite3")
    parser.add_argument("--pages", type=int, default=40,
                        help="Pages per topic, 250 candidates each (1..40; default 10)")
    parser.add_argument("--query", action="append",
                        help="Override default keyword searches; repeat as needed")
    parser.add_argument("--delay", type=float, default=0.5,
                        help="Minimum seconds between HTTP requests (default 0.5 => ~2 req/s)")
    args = parser.parse_args()
    if (args.limit < 1 or args.min_downloads < 0 or args.max_downloads < 0
            or args.min_dependents < 0 or not 1 <= args.pages <= 40 or args.delay < 0):
        parser.error("limit>0, *-downloads>=0, min-dependents>=0, pages 1..40, delay>=0")
    if Path(args.output).resolve() == Path(args.cache).resolve():
        parser.error("Output and cache must have different paths")
    client = Client(args.cache, args.delay)
    try:
        licenses = client.get("https://raw.githubusercontent.com/spdx/"
                              "license-list-data/main/json/licenses.json")
        approved = {item["licenseId"]: item.get("isOsiApproved") is True
                    for item in licenses["licenses"]}
        if not any(approved.values()):
            raise ValueError("SPDX list contained no OSI-approved licenses")
        return collect(args, client, approved)
    finally:
        client.close()


if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        print("\nInterrupted; cached responses are retained.", file=sys.stderr)
        sys.exit(130)
    except (OSError, ValueError, KeyError) as error:
        print(f"Failed: {error}", file=sys.stderr)
        sys.exit(1)