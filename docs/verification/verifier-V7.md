# Verification report: verifier-V7

Date: 2026-11-08. Scope: the de minimis suspension guide, the Section 321 repeal guide, the tariff stack guide, the tariff stack estimator claims, the policy log, and the new data/tool-rates.json.

## Sources fetched (WebFetch, this session)
- **Federal Register**
  - Full_text txt/html: 2025-14897 (EO 14324), 2026-03829 (EO 14388), 2026-03824 (Proc. 11012), 2026-03832 (EO 14389; the txt was robots-blocked, so I used the full_text HTML), 2026-12670 (CBP Dec. 26-12), 2026-12669 (CBP Dec. 26-13), 2026-21600, 2026-15530 (CBP Dec. 26-14), 2026-20228, 2026-15181 (both 100k-character parts), 2026-11314 (Proc. 11032), 2026-14990 (Proc. 11045), 2026-16400 (Proc. 11052).
  - API: 2026-20650, 2026-20510, 2026-03832, 2026-14990, 2026-15181, R1-2026-03829, and an html_url lookup for 7 documents.
  - API searches (order=newest): "merchandise processing fee"; "temporary import surcharge"; "section 232" presidential documents; USTR "section 301" since 2026-07-01; CBP "de minimis" since 2026-10-01.
- **eCFR:** 19 CFR 24.23 and 24.24 (24.24 fetched three times to get paragraph (d)(3)).
- **govinfo:** Public Law 119-21, HTML. Section 70531 is at character offset 700000.

All sources are primary. No forbidden source is cited. Every source_url that pointed to a full_text or API endpoint now points to the human-readable federalregister.gov document page, and the endpoint I fetched is recorded in `fetched_via`. I checked each document-page URL against the API `html_url`.

## MPF fiscal-year check
- The "merchandise processing fee" search, newest first, puts 2026-15530 at the top: "Customs User Fees To Be Adjusted for Inflation in Fiscal Year 2027", CBP Dec. 26-14, published 2026-07-31. No later adjustment notice exists. The FY2026 notice (2025-13869, CBP Dec. 25-10) has been superseded.
- CBP Dec. 26-14 says the figures are "required as of October 1, 2026": minimum $34.58, maximum $670.86, informal automated entry $2.77. It also says "the ad valorem rate of 0.3464 percent remains the same".
- The notice does not state an end date, so the period is recorded as "FY2027, required as of October 1, 2026".
- eCFR 24.23 confirms the 0.3464% rate. eCFR still shows the base limits of $25 and $485, which are inflation-adjusted.
- eCFR 24.24(a) confirms the 0.125% HMF.
- data/tool-rates.json created: rate 0.3464, min 34.58, max 670.86, HMF 0.125. The four claim ids it uses are estimator-01 to -04, all verified.

## /guides/de-minimis-suspension-2026/
- Claims checked: 20. Verified: 20, including 2 corrected. Rejected: 0.
- Corrected:
  - -07: Proclamation 11012 runs to July 24, 2026 unless suspended, modified or terminated earlier, or extended by an Act of Congress. The draft said "ended or extended earlier".
  - -13: the broker is designated by the owner, purchaser or consignee, and the bond is a basic importation and entry bond.
- MDX edits:
  - Proclamation 11012 sentence corrected.
  - Table header now says "CBP Dec. 26-13" (the draft said 26-12/26-13). The who-may-file and bond rows were corrected.
  - The intro's "bond and monthly payment" sentence now cites -13 and -14. Before, it cited only -12, which covers the effective date.

## /guides/section-321-repeal-2027/
- Claims checked: 10. Verified: 10. Rejected: 0.
- I read section 70531 (a), (b)(1), (b)(2) and (b)(3) on govinfo. The struck and inserted text, the $5,000/$10,000 penalty, the 30-day and July 1, 2027 effective dates, and the heading all match.
- CBP Dec. 26-12 contains the "One Big Beautiful Bill Act, which was enacted on July 4, 2025, terminated ... effective July 1, 2027" sentence and the footnote citing P.L. 119-21 §70531(b).
- MDX edits: none.

