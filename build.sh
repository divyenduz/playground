#!/bin/bash
set -e

bun run build.ts
echo .env
xata branch wait-ready $VERCEL_GIT_COMMIT_REF
next build