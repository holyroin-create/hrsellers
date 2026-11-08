# Verification report — verifier-VC2b

Date: 2026-11-08. Scope: `data/policy-log.json` (16 entries) and `data/claims/policy-log.json` (32 claims); then built `data/key-dates.json` from verified claims only.

## Sources re-fetched (WebFetch, this session)
federalregister.gov document pages are robots-blocked, so each document was read through the FR API JSON (`/api/v1/documents/<doc>.json`, for html_url, publication_date, effective_on, agency, type), its `raw_text_url`, or the govinfo.gov HTML. `source_url` stays the human-readable FR page. `fetched_via` names what was read; it was added for claims 03–08 (FR raw text) and 20–21 (govinfo).

| Entry | FR doc | Read via | Checked |
|---|---|---|---|
| Electronic refunds | 2025-24171 | govinfo HTML + API | agency, IFR, pub 2026-01-02, eff 2026-02-06, refunds sentence |
| EO 14389 | 2026-03832 | API + raw text | pub 2026-02-25, signed 2026-02-20, no effective date, operative + "does not affect" sentences |
| EO 14388 | 2026-03829 | API + raw text | pub 2026-02-25, scope sentence, 12:01 a.m. EST Feb 24 2026 |
| Proclamation 11012 | 2026-03824 | API + raw text | 10%, section 122, 150 days, end time, Congress condition |
| Proclamation 11021 | 2026-06960 | API + govinfo | pub 2026-04-09, full-value clause, Apr 6 2026 |
| EO 14411 | 2026-11595 | API + govinfo | pub 2026-06-10, signed 2026-06-03, Sec. 2(b)(i), Sec. 2(d) |
| De minimis non-postal IFR | 2026-12670 | API + govinfo | eff 2026-06-24, Entry Type 11 sentence |
| De minimis postal IFR | 2026-12669 | API + govinfo | eff 2026-07-24 / 145.31 eff 2026-06-24, $2,500 sentence |
| IEEPA refund worksheet | 2026-13771 | API + govinfo | 60-day notice (extension), comments by 2026-09-08, CIT sentence |
| Section 301 forced labor | 2026-15181 | API + govinfo | USTR, pub 2026-07-28, July 24 time, 12.5% rows |
| FY2027 user fees | 2026-15530 | API + govinfo | general notice, Oct 1 2026, MPF $34.58 / $670.86 |
| IOR data accuracy | 2026-16911 | API + govinfo | general notice, Sept 18 2026, voiding sentence |
| Supply chain disclosures | 2026-17926 | API + govinfo | ANPRM, comments by 2026-12-01 |
| China 301 continuation | 2026-20510 | API + govinfo | USTR notice, anniversary dates, "remain in effect" |
| Low-value shipments | 2026-20650 | API + govinfo | NPRM, comments 2026-12-07, entry type 13, bond sentence |
| Foreign IORs IFR | 2026-22735 | API + govinfo | pub 2026-11-06, eff 2027-01-05, "new requirements" sentence |

All 16 `date`, `agency` and `url` values match the FR API (url = `html_url`). All non-null `effective` values match the document text. Three are the documents' applicability or start dates, not FR `effective_on`: EO 14388 and Proclamation 11021 (goods entered on or after), Section 301 (DATES section), and the IOR notice ("will commence on September 18, 2026").

## Counts
| | Checked | Verified as drafted | Corrected (now verified) | Rejected |
|---|---|---|---|---|
| Claims | 32 | 27 | 5 | 0 |
| Entries | 16 | 7 unchanged | 9 edited (5 summaries, 6 titles) | 0 removed |

## Claim corrections (explained in each verifier_note)
- policy-log-03: added "as soon as practicable" before "no longer be collected".
- policy-log-05: added the order's scope limit, "articles not covered by 50 U.S.C. 1702(b)".
- policy-log-08: "unless changed or extended by Congress" became "unless the effective period is extended by an Act of Congress", which is the proclamation's wording.
- policy-log-11: good standing is a requirement the Secretary must impose "within 180 days of the date of this order" (CBP defines the term). The draft read as an immediate rule.
- policy-log-15: added the omitted conditions: sent via mail, classifiable only in HTSUS ch. 1-97, and the delayed-compliance-period exception.

Notes were added to verified claims 07, 18 (in-transit exception) and 26 (the source calls the dates "four-year anniversary dates"; second statutory review).

## Entry edits
- Summaries rewritten to match the corrected claims: eo-14389, eo-14388, proclamation-11012, eo-14411, de-minimis-postal.
- Titles changed for neutrality or accuracy:
  - eo-14411: "orders tighter rules" became "on customs enforcement and importers of record".
  - de-minimis-non-postal: "courier and freight" became "non-postal" (the rule covers all modes other than mail).
  - fy2027-user-fees: "limits rise" was not supported (the notice shows no FY2026 figures), so it became "CBP sets customs user fees for FY2027".
  - ior-data-accuracy: "steps up checks" became "announces enhanced enforcement of importer of record data accuracy".
  - china-301-continued: "continue past their four-year review" was inaccurate (the review is ongoing), so it became "continue after their 2026 anniversary dates".
- No summary now says more than its claim_ids.

## Possible additions (not made; adding them would need new claims)
- Postal IFR compliance date for 19 CFR 145.12(a)(2)(v)-(vi) is 2026-10-22. de-minimis-suspension-2026-18 covers it but is still drafted.
- Foreign IOR IFR: comments due 2027-01-05, and brokers must be in full compliance by 2027-05-06 (incoterms-who-is-importer-14/15, drafted).
- EO 14411's 180-day good-standing deadline falls on 2026-11-30 (by my arithmetic). It is not in key-dates because no claim states the date.

## key-dates.json
Built only from claims whose status was "verified" when the files were re-read just before writing. See the final section below for the count.

### Result
`data/key-dates.json` has 17 items dated 2026-01-01 to 2027-07-01. All 30 distinct cited claims had status "verified" at write time (re-read right before writing): 26 are policy-log claims, plus sales-tax-nexus-16, de-minimis-suspension-2026-18, de-minimis-suspension-2026-22 and section-321-repeal-2027-02. Each title, detail and who field is limited to what those claims state. hrefs point to `/policy-log/#<entry id>` (the anchors exist in src/pages/policy-log.astro) or to the guide page of the cited claim. No new claims were created.
