#!/usr/bin/env bash
# packages.txt: one "name@version" per line, e.g.  node-rsync@1.0.3
set -u
mkdir -p packages artifacts results
while IFS= read -r pkg; do
  [ -z "$pkg" ] && continue
  name="${pkg%@*}"; ver="${pkg##*@}"
  echo ">>> $pkg"
  docker run --rm \
    -v "$PWD/packages/:/nodetaint/packageData:rw" \
    -v "$PWD/artifacts/:/nodetaint/analysisArtifacts:rw" \
    nodemedic-fine:latest --package="$name" --version="$ver" --mode=analysis \
    | tee "results/${name//\//_}@${ver}.stdout.json"
  dest="results/${name//\//_}@${ver}"; mkdir -p "$dest"
  cp -a artifacts/. "$dest/" 2>/dev/null   # keep per-package artifacts
done < packages.txt