// Gate 3: claims register consistency. Every cited id exists and is verified; every registered claim is cited
// on its page; sources are primary-domain only; required fields present.
import { read, walk, claims, citedIds, Report } from './lib.mjs';
const r = new Report('claims');
const ALLOWED = ['ecfr.gov', 'federalregister.gov', 'govinfo.gov', 'irs.gov', 'sell.amazon.com', 'marketplace.walmart.com', 'ebay.com', 'etsy.com', 'shopify.com', 'usitc.gov', 'cbp.gov', 'ftc.gov', 'cpsc.gov', 'phmsa.dot.gov', 'uspto.gov', 'trade.gov', 'ustr.gov', 'census.gov', 'congress.gov', 'support.google.com', 'docs.github.com'];
const REQUIRED = ['claim_id', 'claim', 'page', 'source_url', 'publisher', 'source_type', 'accessed', 'status'];
const reg = claims();
const pages = new Map();
for (const f of [...walk('src/content/guides', '.mdx'), ...walk('src/content/marketplaces', '.mdx')]) {
  const t = read(f); const fm = t.split('---')[1] || '';
  if (/^draft:\s*true/m.test(fm)) continue;
  const kind = f.includes('/marketplaces/') ? 'marketplaces' : 'guides';
  const slug = f.split('/').pop().replace('.mdx', '');
  pages.set(`/${kind}/${slug}/`, citedIds(t));
  if (!/^lastVerified:\s*"?\d{4}-\d{2}-\d{2}/m.test(fm)) r.err(`${f}: lastVerified missing`);
}
// data-driven pages
const addData = (file, page, key = 'claim_id') => { try { const arr = JSON.parse(read(file)); pages.set(page, [...(pages.get(page) || []), ...arr.flatMap((x) => x.claim_ids || [x[key]])]); } catch {} };
addData('data/policy-log.json', '/policy-log/'); addData('data/glossary.json', '/glossary/'); addData('data/quiz.json', '/quiz/'); addData('data/fee-presets.json', '/tools/margin-calculator/');
try { const t = JSON.parse(read('data/tool-rates.json')); pages.set('/tools/tariff-stack-estimator/', Object.entries(t).filter(([k]) => k.endsWith('_claim')).map(([, v]) => v).concat(t.extra_claims || [])); } catch {}
try { pages.set('/__rateboard__', JSON.parse(read('data/rateboard.json')).map((x) => x.claim_id)); } catch {}

const citedAnywhere = new Set();
for (const [page, ids] of pages) for (const id of ids) {
  citedAnywhere.add(id);
  const c = reg.get(id);
  if (!c) { r.err(`${page}: cites unknown claim ${id}`); continue; }
  if (c.status !== 'verified') r.err(`${page}: claim ${id} status=${c.status}`);
}
const stale = Date.now() - 180 * 864e5;
for (const [id, c] of reg) {
  for (const k of REQUIRED) if (!c[k]) r.err(`${id}: missing field ${k}`);
  if (c.status === 'verified' && !c.verified_by) r.err(`${id}: verified without verified_by`);
  if (c.status === 'verified' && c.verified_by && c.verified_by === c.produced_by) r.err(`${id}: verified by its own producer (${c.verified_by})`);
  let host = ''; try { host = new URL(c.source_url).hostname.replace(/^www\./, ''); } catch { r.err(`${id}: bad URL`); }
  if (host && !ALLOWED.some((d) => host === d || host.endsWith('.' + d))) r.err(`${id}: source host ${host} is not on the primary-source allowlist`);
  if (c.status === 'verified' && !citedAnywhere.has(id)) r.warn(`${id}: verified but not cited on any page (${c.page})`);
  if (c.status === 'verified' && Date.parse(c.accessed) < stale) r.warn(`${id}: last checked ${c.accessed}, over 180 days ago`);
}
console.log(`  ${reg.size} claims registered, ${[...reg.values()].filter((c) => c.status === 'verified').length} verified, ${pages.size} pages checked`);
r.done();
