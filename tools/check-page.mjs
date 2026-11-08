// Writer self-check for one or more pages without a full build (safe to run in parallel).
// Usage: node tools/check-page.mjs <collection>/<slug> [...]
import fs from 'node:fs';
import { compile } from '@mdx-js/mdx';
import YAML from 'yaml';
const PILLARS = ['importing', 'fees', 'compliance', 'money', 'operations'];
const bank = new Set(JSON.parse(fs.readFileSync('research/faq-bank.json', 'utf8')).map((x) => (x.question || x).toLowerCase()));
for (const f of fs.readdirSync('research').filter((f) => /^suggest-v4-.*\.jsonl$/.test(f))) for (const l of fs.readFileSync('research/' + f, 'utf8').split('\n').filter(Boolean)) { try { for (const q of JSON.parse(l).suggestions || []) bank.add(q.toLowerCase()); } catch {} }
let bad = 0; const err = (m) => { console.error('  ERROR ' + m); bad++; }; const warn = (m) => console.warn('  warn  ' + m);
for (const arg of process.argv.slice(2)) {
  const [col, slug] = arg.split('/'); const f = `src/content/${col}/${slug}.mdx`; console.log(arg);
  if (!fs.existsSync(f)) { err('missing ' + f); continue; }
  const src = fs.readFileSync(f, 'utf8'); const [, fmRaw, ...rest] = src.split(/^---$/m); const body = rest.join('---');
  let fm; try { fm = YAML.parse(fmRaw); } catch (e) { err('frontmatter YAML: ' + e.message); continue; }
  if (!fm.title || fm.title.length > 80) err('title missing or > 80 chars');
  if (!fm.description || fm.description.length < 100 || fm.description.length > 170) err(`description length ${fm.description?.length} (100–170)`);
  if (!PILLARS.includes(fm.pillar)) err('pillar ' + fm.pillar);
  for (const k of ['published', 'modified', 'lastVerified']) if (!/^\d{4}-\d{2}-\d{2}$/.test(fm[k] || '')) err(k + ' date');
  if (!fm.photo?.subject || !fm.photo?.alt) err('photo.subject/alt');
  if (!(fm.keyFacts?.length >= 2 && fm.keyFacts.length <= 6)) err('keyFacts 2–6');
  if (!(fm.summary?.length >= 2 && fm.summary.length <= 6)) err('summary 2–6');
  try { await compile(body, { development: false }); } catch (e) { err('MDX: ' + e.message); }
  const cf = `data/claims/${col === "marketplaces" ? "marketplace-" : ""}${slug}.json`; let claims = [];
  try { claims = JSON.parse(fs.readFileSync(cf, 'utf8')); } catch (e) { err('claims JSON: ' + e.message); }
  const ids = new Set(claims.map((c) => c.claim_id));
  const cited = new Set([...body.matchAll(/(?:\bid|\bclaim)=["']([a-z0-9-]+)["']/g)].map((m) => m[1]).concat(body.match(/claim:\s*["']([a-z0-9-]+)["']/g)?.map((x) => x.replace(/claim:\s*["']|["']/g, '')) || []));
  for (const m of body.matchAll(/claims:\s*\[([^\]]*)\]/g)) for (const x of m[1].matchAll(/["']([a-z0-9-]+)["']/g)) cited.add(x[1]);
  for (const k of fm.keyFacts || []) cited.add(k.claim); for (const q of fm.faq || []) (q.claims || []).forEach((c) => cited.add(c));
  for (const c of cited) if (!ids.has(c)) err('cited but not in JSON: ' + c);
  for (const c of ids) if (!cited.has(c)) err('in JSON but not cited: ' + c);
  for (const c of claims) { for (const k of ['claim_id', 'claim', 'page', 'source_url', 'publisher', 'source_type', 'accessed', 'evidence', 'produced_by', 'status']) if (!c[k]) err(`${c.claim_id}: missing ${k}`); if (/sellercentral\.amazon|archive\.org|wikipedia/i.test(c.source_url || '') || (/blog/i.test(c.source_url || '') && !/^https:\/\/sell\.amazon\.com\//.test(c.source_url || ''))) err(`${c.claim_id}: forbidden source ${c.source_url}`); }
  for (const q of fm.faq || []) if (!bank.has(q.q.toLowerCase().replace(/\?$/, ''))) warn('FAQ question not verbatim in suggestion logs (edited for grammar?): ' + q.q);
  const words = body.replace(/<[^>]+>|\{[^}]*\}|[#*|`>_-]/g, ' ').split(/\s+/).filter(Boolean).length;
  console.log(`  body words ≈ ${words}; claims ${ids.size}`);
}
process.exit(bad ? 1 : 0);
