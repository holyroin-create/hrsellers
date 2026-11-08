# verifier-V4-L — verification report (2026-11-08)

All sources re-fetched with WebFetch (curl blocked by proxy). Every remaining claim: status "verified", verified_by "verifier-V4-L". check-page.mjs: no ERROR.

| page | claims checked | verified as drafted | corrected | rejected | body words | draft? |
|---|---|---|---|---|---|---|
| guides/amazon-business-b2b | 32 | 30 | 2 | 0 | ~920 | no |
| guides/amazon-renewed | 27 | 22 | 5 | 0 | ~1087 | no |
| guides/vendor-central-vs-seller-central | 25 | 23 | 1 | 1 | ~773 | no |
| guides/narf-canada-mexico | 30 | 25 | 4 | 1 | ~873 | no |
| guides/expanding-eu-uk-compliance | 32 | 24 | 8 | 0 | ~1114 | no |

## Key corrections
- amazon-renewed-08: $50,000 invoice test is limited to the previous 90 days (180 for Home, Tools, Kitchen, Lawn & Garden); $2.5M for Apple. Intro, key fact, summary, FAQ, checklist, decision row updated.
- amazon-renewed fees: page falsely said the public page gives no end date for the reduced referral fee (source: one year from Oct 16, 2026); "end date" wording removed.
- amazon-renewed-05/07/12 extended to cover existing page text (packaging/accessory photos; quotes/pro formas rejected; Selling Partner Support after 10 days).
- amazon-business-b2b-06: "part of SP-API" not in source; Compare cell narrowed. -22 extended with "To start using Amazon Business selling tools, sign up for a Professional selling account".
- amazon-business-b2b body: removed unsupported sentences (no separate marketplace; employees restricted to compliant offers; case packs need own identifiers; schools/nonprofits buy tax-exempt).
- vendor-central-vs-seller-central-14 REJECTED: "More than 60% of sales ... independent sellers" not on sell.amazon.com (two fetches). Removed. Also removed speculation (freight collection, "will struggle"), "Retail margin" cell, and unsourced vendor-fee assertion in worked example (arithmetic re-checked: 20.00 / 16.32 / 3.68).
- narf-canada-mexico-15 REJECTED: excluded product-type list not present in fetched page text (heading only). Removed from body, summary, decision row, checklist.
- narf-canada-mexico-07: store domains not in fetched text; narrowed. -28 evidence corrected to verbatim ("we'll use your US FBA inventory ..."). -22 scope fixed; -24 "commercial goods" removed, BN nine-digit.
- NARF naming: page/summary/FAQ now say the current program is called Remote Fulfillment with FBA and that the NARF name does not appear on Amazon's program page (no unsourced "renamed" claim).
- GPSR Article 9 paragraphs re-checked on EUR-Lex: 9(2) technical documentation, 9(3) 10 years, 9(5) type/batch/serial, 9(6) name + postal and electronic address, 9(7) instructions/safety info; 16(1)/(2)/(3), 19(a)-(d), 22(1)/(8), 51, 52, 1(2) all confirmed. 9(6) table cell wording fixed.
- UK VAT: £135 marketplace rule scoped to sales to customers in Great Britain; UK-stocked goods rule scoped to sellers not established in the UK; summary "most sales" removed. 14a(2) "to a consumer" corrected to "non-taxable person". CE recognition condition stated. Pan-EU "at least two of France, Germany, Italy, Spain or Poland".

## Rejected claim objects (removed from JSON because check-page.mjs errors on uncited claims)
```
{"claim_id": "vendor-central-vs-seller-central-14", "claim": "Amazon says more than 60% of sales in its store come from independent sellers.", "page": "/guides/vendor-central-vs-seller-central/", "source_url": "https://sell.amazon.com/", "publisher": "Amazon (sell.amazon.com)", "source_type": "official-documentation", "accessed": "2026-11-08", "evidence": "More than 60% of sales in the Amazon store come from independent sellers.", "archive_url": "", "produced_by": "writer-W-L", "verified_by": "verifier-V4-L", "status": "rejected", "verifier_note": "Re-fetched sell.amazon.com twice on 2026-11-08: no '60%' or 'of sales in the Amazon store' text on the page. Sentence removed."}
{"claim_id": "narf-canada-mexico-15", "claim": "Restricted, prohibited and dangerous goods, and goods blocked for importation (Mexico and Brazil), are not eligible.", "page": "/guides/narf-canada-mexico/", "source_url": "https://sell.amazon.com/fulfillment-by-amazon/remote-fulfillment", "publisher": "Amazon (sell.amazon.com)", "source_type": "official-documentation", "accessed": "2026-11-08", "evidence": "The following product types are not eligible:", "archive_url": "", "produced_by": "writer-W-L", "verified_by": "verifier-V4-L", "status": "rejected", "verifier_note": "Three re-fetches on 2026-11-08: the page text has only the heading 'The following product types are not eligible:' with no list; 'Dangerous goods', 'Prohibited', 'Restricted products', 'Blocked for importation' do not appear. Statements removed from page."}
```
