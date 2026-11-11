# verifier-AV1: ai-models-for-sellers-2026 (2026-11-11)

All 44 source URLs were fetched again today with WebFetch, and every claim was checked against the verbatim passage.

**Counts:** 44 verified (2 of them corrected), 0 rejected.

## Corrections (claim text and page text)
- **-24:** The OpenAI web search guide also says "By default, the model's response will include inline citations for URLs found in the web search results." The page's callout says citations are inline by default, so that sentence was added to the claim and its evidence.
- **-44:** The Amazon sentence continues "...with all applicable laws and Amazon policies, including but not limited to our Program Policies." "and Amazon policies" was added to the claim and to the page sentence. The lead-in "The same responsibility applies as with any outside model" was editorial, so it was rewritten as "Amazon attaches a condition:".

## Notes only (claim stands as written)
- **-34:** The evidence string was cut off. Today's fetch confirms the full sentence includes "native visual understanding".
- **-22:** The evidence string showed only the Terra row. Today's fetch confirms the gpt-6-luna row reads $0.10 / $0.50.
- **-07:** The Haiku row for prompts over 100K tokens ($0.50 / $2.50) is confirmed.
- **-37 / -41:** The Kimi pricing tables are still empty when fetched. Only the context-window sentence and the batch sentence are used.
- **Google pricing page:** Both parts were read (offset 0 and offset 100000). Neither has a Gemini 4 Argon section or a Gemini 3.8 Flash section.

## Page fixes (no claim change)
- **Compare and Decision rows:** Each row now cites every provider's own claim through `claims:[...]`. Before, several rows had a single claim from another provider; for example, the "Other current models" row cited OpenAI claim -14 for every column.
- **ChatGPT scope:** The page now states that "ChatGPT" in the title only names OpenAI's GPT models, that all OpenAI facts come from the API docs, and that ChatGPT app plans are not covered.
- **Gemini 3.5 Flash prices:** The price-table cell and the paragraph below the table now say these rates belong to a different model and must not be read as Gemini 4 Argon or Gemini 3.8 Flash prices.
- **Batch row:**
  - OpenAI cell now reads "No discount stated in the pricing page text checked". The page has Batch tabs but no stated discount.
  - Google cell now reads "No Gemini 4 Argon price on the pricing page checked".
- **Overstatements softened:**
  - Summary bullet on search: the old "only knows ... if it uses a search tool" now says the model has no built-in knowledge after its cutoff.
  - Body text: "Without a search tool" became "Without a search tool or a source you supply".
  - Max-output bullet: now reads "Claude and the OpenAI models checked".
  - Summary bullet 1: now separates the two models the providers suggest starting with from the two models that are only "listed as flagship", so it implies no ranking.
  - Amazon row in the Decision block: "inside your selling account" was not in any claim and was removed.
- **Ranking check:** No sentence ranks the providers. The only quality wording is the provider's own description, labeled as such: Moonshot's "same intelligence" for the high-speed variant, and Google's "flagship reasoning model".
- **Worked example:** The arithmetic is correct ($9.00 / $4.50 / $0.45). Output is one fifth of the tokens and $5 of the $9.

## Checks
- **Frontmatter:** title is 58 characters, description 151, keyFacts 4, summary 5, and the FAQ is empty.
- **Word count:** about 1,510 words of prose, or about 2,197 counting tables and components. That is at least 1,200 and no more than 2,200.
- **Register:** parses as valid JSON. Every cited id exists and is verified, and every verified id is cited.
- **Gate:** `node tools/gate-claims.mjs` reports no error for this slug. Its remaining errors belong to other pages.
