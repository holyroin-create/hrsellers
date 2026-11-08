import { policyLog } from '../lib/data';
export async function GET() {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const items = policyLog().map((e) => `<item><title>${esc(e.title)}</title><link>https://fbatactics.com/policy-log/#${e.id}</link><guid isPermaLink="false">${e.id}</guid><pubDate>${new Date(e.date + 'T12:00:00Z').toUTCString()}</pubDate><description>${esc(e.summary)}</description></item>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>FBA Tactics policy log</title><link>https://fbatactics.com/policy-log/</link><description>Official notices and fee changes affecting US importers and marketplace sellers</description>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml' } });
}
