import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { readFileSync, existsSync } from 'node:fs';
const redirects = existsSync('./data/redirects.json') ? JSON.parse(readFileSync('./data/redirects.json', 'utf8')) : {};
const skip = new Set(Object.keys(redirects));
export default defineConfig({
  site: 'https://fbatactics.com',
  trailingSlash: 'always',
  build: { format: 'directory', assets: '_assets', inlineStylesheets: 'auto' },
  integrations: [mdx(), sitemap({ filter: (p) => { const u = new URL(p).pathname; return !skip.has(u) && !['/search/', '/sitemap/'].includes(u); } })],
});
