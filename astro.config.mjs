import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { rehypeNumberH2 } from './src/rehype-number-h2.mjs';

export default defineConfig({
  site: 'https://fbatactics.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/style-guide/') })],
  markdown: {
    rehypePlugins: [rehypeNumberH2],
  },
});
