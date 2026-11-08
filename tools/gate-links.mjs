// Gate: internal links resolve; external links (CHECK_EXTERNAL=1 in CI) are not dead (404/410/DNS = error).
import fs from 'node:fs'; import path from 'node:path';
import { ROOT, read, walk, Report } from './lib.mjs';
const r = new Report('links'); const ext = new Map();
for (const f of walk('dist', '.html')) for (const m of read(f).matchAll(/\b(?:href|src)="([^"#][^"]*)"/g)) {
  const u = m[1].replace(/&amp;/g, '&'); if (/^(mailto:|tel:|data:|javascript:)/.test(u)) continue;
  if (/^https?:\/\//.test(u)) { if (!u.startsWith('https://fbatactics.com')) ext.has(u) || ext.set(u, f); continue; }
  const c = u.split('#')[0].split('?')[0]; if (!c.startsWith('/')) continue;
  let p = path.join(ROOT, 'dist', c); if (c.endsWith('/')) p = path.join(p, 'index.html'); if (!fs.existsSync(p)) r.err(`${f}: broken link ${u}`);
}
console.log(`  ${ext.size} external URLs`);
if (process.env.CHECK_EXTERNAL === '1') {
  const UA = 'fbatactics-linkcheck/1.0 (+https://fbatactics.com/editorial-standards/)'; const urls = [...ext.keys()]; let i = 0;
  await Promise.all(Array.from({ length: 6 }, async () => { while (i < urls.length) { const u = urls[i++]; try { let res = await fetch(u, { method: 'HEAD', redirect: 'follow', headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20000) }); if ([403, 405].includes(res.status)) res = await fetch(u, { redirect: 'follow', headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20000) }); if ([404, 410].includes(res.status)) r.err(`${u} → ${res.status}`); else if (res.status >= 400) r.warn(`${u} → ${res.status} (check by hand)`); } catch (e) { const c = String(e.cause?.code || e.message); /ENOTFOUND/.test(c) ? r.err(`${u} → DNS`) : r.warn(`${u} → ${c}`); } } }));
}
r.done();
