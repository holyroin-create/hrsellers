#!/usr/bin/env node
/**
 * audit-guide.mjs — per-guide editorial gate.
 *
 * Usage:  node tools/audit-guide.mjs <slug> [<slug> ...]
 *         node tools/audit-guide.mjs --done        (every guide marked DONE in AUDIT-STATUS.md)
 *         node tools/audit-guide.mjs --all         (every guide; warnings only for non-DONE)
 *
 * Exits non-zero if any DONE guide has an ERROR. Warnings never fail the run.
 *
 * What it catches (each maps to a mistake made during the September 2026 audit):
 *  - hedge phrasing that presents unverified figures as "reported" facts
 *  - British spellings (site standard is US English)
 *  - citations of publishers that fabricated figures during the audit
 *  - stale "accessed" dates (older than the guide's modified date)
 *  - Figure/Split source attributes still carrying "Reported" / August access dates
 *  - missing or over-long seoTitle; description length outside search-snippet range (warn)
 *  - relative or malformed hrefs in the Sources block
 *  - prose that does not end with a concrete next step or question before the FAQ
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';

const GUIDES = 'src/content/guides';
const HEDGES = [
  /\b(is|are|was|were) reported (as|to)\b/i, /\breportedly\b/i, /\breporting (states|says|describes|notes|indicates|puts)\b/i,
  /\bone source (states|gives|puts|notes)\b/i, /\bsources? (split|cannot agree)\b/i, /\bcannot all be current\b/i,
  /\bin the region of\b/i, /\bit is worth noting\b/i, /\bin conclusion\b/i, /\bin summary\b/i,
];
const BRITISH = /\b(fulfilment|optimis(e|ed|ing|ation)|programme|catalogue|utilisation|enrolment|behaviour|colour|centre|licence\b|authorised|prioritis|organis(e|ed|ation)|recognis|analyse\b|cancelled|labelled|modelling|favour|honour|defence|judgement|sceptic|summaris|customis|standardis|capitalis|maximis|penalis|categoris|itemised|personalis|apologis)\w*/i;
const SUSPECT_PUBLISHERS = ['novadata.io', 'Nova Analytics'];
const PRIMARY = ['amazon.com','aboutamazon','sec.gov','investors.etsy.com','investors.ebayinc.com','iccwbo.org','freightos.com','uspto.gov','cbp.gov','usitc.gov','uspto.gov','cpsc.gov','fda.gov','ftc.gov','irs.gov','federalregister.gov','ecfr.gov','govinfo.gov','walmart.com','ebay.com','etsy.com','tiktok.com','shopify','gs1','congress.gov','ustr.gov'];

