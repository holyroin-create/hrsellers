# verifier-V8 report

Date: 2026-11-08. All sources opened with WebFetch on eCFR (section or subpart pages). No other verifier had marked any claim on these four pages; nothing was skipped.

## duty-drawback

- Claims checked: 25. Verified: 25 (one after correction). Rejected: 0.
- Sources fetched: 19 CFR 190.2, 190.3, 190.15; Part 190 subparts B (190.21, 190.22, 190.27), C (190.31, 190.32, 190.35, 190.36), D (190.41, 190.42, 190.45), E (190.51), G (190.72, 190.74); Part 174 subpart B (174.11).
- Corrected: duty-drawback-11. § 190.41 says "defective as of the time of importation"; claim, body sentence and table row updated.
- Other edits:
  - The intro sentence "For most claim types the refund tops out at 99 percent" cited only the unused-merchandise claim (07). Added markers 04, 11 and 14 so the "most claim types" scope is supported.
  - The uncited, inaccurate sentence "Manufacturing drawback ... requires that you make a new article" was rewritten. § 190.2 also counts processes that make merchandise fit for a particular use without a new article. The sentence now says the imported merchandise must be used to manufacture or produce articles in the US, citing 04.
- Hero "99%" (claim 07): verified against § 190.31(a).
- Worked example: 0.99 x 4,150 = 4,108.50 and 0.99 x 3,150 = 3,118.50 are correct. The CVD exclusion matches § 190.3(b).
- Frontmatter is valid: title 61 characters, description 159 characters, about 1,418 words, minutes 6. No experience claims, no forbidden sources, and every `<C>` id matches the JSON.

## prior-disclosure-protests

- Claims checked: 23. Verified: 23 (two after correction). Rejected: 0.
- Sources fetched: 19 CFR 162.74 (section page and Part 162 subpart G, including 162.73(b)); Part 174 subpart B (174.11, 174.12, 174.13), section 174.12(e), subpart C (174.21, 174.22, 174.24, 174.31); Part 159 subpart A (159.1, 159.9, 159.11, 159.12).
- Corrected:
  - prior-disclosure-protests-06: § 162.74(d)(1) deems a disclosure made at mailing only when it is sent by registered or certified mail with return receipt. Claim and sentence narrowed.
  - prior-disclosure-protests-20: § 174.22 says "deemed ... denied at the close of the 30th day". Claim and sentence aligned.
- Other edits:
  - Removed the uncited phrase "above the Center director level".
  - Removed the uncited claim "Classification disputes are the most common seller scenario".
  - Added marker 15 to the intro protest sentence.
  - Tied "the protest clock runs from it" to claim 17.
- Worked example: a fraud penalty of one times the $6,000 loss and a negligence penalty limited to interest both match § 162.73(b).
- Frontmatter is valid: title 67 characters, description 156 characters, about 1,277 words, minutes 6. Hero "180 days" (claim 17) is verified. Every `<C>` id matches the JSON.

## foreign-trade-zones

- Claims checked: 23. Verified: 23 (two after correction). Rejected: 0.
- Sources fetched: 15 CFR Part 400 (part page: 400.1, 400.2, 400.13(c)(2), 400.14(a)); 15 CFR 400.1 and 400.2 section pages; 19 CFR Part 146 subparts A (146.1, 146.3), D (146.41 to 146.44) and F (146.61, 146.63(c), 146.64, 146.65); section pages 146.42 and 146.65. The 15 CFR subpart A and B URLs were robots-blocked, so the part-level and section pages were used instead.
- Corrected:
  - foreign-trade-zones-06: § 400.2(o) also counts a change in condition that changes customs classification or eligibility for entry. Claim and sentence completed.
  - foreign-trade-zones-07: § 400.1(c) gives export treatment to merchandise moved into a zone for export in zone-restricted status. Qualifier added to the claim and sentence.
- Other edits:
  - Added marker 02 to the uncited opening definition sentence.
  - Added markers 13 and 14 to the two uncited "locks in the component rate" and "finished product's classification" sentences.
- Notes:
  - The AD/CVD privileged-status rule (claim 08) is § 400.13(c)(2). The "What to check yourself" list does not cite a wrong section for it.
  - Worked example arithmetic is correct: 2% x $50,000 = $1,000 and 8% x $50,000 = $4,000. The rates are labeled hypothetical.
- Frontmatter is valid: title 64 characters, description 155 characters, about 1,182 words, minutes 5. The flow hero is acceptable. Every `<C>` id matches the JSON.

## customs-holds-and-exams

- Claims checked: 22. Verified: 22. Corrected: 0. Rejected: 0.
- Sources fetched: 19 CFR Part 151 subpart A (151.2, 151.6, 151.7, 151.10, 151.15, 151.16); Part 162 subpart C (162.21); Part 162 page (162.31); Part 162 subpart E (162.45, 162.46, 162.47); Part 171 subpart A (171.2).
- The 151.16 section URL and the 162 subpart D URL were robots-blocked. The same text was read from the subpart A page and the part page instead.
- Edits:
  - The `<Timeline>` used non-date values ("Day 0", "Within 30 days"), but the contract requires YYYY-MM-DD. Converted it to a `<Flow>` with the same steps (claim 12). Each step is still cited in the prose with claims 09, 08, 11 and 12.
  - Removed the uncited sentence "The regulations quoted here do not set the fees a CES or carrier charges; those come from the service provider."
  - The checklist item "exam, cartage and storage invoices ... generally fall on the importer" claimed storage costs fall on the importer, which no cited section says. Reworded it to match § 151.16(b): preparation and transport costs fall on the importer unless the exam is at the public stores.
- Frontmatter is valid: title 57 characters, description 157 characters, about 1,103 words after edits, minutes 5. Hero "30 days" (claim 12) is verified. The page still has a table, a Flow and a Checklist. Every `<C>` id matches the JSON.

## Totals

| Page | Checked | Verified | Corrected (then verified) | Rejected |
|---|---|---|---|---|
| duty-drawback | 25 | 25 | 1 | 0 |
| foreign-trade-zones | 23 | 23 | 2 | 0 |
| prior-disclosure-protests | 23 | 23 | 2 | 0 |
| customs-holds-and-exams | 22 | 22 | 0 | 0 |

No new claim objects were created. `produced_by` was left unchanged on every claim. All four JSON files parse.
