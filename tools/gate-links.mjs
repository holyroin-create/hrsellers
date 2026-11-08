// Gate 2: links. Internal links must resolve inside dist/. External links (CHECK_EXTERNAL=1, used in CI)
// must not be dead: 404/410/DNS errors fail; 401/403/429/5xx are reported as warnings because several
// official sites refuse automated clients.
import fs from 'node:fs'; import path from 'node:path';
import { ROOT, read, walk, Report } from './lib.mjs';
const r = new Report('links');
const files = walk('dist', '.html');
const external = new Map();
for (const f of files) {
  const html = read(f);
  for (const m of html.matchAll(/\b(?:href|src)="([^"#][^"]*)"/g)) {
    const u = m[1];
    if (/^(mailto:|tel:|data:|javascript:)/.test(u)) continue;
    if (/^https?:\/\//.test(u)) { if (!u.startsWith('https://fbatactics.com')) { if (!external.has(u)) external.set(u, f); } continue; }
    const clean = u.split('#')[0].split('?')[0];
    if (!clean.startsWith('/')) continue;
    let p = path.join(ROOT, 'dist', clean);
    if (clean.endsWith('/')) p = path.join(p, 'index.html');
    if (!fs.existsSync(p)) r.err(`${f}: broken internal link ${u}`);
  }
}
console.log(`  ${external.size} unique external URLs`);
if (process.env.CHECK_EXTERNAL === '1') {
  const urls = [...external.keys()];
  const UA = 'Mozilla/5.0 (compatible; fbatactics-linkcheck/1.0; +https://fbatactics.com/editorial-standards/)';
  let i = 0;
  async function worker() {
    while (i < urls.length) {
      const u = urls[i++];
      try {
        let res = await fetch(u, { method: 'HEAD', redirect: 'follow', headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20000) });
        if (res.status === 405 || res.status === 403) res = await fetch(u, { method: 'GET', redirect: 'follow', headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20000) });
        if (res.status === 404 || res.status === 410) r.err(`${u} → ${res.status} (cited on ${external.get(u)})`);
        else if (res.status >= 400) r.warn(`${u} → ${res.status} (bot protection or outage; verify by hand)`);
      } catch (e) { const msg = String(e.cause?.code || e.message); if (/ENOTFOUND|EAI_AGAIN/.test(msg)) r.err(`${u} → DNS failure`); else r.warn(`${u} → ${msg}`); }
    }
  }
  await Promise.all(Array.from({ length: 8 }, worker));
}
r.done();
