#!/bin/bash
set -e

# apt install -y jq
# curl -fsSL https://xata.io/install.sh | bash

# curl -o xata https://xata-cli-versions.s3.amazonaws.com/versions/1.0.42-latest/xata-linux-x64
# chmod +x ./xata
# mv ./xata /usr/local/bin/xata
# xata version
# xata org list
# xata branch view --json

eval $(bun run build.ts)
echo 'FROM_ENV=$FROM_ENV' >> .env
echo 'DATABASE_URL=$DATABASE_URL' >> .env
echo .env
next build

# xata status
# xata branch wait-ready $VERCEL_GIT_COMMIT_REF