function fm(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---/); const o = {};
  if (!m) return o;
  for (const line of m[1].split('\n')) { const k = line.match(/^(\w+):\s*"?(.*?)"?\s*$/); if (k) o[k[1]] = k[2]; }
  return o;
}
function stripLinks(s) {
  return s.replace(/href: *['"][^'"]+['"]/g, '').replace(/\(\/(guides|tools)\/[^)]+\)/g, '').replace(/slug="[^"]+"/g, '').replace(/\/guides\/[a-z0-9-]+\//g, '').replace(/https?:\/\/\S+/g, '');
}
function audit(slug) {
  const src = readFileSync(join(GUIDES, slug + '.mdx'), 'utf8');
  const f = fm(src); const errors = []; const warns = [];
  const body = src.replace(/^---[\s\S]*?\n---/, '');
  const prose = stripLinks(body);
  for (const re of HEDGES) { const m = prose.match(re); if (m) errors.push(`hedge: "${m[0]}"`); }
  const br = prose.replace(/de minimis/gi,'').replace(/\banalyses\b/g,'').match(BRITISH); if (br) errors.push(`british spelling: "${br[0]}"`);
  for (const p of SUSPECT_PUBLISHERS) if (src.includes(p)) warns.push(`cites ${p} — confirm the figure is labelled as a vendor claim, not a fact`);
  if (!f.seoTitle) errors.push('missing seoTitle'); else if (f.seoTitle.length > 70 || f.seoTitle.length < 35) errors.push(`seoTitle length ${f.seoTitle.length} (35–70)`);
  if (f.description && f.description.length > 320) warns.push(`description ${f.description.length} chars (search snippets truncate ~160)`);
  if (f.modified && f.published && f.modified < f.published) errors.push('modified before published');
  const accessed = [...src.matchAll(/accessed: *['"](\d{4}-\d{2}-\d{2})['"]/g)].map(m => m[1]);
  if (accessed.length === 0) errors.push('no dated sources');
  if (f.modified && accessed.some(d => d < f.modified)) errors.push(`source accessed before modified date (${f.modified})`);
  for (const m of src.matchAll(/source="([^"]*)"/g)) { if (/reported|accessed \w+ \d|august 2026/i.test(m[1])) errors.push(`Figure source not re-verified: "${m[1].slice(0, 60)}"`); }
  for (const m of src.matchAll(/href: *['"]([^'"]+)['"]/g)) { if (!/^https?:\/\//.test(m[1])) errors.push(`bad href ${m[1]}`); }
  const hrefs = [...src.matchAll(/href: *['"]([^'"]+)['"]/g)].map(m => m[1]);
  const primary = hrefs.filter(h => PRIMARY.some(p => h.includes(p))).length;
  const unlinkedPrimary = (src.match(/publisher: ['"][^'"]*(Amazon|Customs and Border|Federal Register|Congress|USITC|Trade Representative|Etsy|TikTok|Alibaba|Internal Revenue|International Trade Administration|Department of Commerce|Chamber of Commerce|United States Code|Patent and Trademark|Consumer Product Safety|Walmart|eBay|Freightos|HM Revenue|Official Journal|Securities and Exchange|Organization for Standardization|Streamlined Sales Tax|department of revenue|departments of revenue)[^'"]*['"],\s*accessed/g) || []).length;
  if (primary + unlinkedPrimary === 0) errors.push('no primary source in Sources block');
  const beforeFaq = body.split('<Faq')[0].trimEnd(); const last = beforeFaq.split('\n').filter(l => l.trim() && !l.trim().startsWith('<') && !l.trim().startsWith('import')).pop() || '';
  if (!/[.?!]\s*$/.test(last)) warns.push('closing line before FAQ does not end in a sentence');
  if (/\b(2024|2025) rates?\b/i.test(prose) && !/\b2026\b/.test(prose)) warns.push('mentions 2024/2025 rates without 2026 context');
  return { slug, errors, warns };
}
const args = process.argv.slice(2);
let slugs = args.filter(a => !a.startsWith('--'));
let doneOnly = false;
if (args.includes('--done') || args.includes('--all')) {
  const status = readFileSync('AUDIT-STATUS.md', 'utf8');
  const done = new Set([...status.matchAll(/\| `([^`]+)` \| DONE/g)].map(m => m[1]));
  const all = readdirSync(GUIDES).filter(f => f.endsWith('.mdx')).map(f => basename(f, '.mdx'));
  slugs = args.includes('--done') ? all.filter(s => done.has(s)) : all;
  doneOnly = args.includes('--all') ? done : null;
}
let failed = 0;
for (const slug of slugs) {
  const r = audit(slug);
  const gate = doneOnly ? doneOnly.has(slug) : true;
  if (r.errors.length || r.warns.length) {
    console.log(`\n${slug}${gate ? '' : '  (pending — warnings only)'}`);
    for (const e of r.errors) console.log(`  ${gate ? 'ERROR' : 'note '}  ${e}`);
    for (const w of r.warns) console.log(`  warn   ${w}`);
  }
  if (gate && r.errors.length) failed++;
}
console.log(`\n${slugs.length} guide(s) audited, ${failed} with errors.`);
process.exit(failed ? 1 : 0);
