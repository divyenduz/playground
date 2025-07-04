#!/bin/bash
set -e

# apt install -y jq
# curl -fsSL https://xata.io/install.sh | bash

curl -o xata https://xata-cli-versions.s3.amazonaws.com/versions/1.0.42-latest/xata-linux-x64
chmod +x ./xata
mv ./xata /usr/local/bin/xata

xata version

eval $(node build.js)
next build