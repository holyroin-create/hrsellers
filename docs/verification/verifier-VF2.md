# verifier-VF2 — verification report (2026-11-08)

Scope: guides `brand-registry-trademark` and `gs1-barcodes-fnsku`, plus their `data/claims/*.json`.
Method: re-fetched every source with WebFetch and asked for verbatim passages and tables. Compared numbers, scope and conditions. No new claim objects were created. Build (`ALLOW_UNVERIFIED=1 ALLOW_PLACEHOLDERS=1 npx astro build`) completes: 66 pages, no MDX errors. Every `<C>` and `claim` id resolves to the JSON, and every JSON claim is cited on its page.

## Counts

| Page | Checked | Verified as drafted | Corrected in place | Rejected |
|---|---|---|---|---|
| brand-registry-trademark | 36 | 33 | 3 (-23, -26, -27); evidence-only fixes on -25, -34 | 0 |
| gs1-barcodes-fnsku | 25 | 24 | 1 (-24, re-sourced); evidence-only fixes on -05, -11, -20 | 0 |
| **Total** | **61** | **57** | **4** | **0** |

All 61 claims now have `status: "verified"` and `verified_by: "verifier-VF2"`. Corrections carry a `verifier_note`.

## Sources re-fetched
uspto.gov: trademark-fee-information (last updated Nov 4, 2026; describes only the FY2025 rule effective Jan 18, 2025), basics/trademark-process, basics/what-trademark, basics/why-register-your-trademark, basics/why-hire-private-trademark-attorney, maintain/keeping-your-registration-alive, dashboard/trademarks/application-timeline ("Data updated as of October 1, 2026": 4.3 / 10.4 months). sell.amazon.com/brand-registry. gs1us.org: get-a-barcode, what-is-a-gtin, how-to-get-a-upc-barcode, get-started-guide. federalregister.gov 2024-30826 (CPSC Certificates of Compliance final rule). eCFR part 1110 is robots-blocked, and the govinfo CFR 2025 edition predates the amendment.

## Flagged items
- **USPTO fees:** $350 base per class (Section 1 or 44); surcharges $100 / $200 / $200 per 1,000 extra characters; AAU/SOU $150; SOU extension $125; Section 8 $325; combined 8+9 renewal $650. All match the current fee page exactly. The page shows no 2026 fee changes. Arithmetic rechecked: $700 + $250 + $300 = $1,250; free-form +$400; maintenance $650 and $1,300.
- **GS1 US prefix table:** each row confirmed exactly on get-a-barcode, and repeated on how-to-get-a-upc-barcode: 10 | $250 | $50; 100 | $750 | $150; 1,000 | $2,500 | $500; 10,000 | $6,500 | $1,300; 100,000 | $10,500 | $2,100. The table also has a row for 1 GTIN | $30 | $0, and an NDC labeler-code prefix row ($2,100 / $2,100) that the page does not use. Worked-example arithmetic rechecked: 240, 450, 1,200, 1,350, 360.
- **FNSKU:** the title ("UPC Barcodes and GTINs for Sellers: GS1 US Prices Explained") and the description do not promise FNSKU content. The scope note says that FNSKU labels are out of scope. Title left unchanged (slug fixed).

## Corrections
- **brand-registry-23:** the fetched passage confirms the 30-day window from publication to oppose or request an extension. It did not confirm "anyone who may be harmed". Claim and Steps text narrowed to the window.
- **brand-registry-26/27:** the trademark-process page only says it is "particularly important" to check status between years 5–6 and 9–10. It does not say a filing is due then. Re-sourced to USPTO "Keeping your registration alive" ("Between the fifth and sixth years…" for the Section 8 declaration of a non-Madrid registration; "Between the ninth and 10th years… Every 10 years after that" for the combined 8/9 renewal). Steps and body sentence updated to match.
- **brand-registry-25:** evidence now quotes "from the date of the notice of allowance" (the source no longer says "mailing date").
- **brand-registry-22:** verified. Note added that the source also allows an optional three-month extension for a fee, and that Madrid applicants have six months.
- **gs1-24:** re-sourced to the Federal Register final rule's regulatory text, § 1110.11(a)(1): "Finished product certificates must contain at least one of the following unique identifiers: global trade item number (GTIN), model number, … universal product code (UPC), or alternate identifier". Effective July 8, 2026 for most products. Body sentence reworded to "finished product certificate".

## Body edits (uncited or unsupported wording)
- Brand: "cheapest and fastest path" (unsupported) replaced with a cited ID-Manual surcharge sentence (-13). The filing-basis sentence that miscited -20 for the existence of two bases was rewritten, and "prove use" is now cited to -25. Table row "Customs can block counterfeit shipments" changed to "Once recorded with CBP, it can stop those imports" (-08 wording).
- GS1: removed "That is the step sellers underestimate" (unsupported generalisation). Decision row for pharma/variable-measure no longer says "use a Company Prefix" (pharma takes a separate NDC prefix row; -09 only says single GTINs are unavailable). Steps row 2 is now cited to -22 instead of overreaching on -18.

## keyFacts / FAQ
- keyFacts on both pages match their claims.
- FAQ questions were checked with Google autocomplete, because faq-bank.json has no trademark or barcode topics. Brand: "how much does it cost to trademark a name" (renamed from "…a brand name"), "…a logo", "how long does it take to get a trademark registered", "do you need a trademark to sell on amazon", "is it necessary to get a trademark" — all present. GS1: "do i need a upc for my product" (renamed from "…upc code for my product"), "how much does a gs1 barcode cost", "when do i need a new upc code", "do i need upc codes to sell online" — all present. Answers match their cited claims.

## Related
- brand-registry-trademark: review-manipulation-risk, us-product-compliance, amazon-referral-fees, gs1-barcodes-fnsku
- gs1-barcodes-fnsku: us-product-compliance, amazon-referral-fees, brand-registry-trademark

## Open item for the editor
A rough word count with components stripped gives about 1,050 words of prose per page. Component text (tables, Steps, Decision) brings this up, but it may still fall near the 1,200-word floor. I did not add content, because that is outside the verifier's role.
