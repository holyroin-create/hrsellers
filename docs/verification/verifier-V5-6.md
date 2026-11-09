# verifier-V5-6: 2026-11-09 enrichment pass (drafted claims and changed sentences only)

Scope: claims with status "drafted" (enricher-E6), plus page sentences added or changed on 2026-11-09. To find those sentences I compared each mdx with the Nov 8 build in dist/guides/<slug>/index.html. Every source was re-read on 2026-11-09. sell.amazon.com, developer-docs.amazon, sba.gov, trade.gov and ecfr.gov were read with WebFetch. The ecfr.gov subpart-F URL is robots-blocked, so I read the part 141 page with an offset instead. The three GitHub SP-API models (finances_2024-06-19, reports_2021-06-30, fbaInventory) were read as raw files from raw.githubusercontent.com and grepped verbatim.

| page | claims checked | verified as drafted | corrected | rejected | body words | draft? |
|---|---|---|---|---|---|---|
| guides/seller-financing | 23 (-38…-60) | 16 | 7 | 0 | ~1,274 | no |
| guides/dd7-payout-reserve | 17 (-18…-34) | 16 (2 with evidence replaced by the full sentence) | 1 | 0 | ~1,378 | no |
| guides/seller-central-reports | 18 (-30…-47) | 18 | 0 | 0 | ~1,207 | no |
| guides/supplier-payment-terms | 17 (-28…-44) | 16 | 1 | 0 | ~1,260 | no |
| guides/the-supplier-invoice | 19 (-33…-51) | 16 | 3 | 0 | ~1,424 | no |
| guides/demand-forecasting-reorder | 17 (-28…-44) | 17 | 0 | 0 | ~1,478 | no |

## Corrections (claims)
- **seller-financing-38, -39, -40, -43, -44, -45: the lenders were matched to the wrong rows.** I read the Amazon Lending table in document order. Its columns are description, best for, cost and provider, with the provider cell last. That order is confirmed because row 3's "best for" cell names QuickBooks and the last row ends with the Uncapped cell. The correct matches:
  - Equal biweekly payments, and "No interest or collateral required, and no late fees" are **Parafin's** term loan, not Lendistry's. Lendistry's row says equal monthly payments at a fixed interest rate.
  - The 6–24-month payback is **QuickBooks Capital's**, not Parafin's.
  - "Available limit grows with your business revenue" and "fixed rate is locked in for the life of the line of credit agreement" are **Uncapped's** line of credit, not Slope's. Slope's row says only "up to $5M".
  - The SBA 7(a) row (capped lender fees up to $2,500) is **iBusiness Funding's**, not Uncapped's.
  
  I corrected the claims and the provider table. The table is now headed "Providers Amazon's page lists" and says it is Amazon's list, not a ranking or an endorsement.
- seller-financing-41: the claim now names QuickBooks Capital, as the source does.
- dd7-payout-reserve-32: extended to cover "A single report can provide up to 10 years of data". The same source states it, and the page's table cell relies on it.
- supplier-payment-terms-32: ITA says exporters "should consider" cash-in-advance, not "recommends".
- the-supplier-invoice-45: the second waiver condition in 141.92(a) is that examination, duty determination and statistics "can be effected properly without the production of the required invoice". The claim had said "the entry can be completed without it". The Decision row was corrected to match.
- the-supplier-invoice-49: added the 152.103(b)(2) condition that the additions apply "to the extent … not otherwise included" in the price.
- the-supplier-invoice-51: added the 152.103(i)(1) condition "if identified separately from the price actually paid or payable". The table row was corrected to match.

## Checks the caller asked for
- **dd7 seven days (verbatim):** the exact sentence is "With deliveries, we typically reserve funds for seven days to give customers time to inspect their purchases and get refunds if needed." (sell.amazon.com/blog/amazon-seller-payments, July 30, 2025.) It does **not** say "after delivery". The summary bullet that said "seven days after delivery" now says "with deliveries", and the key-fact label is now "Typical hold with deliveries". The worked example now states, as an assumption, that the hold is counted from delivery.
- **SBA WCP rate caps:** they match sba.gov exactly. The caps are base rate +6.5% for $50,000 or less, +6.0% for $50,001–$250,000, +4.5% for $250,001–$350,000 and +3.0% for $350,001 and greater. The other WCP terms also match: $5,000,000 maximum and 60-month maturity.
- **GitHub SP-API models:** read via raw files. All Finances, Reports and FBA Inventory definitions match verbatim, including the relatedIdentifier enum, the note on filters, net proceeds, the local time zone, the five processing statuses, the 5-minute URL expiry and the inventory quantity definitions.
- **Demand-forecasting stock buckets:** the table header now reads "Count toward the reorder trigger? (this page's method)". The lead-in sentence says the column is this page's own counting method, not an Amazon rule.

