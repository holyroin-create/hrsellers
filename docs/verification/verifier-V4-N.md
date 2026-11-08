# verifier-V4-N — 2026-11-08

Every source was re-fetched this session with WebFetch (curl to ecfr.gov is blocked by the proxy). Hosts: ecfr.gov (46 CFR 515, 541; 19 CFR 111 subpart A, 122 subpart E, 123, 149, 177, 351 subpart B with offsets), fmc.gov, www2.fmc.gov/oti, trade.gov, usitc.gov (HTSUS 2004 General Notes PDF in the HTS archive; HTS FAQ page), sell.amazon.com (/fulfillment-by-amazon incl. #fba-costs section, /programs/supply-chain, /programs/amazon-global-logistics, /learn/inventory-management, /learn/ecommerce-fulfillment), developer-docs.amazon (report-type-values-fba with offset, fulfillment-inbound v2024-03-20 use-case guide).

| page | claims checked | verified as drafted | corrected | rejected | body words | draft? |
|---|---|---|---|---|---|---|
| guides/choosing-a-freight-forwarder | 42 | 39 | 3 | 0 | ~1068 | no |
| guides/freight-modes | 24 | 21 | 3 | 0 | ~892 | no |
| guides/q4-freight-booking-window | 28 | 25 | 3 | 0 | ~842 | no |
| guides/demand-forecasting-reorder | 27 | 25 | 2 | 0 | ~915 | no |
| guides/tariff-engineering-design | 34 | 27 | 7 | 0 | ~955 | no |

No claims were rejected.

## Corrections
- choosing-a-freight-forwarder-22: the full text of 46 CFR 515.41(a) also bars sharing with sellers, purchasers, their agents, affiliates or employees, anyone advancing the purchase price or guaranteeing payment, and anyone with a beneficial interest in the shipment. The claim, body and summary were completed.
- choosing-a-freight-forwarder-15: the 45-day route under 515.23(b)(1)(ii) also requires that the provider deems the claim valid.
- choosing-a-freight-forwarder-25: the customs-business definition is broader (it adds classification, valuation and duties). The page now says "includes".
- freight-modes-08: the 122.48a(b)(1) nearby-origin list is Mexico, Central America, South America north of the Equator, the Caribbean and Bermuda. The summary, body and Compare were fixed.
- freight-modes-10: the CBP-approved system governs authorization of a lesser time. It does not decide between 30 minutes and 1 hour.
- freight-modes-04: added "as early as possible" (149.2(b)(3)).
- q4-freight-booking-window-09 and demand-forecasting-reorder-25: "never have to worry about FBA capacity limits or low-inventory charges" is not on /programs/supply-chain. Both claims were rewritten to the current wording: replenishments are managed so you "don't have to worry about FBA capacity limits", and when the feature is left defaulted there is a waiver of storage-utilization surcharges and low-inventory-level costs.
- demand-forecasting-reorder-26: the evidence was replaced with the current wording ("periodically monitors the inventory levels in Prime-ready fulfillment centers").
- q4-freight-booking-window-22: the seven-business-day contact follows submission of the AGL inquiry form.
- q4-freight-booking-window-05: the evidence was replaced with verbatim text. Claims 01–04 and 06 were confirmed in the #fba-costs section of the same page, and fetched_via was added.
- tariff-engineering-design-29: the full 351.226(j) list is "including, but not limited to". It adds "the use of the merchandise" and lets Commerce consider the timing and quantity of entries.
- tariff-engineering-design-31: added that the cash deposits apply to unliquidated entries and that earlier entries can be reached in some cases.
- tariff-engineering-design-19: the five-item limit applies to individual requests submitted to service port offices. The key fact, step and FAQ were narrowed.
- tariff-engineering-design-16/17: added the "whenever germane" qualifier. tariff-engineering-design-09: added "(other than actual use)".
- tariff-engineering-design: the page now names the source edition, Harmonized Tariff Schedule of the United States (2004) General Notes in USITC's archive. It contains no duty-evasion advice and points to 19 CFR Part 177 binding rulings.
- Unsourced text was removed or neutralized:
  - The inference about the NVOCC role for inbound bookings.
  - "FMC license does not apply" (air).
  - "No such fund to claim against".
  - "Container overstay charges are where invoices get disputed".
  - "Port congestion is when detention bills multiply".
  - "Single point of failure".
  - Invented descriptions of the Inventory Health fields.
  - "Most sellers get wrong".
  - The JIT suitability claim.
  - "The Restock report does not know your MOQ or cash position".
  - The Ledger "movements" table cell.
  - "Traps more often than tools", "Material changes are the more reliable lever" and "Research before filing is cheap".
  - The country-of-origin statement.
  - "AWD is Amazon's answer…" and "the cost of a second internal move".
- Worked-example arithmetic was rechecked on all five pages and is correct. All examples are labelled hypothetical.
