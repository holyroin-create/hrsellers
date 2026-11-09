# verifier-V5-5: 2026-11-09 enrichment pass (drafted claims and changed sentences only)

Scope: the claims with status "drafted", plus the page sentences added or changed on 2026-11-09. I found those sentences by comparing each page with the Nov 8 build in dist/guides/<slug>/index.html. Every source was re-read on 2026-11-09:
- GitHub SP-API model claims: I downloaded the raw.githubusercontent.com files (the `fetched_via` URLs) and searched them for each quoted string.
- developer-docs.amazon.com: it 302-redirects to developer-docs.amazon, and I read it there with WebFetch.
- sell.amazon.com, canada.ca and cbsa-asfc.gc.ca: read with WebFetch. A direct curl to these hosts was denied by the egress proxy.

| page | claims checked | verified as drafted | corrected | rejected | body words | draft? |
|---|---|---|---|---|---|---|
| guides/buy-box-featured-offer | 17 (-32…-48) | 16 | 1 | 0 | ~1,393 | no |
| guides/ungating-restricted-categories | 11 (-36…-46) | 9 | 2 | 0 | ~1,104 | no |
| guides/amazon-business-b2b | 18 (-33…-50) | 18 | 0 | 0 | ~1,386 | no |
| guides/vendor-central-vs-seller-central | 20 (-26…-45) | 19 | 1 | 0 | ~1,195 | no |
| guides/narf-canada-mexico | 16 (-31…-46) | 16 | 0 | 0 | ~1,315 | no |
| guides/subscribe-and-save-economics | 24 (-21…-44) | 20 | 1 | 3 | ~1,340 | no |

## Rejected (deleted from JSON and page)
- subscribe-and-save-economics-22 (delivery estimate accuracy > 93.5%), -23 (order defect rate < 1%) and -24 (late shipment rate < 4%). I fetched sell.amazon.com/blog/subscribe-and-save three times. Each time the sentence "If you use Fulfilled by Merchant, your offers must also meet the following criteria for at least a period of three consecutive months…" was followed by no list. The strings "93.5%", "order defect rate" and "late shipment rate" do not appear in the fetched text. The browser extension was not connected, so I could not check the page another way. The threshold table was removed. The section now states only the verified three-month requirement (-21) and auto-enrollment for FBA (-03), and tells the reader to confirm the criteria in Seller Central. The description ("FBM thresholds" became "FBM rules") and the closing section were changed to match.

## Corrections (claims)
- subscribe-and-save-economics-29: the source says "replenishment program metrics and offers", not "Subscribe & Save metrics". The claim was narrowed, and the page now says "FBA selling partners".
- buy-box-featured-offer-34: added the source condition that buyBoxPercentageB2B "is only populated when the seller is a B2B seller", in the claim and the page sentence.
- ungating-restricted-categories-36: added the enum count (13 values), which the page states.
- ungating-restricted-categories-44: the evidence now quotes the sentence that supports "if none exist, create offer-only listings".
- vendor-central-vs-seller-central-34: the page cell "Net cost is what you invoice against" was replaced with the model's own wording: the acknowledged net cost "must match the cost on the invoice". The claim and evidence were extended from the same file.

## Page sentences removed or reworded (no source, advice presented as fact, or filler)
- buy-box:
  - The PRICING_HEALTH table intro: "the reference prices it was measured against" became "includes these reference prices".
  - Removed "the same data repricing software reads". "usually shows which lever failed" became "can point to".
  - Removed "compare the same weeks' units ordered" (that field is not cited).
  - Scope note: removed "Amazon publishes no formula for the Featured Offer" (an absence claim with no source). The Seller Central search words are now labelled as a suggested search, not a page title.
- ungating:
  - Removed "instead of guessing from a greyed-out button".
  - Table cells "to quote in your application notes" and "Where the application starts" were made neutral.
  - Removed "which matters if your product has no UPC…" and "on the existing ASIN".
  - The "missing either status" inference was replaced with the cited QUALIFICATION_REQUIRED meaning.
  - Scope: "full … published only" was reverted to the Nov 8 wording, and the search words are labelled as a suggestion.
- amazon-business-b2b:
  - Removed "Repricing tools that never request Business offers therefore never see your B2B competition."
  - Removed "which is the comparison you need before setting a tier…". The report columns are a promotion discount summary, so reading "target price" as the price you are considering is not supported.
  - "ranked on" became "recommended based on … and other factors".
  - Removed the Not Yet on Amazon sourcing advice and the PO-on-invoice advice.
  - "same order stream" became the cited FBA shared inventory pool (-18).
  - The worked-example conclusion was softened from causal to "less likely".
  - Seller Central search words are labelled as suggestions, and "only" was removed.
- vendor-central:
  - Removed "the PO format tells you more about the relationship than any marketing page" and the warehouse re-read advice.
  - "sellers never see" became "Vendors can request a report…".
  - "why co-op and cost price sit at the center of vendor negotiations" became a neutral description of the formula.
  - "Your days of financing" became "When the full invoice amount is due".
  - "not in any public document" was reverted to the Nov 8 wording.
- narf:
  - "low-value courier rules shape the price … really pays" became "border rules decide what duty and tax the shopper pays at import". The worked example now states the courier assumption.
  - "puts you inside the measure" became a cited statement that exported stock is held in Canada. Remote Fulfillment's use of US FBA inventory is now cited (-28).
  - Fee sentence: "only" was removed, and the search words are labelled as a suggestion.
- subscribe-and-save:
  - "defines each metric precisely" became "defines each metric".
  - SUBSCRIBER_RETENTION is now described as a share.
  - Removed "add them to your normal sales forecast when you size FBA shipments".
  - "Fees … are published only in Seller Central" was reverted to the Nov 8 verified wording.

## Arithmetic (all in "Worked example (hypothetical)" blocks)
- buy-box: $24.99 + $4.99 = $29.98; $29.98 − $27.50 = $2.48; $29.98 − $26.99 = $2.99. Correct.
- amazon-business: 210 − 120 = 90 = 75% of 120; 9% − 6% = 3 points. Correct.
- vendor-central: ($30,000 − $24,000 − $1,500) / $30,000 = 0.15; with $3,000 co-op the result is 0.10. Correct.
- narf: 25 × 1.40 = 35; 60 × 1.40 = 84; 120 × 1.40 = 168. The bands were checked against CBSA. Correct.
- subscribe-and-save: 40 + 180 = 220 deliveries; 220 × $8.75 = $1,925.00; 140 × $8.75 = $1,225.00. Correct.

## Notes
- The FAQ check-page warnings (questions not verbatim in the suggestion logs) are on FAQ items that did not change on 11-09, so they are out of scope here.
- check-page: no ERROR on all six pages.