## Page sentences removed or reworded (no source, or advice presented as fact)
- seller-financing: removed "their terms differ more than the product labels suggest". Reworded the Lendistry-biweekly sentence to refer to Parafin. Compare title "likely to be offered" became "7(a) loan types on SBA's lender page". SBA Express "Term loans and revolving lines" became "General 7(a) uses", because the source does not say term loans. The Standard 7(a) uses cell now cites -21. Removed "that means books that tie out to settlement reports". "In every case you apply through a local lender" became "For 7(a) loans…". Removed the "paperwork and time" trade-off sentence.
- dd7: the Seller Central sentence on exceptions and eligibility was reduced to one plain pointer. Removed "which is why a hold carries forward". The trace-ID sentence now carries the source condition ("longer than five business days") instead of "what your bank needs". Removed "Its eligibility and pricing are set out in Seller Central"; pricing is not in the source. Removed the advice line in the 28-day example. "Longest gap" became "a long and a short gap", with the assumptions stated. The report-matching sentence was rewritten to what the columns show (settlement-id; dates and deposit-date). The deferred report has no release-date column. Removed "normal state … not a warning sign".
- seller-central-reports: removed "requesting outside it returns less than you expect". "Per-variation" became child-ASIN/SKU rows. Removed the filler line "The report name tells you where to look…". Rewrote the Returns column interpretation, which had claimed units "went back to sellable stock". "A fee change may take up to three days" became "can lag by up to 72 hours".
- demand-forecasting-reorder: removed "puts the same point more generally", a false link to lead time. Removed "still your sellable stock" and "double as the draft of a purchase order". The Working-bucket sentence was restated in the API's terms. Removed "goes further than its summary suggests" and the "cue to build a seasonal forecast" advice. Age buckets no longer "heading toward" the charge. Removed "blunter".
- supplier-payment-terms: removed "the one prepayment route", the "inspection window is short" advice, "Expect a new supplier to ask…" and "Moving off deposits is a matter of order history…". Removed "the contract wording becomes the LC wording", "Step 2 is where the buyer's protection is set…" and the "bank's commitment stands in for a credit history" inference. "Starts with the price" became "includes"; the source gives no list order. Removed the fee-clause advice. The causal "reason suppliers limit collections" was reworded. Removed "worth as much attention as the unit price". "Taken as it was actually agreed" became the regulation's wording. Removed the "which is why … separate figures" link. The payment-problems sentence now says ITA's guidance is written for exporters owed money ("negotiate with the customer"). Removed the arbitration-clause advice.
- the-supplier-invoice: the pro forma FAQ answer no longer says the invoice "comes from the seller or shipper"; it now gives the 141.83(c)(1) wording. Removed "The invoice does not need a set layout" and "That is why 141.86 asks for each of these to be itemized". Packing row: the costs must be "incurred by the buyer". "Most relevant to a small importer" became "Two of the listed exemptions".

## Arithmetic (all inside "Worked example (hypothetical)" blocks)
- seller-financing WCP: 7.5% + 6.5% = 14.0%; $40,000 × 14.0% × 4 ÷ 12 = $1,866.67. Correct.
- dd7: 7 + 14 + 7 = 28; 7 + 1 + 1 = 9. Correct. The assumptions are now stated: the hold runs from delivery, and payment is initiated at the settlement close.
- seller-central-reports ledger: 500 + 300 − 420 + 10 − 4 = 386; 386 − 380 = 6. Correct.
- demand-forecasting: 820 + 40 + 10 + 250 + 60 = 1,180, which is 300 below 1,480. Correct. **Fixed:** the example said that counting the 300 Working units would make the order "wait". But 1,180 + 300 = 1,480 equals the trigger, and the page's rule fires at 1,480. Working was changed to 350, so the count becomes 1,530, above the trigger, and the order waits.
- supplier-payment-terms: 35 + 50 = 85; 85 − 60 = 25; 90 > 85. Correct.

## Rejected
None.

## Notes
- The "How does a letter of credit work?" and "Commercial invoice vs proforma invoice?" FAQ questions (both added 11-09) appear in research/suggest-v4-writer-W-M.jsonl.
- The check-page FAQ warnings on seller-financing, dd7 and demand-forecasting are on FAQ items that did not change on 11-09, so they are out of scope.
- check-page: no ERROR on all six pages.
