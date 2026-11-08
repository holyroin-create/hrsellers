// 1) Collapse repeated citation markers that point to the same source number.
// 2) Write static redirect stubs (GitHub Pages has no server-side 301): instant meta refresh + canonical, absolute https target.
import fs from 'node:fs'; import path from 'node:path';
import { ROOT, read, walk } from './lib.mjs';
const SUP = /<sup class="cite"[^>]*>((?:(?!<\/sup>)[\s\S])*)<\/sup>/g;
let collapsed = 0;
for (const f of walk('dist', '.html')) {
  let h = read(f); const before = h.length;
  // merge adjacent sups (only whitespace between) and dedupe numbers inside
  h = h.replace(/(<sup class="cite"[^>]*>(?:(?!<\/sup>)[\s\S])*<\/sup>)(\s*<sup class="cite"[^>]*>(?:(?!<\/sup>)[\s\S])*<\/sup>)+/g, (block) => {
    const anchors = [...block.matchAll(/<a\b[^>]*>(\d+)<\/a>/g)]; const seen = new Set(); const keep = [];
    for (const a of anchors) if (!seen.has(a[1])) { seen.add(a[1]); keep.push(a[0]); }
    collapsed++; return `<sup class="cite">${keep.join('')}</sup>`;
  });
  h = h.replace(SUP, (s, inner) => { const anchors = [...inner.matchAll(/<a\b[^>]*>(\d+)<\/a>/g)]; const seen = new Set(); const keep = anchors.filter((a) => (seen.has(a[1]) ? false : (seen.add(a[1]), true))).map((a) => a[0]); return keep.length ? `<sup class="cite">${keep.join('')}</sup>` : s; });
  if (h.length !== before) fs.writeFileSync(path.join(ROOT, f), h);
}
const map = fs.existsSync(path.join(ROOT, 'data/redirects.json')) ? JSON.parse(read('data/redirects.json')) : {};
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
for (const [from, to] of Object.entries(map)) {
  const abs = new URL(to, 'https://fbatactics.com').href; const target = path.join(ROOT, 'dist', from, 'index.html');
  if (!fs.existsSync(path.join(ROOT, 'dist', to, 'index.html'))) { console.error(`redirect target missing: ${to}`); process.exit(1); }
  if (fs.existsSync(target) && !/http-equiv="refresh"/.test(fs.readFileSync(target, 'utf8'))) { console.error(`refusing to overwrite a real page at ${from}`); process.exit(1); }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, `<!doctype html>\n<html lang="en-US"><head><meta charset="utf-8"><title>Moved: ${esc(abs)}</title><meta http-equiv="refresh" content="0; url=${esc(abs)}"><link rel="canonical" href="${esc(abs)}"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><p>This page has moved to <a href="${esc(abs)}">${esc(abs)}</a>.</p></body></html>\n`);
}
console.log(`postbuild: ${collapsed} citation groups merged, ${Object.keys(map).length} redirect stubs`);
