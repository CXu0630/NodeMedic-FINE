#!/usr/bin/env bash
# One-shot setup for a fresh x86-64 Linux box (Debian/Ubuntu) to run NodeMedic-FINE.
# Installs Docker, clones the fork, builds the image, and makes a Python venv.
#
#   bash setup.sh
#
# After it finishes, log out/in (or run `newgrp docker`) so you can use docker
# without sudo, then activate the venv and run the scanner.
set -euo pipefail

REPO_URL="https://github.com/CXu0630/NodeMedic-FINE.git"
REPO_DIR="$HOME/NodeMedic-FINE"
IMAGE="nodemedic-fine:latest"

echo "==> Installing Docker, git, python venv ..."
sudo apt-get update -qq
sudo apt-get install -y -qq docker.io git python3-venv python3-pip
sudo systemctl enable --now docker
sudo usermod -aG docker "$USER" || true   # takes effect on next login

echo "==> Cloning repo ..."
if [ -d "$REPO_DIR/.git" ]; then
    git -C "$REPO_DIR" pull --ff-only || true
else
    git clone "$REPO_URL" "$REPO_DIR"
fi
cd "$REPO_DIR"

echo "==> Building image (native amd64 — no emulation on this box) ..."
# sudo so it works before the docker-group membership takes effect; the image is
# daemon-wide, so your user can `docker run` it once you're in the group.
sudo docker build -t "$IMAGE" .

echo "==> Python env for the wrapper ..."
python3 -m venv .venv
.venv/bin/pip install -q --upgrade pip tqdm

cat <<'DONE'

============================================================
Setup complete.

1) Pick up docker-group membership (once):   newgrp docker    (or log out/in)
2) Activate the venv:                        source ~/NodeMedic-FINE/.venv/bin/activate
3) Build a sharpened candidate list:
     python nm_candidates.py --min-downloads 1000 --out candidates.txt
4) Scan in parallel (8-vCPU box -> ~6 jobs, 4g each):
     python nm_batch.py candidates.txt --mode analysis --jobs 6 --memory 4g

Resume is automatic — re-run the same command to continue where it left off.
============================================================
DONE