/**
 * Software pricing reference.
 *
 * These are NOT hands-on reviews. No tool here has been purchased or tested by
 * this site. Every figure is what a named source published, with the date it was
 * checked. Vendor pricing changes without notice and published third-party
 * figures go stale fast — several entries below carry a `contested` block
 * because sources dated within months of each other disagree outright.
 *
 * When a tool is actually bought and tested, it gets a separate scored review
 * under the published rubric. Until then, this file records what is claimed.
 */

export type PriceRow = { k: string; v: string; note?: string };

export type Tool = {
  slug: string;
  name: string;
  category: string;
  vendor: string;
  url: string;
  checked: string;
  oneLiner: string;
  lede: string;
  job: string;
  pricing: PriceRow[];
  contested?: { claim: string; detail: string }[];
  fits: string[];
  againstIt: string[];
  relatedGuides: { label: string; href: string }[];
  sources: { title: string; publisher: string; href: string; accessed: string }[];
};

const A = '2026-08-08';

export const TOOLS: Tool[] = [
  {
    slug: 'helium-10',
    name: 'Helium 10',
    category: 'Research suite',
    vendor: 'Helium 10',
    url: 'https://www.helium10.com',
    checked: A,
    oneLiner: 'The largest seller suite, and the one whose published price you are most likely to have wrong.',
    lede: 'Six sources give six different entry prices for the same product. The reason is not carelessness: the cheap Starter plan was retired in 2026 and the surviving entry tier costs different amounts monthly and annually. Anything quoting $39 is describing a plan new subscribers can no longer buy.',
    job: 'Product research, keyword research, listing optimisation, PPC management, inventory tracking and refund recovery in one subscription. Reporting describes 20 to 30+ integrated tools, with 2026 additions covering Walmart and TikTok Shop.',
    pricing: [
      { k: 'Free plan', v: 'Available, limited', note: 'Reported as locking out core tools including Cerebro, Magnet and Adtomic' },
      { k: 'Platinum (entry paid)', v: '$129 / month, or $99 annual', note: 'Sources give both; the difference is billing term' },
      { k: 'Diamond', v: '$279 / month', note: 'One source specifies this as the annual rate' },
      { k: 'Enterprise', v: 'Custom pricing', note: 'One source quotes "from $500/month" for a top tier' },
      { k: 'Starter', v: 'Retired in 2026', note: 'Formerly $39\u2013$49; no longer available to new subscribers' },
      { k: 'Annual discount', v: 'Reported 16%\u201320%', note: '' },
      { k: 'Refund recovery fee', v: '15% of recovered refunds', note: 'Managed Refund Service, reported as available in Platinum' },
      { k: 'Trial', v: '7-day free trial + 7-day money-back', note: '' },
    ],
    contested: [
      { claim: 'Entry price', detail: 'Quoted as $39 (retired Starter, still listed on comparison sites), $99 (Platinum annual) and $129 (Platinum monthly) across sources published within months of each other. Capterra still shows $39 as the starting price.' },
      { claim: 'Top-tier price', detail: 'Diamond is given as $279/month by two sources. Helium 10\u2019s own comparison page quotes "starting at $500/month" for a tier, which does not map cleanly onto the published Diamond figure.' },
    ],
    fits: [
      'Sellers who want keyword depth and PPC automation in the same place',
      'Anyone selling across Amazon, Walmart and TikTok Shop who wants one research tool',
      'Sellers far enough along that a three-figure monthly subscription is a rounding error',
    ],
    againstIt: [
      'New sellers, now that the cheap entry plan is gone',
      'Anyone who needs one job done rather than thirty',
      'Sellers sensitive to price increases \u2014 one source cut its own rating over 2026 increases and support complaints',
    ],
    relatedGuides: [
      { label: 'The 2026 fee changes', href: '/guides/amazon-fba-fee-changes-2026/' },
      { label: 'Price bands and repricing', href: '/guides/price-tier-repricing-trap/' },
    ],
    sources: [
      { title: 'Helium 10 pricing 2026: plans, costs and alternatives', publisher: 'SellerSprite', href: 'https://www.sellersprite.com/en/blog/helium-10-pricing-2026-guide', accessed: A },
      { title: 'Helium 10 pricing (2026): new plans and cost breakdown', publisher: 'Enjoy AIIA', href: 'https://enjoy-aiia.com/helium-10-pricing/', accessed: A },
      { title: 'Helium 10 vs Jungle Scout (2026)', publisher: 'SmartScout', href: 'https://www.smartscout.com/blog/helium-10-vs-jungle-scout', accessed: A },
      { title: 'Helium 10 vs Jungle Scout: which is best in 2026?', publisher: 'The Selling Guys', href: 'https://www.thesellingguys.com/helium-10-vs-jungle-scout/', accessed: A },
      { title: 'Helium 10 vs Jungle Scout full comparison', publisher: 'Helium 10', href: 'https://www.helium10.com/competitors/helium-10-vs-jungle-scout-comparison/', accessed: A },
    ],
  },

  {
    slug: 'jungle-scout',
    name: 'Jungle Scout',
    category: 'Research suite',
    vendor: 'Jungle Scout',
    url: 'https://www.junglescout.com',
    checked: A,
    oneLiner: 'The softer landing of the two big suites, and cheaper at the tiers most sellers actually buy.',
    lede: 'Consistently described as easier to learn than Helium 10 and cheaper at the middle and top tiers. The trade is depth: reporting describes its product discovery as using keyword demand where Helium 10 pulls from Amazon Brand Analytics, which is a shallower signal.',
    job: 'Product research, supplier sourcing, review analysis and rank tracking, with a Chrome extension and an opportunity finder as the headline tools.',
    pricing: [
      { k: 'Entry (annual)', v: 'From $29 / month', note: 'One source; Capterra also lists $29 as the starting price' },
      { k: 'Basic / Starter', v: '$49 / month, or $348 annually', note: 'Reported by two sources' },
      { k: 'Growth Accelerator', v: '$79 / month', note: 'Described as the most popular option; tracks 150 products with 12 months of keyword data' },
      { k: 'Discounted Growth Accelerator', v: '$34 / month reported', note: 'One source logged a change from $39 to $34 with a discount applied' },
      { k: 'Free trial', v: 'None', note: 'Reported as offering a 7-day money-back guarantee instead' },
      { k: 'Marketplaces', v: '17 supported, full features in 8', note: 'Against Helium 10 at 21 and 10 respectively' },
    ],
    contested: [
      { claim: 'Entry price', detail: 'Given as $29 (annual), $34 (discounted), $39 (pre-discount) and $49 (monthly Basic) across sources. Billing term and active promotions explain most of it \u2014 which is why a quoted figure without a date and a billing term is not usable.' },
    ],
    fits: [
      'Beginners \u2014 described consistently as the easier of the two to learn',
      'Sellers who want supplier sourcing in the same tool as product research',
      'Anyone whose needs stop short of PPC automation and enterprise keyword work',
    ],
    againstIt: [
      'Deep keyword clustering, where reporting says the data signal is shallower',
      'Sellers needing search query performance data, which reporting places behind an enterprise plan here',
      'Anyone wanting a free tier to test with \u2014 there is not one',
    ],
    relatedGuides: [
      { label: 'Product research', href: '/guides/product-research-cost-errors/' },
      { label: 'Supplier verification', href: '/guides/supplier-verification/' },
    ],
    sources: [
      { title: 'Helium 10 vs Jungle Scout (2026) \u2014 tested with real data', publisher: 'SmartScout', href: 'https://www.smartscout.com/blog/helium-10-vs-jungle-scout', accessed: A },
      { title: 'Helium 10 vs Jungle Scout: which is better in 2026?', publisher: 'RevenueGeeks', href: 'https://revenuegeeks.com/compare/helium10-vs-jungle-scout', accessed: A },
      { title: 'Helium 10 vs Jungle Scout: which is best in 2026?', publisher: 'The Selling Guys', href: 'https://www.thesellingguys.com/helium-10-vs-jungle-scout/', accessed: A },
      { title: 'Compare Helium 10 vs Jungle Scout 2026', publisher: 'Capterra', href: 'https://www.capterra.com/compare/193503-249574/Helium10-vs-Jungle-Scout', accessed: A },
    ],
  },

  {
    slug: 'amzscout',
    name: 'AMZScout',
    category: 'Research',
    vendor: 'AMZScout',
    url: 'https://amzscout.net',
    checked: A,
    oneLiner: 'One plan, three billing terms, and roughly a third of what the big suites cost.',
    lede: 'The pricing is unusually simple by the standards of this category \u2014 a single bundle billed monthly, quarterly or yearly, with the same core tools on every term. What changes is the effective monthly rate, which reporting puts between $26.66 and $59.99 depending on how far ahead you pay.',
    job: 'Product research against a reported database of over 550 million products, a Chrome extension for on-page analysis, and keyword tools. Reporting names 14 supported Amazon marketplaces.',
    pricing: [
      { k: 'Monthly', v: '$59.99 / month', note: 'Full AI Bundle, no commitment' },
      { k: '3 months', v: '$169.99', note: 'Roughly $56.66 / month' },
      { k: 'Yearly', v: '$399.99', note: 'Reported as including 3 extra months, giving ~$26.66 over 15 months' },
      { k: 'Effective annual rate', v: '$33.33 / month', note: 'One source\u2019s figure for 12 months paid upfront' },
      { k: 'Lifetime', v: '$1,599.99 one-off', note: 'Reported by one source' },
      { k: 'Add-ons', v: '$99.99 / year each', note: 'Private Label Pack and Reselling Pack' },
      { k: 'Guarantee', v: '10-day money-back', note: '' },
    ],
    contested: [
      { claim: 'Effective annual monthly rate', detail: 'Given as $26.66 (spreading $399.99 over 15 months including bonus months) and $33.33 (over 12 months). Both are arithmetically defensible from the same headline price \u2014 which is a good illustration of why "from $X/month" is a marketing number rather than a cost.' },
    ],
    fits: [
      'Beginners and budget-conscious sellers who need product research and not a suite',
      'Sellers who want a Chrome extension for on-page analysis without a three-figure subscription',
      'Anyone testing whether paid research data changes their decisions before committing to Helium 10 or Jungle Scout',
    ],
    againstIt: [
      'Keyword depth \u2014 reporting positions it as a research tool rather than a keyword platform',
      'PPC management and operations, which are not what it does',
      'Sellers who want month-to-month flexibility at the advertised rate; the low figures require paying a year ahead',
    ],
    relatedGuides: [
      { label: 'Product research', href: '/guides/product-research-cost-errors/' },
      { label: 'Landed cost', href: '/guides/landed-cost-fee-stack/' },
    ],
    sources: [
      { title: 'AMZScout pricing plans 2026 \u2014 what you get and what it costs', publisher: 'RevenueGeeks', href: 'https://revenuegeeks.com/amzscout-pricing/', accessed: A },
      { title: 'AMZScout pricing guide 2026', publisher: 'AMZ Ninja', href: 'https://amz.ninja/amzscout-pricing/', accessed: A },
      { title: 'AMZScout alternatives in 2026', publisher: 'Scribe', href: 'https://scribehow.com/page/AMZScout_Alternatives_in_2026_6_Tools_That_Can_Replace_or_Beat_It__U5Mip9JlQM-5OIr2P8knYA', accessed: A },
    ],
  },

  {
    slug: 'zonguru',
    name: 'ZonGuru',
    category: 'Research suite',
    vendor: 'ZonGuru',
    url: 'https://www.zonguru.com',
    checked: A,
    oneLiner: 'Two plans, and the second one is priced by how many SKUs you actually sell.',
    lede: 'Most tools in this category charge by feature tier. ZonGuru charges the research plan by feature and the seller plan by SKU count \u2014 which means the price you were quoted describes a catalogue size rather than a subscription, and it moves as you grow.',
    job: 'Product research (Niche Finder), keyword research (Keywords on Fire), listing optimisation, rank tracking, competitor monitoring and review sentiment analysis. Reporting singles out the Love-Hate tool, which analyses competitor reviews at scale to surface recurring complaints.',
    pricing: [
      { k: 'Researcher', v: '$49 / month, or $348 annually', note: 'Product research and listing tools' },
      { k: 'Seller', v: 'From $79 / month', note: 'Adds dashboards, monitoring and customer messaging' },
      { k: 'Seller, SKU banding', v: '$79 \u2192 $159 at 21 SKUs', note: 'Reported as jumping in wide bands' },
      { k: 'Top of published range', v: 'Up to $249 / month', note: 'One source' },
      { k: 'Chrome Extension only', v: '$15 / month', note: 'Standalone' },
      { k: 'Keywords on Fire only', v: '$19 / month', note: 'Standalone' },
      { k: 'Annual discount', v: 'Up to 40%', note: 'One source reports Researcher at $29/month on annual billing' },
      { k: 'Trial', v: '7-day free trial', note: 'Full refund within 7 days, prorated to 30' },
    ],
    contested: [
      { claim: 'Researcher annual rate', detail: 'One source gives $29/month on annual billing and another gives $348 per year (which is $29/month). A third describes annual savings of "up to 40%", which does not reconcile with $49 to $29 \u2014 that is 41%. Close enough to be arithmetic rather than a discrepancy, but check the current offer.' },
    ],
    fits: [
      'Sellers who want review sentiment analysis as a product development input',
      'Small catalogues, where SKU-banded pricing works in your favour',
      'Anyone who finds the big suites cluttered \u2014 reporting describes the interface as cleaner than Helium 10',
    ],
    againstIt: [
      'Catalogues near a SKU band boundary, where one new product raises the bill by $80',
      'Sellers wanting a middle tier \u2014 reporting notes there is nothing between Researcher and Seller',
      'Anyone who needs longer than a week to evaluate a tool properly',
    ],
    relatedGuides: [
      { label: 'Returns and the FR badge', href: '/guides/returns-cost-and-badge/' },
      { label: 'Product research', href: '/guides/product-research-cost-errors/' },
    ],
    sources: [
      { title: 'ZonGuru pricing 2026: plans, costs and which to pick', publisher: 'RevenueGeeks', href: 'https://revenuegeeks.com/software/zonguru/pricing', accessed: A },
      { title: 'ZonGuru pricing plans 2026', publisher: 'AMZ Ninja', href: 'https://amz.ninja/zonguru-pricing-plans/', accessed: A },
      { title: 'ZonGuru pricing: plans and standalone tools', publisher: 'AffMaven', href: 'https://affmaven.com/zonguru-pricing/', accessed: A },
    ],
  },

  {
    slug: 'keepa',
    name: 'Keepa',
    category: 'Price history',
    vendor: 'Keepa',
    url: 'https://keepa.com',
    checked: A,
    oneLiner: 'One paid tier, priced in euros, and the clearest example on this site of a stale figure outliving the fact.',
    lede: 'Keepa sells exactly one paid plan. That has not stopped published sources from listing two tiers at $99 and $199 a month \u2014 figures traceable to a page whose own disclaimer says the pricing was last updated in 2019. The current figure is in euros and is a fraction of that.',
    job: 'Price, sales rank and Buy Box history across Amazon marketplaces, with a Product Finder offering 50+ filter criteria. Described as a historical truth layer for a listing rather than an operating suite.',
    pricing: [
      { k: 'Free plan', v: '\u20ac0, no time limit', note: 'Charts, alerts and on-page tracking; no Product Finder or interactive graphs' },
      { k: 'Keepa Pro (Premium)', v: '\u20ac29 / month, or \u20ac290 / year', note: 'Two 2026 sources; one gives \u20ac19/month and \u20ac189/year' },
      { k: 'Annual saving', v: '17%', note: 'Publisher-verified figure' },
      { k: 'API access', v: 'From \u20ac49 / month', note: 'Sold separately, on a token system' },
      { k: 'Trial', v: 'No free trial', note: 'The free plan is permanent instead' },
      { k: 'Quota', v: 'Paid quota replenishes 5% per hour', note: 'Usage is metered rather than unlimited' },
    ],
    contested: [
      { claim: 'The price itself', detail: 'One software directory lists Basic at $99/month and Standard at $199/month. That same page carries a disclaimer stating the pricing was last updated from the vendor site in 2019. Two 2026 sources give \u20ac29/month for a single tier; a third, which states it verified on 18 June 2026, gives \u20ac19/month. The lesson is not which is right \u2014 it is that a directory listing is not a source.' },
      { claim: 'Number of plans', detail: 'Sources variously describe one paid tier, two tiers and three plans. One is explicit that Keepa Premium and Keepa Pro are the same single subscription under two names, and that any review quoting a different Premium price is outdated.' },
    ],
    fits: [
      'Anyone whose sourcing decisions turn on price and rank history',
      'Arbitrage and wholesale buyers checking whether a price is normal or a blip',
      'Sellers monitoring Buy Box ownership over time on listings they share',
    ],
    againstIt: [
      'Keyword research, listing SEO and PPC \u2014 none of which it does',
      'Sellers who want a full operating suite rather than a specific instrument',
      'Anyone who dislikes quota systems; usage is metered by design',
    ],
    relatedGuides: [
      { label: 'Buy Box and Featured Offer', href: '/guides/buy-box-featured-offer/' },
      { label: 'Price bands and repricing', href: '/guides/price-tier-repricing-trap/' },
    ],
    sources: [
      { title: 'Keepa pricing 2026: is Premium worth \u20ac29 a month?', publisher: 'RevenueGeeks', href: 'https://revenuegeeks.com/software/keepa/pricing', accessed: A },
      { title: 'Keepa review 2026', publisher: 'RevenueGeeks', href: 'https://revenuegeeks.com/software/keepa', accessed: A },
      { title: 'Keepa pricing (2026): plans, free tier and compliance (verified 2026-06-18)', publisher: 'The Front Desk Review', href: 'https://frontdeskreview.com/software/amazon-seller-tools/keepa/', accessed: A },
      { title: 'Keepa pricing and plans (August 2026) \u2014 listing carries a 2019 pricing disclaimer', publisher: 'SaaSworthy', href: 'https://www.saasworthy.com/product/keepa-dev/pricing', accessed: A },
    ],
  },

  {
    slug: 'a2x',
    name: 'A2X',
    category: 'Accounting',
    vendor: 'A2X',
    url: 'https://www.a2xaccounting.com',
    checked: A,
    oneLiner: 'Turns marketplace payouts into entries your accountant can reconcile. Does one job.',
    lede: 'Marketplace payouts arrive as lump sums mixing sales, fees, taxes, refunds and reserves. A2X splits them into entries that reconcile in QuickBooks or Xero. It is not a seller suite and does not pretend to be \u2014 which is the argument for it and the argument against it.',
    job: 'Reconciling marketplace settlements into accounting software, so that revenue, fees and taxes land in the right accounts rather than as one undifferentiated deposit.',
    pricing: [
      { k: 'Entry', v: 'From $29 / month', note: 'Directory-listed starting price' },
      { k: 'Scaling basis', v: 'Order volume', note: 'Reported as spanning 100 to 1 million orders a month' },
      { k: 'Trial', v: 'Free trial available', note: '' },
      { k: 'Requires', v: 'QuickBooks or Xero', note: 'It is a bridge, not an accounting package' },
    ],
    fits: [
      'Sellers moving to accrual accounting \u2014 the thing buyers and lenders ask for',
      'Anyone whose bookkeeper is reconciling Amazon deposits by hand',
      'Sellers preparing for a sale, where clean books decide the multiple',
    ],
    againstIt: [
      'Sellers happy on cash accounting who are not planning to raise or sell',
      'Very low order volumes, where manual reconciliation is still cheaper than a subscription',
      'Anyone expecting it to replace accounting software rather than feed it',
    ],
    relatedGuides: [
      { label: 'Reimbursement at sourcing cost', href: '/guides/fba-reimbursement-sourcing-cost/' },
      { label: 'The landed cost stack', href: '/guides/landed-cost-fee-stack/' },
    ],
    sources: [
      { title: 'A2X vs sellerboard comparison (entry pricing and order-volume basis)', publisher: 'G2', href: 'https://www.g2.com/compare/a2x-vs-sellerboard', accessed: A },
      { title: 'A2X vs AMZ.One comparison', publisher: 'G2', href: 'https://www.g2.com/compare/a2x-vs-amz-one', accessed: A },
    ],
  },

  {
    slug: 'sellerboard',
    name: 'Sellerboard',
    category: 'Profit analytics',
    vendor: 'Sellerboard',
    url: 'https://sellerboard.com',
    checked: A,
    oneLiner: 'The cheapest entry point in this list, and the one aimed squarely at knowing your real margin.',
    lede: 'Profit analytics rather than research or bookkeeping: what a SKU actually earned after every fee. Given how much of this site is about fees that do not appear where you expect them, that is the category most sellers underinvest in.',
    job: 'Per-SKU profit tracking with fees, advertising, returns and cost of goods allocated, plus reimbursement and inventory features depending on plan.',
    pricing: [
      { k: 'Standard', v: '$15 / month', note: 'Directory-listed entry price' },
      { k: 'Plans', v: '4 published tiers', note: 'Higher tiers add features and volume' },
      { k: 'Trial', v: 'Free trial available', note: '' },
    ],
    fits: [
      'Sellers who cannot currently answer what a specific SKU earned last month',
      'Anyone modelling the 2026 fee changes at SKU level rather than catalogue level',
      'Small operations where a $15 subscription is easy to justify',
    ],
    againstIt: [
      'Sellers wanting research and keyword tools \u2014 different category',
      'Anyone who needs proper accrual books; this is analytics, not bookkeeping',
      'Sellers who will not enter accurate cost of goods, without which the output is decorative',
    ],
    relatedGuides: [
      { label: 'The landed cost stack', href: '/guides/landed-cost-fee-stack/' },
      { label: 'The 2026 fee changes', href: '/guides/amazon-fba-fee-changes-2026/' },
    ],
    sources: [
      { title: 'A2X vs sellerboard comparison (entry pricing and plan count)', publisher: 'G2', href: 'https://www.g2.com/compare/a2x-vs-sellerboard', accessed: A },
      { title: 'Keepa vs sellerboard comparison', publisher: 'G2', href: 'https://g2.com/compare/keepa-vs-sellerboard', accessed: A },
    ],
  },

  {
    slug: 'getida',
    name: 'GETIDA',
    category: 'Reimbursement recovery',
    vendor: 'GETIDA',
    url: 'https://getida.com',
    checked: A,
    oneLiner: 'No subscription. 25% of whatever it recovers — which is a smaller number than it used to be.',
    lede: 'A pure success-fee model: nothing to pay unless money comes back. The incentive alignment is real. What the marketing does not mention is that the 2025 reimbursement change cut what each recovered claim is worth, so the same percentage now returns less in absolute terms.',
    job: 'Auditing FBA transactions for unclaimed reimbursements and filing claims on your behalf \u2014 lost and damaged inventory, overcharged fees, shipment discrepancies, warehouse errors and removal order issues.',
    pricing: [
      { k: 'Standard', v: '25% of recovered amounts', note: 'No subscription, no setup fee, no monthly minimum' },
      { k: 'High volume', v: 'Reported negotiable, typically 10%\u201318%', note: 'Based on recovery volume' },
      { k: 'Billing', v: 'Invoiced monthly after Amazon processes', note: 'Reimbursements credit to your Seller Central account first' },
      { k: 'Illustrative scale', v: '$1,250\u2013$12,500 / year in fees', note: 'One source, on sellers recovering $5,000\u2013$50,000 annually' },
    ],
    contested: [
      { claim: 'What the service is worth in 2026', detail: 'Since 31 March 2025, reimbursement is paid at documented sourcing cost rather than sale price. Reporting elsewhere puts the resulting drop in payouts at 40% to 75% \u2014 every one of those estimates published by a firm selling recovery services. A percentage fee on a smaller base returns less; see our guide on evaluating recovery services.' },
    ],
    fits: [
      'Sellers at volume who are not reconciling reimbursements themselves',
      'Anyone who has never audited historic claims and wants a baseline',
      'Sellers who prefer a success fee to a subscription for work they will not otherwise do',
    ],
    againstIt: [
      'Sellers who have not entered sourcing costs per SKU \u2014 fix that first, it decides every payout',
      'Low-volume accounts, where the residue after Amazon\u2019s automatic credits is small',
      'Anyone treating recovery as a profit centre rather than as their own money returning at cost',
    ],
    relatedGuides: [
      { label: 'Reimbursement at sourcing cost', href: '/guides/fba-reimbursement-sourcing-cost/' },
      { label: 'Shipment discrepancy claims', href: '/guides/shipment-discrepancy-claims/' },
    ],
    sources: [
      { title: 'GETIDA plans and costs 2026 (25% standard, 10\u201318% negotiable at volume, claim types covered)', publisher: 'Scribe', href: 'https://scribehow.com/o/-5Kx95HpTtGi5shZAyvQPw/page/GetIda_Plans_and_Costs_2026_The_Truth_No_One_Is_Telling_You__IPM711KOSg2geCIktS9Euw', accessed: A },
      { title: 'Getida review 2026: features, pricing and alternatives', publisher: 'Dupple', href: 'https://dupple.com/reviews/getida', accessed: A },
      { title: 'Getida review 2026: FBA reimbursement service', publisher: 'RevenueGeeks', href: 'https://revenuegeeks.com/software/getida', accessed: A },
      { title: 'Getida 2026 review: pricing, features and compliance', publisher: 'Treasury Metric', href: 'https://treasurymetric.com/review/getida/', accessed: A },
    ],
  },

  {
    slug: 'aura',
    name: 'Aura',
    category: 'Repricing',
    vendor: 'Aura',
    url: 'https://goaura.com',
    checked: A,
    oneLiner: 'A repricer for Amazon and Walmart — in a year when price became an input to the fulfilment fee.',
    lede: 'Repricing changed in 2026 and most sellers have not adjusted for it. Since January, selling price is an input to the Amazon fulfilment fee through three price bands. Any repricing rule that treats fulfilment cost as fixed is running a model that no longer describes the platform \u2014 whichever tool executes it.',
    job: 'Automated repricing across Amazon and Walmart, with strategy rules, Buy Box targeting and reporting.',
    pricing: [
      { k: 'Range', v: '$27 to $397 / month', note: 'Four plans: Early Stage, Essential, Plus, Pro' },
      { k: 'Annual discount', v: 'Up to 17%', note: 'Reported as available on three of the four plans' },
      { k: 'Custom', v: 'For sellers above $1M monthly sales', note: 'Reported as arranged through a scale pricing call' },
      { k: 'Trial', v: '14-day free trial', note: 'Reported as activating automatically on registration' },
    ],
    fits: [
      'Sellers on shared listings where Buy Box rotation decides revenue',
      'Anyone repricing across both Amazon and Walmart from one place',
      'Sellers whose catalogue is large enough that manual repricing is not viable',
    ],
    againstIt: [
      'Single-seller private label listings with no competing offers to reprice against',
      'Sellers who have not built the 2026 price bands into their floor \u2014 the tool will execute a wrong rule faithfully',
      'Small catalogues where the subscription exceeds the margin recovered',
    ],
    relatedGuides: [
      { label: 'Price bands and the repricing trap', href: '/guides/price-tier-repricing-trap/' },
      { label: 'Buy Box and Featured Offer', href: '/guides/buy-box-featured-offer/' },
    ],
    sources: [
      { title: 'Aura Repricer pricing and plans (2026)', publisher: 'RevenueGeeks', href: 'https://revenuegeeks.com/aura-repricer-pricing/', accessed: A },
      { title: 'Aura Repricer pricing and plans: how much does it cost?', publisher: 'RevenueGeeks', href: 'https://revenuegeeks.com/software/aura-repricer/pricing', accessed: A },
      { title: 'Aura \u2014 the modern Walmart and Amazon repricer (vendor pricing page)', publisher: 'Aura', href: 'https://goaura.com/pricing', accessed: A },
    ],
  },
];

export const toolBySlug = (slug: string) => TOOLS.find((t) => t.slug === slug);
