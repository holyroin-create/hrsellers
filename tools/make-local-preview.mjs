/**
 * Turns dist/ into a folder you can open by double-clicking index.html.
 *
 * Astro emits root-absolute paths (/_astro/…, /guides/). Under the file://
 * protocol those resolve against the drive root, so nothing loads. This
 * rewrites them to paths relative to each page's own depth and points
 * directory links at their index.html.
 *
 * Run after `npm run build`:  node tools/make-local-preview.mjs
 * Output: local-preview/
 */
import { cp, readdir, readFile, writeFile, rm } from 'node:fs/promises';
import { join, relative, dirname, sep } from 'node:path';

const SRC = 'dist';
const OUT = 'local-preview';

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

await rm(OUT, { recursive: true, force: true });
await cp(SRC, OUT, { recursive: true });

const files = (await walk(OUT)).filter((f) => f.endsWith('.html'));

for (const file of files) {
  const depth = relative(OUT, dirname(file)).split(sep).filter(Boolean).length;
  const up = depth === 0 ? './' : '../'.repeat(depth);

  let html = await readFile(file, 'utf8');

  html = html.replace(/(href|src|action)="\/([^"]*)"/g, (m, attr, path) => {
    if (path.startsWith('/')) return m;           // protocol-relative //cdn…
    if (path === '') return `${attr}="${up}index.html"`;
    let target = path;
    if (target.endsWith('/')) target += 'index.html';
    return `${attr}="${up}${target}"`;
  });

  // in-page search links carry a query string; file:// keeps them working
  html = html.replace(/href="([^":]*index\.html)\?/g, 'href="$1?');

  await writeFile(file, html, 'utf8');
}

console.log(`local preview written to ${OUT}/ (${files.length} pages)`);
