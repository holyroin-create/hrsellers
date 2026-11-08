# verifier-VH — verification report (2026-11-08)

Scope: guides `section-301-china-tariffs`, `merchandise-processing-fee` and `shipping-lithium-batteries`, plus their `data/claims/*.json` files.
Method: I re-fetched every source with WebFetch and asked for verbatim passages. For FR documents I read the govinfo HTML, and the FR API JSON where needed. `source_url` stays the human-readable FR page, and `fetched_via` keeps the URL actually read. No new claim objects were created. Build (`ALLOW_UNVERIFIED=1 ALLOW_PLACEHOLDERS=1 npx astro build`) completes: 66 pages, no MDX errors. Every `<C>`/`claim` id resolves to the JSON, and every JSON claim is cited on its page.

## Counts

| Page | Checked | Verified as drafted | Corrected in place | Rejected |
|---|---|---|---|---|
| section-301-china-tariffs | 37 | 36 | 1 (-35) | 0 |
| merchandise-processing-fee | 27 | 25 | 2 (-15, -21) | 0 |
| shipping-lithium-batteries | 30 | 29 | 1 (-22) | 0 |
| **Total** | **94** | **90** | **4** | **0** |

All 94 claims now have `status: "verified"` and `verified_by: "verifier-VH"`. Corrections, plus informational notes on -27, -31, -37 (301) and -03, -15 (lithium), carry a `verifier_note`.

## Sources re-fetched
- FR (via govinfo HTML): 2025-21671, 2026-08806, 2026-20510, 2026-20511, 2024-21217, 2025-23912, 2026-15181 (two parts), 2026-15530 (plus the API JSON abstract), 2025-13869.
- FR API: USTR newest-first (agency only), USTR + term "section 301 china", USTR + term "exclusion", USTR published on or after 2026-10-09, document 2026-21755.
- hts.usitc.gov reststop: 9903.88, .02, .03, .15, .69, .70.
- eCFR: 19 CFR 24.23, 24.24, part 143 (143.21(a)), and 49 CFR 173.185 (fetched twice: the first answer omitted the mark, (b)(2) and (c)(1)(iii) wording).
- pe.usps.com Pub 52 Appendix C, Packaging Instruction 9D.

## Flagged items
- **178 exclusions (2025-21671):** confirmed. The notice says "extend the 178 current exclusions until November 10, 2026" and "before 11:59 p.m. eastern daylight time on November 9, 2026". HTSUS 9903.88.69 and .70 still read "through November 9, 2026". I checked the FR API for USTR documents, newest first, on Nov 8, 2026: no extension has been published. The newest exclusion-related items are conforming amendments 2026-17925 (Sep 2) and 2026-20511 (Oct 7). The newest "section 301 china" item is still 2026-21755 (Oct 26, the maritime suspension proposal, through Jan 9, 2027). One anomaly: the agency query filtered to "published on or after 2026-10-09" returned 0, even though 2026-21755 is a USTR document. The term query is the one that surfaced it. The page stays dated, and its warning callout now says goods entered after the deadline "are no longer covered by the extension". It no longer asserts they pay full duty.
- **Forced-labor action (2026-15181):** 12.5% on products of China, except Annex I and Annex II Part A, confirmed. Effective 12:01 a.m. ET July 24, 2026, with an in-transit exception for goods entered before 12:01 a.m. July 28, 2026. Stacking now quotes U.S. note 52(a) verbatim: "shall also be subject to any additional duty provided for in this subchapter or in subchapter IV of chapter 99". The notice text I read does not name the 9903.88 China duties in this language. I also removed "60 economies" from the body and FAQ, because no fetched text or claim supports that number.
- **Semiconductor action (2025-23912):** confirmed. Effective December 23, 2025, initial level 0%, rising on June 23, 2027 to "a rate to be announced not fewer than 30 days prior to that date". The tariffs are additional to the existing 50% Section 301 tariff.
- **2026-20510:** confirmed. The July 6, 2018 and August 23, 2018 actions did not terminate and remain in effect. A separate notice will invite comments on effectiveness.
- **MPF:** FY2027 values (CBP Dec. 26-14, FR 2026-15530, required Oct 1, 2026) confirmed: $34.58 / $670.86 / $4.15 / $2.77 / $8.30 / $12.45, and the rate of 0.3464% remains the same. FY2026 values (CBP Dec. 25-10, FR 2025-13869, required Oct 1, 2025) confirmed: $33.58 / $651.50 / $4.03 / $2.69 / $8.06 / $12.09. The FY2026 column's two "—" cells were filled from that notice, under corrected claim -15.
- **USPS Pub 52 PI 9D:** all cited limits confirmed: 20 Wh / 100 Wh, 1.0 g, 8 cells or 2 batteries, 5 lb, rigid/sealed/adequate size, address side, used/damaged devices surface only, and damaged/defective/recalled batteries prohibited unless the director approves. Batteries without equipment go "generally" by surface, and there is a limited air exception from and to Alaska (correction -22).
- **49 CFR 173.185:** every cited paragraph confirmed. Note that the three packaging hazards sit in (b)(2), and the passenger-aircraft marking and the 5 kg equipment exception are in (c)(1)(iii). That marking applies to the outer package regardless of mode.

