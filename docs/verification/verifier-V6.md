# Verification report: verifier-V6

Date: 2026-11-08. Scope: hts-classification-basics, entry-type-11-vs-01, customs-bonds, incoterms-who-is-importer.

## Sources fetched (WebFetch, this session)
- USITC: /tariff_affairs/disclaimer, /harmonized_tariff_information, /harmonized_tariff_information/frequently_asked_questions, /faq_subsection/definitions_and_classifications, /documents/hts/hts_external_user_guide.pdf
- eCFR, title 19: 101.1; 113.1; 113.11; 113.12; 113.13; Part 113 Subpart C (113.26, 113.27); 113.62; 141.1; 141.4; 141.11; Part 141 Subpart B (141.12, 141.20); 141.18; Part 142 Subpart A and 142.4; Part 142 Subpart B (142.11, 142.12, 142.15); 143.21; 143.22; 143.26; Part 171 App. B; Part 177 Subpart A
- govinfo HTML: FR-2026-06-24 doc 2026-12670; FR-2026-10-08 doc 2026-20650; FR-2026-11-06 doc 2026-22735 (both halves)
- FR API JSON: /api/v1/documents/2026-22735. The federalregister.gov HTML page is robots-blocked for WebFetch.

All cited sources are primary. No forbidden sources.

Rejected: none. I corrected two claims in place and widened two others; each change is recorded in `verifier_note`. I created no new claim objects, because gate-claims treats a claim whose producer is also its verifier as an error.

## FR 2026-22735, "Heightened Requirements for Foreign Importers of Record" (from the DATES section text)
- Header: 91 FR, No. 214, Friday, November 6, 2026, pages 69977-70007. Action: "Interim final rule; request for comments." Docket USCBP-2026-1387.
- Effective: "This interim final rule is effective on January 5, 2027."
- Comments: "must be received on or before January 5, 2027." (The API field comments_close_on is null, but the document text gives this date.)
- Compliance: licensed customs brokers may request delayed compliance with the 19 CFR 111.29 changes before January 5, 2027. "All customs brokers are expected to be in full compliance with the requirements of this rule no later than May 6, 2027."

## /guides/hts-classification-basics/
- Checked 32. Verified 32. Rejected 0.
- Edit: removed an uncited sentence that said which rate column applies depends on origin and any trade program claimed. It now says choosing the column is outside the page's scope.
- Note on claim 08: the FAQ sentence names GRIs, Additional U.S. Rules and the "legal descriptions and notes in chapters 1 through 97". The same page refers to "relevant section and chapter notes" elsewhere. Verified.

## /guides/entry-type-11-vs-01/
- Checked 26. Verified 26. Rejected 0.
- Summary bullet: "comments were due December 7, 2026" is now "comments are due by December 7, 2026" (the date is still in the future).
- "Who can file" bullet: it had no citation, so I added -06 and -07 (19 CFR 143.26).
- "Planning for 2027" bullet: the NPRM says "prior to or upon the date of importation", not "pre-arrival", and the 2027 date is only an assumption in its cost analysis. I renamed the bullet "Planning ahead", corrected the wording and cited -18 and -19.
- Worked example: $1,900 + $1,400 = $3,300 is correct and above the $2,500 ceiling for the 142.4(c) waiver.

## /guides/customs-bonds/
- Checked 27. Verified 27. Rejected 0. The hero claim customs-bonds-09 exists and is verified (19 CFR 113.13(a), $100 minimum).
- Removed the uncited sentence "A single transaction bond covers one entry; a continuous bond stays on file..."
- Table cell "One per transaction" (uncited) is now "No per-principal limit in 19 CFR 113.12". I checked this against the full fetched text of 113.12.
- The sentence on other bond conditions (documents, redelivery, liquidated damages) had no citation. I widened customs-bonds-16 to cover it, using the 113.62 paragraph headings (c), (d) and (n), and cited it.
- "Comments were due" is now "Comments are due on or before December 7, 2026".
- Worked example: 2 × $300 = $600, so the $1,000 floor applies; 2 × $800 = $1,600. Both are correct under 113.62(n)(4).

## /guides/incoterms-who-is-importer/
- Checked 21. Verified 21, including 1 corrected and 1 widened. Rejected 0.
- incoterms-who-is-importer-03 corrected: 19 CFR 141.1(b)(1) adds "if the duties are not paid by the broker". The claim and three MDX sentences (summary bullet, intro and DDP section) now carry that condition.
- incoterms-who-is-importer-10 widened: it now includes the delayed-compliance request window for brokers (before Jan 5, 2027) alongside the May 6, 2027 full-compliance date. The MDX sentence is updated to match.
- DDP section: "Your broker will need to verify and declare your U.S. IOR status from January 5, 2027" is now precise. The declaration goes on the entry and entry summary (-15), the broker verifies before filing it (-16), and a broker granted delayed compliance has until May 6, 2027 (-10).
- Summary bullet: "bars ... from entry" is now "from entering goods for consumption", matching 141.21(a).
- incoterms-who-is-importer-11 and -20: source_url changed from the FR API JSON to https://www.govinfo.gov/content/pkg/FR-2026-11-06/html/2026-22735.htm, which I fetched and checked for the header, pages, docket, CFR parts and the Section 2 E.O. 14411 phrase. I added `fetched_via` with the API URL.
- Claim -18 ("formal and informal entries") is confirmed by the preamble (Section V and Section VI.D). The regulatory text says "this part or part 143".

## Other checks
- Every `<C>` id exists in the JSON and every claim is cited on its page, on all four pages. All JSON files are valid.
- No experience claims, affiliate or AI mentions, or forbidden sources.
- Frontmatter is valid. Titles are 63-67 characters, descriptions are 149-159 characters, and the hero claims exist.
- tools/gate-claims.mjs reports no errors for these four pages.
- `minutes` was not changed. Counting body text including component markup gives 6-7 minutes against the 5-6 stated, a small difference that the owner may want to recheck.
