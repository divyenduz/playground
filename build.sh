#!/bin/bash
set -e

bun run build.ts
cat .env
next build
xata branch wait-ready $VERCEL_GIT_COMMIT_REF