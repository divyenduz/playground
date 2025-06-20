#!/bin/bash
set -e

bun run build.ts
cat .env
xata branch wait-ready $VERCEL_GIT_COMMIT_REF
next build