# verifier-V4-R — reviews/amzscout, reviews/aura, reviews/getida, reviews/zonguru (2026-11-08)

Every source re-fetched with WebFetch (vendor sites only for their own product; Amazon pages on sell.amazon.com and developer-docs.amazon, read via the developer-docs.amazon redirect).

| page | claims checked | verified as drafted | corrected | rejected | body words | draft? |
|---|---|---|---|---|---|---|
| reviews/amzscout | 29 | 23 | 6 | 0 | 843 | no |
| reviews/aura | 39 | 30 | 9 | 0 | 886 | no |
| reviews/getida | 28 | 21 | 7 | 0 | 798 | no |
| reviews/zonguru | 34 | 28 | 5 | 1 | 779 | no |

All four first paragraphs state that the page summarizes vendor-published information, that the tool was not tested, and that the site has no affiliate relationship.

## Main corrections
- amzscout: removed "MOST POPULAR" and "RECOMMENDED" badges (vendor marketing); SAVE 44% kept only as the 12-month billing label. Prices and pack prices match the live homepage pricing block exactly.
- amzscout-27: POE "primarily categorizes products within niches" (not search terms). amzscout-29 / zonguru-31: "+ selling fees" wording is on the POE page, not /pricing, so the source was moved.
- amzscout-24: the cancellation sentence also names the Help window.
- amzscout: removed unsourced sentences ("long been known for", "now", the generic "treat any tool's figures as estimates", the MCP third-party-terms assumption, the /pricing and Terms-blocked process notes).
- aura: every table cell matches the live table. Row label corrected to "Monthly sales*", footnote ** on Marketplaces; "Recommended" tag on Essential removed; Decision rows reworded so they no longer advise ("Move up a tier", "only need").
- aura-25: the actual help-center wording is "This connection allows all listings, listing data, sales metrics, and inventory to import"; aura-19 adds "Aura is a reactive repricer"; aura-27 adds "Vendrive customer support".
- getida-04: Section 1.10 "twenty-five percent (20%)" confirmed verbatim. The page now quotes it and says only that the words and the figure differ. "Confirm in writing" advice and the "worth it" framing were removed. The worked example labels both rates as the two figures in 1.10, without taking a side.
- getida-22: the privacy-policy phrase describes the services covered, not information collected; claim and sentence corrected.
- getida-23/24: removed "case ID and amounts", "every reimbursement" and "not scheduled", which are not in the source.
- getida/aura/zonguru (SP-API reauthorization): narrowed to the public-app annual reauthorization only.
- zonguru: the "free trial" FAQ wording was confirmed against the live page (no trial mentioned). Unsourced advice was removed ("ask the vendor…", "read the terms for later requests", "before committing to a change", the trademark-position claim).

## Rejected
- zonguru-22 "A9 decides where you rank, and Alexa for Shopping decides whether you are recommended." This is vendor marketing about Amazon's algorithms. It was removed from the page and from data/claims/zonguru.json, because check-page.mjs errors on uncited JSON claims (same practice as verifier-V4-Q). Full record:
```json
{"claim_id": "zonguru-22", "claim": "ZonGuru's homepage says A9 decides ranking and Alexa for Shopping decides recommendations.", "page": "/reviews/zonguru/", "source_url": "https://www.zonguru.com/", "publisher": "ZonGuru (zonguru.com)", "source_type": "official-documentation", "accessed": "2026-11-08", "evidence": "A9 decides where you rank, and Alexa for Shopping decides whether you are recommended.", "archive_url": "", "produced_by": "writer-W-R", "verified_by": "verifier-V4-R", "status": "rejected", "verifier_note": "Rejected: vendor marketing statement about how Amazon's ranking/recommendation systems work (algorithm claim, not a product fact). Removed from page."}
```

check-page: no ERROR for all four pages.
