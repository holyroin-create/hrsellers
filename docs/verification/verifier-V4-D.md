# verifier-V4-D — verification report (2026-11-08)

Pages: guides/ipi-restock-limits, guides/shipment-discrepancy-claims, guides/fba-reimbursement-sourcing-cost, guides/reimbursement-recovery-services, guides/amazon-stopped-prepping. Every source was re-fetched with WebFetch on 2026-11-08 (curl is refused by the proxy for sell.amazon.com, developer-docs.amazon and m.media-amazon.com). `node tools/check-page.mjs` on all five pages and on guides/fba-vs-fbm-breakeven reports no ERROR. All 124 claims are `verified` / `verified_by: verifier-V4-D`. None were rejected, so no claim records were removed.

| page | claims checked | verified as drafted | corrected (claim text) | evidence-only refresh | rejected | body words | draft? |
|---|---|---|---|---|---|---|---|
| guides/ipi-restock-limits | 28 | 26 | 2 (18, 25) | 0 | 0 | ≈934 | no |
| guides/shipment-discrepancy-claims | 22 | 19 | 0 | 3 (03, 17, 19) | 0 | ≈961 | no |
| guides/fba-reimbursement-sourcing-cost | 20 | 13 | 5 (03, 10, 13, 14, 15) | 2 (12, 18) | 0 | ≈1,009 | no |
| guides/reimbursement-recovery-services | 29 | 25 | 3 (10, 11, 26) | 1 (02) | 0 | ≈971 | no |
| guides/amazon-stopped-prepping | 25 | 23 | 1 (22) | 1 (01) | 0 | ≈931 | no |

## Redlined reimbursement PDF (m.media-amazon.com)
- WebFetch shows no strikethrough or insert markers. The file name "Redlined_FBA_Reimbursement_policy_US" marks it as a redline.
- Every quoted condition was found verbatim.
- The PDF also contains valuation passages that it does not reconcile with each other:
  - "If we elect to reimburse you for a shipment to Amazon claim, we reimburse you for the estimated proceeds of a sale of that item". This conflicts with the sourcing-cost text for removals and FC operations claims too.
  - Unsellable units are valued at "estimated proceeds of the discounted sale" in one place and at "reduced estimated cost" in another.
- Changes made because of this:
  - The sourcing-cost claims are now scoped to the "pre-order section" of the redline.
  - The intro of the sourcing-cost page names the conflicting passages.
  - All four pages that cite the PDF now say it is a redline and tell readers to confirm the live policy in Seller Central.

## Main corrections
- ipi-18: the capacity post has no publication date and does not contain "January". "January 2023 announcement" was removed from the claim, the body and the Timeline. The claim now quotes "goes into effect March 1, 2023."
- ipi-25: the report is the "FBA Manage Inventory Health Report" (GET_FBA_INVENTORY_PLANNING_DATA), not an "inventory planning report".
- ipi: the unsourced "working band… avoid stockouts" line was replaced with plain arithmetic (60 < 90 days). The worked-example wording was fixed ("holding 300 instead of 600 frees 75 cu ft"). The uncited "since US prep services ended" was removed.
- sdc: removed these unsupported statements:
  - "cheapest point to correct"
  - "carrier proof of delivery should be attached"
  - "FBA-prefixed" (only an example ID is given)
  - the claim that RECEIVING comes before CLOSED (the doc lists values alphabetically)
  - the speculative carton/receiving diagnoses in the worked example
  - "a claim … is weak before it starts"
- sdc: "Four bear directly" was changed to match the five items listed.
- frs-14: the customer-return value is "refund amount or replacement sales price … minus applicable fees". It was fixed in the claim, summary, Compare and Decision rows.
- frs-15 / rrs-26: the 60-day sentence is "If you don't agree with our valuation of a unit…" and sits in the Post-Order section. The wording was fixed, and readers are told to confirm the channel in Seller Central.
- frs-10: the 30-day decline reason needs a prior *decision* on a cost update request or amount dispute.
- frs: removed "not what you would have sold it for", which the redline's own estimated-proceeds text contradicts. Also dropped the unsourced "landed cost" column (Usually / Yes / Varies) and "which you cannot check in advance". "Month to the next" became "over time".
- rrs-11: Manage Your Apps appears only in the *reauthorization* bullet. Every "revoke / end access" statement was removed: description, heading, Steps, Decision row. The page now says to check revocation in Seller Central.
- rrs-10: the claim is scoped to public applications.
- rrs: removed "The full texts are hosted on Seller Central", "most recent" (notice), "has not shown it passed Amazon's formal review" and "account consequences … land on you".
- asp-22: the claim was expanded with the enum descriptions (FC_PROVIDED is "defined by the Fulfillment Center"; UNKNOWN "needs to be updated").
- asp: the Compare row for AMAZON now cites -03, because the "not accepted in US" note on createInboundPlan is on labelOwner only.
- asp: removed "badly prepped units can weaken a claim", "receiving speed", "mostly a data job" and the unsourced barcode condition in the Decision table.
- All worked-example arithmetic was recomputed and is correct.

## fba-vs-fbm-breakeven ("weights and dimensions") — NOT changed
I was asked to change "price, weight and dimensions" to the source's "weights and dimensions". sell.amazon.com/fulfillment-by-amazon was re-fetched three times on 2026-11-08:
- The only sentence on what fulfillment costs are based on reads "These costs are based on the product's price, weight, and dimensions."
- A substring check for "weights and dimensions" returns NOT FOUND.
- verifier-V4-C had already confirmed the same wording.

Changing the page would make it contradict its source, so fba-vs-fbm-breakeven-02 and its page sentences were left as they are. If a different source URL was meant, it needs to be supplied.
