# Verification report — verifier-VC2a

Date: 2026-11-08. Scope: guides `tariff-stack-2026`, `de-minimis-suspension-2026`, `section-321-repeal-2027`; `data/claims/tool-duty-estimator.json`; `data/tool-rates.json`.
Method: every source re-fetched this session with WebFetch, verbatim passages requested. Federal Register documents read via govinfo.gov HTML (FR-YYYY-MM-DD/html/<doc>.htm) or the FR API JSON; `source_url` kept as the federalregister.gov document page and `fetched_via` added where it was missing (2026-15530, 2026-03832, 2026-03824, 2026-03829). Public Law 119-21 read on govinfo (PLAW-119publ21, Sec. 70531 at char offset ~730,000).

## Counts

| File | Checked | Verified as drafted | Corrected in place | Rejected |
|---|---|---|---|---|
| tariff-stack-2026.json | 21 | 18 | 3 (-07, -11, -15) | 0 |
| de-minimis-suspension-2026.json | 25 | 23 | 2 (-02, -15) | 0 |
| section-321-repeal-2027.json | 21 | 20 | 1 (-20) | 0 |
| tool-duty-estimator.json | 6 | 6 | 0 | 0 |
| **Total** | **73** | **67** | **6** | **0** |

All 73 claims now `status: verified`, `verified_by: verifier-VC2a`; corrected ones carry `verifier_note`.

## Corrections
- **tariff-stack-2026-07** — 19 CFR 24.24(e)(2)(ii): HMF is added to "any normal duty, tax or fee payable at the time of formal entry processing". Claim and body sentence narrowed (was "payable on the entry … same bill").
- **tariff-stack-2026-11** — Proclamation 11012: the surcharge runs through 12:01 a.m. EDT July 24, 2026 "unless … expressly suspended, modified, or terminated on an earlier date … or … extended by an Act of the Congress". Draft said "unless changed or extended by Congress". Fixed in claim, body and the mistakes table. An FR API search (Nov 8, 2026) turned up no extension document.
- **tariff-stack-2026-15** — USTR notice 2026-15181, EU and Taiwan sections: if the MFN rate is below 10%, MFN + Section 301 = 10%. If MFN is 10% or more, the Section 301 tariff is zero. Draft said "capped at a combined 10%" with no conditions. Fixed in the claim, summary bullet, Compare row, hypothetical and mistakes table.
- **de-minimis-suspension-2026-02** — EO 14388 limits its "regardless of value…" sentence to articles not covered by 50 U.S.C. 1702(b). Added that qualifier. The lead now says "suspended across the board" plus the qualifier instead of "suspended for every shipment". The FAQ answer was updated too.
- **de-minimis-suspension-2026-15** — 2026-12669: the list of goods barred from postal informal entry also covers goods claiming duty-free treatment under Chapter 98 or a free trade agreement. Fixed in the claim, Steps, the body sentence and both Decision rows.
- **section-321-repeal-2027-20** — 2026-22735: the bar covers informal entry "for which a CBP Form 3461 or 7501 must be filed unless the foreign IOR is either a CTPAT validated participant or uses a CTPAT validated and licensed customs broker". This replaces the vague "generally … unless CTPAT conditions are met".

## Spot checks (all confirmed)
- CBP Dec. 26-14 / FR 2026-15530 (91 FR 48398, published Jul 31, 2026): the amounts are "required as of October 1, 2026" (this is the required-as-of date, not the publication date). MPF minimum 34.58, maximum 670.86, informal automated 2.77, manual 8.30, CBP-prepared 12.45. "Only the limitation is increasing; the ad valorem rate of 0.3464 percent remains the same."
- 19 CFR 24.23(b)(1)(i)(A): formal entry ad valorem fee 0.3464 percent. The base-year limits ($25/$485) are adjusted under 24.22(k) (eCFR current to 10/23/2026). 19 CFR 24.24(a): 0.125 percent "(.00125) of its value" at a defined port.
- **data/tool-rates.json** matches the verified claims exactly: 0.3464 / 34.58 / 670.86 / 0.125 / 2.77, period "FY2027 (… required as of October 1, 2026)".
- Public Law 119-21 Sec. 70531: title, (a) penalty "up to $5,000 … up to $10,000", effective 30 days after enactment, (b) heading "Repeal of Commercial Shipment Exception", strike text, repeal of subsection (c), "shall take effect on July 1, 2027". The enactment date of July 4, 2025 appears in govinfo's header and in CBP's statement in 2026-12670. The worked date (July 4 + 30 days = August 3, 2025) checks out.
- Effective dates and publication dates are kept separate: 2026-12670 is effective Jun 24, 2026. 2026-12669 is effective Jul 24, 2026, except 145.31, which took effect Jun 24, 2026. Its compliance date is Oct 22, 2026. 2026-20650 is an NPRM published Oct 8 with comments due Dec 7, 2026. 2026-22735 is an IFR published Nov 6, 2026 and effective Jan 5, 2027.
- Worked example recomputed: 20,000×5% = 1,000.00; ×12.5% = 2,500.00; ×0.3464% = 69.28 (within the 34.58–670.86 band); ×0.125% = 25.00. Total **$3,594.28** (17.97%). On a $1,500 entry, MPF = $5.196, so the $34.58 minimum applies. In the EU example, 4% MFN → 6 points.

## Other page edits
- FAQ questions were checked against research/faq-bank.json. The tariff-stack page dropped "Do tariffs stack?", "Do 122 tariffs stack?" and "Harbor maintenance fee and merchandise processing fee…", none of which are in the bank. It added the bank questions "What is the maximum merchandise processing fee?" and "How is merchandise processing fee calculated?", both cited. The section-321 page dropped "Will gifts still be exempt after July 1, 2027?", which is not in the bank, leaving 3 FAQs. All the de minimis FAQs are bank questions.
- Uncited "HTSUS Chapter 99" framing was removed from the tariff-stack lead, summary, worked example and checklist. "Three moves" was changed to "Four moves" to match the timeline. The table row now reads "limits adjusted yearly", because only the MPF limits are adjusted each year.
- On section-321, a forward-looking statement that was not supported ("main lane … after July 1, 2027") was replaced with a neutral one.
- `related` was expanded with allowed slugs on all three pages.
- No experience claims found. Statements about current status are dated "As of November 8, 2026" and sourced.
- Build: `ALLOW_UNVERIFIED=1 ALLOW_PLACEHOLDERS=1 npx astro build` completed with 64 pages and no MDX errors.

## Open notes
- `related` includes `section-301-china-tariffs`, which has no .mdx file yet. The build passes regardless.
- Whether the Section 122 surcharge actually ended on July 24, 2026 is only as certain as the proclamation text and an FR search that found no extension. The pages word this as "set to run through".
