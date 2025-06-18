#!/bin/bash
set -e

env

# apt install -y jq
# curl -fsSL https://xata.io/install.sh | bash

curl -o xata https://xata-tech-downloads.s3.amazonaws.com/channels/latest/manifest.json
chmod +x xata
mv xata /usr/local/bin/xata

xata --version

node build.js
next build