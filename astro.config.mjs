import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

const redirects = JSON.parse(readFileSync(new URL('./data/redirects.json', import.meta.url), 'utf8'));
const redirectPaths = new Set(Object.keys(redirects));

export default defineConfig({
  site: 'https://fbatactics.com',
  trailingSlash: 'always',
  build: { format: 'directory', assets: '_assets' },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const p = new URL(page).pathname;
        return !redirectPaths.has(p) && !p.startsWith('/search/') && p !== '/sitemap/';
      },
    }),
  ],
  image: { responsiveStyles: true },
});
