// Reopens every cited source and photo license page, requests a Wayback capture, flags claims older than 120 days.
import { read, claims } from './lib.mjs';
const reg = [...claims().values()].filter((c) => c.status === 'verified');
const imgs = JSON.parse(read('data/images.json')).filter((i) => i.status === 'verified');
const urls = [...new Set([...reg.map((c) => c.source_url), ...imgs.flatMap((i) => [i.source_url, i.license_url])])];
const UA = 'fbatactics-recheck/1.0 (+https://fbatactics.com/editorial-standards/)'; const dead = [], odd = [];
const stale = reg.filter((c) => Date.now() - Date.parse(c.accessed) > 120 * 864e5).map((c) => `${c.claim_id} (${c.page}) checked ${c.accessed}`);
for (const u of urls) {
  try { const r = await fetch(u, { redirect: 'follow', headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(25000) }); if ([404, 410].includes(r.status)) dead.push(`${u} → ${r.status}`); else if (r.status >= 400) odd.push(`${u} → ${r.status}`); } catch (e) { odd.push(`${u} → ${e.cause?.code || e.message}`); }
  try { await fetch('https://web.archive.org/save/' + u, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30000) }); } catch {}
  await new Promise((r) => setTimeout(r, 1500));
}
console.log(`# Weekly recheck\n\n${urls.length} URLs, ${reg.length} verified claims, ${imgs.length} photos.\n\n## Dead (fix or remove)\n${dead.map((x) => '- ' + x).join('\n') || 'None'}\n\n## Blocked/erroring (open by hand)\n${odd.map((x) => '- ' + x).join('\n') || 'None'}\n\n## Claims older than 120 days\n${stale.map((x) => '- ' + x).join('\n') || 'None'}`);
process.exit(dead.length || stale.length ? 1 : 0);
