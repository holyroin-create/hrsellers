// Weekly: reopen every source and license URL, request a Wayback capture, flag stale verification dates.
// Prints a markdown report; exits 1 if anything needs a human.
import { read, claims } from './lib.mjs';
const reg = [...claims().values()].filter((c) => c.status === 'verified');
const imgs = JSON.parse(read('data/images.json'));
const urls = [...new Set([...reg.map((c) => c.source_url), ...imgs.flatMap((i) => [i.source_url, i.license_url])])];
const UA = 'Mozilla/5.0 (compatible; fbatactics-recheck/1.0; +https://fbatactics.com/editorial-standards/)';
const dead = [], blocked = [], stale = [];
for (const c of reg) if (Date.now() - Date.parse(c.accessed) > 120 * 864e5) stale.push(`${c.claim_id} (${c.page}) last checked ${c.accessed}`);
for (const u of urls) {
  try {
    const res = await fetch(u, { redirect: 'follow', headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(25000) });
    if ([404, 410].includes(res.status)) dead.push(`${u} → ${res.status}`); else if (res.status >= 400) blocked.push(`${u} → ${res.status}`);
  } catch (e) { blocked.push(`${u} → ${e.cause?.code || e.message}`); }
  try { await fetch('https://web.archive.org/save/' + u, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30000) }); } catch {}
  await new Promise((r) => setTimeout(r, 1500));
}
console.log(`# Weekly source recheck\n\n${urls.length} URLs checked, ${reg.length} verified claims.\n`);
console.log(`## Dead sources (fix or remove the claim)\n${dead.map((x) => '- ' + x).join('\n') || 'None'}\n`);
console.log(`## Blocked or erroring (open by hand to confirm)\n${blocked.map((x) => '- ' + x).join('\n') || 'None'}\n`);
console.log(`## Claims older than 120 days (re-verify and update lastVerified)\n${stale.map((x) => '- ' + x).join('\n') || 'None'}`);
process.exit(dead.length || stale.length ? 1 : 0);
