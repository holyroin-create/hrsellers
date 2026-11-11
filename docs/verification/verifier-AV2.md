# verifier-AV2: ai-knowledge-cutoff-tariffs (2026-11-11)

All 39 sources were re-fetched on 2026-11-11. Claim 24 was read through its fetched_via full_text URL.

Counts: 39 verified (1 of them corrected), 0 rejected.

## Correction
- **24**: the notice's sentence goes on: "except as provided in Annex I and Annex II, Part A, of this Notice." I added this exception to the claim and evidence. On the page, the keyFact, summary bullet 3, intro, Timeline item for 2026-07-24 and FAQ answer now say "with listed exceptions".

## Page wording fixes (claims were already correct)
- **16** (Timeline 2026-02-20): EO 14389 gives no effective date, only "as soon as practicable". The item now reads "IEEPA duties ordered ended" and says the order was signed on this date.
- **19** (Timeline 2026-07-24): the item now says "ran through 12:01 a.m. EDT on this date", as the proclamation does. The tariff start time is now 12:01 a.m. eastern time, per claim 25.
- **18** (Timeline 2026-02-24): added "on goods entered on or after this date".
- **09** (Gemini): the source shows "Latest update: June 2025" and points new projects to newer models. The intro now also says the newer Gemini 4 Argon page lists no cutoff (cited with claim 10, which was already cited), so 2.5 Flash is not read as Google's current flagship.

## Other checks
- Timeline dates: all 11 match their Federal Register or USITC documents. The page now states which type of date each one is:
  - signing: 02-20
  - effective or entry date: 08-29, 12-23, 02-24, 04-06, 06-24, 07-24, 10-01
  - publication: 10-07, 11-10
  - expiry: 11-09
- Hypothetical worked example recomputed and correct:
  - base duty: $10,000 × 4% = $400 ($0.40 per unit)
  - with the additional duty: $10,000 × 29% = $2,900 ($2.90 per unit)
  - difference: $2,500 ($2.50 per unit)
- Each provider is cited only for facts about its own models.
- Every cited ID exists and is verified, and every claim is cited.
- Frontmatter limits hold: title 57 characters, description 152, 4 keyFacts, 5 summary bullets. The body is well over 1,200 words.
- The register passes JSON.parse, and gate-claims reports no errors for this slug.
