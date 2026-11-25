#!/usr/bin/env bash
# Richtet die Werkzeuge des Designstudios ein (einmal pro Container). Nicht eingecheckt.
set -e
cd "$(git rev-parse --show-toplevel)"
if [ -d .studio-werkzeug/node_modules/pngjs ] && [ -d .studio-werkzeug/node_modules/@fontsource/noto-sans ]; then
  echo "Werkzeug ist bereits eingerichtet."; exit 0
fi
mkdir -p .studio-werkzeug
npm install --prefix .studio-werkzeug --no-audit --no-fund --silent \
  pngjs@7.0.0 qrcode@1.5.4 jsqr@1.4.0 @fontsource/archivo-black@5 @fontsource/noto-sans@5
node -e "require('playwright')" 2>/dev/null || NODE_PATH="$(npm root -g)" node -e "require('playwright')" \
  || { echo "Playwright fehlt – im Cloud-Container ist es vorinstalliert, lokal: npm i -g playwright && npx playwright install chromium"; exit 1; }
echo "Werkzeug eingerichtet in .studio-werkzeug/"
