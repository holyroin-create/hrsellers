# Verifier V9 — new pre-"What to check yourself" sections and rewritten scope notes

Date: 2026-11-08. Method: every cell/sentence in each new H2 section and each "This page …" scope Callout compared against the `claim` and `evidence` text of the same page's claims in `data/claims/<slug>.json`. Hypothetical arithmetic recomputed. No claim JSON edited; no new facts added.
Gates after edits: `npm run build` OK (53 pages); `gate:claims` 0 errors, 0 warnings; `gate:policy` 0 errors (27 warnings, all pre-existing "no reviewedBy").

## New sections (10 pages)

| Page | Result | Edits |
|---|---|---|
| antidumping-duties | Fixed | Row "duty … recalculated" reworded to "determined in a review rather than at the deposit rate", now also cites -03 (351.212(a)). Scope-inquiry refund row now carries claim -12's condition ("and no other segment suspends them"). Closing para: "the route" → "one route" (claim -06: other interested parties can also request reviews). Sept. 1, 2026 effective date is consistent with -20 ("on or after publication") and the notice date used elsewhere on the page. |
| customs-holds-and-exams | Fixed | Row 1: "5-day" → "five-business-day" window, now cites -08. Row 4 consequence "outcome is fixed on day 30" (overstated finality) → "treated as denied on day 30" (-16). Other rows match -09/-10/-11/-13/-14/-19/-22. |
| incoterms-who-is-importer | Fixed | Rows 2–3 and closing para: "organized in the U.S." → "located and organized in the U.S." to match claim -13. Row 3 (fails ownership and real-property tests → foreign IOR) is jointly supported by -13 + -12; CTPAT route by -14. |
| section-321-repeal-2027 | Fixed | Mail row said "Postal de minimis suspended" citing only -09, which does not state a suspension; now "No de minimis; EO 14388 applies regardless of mode" citing -07 and -09. Closing para now also cites -04 and -02. Worked example: $5,000 + 2 × $10,000 = $25,000 — correct, labeled hypothetical and as caps. |
| us-product-compliance | OK | All rows match -03/-05/-06/-07/-09/-12/-13/-14/-15/-18/-20. |
| country-of-origin-sourcing | Fixed | Inputs now state the example assumes the July 6, 2018 action's 25% rate applies and that products outside the covered subheadings are not subject to this layer. "25% is the rate for the first two actions" now cites -11 and -13 (Aug. 23 action = 25%) and -14 (remain in effect as modified); reader told to confirm coverage and current rate. Arithmetic: 25% × $40,000 = $10,000; $10,000 − $4,000 = $6,000 — correct. Example was already labeled hypothetical. |
| de-minimis-suspension-2026 | Fixed | Payment example made explicit: arrival March 31 → due April 7; arrival April 1 → due May 7 (claim -14, 7th day of following month). Dates correct. Table rows match -09/-10/-11/-13/-15/-16. |
| hts-classification-basics | Fixed | Row "Requesting a ruling after the goods arrived … Rulings protect future entries only" went beyond -23 (arrival ≠ completed transaction; "protect" not in claim). Now "Requesting a ruling for a transaction that is already completed … Ask before the transaction is completed". |
| review-manipulation-risk | Fixed | "Buying followers or likes" row now carries the knew/should-have-known element of -13. Closing para said rows 2 and 3 differ "only in the condition" with "the same" product/payment (not true: refund/gift card vs free product); reworded to state the distinction per -07 and -17. |
| origin-marking-requirements | Fixed | Repack row restated per -15: "repacked in retail containers after release (for example, by a prep center)", importer notifies "the purchaser or transferee in writing at the time of sale" (was "the buyer"). Closing "Both are settled before goods ship" → "can be settled". |

## Scope notes (all "This page …" Callouts, 19 found)

| Page | Result | Edits |
|---|---|---|
| antidumping-duties | Fixed | Removed duplicated sentence restating scope-is-decided-by-Commerce. |
| customs-holds-and-exams | OK | — |
| incoterms-who-is-importer | Fixed | Removed unsupported fact (ICC publishes Incoterms text; no claim) and "contract and broker's filing decide the role" (role is defined by the regs); reworded as neutral guidance. |
| section-321-repeal-2027 | OK | — |
| us-product-compliance | Fixed | Removed "CPSC staff can also be consulted" (no claim). |
| country-of-origin-sourcing | OK | — |
| de-minimis-suspension-2026 | OK | "changed several times in 2026" supported by -07/-08/-09/-15 dates on page. |
| hts-classification-basics | OK | Importer responsibility supported by -16. |
| review-manipulation-risk | Fixed | "For a ruling … an attorney" → "For advice …"; removed unsupported "marketplace policies can be stricter than the federal rule". |
| origin-marking-requirements | OK | — |
| accrual-accounting-cogs | Fixed | "IRS publications for tax year 2025" was wrong for Pub 538 (claims cite Rev. January 2022); now names Pub 334 (2025) and Pub 538 (Rev. January 2022). |
| customs-bonds | Fixed | "bond amount … set when a surety writes the bond, usually arranged through your broker" unsupported by any claim; replaced with "It does not calculate the bond amount for your imports." |
| duty-drawback | Fixed | Removed unsupported "usually prepared by a licensed customs broker". |
| hazmat-dangerous-goods | Fixed | Removed unsupported "can be stricter"; "Air transport adds further limits" kept (supported by aircraft exclusions in -19 and related claims). |
| entry-type-11-vs-01, first-sale-valuation, foreign-trade-zones, prior-disclosure-protests, tariff-stack-2026 | OK | No factual claims beyond page claims. |

## Out of scope, flagged for the lead
- section-321-repeal-2027 body (para under the timeline, and Timeline item 2026-07-24) says the postal rule "does the same for mail" / "Postal de minimis suspended", citing -09, whose claim text only gives the effective date and the July 1, 2027 reference. Suggest re-verifying -09's source for the suspension wording or citing -07. Not edited (pre-existing text, outside this review's scope).
