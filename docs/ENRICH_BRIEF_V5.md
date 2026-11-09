# Enrichment brief v5 (binding)

Repo /home/claude/fbatactics-v3. Read docs/CONTENT_CONTRACT.md and docs/WRITER_BRIEF_V4.md first (source rules, claim schema, evidence rules all still apply). Date: 2026-11-09.

## Why
An independent audit found these pages too thin or too dependent on "the detailed rule is in Seller Central". AdSense rejects low-value pages. Your job is to make each assigned page genuinely useful from **publicly readable primary sources**, without inventing anything.

## Do
1. Read the page and its claims file. Keep every existing verified claim and its citations unless you are deliberately replacing a sentence (then leave the old claim cited somewhere or delete it from the JSON together with its citations).
2. Find what a seller actually needs on this topic that IS publicly documented, for example:
   - Selling Partner API documentation and Amazon's official model files on github.com/amzn/selling-partner-api-models (report types, field names, statuses, enumerations, limits) — these let you tell the reader exactly which report/field/status to check;
   - Amazon's own announcements (sellingpartners.aboutamazon.com, aboutamazon.com, sell.amazon.com incl. /blog), Amazon Ads docs, supplychain.amazon.com;
   - regulations (eCFR, Federal Register, gov.uk, EUR-Lex), IRS, SBA, FMC, USITC, trade.gov;
   - the platform's own terms/policy PDFs on official hosts.
3. Add 300–700 words of new substantive content per page: concrete fields/reports/steps, an original table or comparison built only from cited facts, a better worked example (labelled "Worked example (hypothetical)" with stated inputs), the exact official page or report a reader should open and what to look for there. Each new fact = new claim `<slug>-NN` (next free number), `status: "drafted"`, `verified_by: ""`, `produced_by`: your agent name, verbatim `evidence` ≤ 25 words.
4. Where a rule truly is only in Seller Central, say so once, precisely (name the topic the reader should look up), and move on — do not repeat the disclaimer through the page.
5. Reduce template feel: keep only components that add information on this page; rename generic headings to topic-specific ones (e.g. not "How to confirm" but "Where to check your own ODR"); remove filler, repeated summaries and stock phrasing. Do not change the URL, slug or collection. You may refine title/description (description 140–158 chars) to match the improved page.
6. Set `modified: "2026-11-09"` and `lastVerified: "2026-11-09"` in the frontmatter of every page you change.
7. Do not add FAQ items unless the question exists in research/faq-bank.json or research/suggest-v4-*.jsonl (you may log new Google suggestions to research/suggest-v4-<your-name>.jsonl the same way the writer brief describes).
8. Do not touch `photo` fields, other pages, or any file outside your assigned pages' .mdx and claims JSON (and your suggest log).

## If the topic cannot be made useful
If after honest research the public sources cannot support a page that answers the reader's question, do not pad. Report it as **NOINDEX-RECOMMENDED** with one line why. Do not set draft.

## Check
`node tools/check-page.mjs <collection>/<slug>` — no ERROR (warnings OK). Do not run astro build.

## Report
Table: page | words added (approx) | new claims | main new sources | outcome (enriched / NOINDEX-RECOMMENDED) — then one line per page on what was added.
