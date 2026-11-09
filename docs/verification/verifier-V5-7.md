# verifier-V5-7: 2026-11-09 enrichment pass (drafted claims and changed sentences only)

Scope: claims with status "drafted" (enricher-E7), plus page sentences added or changed on 2026-11-09. To find those sentences I compared each page with the Nov 8 build in dist/. Every source was re-fetched with WebFetch on 2026-11-09. Both seller-us.tiktok.com Academy pages returned readable text, consistent across 3+ fetches each. Keepa vendor pages were used only on reviews/keepa.

| page | claims checked | verified as drafted | corrected | rejected | body words | draft? |
|---|---|---|---|---|---|---|
| marketplaces/tiktok-shop | 21 (-22…-42) | 17 | 4 | 0 | ~1,201 | no |
| reviews/keepa | 26 (-24…-49) | 26 | 0 | 0 | ~1,363 | no |
| marketplaces/aliexpress | 13 (-30…-42) | 7 | 6 | 0 | ~1,030 | no |
| guides/section-301-china-tariffs | 2 (-38, -39) | 2 | 0 | 0 | ~1,189 | no |
| guides/country-of-origin-sourcing | 2 (-26, -27) | 2 | 0 | 0 | ~1,206 | no |

## Corrections (claims)
- tiktok-shop-35: the Return/Refund policy page shows **09/28/2026** under the title. There is no "Updated at 10/21/2026" anywhere on the page (checked over 3 fetches plus the tail offset). The claim and the page sentence were corrected.
- tiktok-shop-36: the adjustable Return Window (14/30/45/90 days) is open only to "select qualified sellers". The claim and the Compare cell were narrowed.
- tiktok-shop-40: the source says "For all other order cancellations", not "most". The claim and the Compare cell were corrected.
- tiktok-shop-42: the return-shipping table for buyer-fault reasons puts the cost on the seller for platform-preferred drop-off and on the customer for self-arranged shipping. "Return shipping is mostly on you" was removed, and the FAQ answer was rewritten to match.
- aliexpress-35: **penalty overstatement fixed.** Clause 10.4 ties the full-deposit deduction to being *deregistered* for distributing IP-infringing products (or for false or invalid data), not to any infringement. The claim, the summary bullet, the table row and the description ("deposit forfeiture" became "deposit deductions") were all corrected.
- aliexpress-37: added "to the extent permitted by applicable law" to the RMB 3,000 cap, in the claim, the summary and the table.
- aliexpress-34: added "unless otherwise agreed" and "amount due and payable".
- aliexpress-33, -36, -41: added the source conditions: "in accordance with applicable laws" (recall); "if the seller commits an act of bribery"; and "for a breach, where applicable" (the Zyla Account measure).

## Page sentences removed or reworded (no source)
- tiktok-shop: removed the advice "set that handling time honestly…". It also misapplied handling time, which the policy gives only to made-to-order, backorder and custom-handling orders. Removed "moving that cutoff fixes the rate faster than adding staff" and "price low-cost items with that loss in mind". Reworded "What decides whether a shop works…" and "a late dispatch delays the payout".
- keepa: "plans differ only by" became "differ by". Removed "Everything below is about sizing that token rate." The evaluative "cheaper way to find your level" was replaced with the previously verified wording. Removed the "check the parent" advice, the "cross-check only / authority" framing, and the "compare like with like" advice. "Most often needs" became "map to common sourcing questions". "Rank jump" became "rank drop". "Integers in cents" became "smallest currency unit, such as cents".
- aliexpress: heading "Clauses that carry the biggest penalties" became "Penalty and liability clauses in the US agreement". Removed "your exposure … is open-ended" and the advice to branded-goods sellers, and replaced them with a cited recall and liability-cap sentence. Removed the reseller-invoice advice, the "contract issue, not only a moderation one" inference, and the unsourced sentence on what the Rules for U.S. Platform Sellers contain.

## Arithmetic (all inside "Worked example (hypothetical)" blocks)
- TikTok LDR: 20/400 = 5%; 16/400 = 4%. Correct.
- Keepa: 1,000 × (1 + 2) = 3,000 tokens. Correct: the docs list buybox as "+2 tokens per product" on top of the base cost. (7,000,000 + 21,564,000) × 60,000 = 1,713,840,000,000 ms = 2024-04-23 02:40 UTC. Correct.
- AliExpress: $2,000 × 0.000437 × 30 = $26.22, and 0.0437% × 365 = 15.95%. Correct. The block is now labelled as simple interest, and the advice line was removed.

## Rejected
None.

## Notes
- section-301-38 / country-of-origin-26: the Federal Register API query (newest first) returned 2026-20511 (Oct 7, 2026) first. No later extension notice appeared among the results, and 2025-21671 (Dec 1, 2025) appeared at position 8. Claims -39 and -27 were confirmed verbatim in the govinfo HTML.
- Pre-existing, not changed on 11-09 and so not in scope: the country-of-origin-sourcing FAQ "What is substantial transformation?" raises a check-page warning (not in the suggestion logs).

check-page: no ERROR on all five pages.
