// Gate: claims register. Every cited id exists and is verified; every claim is cited; primary-source hosts only;
// the checker is never the producer.
import { read, walk, claims, citedIds, Report } from './lib.mjs';
const r = new Report('claims');
const ALLOWED = ['ecfr.gov', 'federalregister.gov', 'govinfo.gov', 'irs.gov', 'usitc.gov', 'sell.amazon.com', 'marketplace.walmart.com', 'ebay.com', 'etsy.com', 'shopify.com', 'uspto.gov', 'gs1us.org', 'cdtfa.ca.gov', 'comptroller.texas.gov', 'floridarevenue.com', 'tax.illinois.gov', 'dor.wa.gov', 'pe.usps.com', 'usps.com', 'congress.gov', 'phmsa.dot.gov', 'trade.gov', 'ustr.gov', 'cbp.gov', 'ftc.gov', 'cpsc.gov',
  'aboutamazon.com', 'aboutamazon.com.au', 'developer-docs.amazon', 'developer-docs.amazon.com', 'supplychain.amazon.com', 'advertising.amazon.com', 'buywithprime.amazon.com', 'business.amazon.com', 'amazon-packaging.com', 'm.media-amazon.com', 'github.com',
  'seller-us.tiktok.com', 'seller.tiktok.com', 'cdn.contract.alibaba.com', 'terms.alicdn.com', 'developer.walmart.com', 'marketplacelearn.walmart.com',
  'sba.gov', 'sec.gov', 'gov.uk', 'eur-lex.europa.eu', 'canada.ca', 'nysenate.gov', 'governor.ny.gov', 'ofac.treasury.gov', 'ic3.gov', 'dhs.gov', 'fmc.gov', 'wto.org', 'gs1.org', 'cbsa-asfc.gc.ca', 'rfc-editor.org', 'raw.githubusercontent.com'];
// AI model providers: their own documentation, terms and privacy pages, cited only for facts about their own models and services.
ALLOWED.push('platform.claude.com', 'docs.claude.com', 'support.claude.com', 'privacy.claude.com', 'anthropic.com', 'claude.com', 'developers.openai.com', 'platform.openai.com', 'openai.com', 'help.openai.com', 'ai.google.dev', 'gemini.google', 'gemini.google.com', 'support.google.com', 'policies.google.com', 'cloud.google.com', 'platform.kimi.ai', 'kimi.com', 'moonshot.ai', 'kimi.ai');
// Vendor sites: allowed only as the source for that vendor's own /reviews/ page.
const VENDOR = ['zonguru.com', 'helium10.com', 'amzscout.net', 'junglescout.com', 'goaura.com', 'a2xaccounting.com', 'sellerboard.com', 'keepa.com', 'getida.com'];
const REQ = ['claim_id', 'claim', 'page', 'source_url', 'publisher', 'source_type', 'accessed', 'status'];
const reg = claims(); const used = new Map();
const use = (page, ids) => ids.forEach((id) => { if (!used.has(id)) used.set(id, new Set()); used.get(id).add(page); });
for (const f of [...walk('src/content/guides', '.mdx'), ...walk('src/content/marketplaces', '.mdx'), ...walk('src/content/reviews', '.mdx')]) {
  const t = read(f); if (/^draft:\s*true/m.test(t.split('---')[1] || '')) continue;
  use(f, citedIds(t));
}
const data = (file, key = 'claim_ids') => { try { for (const x of JSON.parse(read(file))) use(file, x[key] ? [].concat(x[key]) : [x.claim_id]); } catch {} };
['data/policy-log.json', 'data/glossary.json', 'data/quiz.json', 'data/key-dates.json', 'data/site-faq.json', 'data/fee-compare.json'].forEach((f) => data(f));
data('data/fee-presets.json', 'claim_id'); data('data/key-numbers.json', 'claim_id');
try { use('data/tool-rates.json', Object.values(JSON.parse(read('data/tool-rates.json')).claims || {})); } catch {}
for (const [id, pages] of used) { const c = reg.get(id); if (!c) r.err(`unknown claim ${id} (used in ${[...pages].join(', ')})`); else if (c.status !== 'verified') r.err(`${id} is ${c.status} (used in ${[...pages][0]})`); }
for (const [id, c] of reg) {
  for (const k of REQ) if (!c[k]) r.err(`${id}: missing ${k}`);
  if (c.status === 'verified' && !c.verified_by) r.err(`${id}: verified without verified_by`);
  if (c.status === 'verified' && c.verified_by === c.produced_by) r.err(`${id}: checked by its own producer`);
  let host = ''; try { host = new URL(c.source_url).hostname.replace(/^www\./, ''); } catch { r.err(`${id}: bad source_url`); }
  const m = (d) => host === d || host.endsWith('.' + d);
  if (host && !ALLOWED.some(m) && !(VENDOR.some(m) && String(c.page).startsWith('/reviews/'))) r.err(`${id}: ${host} is not an allowed primary source`);
  if (host === 'github.com' && !/^https:\/\/github\.com\/amzn\//.test(c.source_url)) r.err(`${id}: only github.com/amzn (Amazon) is allowed`);
  if (/\/api\/|full_text|\.json($|\?)/.test(c.source_url) && !/^https:\/\/(github\.com\/amzn\/|developers\.openai\.com\/api\/docs\/)/.test(c.source_url)) r.err(`${id}: source_url must be the human-readable page (use fetched_via for API URLs)`);
  if (c.status === 'verified' && !used.has(id)) r.warn(`${id}: verified but not cited anywhere`);
}
console.log(`  ${reg.size} claims, ${[...reg.values()].filter((c) => c.status === 'verified').length} verified`);
r.done();
