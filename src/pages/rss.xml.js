import { getCollection } from 'astro:content';
import { SITE } from '../config';

/* Plain RSS, written by hand rather than pulled from a package: the feed is
   four fields and a dependency is not worth carrying for it. Newsletters and
   aggregators in this industry still read RSS, and being picked up by one is
   worth more than a hundred forum comments. */
const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
           .replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export async function GET(context) {
  const site = (context.site ?? new URL('https://fbatactics.com')).origin;
  const guides = (await getCollection('guides', ({ data }) => !data.draft))
    .sort((a, b) => new Date(b.data.published).getTime() - new Date(a.data.published).getTime())
    .slice(0, 40);

  const items = guides.map((g) => {
    const url = `${site}/guides/${g.id}/`;
    const desc = g.data.ledger
      ? `${g.data.ledger} — ${g.data.description}`
      : g.data.description;
    return `    <item>
      <title>${esc(g.data.title)}</title>
      <link>${esc(url)}</link>
      <guid isPermaLink="true">${esc(url)}</guid>
      <description>${esc(desc)}</description>
      <category>${esc(g.data.category)}</category>
      <pubDate>${new Date(g.data.published).toUTCString()}</pubDate>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE.name)}</title>
    <link>${site}/</link>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Marketplace seller operations: fees, shipping, customs and compliance. Every figure sourced and dated.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