## Corrections
- **301-35:** claim reworded to the note 52(a) text (see above).
- **MPF-15:** extended with FY2026 $8.06 and $12.09. The drafted values were correct.
- **MPF-21:** the abstract says "certain customs user fees ... established by COBRA" and does not name the MPF. The claim now says the notice adjusts those COBRA fees, including the 19 CFR 24.23 MPF amounts. The FAQ and body wording were adjusted to match.
- **Lithium-22:** "generally" plus the Alaska air exception added. The body, keyFact ("Generally surface only"), summary, FAQ and Compare row were updated.

## Body edits (uncited or unsupported wording)
- **301:** the table and Decision/Steps cited "U.S. note 20(b)" for List 1, but the fetched 9903.88.01 text references note 20(a). The table column now shows the verified note references: 20(a); 20(c)/(d); 20(e)/(f); 20(r)/(s); 20(vvv)/(www). The uncited Chapter 99 explainer sentence now carries citations. I replaced "list labels are informal names; USTR refers to Lists 3/4A by FR citation", because USTR's notice does name "List 3" and "List 4A". I removed the "origin vs shipping-route" aside. The scope note no longer says a broker's review "settles" classification.
- **MPF:** "almost every import entry" became the regulation's scope. I removed the uncited claim that the 1401a value is "normally the same transaction value you declare for duty". The break point is corrected to about $193,667, since 670.86 / 0.003464 = 193,666.86, at three spots. The break-point callout is now labeled "Worked example (hypothetical)". I dropped the "claim being made on the entry" phrasing from the exemption callout and added -01 to the MPF "who pays" Compare cell.
- **Lithium:** removed "carriers can add their own conditions", "Most consumer products fall under (c)…", "Customer returns are where sellers most often get this wrong", and the uncited assertion that carrier and marketplace rules "can be stricter". "Air is where the configuration matters most" was reworded, because the marking is not air-specific. The Decision row "Batteries by themselves, going by air" became a mode-neutral row. Checklist items now read: damaged returns go "highway, rail or vessel only" (not "ground"), and the Wh marking applies to lithium ion only.
- **Arithmetic rechecked:** 301 example ($400 + $2,500 = $2,900, 29%; $750). MPF examples ($5.20, $17.32, $34.64, $173.20, $866.00 capped to $670.86; HMF $62.50; combined $235.70; $9,000 × 0.3464% = $31.18 < minimum). Lithium example: Wh comparisons.

## keyFacts / FAQ
- All keyFacts match their claims. Lithium "USPS, batteries alone" now reads "Generally surface only".
- FAQ answers match their cited claims after the edits above. I did not re-audit FAQ question provenance against faq-bank.json.

## Notes for the editor
- Rough body word counts after edits, markup stripped: 301 ≈ 1,170, MPF ≈ 1,115, lithium ≈ 1,220. The first two may fall below the 1,200-word floor. That is a writer-side issue, and no content was added by the verifier.
- The section-301 page cites only conforming amendment 2026-20511. The earlier 2026-17925 (Sep 2, 2026) also amended exclusions, but it is not on the page. This is optional for the writer.
