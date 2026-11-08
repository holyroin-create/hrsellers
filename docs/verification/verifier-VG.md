# verifier-VG — verification report (2026-11-08)

Scope: guides `accrual-accounting-cogs`, `form-1099-k-marketplace-sellers`, `sales-tax-nexus` and their `data/claims/*.json`.
Method: re-fetched every source via WebFetch (long IRS pages read in offset chunks), asked for verbatim passages, compared numbers, scope, conditions and dates. No new claim objects created. Build (`ALLOW_UNVERIFIED=1 ALLOW_PLACEHOLDERS=1 npx astro build`) completes: 63 pages, no MDX errors.

## Counts

| Page | Checked | Verified as drafted | Corrected in place | Rejected |
|---|---|---|---|---|
| accrual-accounting-cogs | 32 | 30 | 2 (-11, -13) | 0 |
| form-1099-k-marketplace-sellers | 28 | 27 | 1 (-05) | 0 |
| sales-tax-nexus | 26 | 21 | 5 (-03, -04, -06, -15, -16) | 0 |
| **Total** | **86** | **78** | **8** | **0** |

All 86 claims are now `status: "verified"`, `verified_by: "verifier-VG"`. Corrected claims carry a `verifier_note`.

## Sources re-fetched
irs.gov/publications/p334 (2025, "For use in preparing 2025 Returns"); irs.gov/publications/p538 ("Revised: January 2022"); irs.gov/instructions/i1040sc (2025); irs.gov/businesses/understanding-your-form-1099-k (last reviewed 28-Oct-2026); irs.gov/newsroom/form-1099-k-faqs-general-information (last reviewed 03-Apr-2026); irs.gov/forms-pubs/about-form-1099-k; irs.gov/instructions/i1099k (Rev. 12/2026); irs.gov/businesses/what-to-do-with-form-1099-k; cdtfa.ca.gov wayfair.htm and L-694; comptroller.texas.gov remote-sellers; floridarevenue.com DR-1MP (R. 01/22); tax.illinois.gov ROT page and Bulletin FY 2026-12; dor.wa.gov remote-sellers and marketplace-sellers.

## Writer-flagged items
- **cogs-26 / cogs-27 (FIFO/LIFO endings):** Pub 538 sentences end "...are the first items you sold, consumed, or otherwise disposed of." Verified as drafted.
- **cogs-13 (line 39):** Drafted claim truncated the freight-in sentence. Pub 334 reads "Freight-in, express-in, and cartage-in on raw materials, supplies you use in production, and merchandise purchased for sale..."; containers are "Containers and packages that are an integral part of the product manufactured"; "insurance" is in the overhead list. Claim corrected; table row, FAQ and line-74 sentence updated ("only when" → "when", which is all the source says).
- **sales-tax-nexus-01:** CDTFA: "during the preceding or current calendar year, the total combined sales of tangible personal property for delivery in California by the retailer and all persons related to the retailer exceed $500,000." Verified.
- **Illinois 200-transaction test:** Bulletin FY 2026-12 (December 2025, Public Act 104-0006): "Effective January 1, 2026, The 200-transaction threshold ... will be removed" / "The 200-transaction threshold no longer applies." The main ROT page (no update date shown) **still lists** "$100,000 or more ... or 200 or more separate transactions." Page now states both, dated: table, timeline, a new paragraph under the timeline, the mistakes table, the FAQ and summary attribute the change to the bulletin. Claims -15 and -16 corrected to carry this.
- **Form 1099-K threshold:** Understanding page: "exceeds $20,000 in more than 200 transactions" (no year). FAQ: "The One, Big, Beautiful Bill retroactively reinstated the reporting threshold in effect prior to the passage of the American Rescue Plan Act of 2021 (ARPA) so that third party settlement organizations are not required to file Forms 1099-K unless the gross amount of reportable payment transactions to a payee exceeds $20,000 and the number of transactions exceeds 200." **No IRS page fetched names the tax years it applies to.** About page: 17-NOV-2025 entry "...dollar limit reverts to $20,000". i1099k (12/2026) also states the $20,000/200 test without a year. Page now says no specific tax year is attached; the unsupported "IRS FAQs updated in October 2025" wording and the year-specific FAQ questions were removed.
- **Pub 538 $26 million:** Framed as the figure "from that older revision" (Revised January 2022), with the current $31 million taken from Pub 334 (2025) and the 2025 Schedule C instructions.

## Other corrections
- cogs-11: added Pub 334's "Labor costs are usually an element of cost of goods sold only in a manufacturing or mining business" so the "framed around manufacturing" sentence is sourced; table row changed from "Labor in producing goods".
- cogs line 38: "which is why the dollar amount changes" (inference) removed; "indexed for inflation" sentence now cited (-03, -31).
- 1099-05: extended to the full FAQ sentence (both conditions); now cites the "both conditions" sentence and the no-year statement.
- 1099 Decision row: removed "so it isn't taxed as income" (not in the source).
- sales-tax-nexus-03: L-694 sentence continues "for purposes of determining whether" the facilitator must register with CDTFA, so it is scoped to registration. Statements about who pays or collects tax on facilitated sales (summary, table, Compare row, FAQ) now rely on -04.
- sales-tax-nexus-04: reworded to the actual L-694 text ("Beginning October 1, 2019, a marketplace facilitator is generally required to pay sales tax or collect and pay use tax..."); timeline item renamed.
- sales-tax-nexus-06: added "including sales it facilitates ... for marketplace sellers" per L-694; it now also cites the uncited "facilitators measure nexus too" sentence (with -13).

## FAQ questions
`research/faq-bank.json` has COGS questions but none for Form 1099-K or sales tax nexus; for those I used real autocomplete strings from `research/suggest-raw.json`.
- COGS: "Do I have to track inventory for taxes?" (not in bank) → "Does inventory become cost of goods sold?" (bank); "Is freight included in cost of goods sold?" → "Does cost of goods sold include shipping?" (bank). The other two were already in the bank.
- 1099-K: "...threshold for 2026?" / "...for 2025?" merged into "What is the 1099-K threshold?" (the IRS states no year); added "Does Amazon issue 1099 to sellers?" (suggest-raw), answered only from IRS online-marketplace rules. "What is the 1099-K form used for?" and "Do I have to report 1099-K income from eBay sales?" are not in any research file; kept because no backed alternative exists. Flagged for editor.
- Sales tax: "Do I need to collect sales tax for out of state sales?" and "...for selling online?" (not in any research file) → "How does sales tax nexus work?" and "What is the Illinois sales tax nexus threshold?" (suggest-raw); "Does Amazon collect sales tax for sellers?" kept (suggest-raw), with the answer no longer naming Amazon practice.

## Arithmetic
- COGS worked example: 40,000−300=39,700; 8,000+39,700+2,500=50,200; 50,200−10,500=39,700; 95,000−4,000=91,000; 91,000−39,700=51,300. Correct.
- 1099-K example: 26,000/340 meets both tests; 24,000/150 fails the transaction test. Correct.
- WA example: 45,000+70,000=115,000 > 100,000; TX 300,000 < 500,000. Correct.

## Experience claims / uncited facts
No experience, testing, client or interview claims found. The remaining uncited sentences are framing or advice only (for example "Run the numbers by state, by channel, and in total").
