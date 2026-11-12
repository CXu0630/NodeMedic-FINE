#!/usr/bin/env python3
"""Collect npm candidates for NodeMedic (Python 3.10+).

Usage:
    python populate_nodejs_packages.py
    python populate_nodejs_packages.py --limit 10000 --min-downloads 10000
    python populate_nodejs_packages.py --query server --query database --pages 20

No third-party Python dependencies. Writes npm_packages.txt, one name per line.
Candidates come from server-side topic searches, NOT a complete or globally
ranked registry scan. Frontend, styling, browser automation, documentation,
testing and bundler topics are not used for discovery. These are discovery
preferences, not hard category exclusions: packages can match multiple topics.

Early metadata filters reject @types/*, deprecated packages, missing/empty main,
and main entries pointing to declaration files. A browser field or bin field
alone is NOT grounds for rejection: server libraries can have either.

Remaining browser-API, sink, dependency, public-entry-point and runtime checks
must be run in NodeMedic. Main's presence does not prove require() succeeds.
No package code is installed or executed here. Absence of a direct sink is not
used to exclude packages: a sink may exist in their dependencies.

Downloads: npm search's monthly count, falling back to the downloads API's
last-month count when unavailable. License: latest version's declared license,
checked against SPDX's OSI-approved list. This is metadata classification, not
an audit of source files. WITH exceptions and custom licenses are skipped.

HTTP responses are cached in SQLite for 24 hours; interrupted runs can be rerun
without fetching cached responses again. Output is rebuilt each run and flushed
after each accepted name. A shortfall is reported with exit status 2.
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


def metadata_rejection(name, manifest):
    """Cheap structural exclusions; deliberately avoid guessing from keywords."""
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
    """Evaluate a conservative SPDX subset; reject malformed/unknown expressions.

    AND requires both licenses to be OSI-approved. OR requires one approved
    licensing alternative. Unknown identifiers cause rejection of the whole
    expression, even when an OR branch would otherwise pass.
    """
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
    accepted = 0
    errors = 0
    rejected = Counter()
    def report():
        print("Exclusions: " + json.dumps(dict(rejected), sort_keys=True), file=sys.stderr)
    output = Path(args.output).expanduser()
    output.parent.mkdir(parents=True, exist_ok=True)
    with output.open("w", encoding="utf-8", newline="\n") as destination:
        for topic in args.query or TOPICS:
            print(f"Searching {topic!r}; accepted={accepted}, examined={len(seen)}",
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
                    try:
                        monthly = item.get("downloads", {}).get("monthly")
                        if not isinstance(monthly, (int, float)):
                            counts = client.get("https://api.npmjs.org/downloads/point/"
                                                "last-month/" + quote(name, safe=""))
                            monthly = counts["downloads"]
                        if monthly < args.min_downloads:
                            rejected["low_downloads"] += 1
                            continue
                        manifest = client.get("https://registry.npmjs.org/" +
                                              quote(name, safe="") + "/latest")
                        reason = metadata_rejection(name, manifest)
                        if reason:
                            rejected[reason] += 1
                            continue
                        if not license_is_open(manifest.get("license"), approved):
                            rejected["unapproved_or_unknown_license"] += 1
                            continue
                    except (OSError, ValueError, KeyError, TypeError) as error:
                        errors += 1
                        print(f"Skipping {name}: {error}", file=sys.stderr)
                        continue
                    destination.write(name + "\n")
                    destination.flush()
                    accepted += 1
                    if accepted >= args.limit:
                        print(f"Saved {accepted} names to {output}; request errors={errors}",
                              file=sys.stderr)
                        report()
                        return 0
                if len(objects) < 250:
                    break
    report()
    print(f"Saved {accepted}/{args.limit} names to {output}; request errors={errors}. "
          "For more candidates, increase --pages or supply additional --query values; "
          "lower --min-downloads only if that fits your selection criteria.",
          file=sys.stderr)
    return 2


def main():
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--limit", type=int, default=50000, help="Target number of names")
    parser.add_argument("--min-downloads", type=int, default=10000,
                        help="Minimum monthly downloads (default: 10000)")
    parser.add_argument("--output", default="npm_packages.txt",
                        help="Output path; existing contents are overwritten")
    parser.add_argument("--cache", default="npm_package_cache.sqlite3")
    parser.add_argument("--pages", type=int, default=40,
                        help="Pages per topic, 250 candidates each (default: 10)")
    parser.add_argument("--query", action="append", help="Search topic; repeat as needed")
    parser.add_argument("--delay", type=float, default=0.5,
                        help="Minimum seconds between HTTP requests (default: 0.5)")
    args = parser.parse_args()
    if args.limit < 1 or args.min_downloads < 0 or not 1 <= args.pages <= 40 or args.delay < 0:
        parser.error("Require limit > 0, min-downloads >= 0, pages 1..40, delay >= 0")
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
        print("\nInterrupted; accepted names and cached responses are retained.", file=sys.stderr)
        sys.exit(130)
    except (OSError, ValueError, KeyError) as error:
        print(f"Failed: {error}", file=sys.stderr)
        sys.exit(1)
