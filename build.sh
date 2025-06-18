#!/bin/bash
set -e

env

apt install -y jq
curl -fsSL https://xata.io/install.sh | bash

xata --version || true

node build.js
next build