# verifier-DATA

Scope: data/key-numbers.json, data/site-faq.json, data/glossary.json, data/quiz.json, data/fee-compare.json. Checked against data/claims/*.json only (no web). Every cited claim exists and is `verified`. No claims files edited, no claims created.

| Entry | Finding | Fix |
|---|---|---|
| key-numbers: MPF rate (formal entry) | tool-duty-estimator-01 gives the rate but does not say "formal entry" | Cite entry-type-11-vs-01-12 (formally entered or released, 0.3464%) |
| key-numbers: MPF min / max FY2027 | tool-duty-estimator-03 supports only the $670.86 maximum | Cite entry-type-11-vs-01-13 (both limits) |
| key-numbers: Harbor maintenance fee | Claim limits it to commercial vessel cargo at covered ports | Label now "commercial vessel cargo, covered ports" |
| key-numbers: Automated informal entry fee | Claim condition "not prepared by CBP personnel" missing | Added to label |
| key-numbers: Statutory end of de minimis | section-321-repeal-2027-07 only gives the effective date of "section 70531(b) amendments" | Cite section-321-repeal-2027-02 (CBP: OBBBA terminated de minimis effective July 1, 2027) |
| fee-compare: Amazon | Label said "item price only" and on_shipping=false; amazon-referral-fees-02 says total price includes list price, shipping and gift wrap | on_shipping=true, claim amazon-referral-fees-02 added, label corrected |
| fee-compare: eBay | $7,500 ceiling on the 13.6% not stated | Added "(on totals up to $7,500)" to label; numbers OK |
| fee-compare: Walmart, Etsy, Shopify | pct/fixed/min/on_shipping match claims (Etsy 6.5+3 = 9.5%, 0.20+0.25 = $0.45; Shopify on_shipping false as no claim says base includes shipping) | None |
| site-faq: eBay | "total includes shipping the buyer pays" dropped "with some exceptions" | Restated per marketplace-ebay-02, incl. "with some exceptions", handling, sales tax |
| site-faq: Etsy | "A US seller pays" applied the US-bank-account condition to all fees; 12% Offsite Ads condition missing | Processing fee tied to US bank account; 12% threshold ($10,000 / 365 days) added |
| site-faq: Shopify | "Shopify adds" overstated "may apply"; "Plan fees are separate" uncited | "may apply"; plan price cited via marketplace-shopify-01 |
| site-faq: MPF | $2.77 missing "not prepared by CBP personnel" | Added |
| site-faq: de minimis | OBBBA naming and "repeals commercial shipment exception" not in cited claims | Cite section-321-repeal-2027-02; "entered for consumption" added |
| site-faq: customs bond | "secured by cash" incomplete; "guarantees you will pay" overstated claim wording | Reworded per customs-bonds-02/-12 |
| site-faq: Amazon, Walmart, HTS | Supported | None |
| glossary: Assist | "that the buyer supplies" not supported by any verified claim; without it the definition is misleading | Entry deleted |
| glossary: Drawback | "later exported or destroyed" not in cited claims | Reworded; added duty-drawback-04/-05 (unused-merchandise drawback, 5 years) |
| glossary: Entry type 01 | "consumption" not in claim | Removed |
| glossary: Heading (HTS) | "subheading" not in cited claims | "8-digit level" |
| glossary: MPF | "user fee" and "adjusts each fiscal year" unsupported | Reworded to rate + FY2027 limits, payable by IOR |
| glossary: Privileged foreign status | "fixes classification and duty rate" went beyond claim wording | Mirrors foreign-trade-zones-16 |
| glossary: other 12 terms | Supported | None |
| quiz: de minimis repeal date | Explanation/claim did not tie 70531(b) to the commercial shipment exception | Added section-321-repeal-2027-08; explanation updated |
| quiz: FTC review rule | Explanation described 465.2(b)/(c) as purchase/procure bans without a supporting cite | Added review-manipulation-risk-04/-05; explanation precise |
| quiz: 19 CFR 151.16 | "must issue" slightly stronger than claim | "issues" |
| quiz: other 9 questions | Answer indexes correct; wrong options clearly wrong per claims | None |

`node tools/gate-claims.mjs`: 0 errors; the 2 warnings are pre-existing and unrelated (tool-margin-calculator-95/96 not cited).
