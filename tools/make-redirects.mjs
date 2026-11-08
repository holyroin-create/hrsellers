// Writes static redirect stubs for retired URLs (GitHub Pages has no server-side 301).
// Instant meta refresh with an absolute https target + rel=canonical: Google treats this as a permanent redirect.
import fs from 'node:fs'; import path from 'node:path';
import { ROOT, read } from './lib.mjs';
const map = JSON.parse(read('data/redirects.json'));
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
for (const [from, to] of Object.entries(map)) {
  const abs = new URL(to, 'https://fbatactics.com').href;
  const target = path.join(ROOT, 'dist', from, 'index.html');
  if (!fs.existsSync(path.join(ROOT, 'dist', to, 'index.html'))) { console.error(`redirect target missing: ${to}`); process.exit(1); }
  if (fs.existsSync(target) && !/http-equiv="refresh"/.test(fs.readFileSync(target, 'utf8'))) { console.error(`refusing to overwrite a real page at ${from}`); process.exit(1); }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, `<!doctype html>
<html lang="en-US"><head><meta charset="utf-8"><title>Moved to ${esc(abs)}</title>
<meta http-equiv="refresh" content="0; url=${esc(abs)}"><link rel="canonical" href="${esc(abs)}">
<meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body><p>This page has moved to <a href="${esc(abs)}">${esc(abs)}</a>.</p></body></html>
`);
}
console.log(`${Object.keys(map).length} redirect stubs written`);
