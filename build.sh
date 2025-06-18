#!/bin/bash

env
curl -fsSL https://xata.io/install.sh | bash

xata --version || true

node build.js