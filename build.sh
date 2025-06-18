#!/bin/bash

env
curl -fsSL https://xata.io/install.sh | bash

xata --version || true

apt install -y jq
node build.js
next build