## /guides/tariff-stack-2026/
- Claims checked: 20. Verified: 20, including 4 corrected or replaced. Rejected: 0.
- Corrected:
  - -10: EO 14389 identifies EOs 14193 and 14194 by title ("Northern Border", "Southern Border"), not as the Canada and Mexico orders. The MDX now uses the titles.
  - -11: Proclamation 11012 end-date wording, as in the de minimis guide.
  - -15: U.S. note 52(f)(1) exempts articles of aluminum, steel or copper and listed derivative aluminum or steel articles. The MDX said "other listed Section 232 goods", which the note does not support.
  - -20, replaced: the draft's list of 232 proclamations (timber, semiconductors, pharmaceuticals, polysilicon, UAS) was sourced to an API search-results URL. A search list is not a document page, and titles alone do not show the 232 basis or annex structure. I replaced it in place with Proclamation 11052, which I fetched: 15% on polysilicon and derivatives listed in Annexes I and II, for goods entered from 12:01 a.m. ET on December 4, 2026.
- Worked example recomputed and correct:
  - $400.00 + $1,250.00 + $34.64 + $12.50 = $1,697.14.
  - 0.3464% x $10,000 = $34.64, which is above the $34.58 minimum.
  - At $5,000, 0.3464% gives $17.32, so the $34.58 minimum applies.
  - Vietnam is at a flat 12.5%, not net of MFN. The notice applies net-of-MFN only to the EU and Taiwan (to 10%) and to Japan, Korea and Switzerland (to 12.5%). So the 4% + 12.5% stack in the example is correct.
- Current-status statements are now dated and sourced:
  - The intro's uncited "Section 232 and the China Section 301 actions continued through all of it" was replaced. The new text cites EO 14389's non-effect clause (-10) and USTR's October 7, 2026 notice (-16).
  - Summary bullet 5 is dated October 7, 2026.
  - The heading and Bars label "forced-labor action" became "2026 action on 60 economies". The notice's title could not be read because the document page is robots-blocked.
  - Removed "Those duties apply by HTS list ... can carry both". It was not in any fetched text.
  - The edge-case sentence about steel now cites -15.
  - The worked-example source line now also cites -02 and -07.
- Additional-duty programs are described only as far as the fetched notices go:
  - IEEPA: EO 14389 and CBP's 2026-20228 notice.
  - Section 122: Proclamation 11012. A search for "temporary import surcharge" shows no extension notice. The page already tells readers to check.
  - Section 301 (2026): 2026-15181. A USTR search since July shows no later modification of it.
  - Section 301 (China): 2026-20510.
  - Section 232: Proclamations 11032 and 11052. Proclamation 11045 (July 20, 2026, aluminum onshoring plans) does not change the Annex I-C rates.

## /tools/tariff-stack-estimator/ (tool-tariff-stack-estimator.json)
- Claims checked: 6. Verified: 6. Rejected: 0.
- -05 and -06 are verified but not cited by data/tool-rates.json, so the gate warns about them. They are not errors.

## /policy-log/ (policy-log.json and data/policy-log.json)
- Claims checked: 12. Verified: 12, including 3 corrected. Rejected: 0.
- All 12 match their source document on date, agency, effective date and URL. Each URL is the official human-readable document page.
- Corrected entries:
  - pl-2026-01: the summary now includes the "whichever comes first" surcharge-expiry limb.
  - pl-2026-03: end-date wording corrected, and the exceptions are now in the claim.
  - pl-2026-07: the title no longer uses the "forced-labor investigations" label. The exemption wording now follows note 52(f), (g) and (h) instead of "Section 232 articles".

## Gate results
- tools/gate-claims.mjs reports 0 errors for these 5 claim files and pages. The 95 errors it reports belong to other agents' files.
- `<C>` ids match the claim files in both directions on all three guides.
- Frontmatter is valid. Description lengths are 159, 156 and 156; title lengths are 67, 63 and 65.
- Prose word counts are 1,360, 1,129 and 1,606.
- No experience claims, AI mentions or forbidden sources.

## Notes for writers (not acted on)
- R1-2026-03829, published 2026-04-09, is a corrected republication of EO 14388 that adds an annex that had been omitted.
- New CBP documents in range: 2026-22735 "Heightened Requirements for Foreign Importers of Record" (2026-11-06) and 2026-21570 "Modification of the Test of the New Electronic Informal Entry Process for Mail" (2026-10-22).
- Annex I.B of the 2026 Section 301 notice exempts patented pharmaceutical articles from 12:01 a.m. ET on July 31, 2026.
