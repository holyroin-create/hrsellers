import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
const redirects = existsSync('./data/redirects.json') ? JSON.parse(readFileSync('./data/redirects.json', 'utf8')) : {};
const skip = new Set(Object.keys(redirects));
// lastmod and noindex from content frontmatter
const lastmod = new Map(); const noindex = new Set();
for (const col of ['guides', 'marketplaces', 'reviews']) {
  const dir = `./src/content/${col}`; if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.mdx'))) {
    const fm = readFileSync(`${dir}/${f}`, 'utf8').split('---')[1] || '';
    const u = `/${col}/${f.slice(0, -4)}/`;
    const m = fm.match(/^modified:\s*"?(\d{4}-\d{2}-\d{2})/m); if (m) lastmod.set(u, m[1]);
    if (/^noindex:\s*true/m.test(fm) || /^draft:\s*true/m.test(fm)) noindex.add(u);
  }
}
export default defineConfig({
  site: 'https://fbatactics.com',
  trailingSlash: 'always',
  build: { format: 'directory', assets: '_assets', inlineStylesheets: 'auto' },
  integrations: [mdx(), sitemap({
    filter: (p) => { const u = new URL(p).pathname; return !skip.has(u) && !noindex.has(u) && !['/search/', '/sitemap/', '/faq/', '/reviews/'].includes(u); },
    serialize: (item) => { const u = new URL(item.url).pathname; if (lastmod.has(u)) item.lastmod = new Date(lastmod.get(u) + 'T00:00:00Z').toISOString(); return item; },
  })],
});
