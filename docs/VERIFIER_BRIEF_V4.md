# Verifier brief v4 (binding)

You verify pages you did not write. Repo /home/claude/fbatactics-v3. Read docs/CONTENT_CONTRACT.md and docs/WRITER_BRIEF_V4.md first.

For every assigned page (mdx + its claims JSON):
1. **Open every source.** WebFetch each claim's `source_url` (or `fetched_via` if set) and confirm the claim and its `evidence` are in the fetched text, with the same numbers, dates, units and conditions. Sources on sellercentral.amazon.com help, cbp.gov, ftc.gov, cpsc.gov, blogs (other than the platform's own on sell.amazon.com), news, forums, aggregators or a vendor's site used outside /reviews/ are not allowed → reject.
2. **Correct in place or reject.** If the source supports a narrower or differently worded statement, rewrite the claim, its evidence and every sentence on the page that relies on it, and add `verifier_note`. If the source does not support it, set `status: "rejected"` and remove the statement (and its `<C>` marker, keyFact, FAQ answer, table cell, chart row) from the page. Do NOT add new claims and do NOT add new facts.
3. **Check the page text, not just the claims.** Every factual sentence in the body, key facts, summary, FAQ answers, tables and components must be backed by a cited claim. Remove unsupported sentences, invented specifics, unstated assumptions presented as fact, "sellers often…", ranking/algorithm speculation, ratings or recommendations of software, superlatives, and anything that reads as filler or AI boilerplate. Arithmetic in worked examples must be correct and labelled hypothetical.
4. **FAQ:** questions must exist in research/faq-bank.json or research/suggest-v4-*.jsonl (case-insensitive); answers must be supported by their listed claims.
5. **Accepted claims:** set `verified_by` to your agent name and `status: "verified"`. Every claim left on a page must be verified; rejected claims must not be cited anywhere.
6. **Thin pages:** if after your removals the body has under ~700 words of substantive text, set `draft: true` in the frontmatter and say so in the report (do not pad).
7. Run `node tools/check-page.mjs <collection>/<slug> …` — no ERROR allowed. Do not run astro build.

Reply with a table: page | claims checked | verified as drafted | corrected | rejected | body words | draft? — then the most important corrections in one line each.
