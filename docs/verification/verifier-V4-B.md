# verifier-V4-B — 2026-11-08

Pages: guides/fba-fuel-logistics-surcharge-2026, guides/holiday-peak-fulfilment-fee, guides/peak-surcharge-2026-schedule, guides/peak-season-cost-stack, guides/returns-cost-and-badge.

| page | claims checked | verified as drafted | corrected | rejected | body words | draft? |
|---|---|---|---|---|---|---|
| fba-fuel-logistics-surcharge-2026 | 20 | 18 | 2 (01, 05) + notes on 06, 20 | 0 | ~892 | no |
| holiday-peak-fulfilment-fee | 23 | 20 | 3 (03, 04, 17) + notes on 01, 07, 10 | 0 | ~939 | no |
| peak-surcharge-2026-schedule | 19 | 16 | 3 (06, 12, 19) + note on 04 | 0 | ~757 | no |
| peak-season-cost-stack | 19 | 17 | 2 (07, 08) + notes on 01, 05, 06 | 0 | ~926 | no |
| returns-cost-and-badge | 23 | 23 | 0 (note on 06) | 0 | ~730 | no |

Sources re-fetched with WebFetch: supplychain.amazon.com (/mcf/pricing, /docs/2026-peak-card, /docs/rate-card, /pricing/fees-policy), sell.amazon.com (/fulfillment-by-amazon, /programs/warehousing, /blog/fba-new-selection-program), aboutamazon.com (2022 fee update; returns article), sellingpartners.aboutamazon.com (2026 and Dec 2023 fee updates), developer-docs.amazon (FBA and returns report types).

Key findings:
- supplychain.amazon.com/mcf/pricing no longer contains the 3.5% surcharge sentence, the "Holiday peak fulfillment fees apply October 15, 2026–January 14, 2027" banner, or "the 3.5% surcharge applied on top" (it now announces 2027 fee changes). All claims on those were re-sourced to /docs/2026-peak-card (tables headed "Peak fulfillment fees", "Effective October 15, 2026-January 14, 2027"; "a 3.5% fuel and logistics-related surcharge will be applied to MCF fulfillment fees in the US").
- No Amazon page says the 3.5% is added on top of listed peak rates. Every "on top" statement was removed; claims fuel-05, holiday-04, schedule-12, cost-stack-08 were rewritten to what the card says (surcharge applies to MCF fulfillment fees; card silent on whether peak rates include it). Worked examples keep the 3.5% only as an explicit labelled assumption.
- Peak card price columns are headed "1 2 3 4+" without a label; pages now say so and read them as units per order with the /mcf/pricing basis cited.
- holiday-17: page says "weights and dimensions", not "price, weight, and dimensions".
- Storage figures are now attributed to Amazon's MCF rate card (with the cited statement that MCF non-fulfillment fees equal FBA's where used).
- Titles/descriptions narrowed to MCF and "published" scope; removed "Every" overpromises and descriptions over 158 chars.
- Removed unsupported/filler text: "replacement rate, not a separate line", "the only peak card Amazon publishes outside Seller Central", "sellers stock up early", carrier all-in-cost paragraph, "bigger loss is often the unit", FBA-vs-MCF surcharge comparison sentence, "alongside apparel and shoes" (source says excluding).
- Arithmetic in all worked examples recomputed; all correct.
- FAQ questions all found in research/suggest-v4-writer-W-B.jsonl.
