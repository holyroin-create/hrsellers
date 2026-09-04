#!/usr/bin/env bash
# Gate → build → verify → zip. Any failure aborts before the zip exists.
set -euo pipefail
cd "$(dirname "$0")/.."
node tools/audit-guide.mjs --done
npx astro build > /tmp/build.log 2>&1 || { grep -E "ERROR|error" /tmp/build.log | head -5; exit 1; }
grep -q "page(s) built" /tmp/build.log
node tools/verify.mjs | grep -q "No errors"
OUT="${1:?usage: release.sh /path/to/GUN-xx.zip}"
STAGE=$(mktemp -d)
cp -r . "$STAGE/fbatactics"
rm -rf "$STAGE/fbatactics/node_modules" "$STAGE/fbatactics/dist" "$STAGE/fbatactics/.astro"
(cd "$STAGE" && zip -qr "$OUT" fbatactics)
rm -rf "$STAGE"
echo "released $OUT"
