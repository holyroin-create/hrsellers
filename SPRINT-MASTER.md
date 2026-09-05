# FBA Tactics — Sprint Master Document

Cumulative. Each day appends below. Files under `src/` and `public/` drop into the repo at the same paths.

---

## Day 1 — Featured Offer cluster

### Asset 1 · NEWS — `featured-offer-eligibility-gate-removed`

| Field | Value |
| --- | --- |
| Route | `/guides/featured-offer-eligibility-gate-removed/` |
| Category / flag | Scaling · `news: true` |
| Focus keyphrase | Featured Offer eligibility requirements removed |
| Secondary keywords | Amazon Featured Offer 2026 change; Buy Box eligibility; Competitive External Price; Pricing Health ineligible |
| SEO title (58) | Amazon Drops Featured Offer Seller Eligibility: What Changes |
| Meta description (316; site shows full text as standfirst, search truncates) | in frontmatter |
| Read time | 7 min |
| Primary source | Amazon Seller Central, Seller Forums News and Announcements, "Updates to Featured Offer eligibility requirements" (July 6, 2026) — `sellercentral.amazon.com/seller-forums/discussions/t/7336583f-…`; help page referenced: Becoming the Featured Offer, `G201687550` |
| Internal links out | `/guides/buy-box-featured-offer/`, `/guides/cross-channel-price-parity/`, `/guides/pricing-health-featured-offer-fix-order/` |
| Visual | `public/og/g-featured-offer-eligibility-gate-removed.png` (1200×630, site OG template) · `public/covers/g-featured-offer-eligibility-gate-removed.jpg` (1200×514 hero, stock s84) · `<StockImage theme="analytics">` |
| Cover data | `covers.ts` → `ledger`, figure "1 of 2" |
| Policy log | `policy.ts` → entry dated 2026-07-06, status In force |
| Schema | auto: `TechArticle` (Base.astro) + `FAQPage` (Faq.astro) |
| Gate | `node tools/audit-guide.mjs` → 0 errors · `npm run build` → OK |

### Asset 2 · GUIDE — `pricing-health-featured-offer-fix-order`

| Field | Value |
| --- | --- |
| Route | `/guides/pricing-health-featured-offer-fix-order/` |
| Category | Scaling |
| Focus keyphrase | Amazon Pricing Health |
| Secondary keywords | Featured Offer not eligible; Competitive External Price; Automate Pricing Competitive Price Rule; potential pricing error inactive offer |
| SEO title (59) | Amazon Pricing Health: Fix Order for a Lost Featured Offer |
| Meta description (312) | in frontmatter |
| Read time | 10 min |
| Primary sources | sell.amazon.com "Amazon pricing strategies" (Pricing Health tabs, 5% band); sell.amazon.com "Maximize your sales potential with the Amazon Featured Offer" (reference & business prices view, ineligibility reasons); Seller Central announcements "Pricing Health updates" (Competitive Price Rule) and "You can now download your Featured Offer-related pricing opportunities" |
| Internal links out | `/guides/buy-box-featured-offer/`, `/guides/featured-offer-eligibility-gate-removed/`, margin calculator via `<MiniCalc>` |
| Visual | `public/og/g-pricing-health-featured-offer-fix-order.png` · `public/covers/g-pricing-health-featured-offer-fix-order.jpg` (stock s27) · `<StockImage theme="analytics">` |
| Cover data | `covers.ts` → `timeline`, figure "3 rows" |
| Schema | auto: `TechArticle` + `FAQPage` |
| Gate | `node tools/audit-guide.mjs` → 0 errors · `npm run build` → OK |

### Repo changes in this package

```
src/content/guides/featured-offer-eligibility-gate-removed.mdx     NEW
src/content/guides/pricing-health-featured-offer-fix-order.mdx     NEW
src/data/covers.ts                                                 +2 entries (full file)
src/data/policy.ts                                                 +1 entry, 2026-07-06 (full file)
public/og/g-featured-offer-eligibility-gate-removed.png            NEW
public/og/g-pricing-health-featured-offer-fix-order.png            NEW
public/covers/g-featured-offer-eligibility-gate-removed.jpg        NEW
public/covers/g-pricing-health-featured-offer-fix-order.jpg        NEW
```

AUDIT-STATUS.md rows to add:

```
| C | `featured-offer-eligibility-gate-removed` | DONE (Sprint D1) | 0 | 5 | 5 | 0 | evet |
| B | `pricing-health-featured-offer-fix-order` | DONE (Sprint D1) | 0 | 7 | 6 | 0 |  |
```

Follow-up flagged, not executed: `buy-box-featured-offer.mdx` describes seller-level eligibility (lines 84, 107) that the July 2026 change retires. Needs a re-verified `modified` pass (all `accessed` dates must move to ≥ the new modified date), so it is a separate package.
