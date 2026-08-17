/**
 * Cover data. Every figure here is already published inside the guide it
 * belongs to and is cited there. Nothing on a cover may exist that the
 * article does not support — the cover is a reading of the piece, not
 * decoration hung in front of it.
 */

export type Cover =
  | {
      kind: 'range';
      label: string;      // what the number measures
      figure: string;     // the headline number
      caption: string;    // what the number hides
      unit: string;
      lo: number;
      hi: number;
      mid: number;        // the stated average, marked on the track
      loTag: string;
      hiTag: string;
      midTag: string;
      stamp: string;      // source, short
      labelShort?: string;
      stampShort?: string;
      tone: 'cost' | 'gain' | 'neutral';
    }
  | {
      kind: 'cliff';
      label: string;
      figure: string;
      caption: string;
      before: string;     // value label before the drop
      after: string;      // value label after
      marks: { x: number; date: string; note: string }[]; // x = 0..1 along the axis
      dropAt: number;     // 0..1
      stamp: string;
      labelShort?: string;
      stampShort?: string;
      tone: 'cost' | 'gain' | 'neutral';
    }
  | {
      kind: 'timeline';
      label: string;
      figure: string;
      caption: string;
      points: { x: number; date: string; note: string }[]; // x = 0..1
      stamp: string;
      labelShort?: string;
      stampShort?: string;
      tone: 'cost' | 'gain' | 'neutral';
    }
  | {
      kind: 'ledger';
      label: string;
      figure: string;
      caption: string;
      rows: { k: string; v: string; tone: 'cost' | 'gain' | 'neutral' }[];
      stamp: string;
      labelShort?: string;
      stampShort?: string;
      tone: 'cost' | 'gain' | 'neutral';
    };

export const COVERS: Record<string, Cover> = {
  'amazon-fba-fee-changes-2026': {
    kind: 'range',
    label: 'US FBA fulfilment fee change · 2026',
    labelShort: 'FBA fee change · 2026',
    figure: '+$0.08',
    caption: 'The stated average. The observed spread is six times wider.',
    unit: '$',
    lo: 0.12,
    hi: 0.51,
    mid: 0.08,
    loTag: '+$0.12',
    hiTag: '+$0.51',
    midTag: 'stated avg',
    stamp: 'Amazon, Oct 2025 · third-party table readings',
    stampShort: 'Amazon, Oct 2025',
    tone: 'cost',
  },

  'de-minimis-suspension-2026': {
    kind: 'cliff',
    label: 'US duty-free import threshold',
    labelShort: 'Duty-free threshold',
    figure: '$800 → $0',
    caption: 'Duty now applies at $1 of value as much as at $799.',
    before: '$800',
    after: '$0',
    dropAt: 0.34,
    marks: [
      { x: 0.34, date: '02 May 2025', note: 'China, HK' },
      { x: 0.52, date: '29 Aug 2025', note: 'all origins' },
      { x: 0.86, date: '24 Jun 2026', note: 'codified' },
    ],
    stamp: 'EO 14256 · CBP interim final rules',
    stampShort: 'CBP, Jun 2026',
    tone: 'cost',
  },

  'fba-reimbursement-sourcing-cost': {
    kind: 'range',
    label: 'Published estimates of the payout reduction',
    labelShort: 'Reported impact',
    figure: '40–75%',
    caption: 'Four vendor estimates, no disclosed method, no shared sample.',
    unit: '%',
    lo: 40,
    hi: 75,
    mid: 40,
    loTag: '40%',
    hiTag: '75%+',
    midTag: 'lowest claim',
    stamp: 'Four vendor estimates · none disclose a method',
    stampShort: 'Vendor estimates',
    tone: 'cost',
  },

  'fba-fuel-logistics-surcharge-2026': {
    kind: 'range',
    label: 'Per-unit cost of the 2026 changes combined',
    labelShort: 'Combined 2026 cost',
    figure: '+$0.20–0.71',
    caption: 'The $0.08 average plus a 3.5% surcharge, across size tiers.',
    unit: '$',
    lo: 0.20,
    hi: 0.71,
    mid: 0.08,
    loTag: 'small std',
    hiTag: 'oversize',
    midTag: 'announced avg',
    stamp: 'Illustrative fulfilment fees · surcharge reported 17 Apr 2026',
    stampShort: 'Illustrative · Apr 2026',
    tone: 'cost',
  },

  'low-inventory-level-fee': {
    kind: 'range',
    label: 'Published low-inventory threshold',
    labelShort: 'Threshold, days',
    figure: '28 or 35',
    caption: 'Two 2026 sources, two thresholds, one week of lead time apart.',
    unit: '',
    lo: 28,
    hi: 35,
    mid: 28,
    loTag: '28 days',
    hiTag: '35 days',
    midTag: 'narrower claim',
    stamp: 'Two 2026 rate breakdowns · sources conflict',
    stampShort: 'Sources conflict',
    tone: 'cost',
  },

  'inbound-placement-split-arithmetic': {
    kind: 'range',
    label: 'Inbound placement fee, minimal split',
    labelShort: 'Placement fee',
    figure: '$0.23–1.58',
    caption: 'Per unit. Zero at five or more destinations — but freight is not.',
    unit: '$',
    lo: 0.23,
    hi: 1.58,
    mid: 0,
    loTag: '$0.23',
    hiTag: '$1.58',
    midTag: 'optimised split',
    stamp: 'Reported 2026 range · confirm at shipment creation',
    stampShort: 'Reported 2026 range',
    tone: 'cost',
  },

  'entry-type-11-vs-01': {
    kind: 'cliff',
    label: 'Entry route for low-value commercial parcels',
    labelShort: 'Entry route',
    figure: 'T86 → 11 / 01',
    caption: 'ACE now rejects Type 86. Informal to $2,500, formal above.',
    before: 'Type 86',
    after: '11 / 01',
    dropAt: 0.42,
    marks: [
      { x: 0.42, date: 'Suspension', note: 'ACE rejects T86' },
      { x: 0.78, date: '1 Jul 2027', note: 'S.321 repealed' },
    ],
    stamp: 'CBP guidance · One Big Beautiful Bill Act 2025',
    stampShort: 'CBP · OBBBA 2025',
    tone: 'cost',
  },

  'hts-classification-basics': {
    kind: 'ledger',
    label: 'Who carries the classification liability',
    labelShort: 'Who is liable',
    figure: 'The importer',
    caption: 'Reasonable care under 19 U.S.C. § 1484 is non-delegable.',
    rows: [
      { k: 'Importer of record', v: 'liable', tone: 'cost' },
      { k: 'Customs broker (your agent)', v: 'not liable', tone: 'neutral' },
      { k: 'Supplier who supplied the code', v: 'not liable', tone: 'neutral' },
    ],
    stamp: 'Reporting on 19 U.S.C. §§ 1484 and 1592',
    stampShort: '19 U.S.C. § 1484',
    tone: 'cost',
  },

  'landed-cost-fee-stack': {
    kind: 'range',
    label: 'Published informal-entry MPF, four sources',
    labelShort: 'Informal MPF',
    figure: '$1.16–2.72',
    caption: 'Four 2026 sources, four values, none citing CBP directly.',
    unit: '$',
    lo: 1.16,
    hi: 2.72,
    mid: 1.16,
    loTag: '$1.16',
    hiTag: '$2.72',
    midTag: 'lowest',
    stamp: 'Four 2026 fee guides · sources conflict',
    stampShort: 'Sources conflict',
    tone: 'cost',
  },

  'fba-storage-four-layers': {
    kind: 'range',
    label: 'Published off-peak standard storage rate',
    labelShort: 'Off-peak rate',
    figure: '$0.78 / $0.87',
    caption: 'Two values. The split resolves by date, not by disagreement.',
    unit: '$',
    lo: 0.78,
    hi: 0.87,
    mid: 0.76,
    loTag: 'pre-Jul',
    hiTag: 'from 1 Jul',
    midTag: 'prior rate',
    stamp: 'Seven 2026 rate cards · change effective 1 Jul 2026',
    stampShort: 'Change: 1 Jul 2026',
    tone: 'cost',
  },

  'removal-vs-hold-decision': {
    kind: 'range',
    label: 'Months of holding one removal buys back',
    labelShort: 'Break-even, months',
    figure: '0.6–2.9',
    caption: 'Same unit, same fee. November against May.',
    unit: '',
    lo: 0.58,
    hi: 2.9,
    mid: 0.58,
    loTag: 'November',
    hiTag: 'May',
    midTag: 'peak + aged',
    stamp: 'Illustrative · published 2026 rates',
    stampShort: 'Illustrative',
    tone: 'cost',
  },

  'price-tier-repricing-trap': {
    kind: 'range',
    label: 'Reported 2026 fee increase by price band',
    labelShort: 'Increase by band',
    figure: '$0.05–0.51',
    caption: 'The $0.08 average sits near the bottom of this range.',
    unit: '$',
    lo: 0.05,
    hi: 0.51,
    mid: 0.08,
    loTag: 'lg std $10–50',
    hiTag: 'sm std $50+',
    midTag: 'stated avg',
    stamp: 'Reported per-unit increases · Jan 2026 change',
    stampShort: 'Jan 2026 change',
    tone: 'cost',
  },

  'incoterms-who-is-importer': {
    kind: 'ledger',
    label: 'Who is importer of record',
    labelShort: 'Importer of record',
    figure: 'The US buyer',
    caption: 'Whoever is named on CBP Form 7501 — not whoever pays.',
    rows: [
      { k: 'EXW · FOB · DAP', v: 'buyer', tone: 'cost' },
      { k: 'DDP', v: 'seller', tone: 'neutral' },
      { k: 'What CBP reads', v: 'Form 7501', tone: 'neutral' },
    ],
    stamp: 'Incoterms 2020 · no 2025 or 2026 edition issued',
    stampShort: 'Incoterms 2020',
    tone: 'cost',
  },

  'customs-holds-and-exams': {
    kind: 'range',
    label: 'Published customs examination fees',
    labelShort: 'Exam fee',
    figure: '$150–2,500+',
    caption: 'Per container, before demurrage, drayage and storage.',
    unit: '$',
    lo: 150,
    hi: 2500,
    mid: 150,
    loTag: 'X-ray',
    hiTag: 'intensive',
    midTag: 'scan only',
    stamp: 'Five 2026 sources · importer pays under 19 USC 1467',
    stampShort: '19 USC 1467',
    tone: 'cost',
  },

  'supplier-verification': {
    kind: 'ledger',
    label: 'What each platform badge certifies',
    labelShort: 'Badge meaning',
    figure: 'Paid, not proven',
    caption: 'The checks that protect you happen off the platform.',
    rows: [
      { k: 'Gold Supplier', v: 'paid', tone: 'cost' },
      { k: 'Business licence at gsxt', v: 'proof', tone: 'gain' },
      { k: 'Bank account matches licence', v: 'proof', tone: 'gain' },
    ],
    stamp: 'Reported: 12% of new listings scams or fake factories',
    stampShort: 'Reported 2026',
    tone: 'cost',
  },

  'product-research-cost-errors': {
    kind: 'range',
    label: 'Cubic feet, same product, two boxes',
    labelShort: 'Packaging effect',
    figure: '0.22 vs 0.56',
    caption: 'A 60% difference, on every storage layer, every month.',
    unit: '',
    lo: 0.222,
    hi: 0.556,
    mid: 0.222,
    loTag: '8×8×6',
    hiTag: '12×10×8',
    midTag: 'smaller box',
    stamp: 'Cubic inches ÷ 1,728 · packaged unit',
    stampShort: '÷ 1,728',
    tone: 'cost',
  },

  'expanding-eu-uk-compliance': {
    kind: 'timeline',
    label: 'Sequence for entering Europe',
    labelShort: 'Entry sequence',
    figure: '3 regimes',
    caption: 'VAT, EPR and product compliance. Different triggers, different registers.',
    points: [
      { x: 0.04, date: 'Model', note: 'EFN or Pan-EU' },
      { x: 0.28, date: 'EORI', note: 'EU and UK' },
      { x: 0.52, date: 'VAT', note: 'where stock sits' },
      { x: 0.76, date: 'EPR', note: 'before listings' },
      { x: 0.96, date: 'Launch', note: 'then advertising' },
    ],
    stamp: 'Pan-EU: 5 VAT registrations from Jan 2026 · PPWR from 12 Aug 2026',
    stampShort: 'PPWR: 12 Aug 2026',
    tone: 'neutral',
  },

  'dd7-payout-reserve': {
    kind: 'range',
    label: 'Order to bank deposit, reported',
    labelShort: 'Order to cash',
    figure: '14–27 days',
    caption: 'FBA. FBM on standard shipping runs 20 to 35.',
    unit: '',
    lo: 14,
    hi: 27,
    mid: 14,
    loTag: 'fastest',
    hiTag: 'slowest',
    midTag: 'best case',
    stamp: 'DD+7 applied to NA accounts 12 Mar 2026',
    stampShort: '12 Mar 2026',
    tone: 'cost',
  },

  'returns-cost-and-badge': {
    kind: 'range',
    label: 'Frequently Returned Item badge impact',
    labelShort: 'Badge impact',
    figure: '−20 to −50%',
    caption: 'Reported conversion drop on affected ASINs.',
    unit: '%',
    lo: 20,
    hi: 50,
    mid: 20,
    loTag: '−20%',
    hiTag: '−50%',
    midTag: 'lower bound',
    stamp: 'One agency, own accounts · magnitude not measurement',
    stampShort: 'Agency estimate',
    tone: 'cost',
  },

  'account-suspension-appeal': {
    kind: 'timeline',
    label: 'What to do, in order',
    labelShort: 'Appeal sequence',
    figure: 'Wait first',
    caption: 'Rapid appeals are reported as flagged low quality.',
    points: [
      { x: 0.04, date: 'Wait 24h', note: 'do not reply' },
      { x: 0.3, date: 'Diagnose', note: 'which type' },
      { x: 0.56, date: 'Documents', note: 'before writing' },
      { x: 0.8, date: 'POA', note: 'three parts' },
      { x: 0.97, date: 'Submit', note: 'correct channel' },
    ],
    stamp: 'Funds held 90 days · appeal window 90 days',
    stampShort: '90 days',
    tone: 'cost',
  },

  'ip-complaints-retractions': {
    kind: 'ledger',
    label: 'Who can end an IP complaint',
    labelShort: 'Who ends it',
    figure: 'The complainant',
    caption: 'A retraction removes the basis. An appeal argues about it.',
    rows: [
      { k: 'Rights owner retraction', v: 'ends it', tone: 'gain' },
      { k: 'Listing fix (TM / copyright)', v: 'often ends it', tone: 'gain' },
      { k: 'Appeal to Amazon alone', v: 'slower', tone: 'cost' },
    ],
    stamp: 'One firm reports 240+ retractions obtained',
    stampShort: 'Reported 240+',
    tone: 'cost',
  },

  'sipp-packaging-program': {
    kind: 'range',
    label: 'Reported SIPP saving by volume',
    labelShort: 'SIPP saving',
    figure: '$9k–180k',
    caption: 'At roughly $1.50 per unit. Scale to your own volume.',
    unit: '$',
    lo: 9000,
    hi: 180000,
    mid: 9000,
    loTag: '500/mo',
    hiTag: '10,000/mo',
    midTag: 'small seller',
    stamp: 'Illustrative from one published estimate',
    stampShort: 'Illustrative',
    tone: 'gain',
  },

  'amazon-ppc-benchmarks': {
    kind: 'range',
    label: 'Reported 2026 ACOS, one dataset',
    labelShort: 'ACOS spread',
    figure: '30–38%',
    caption: 'Same 38 accounts. Median per account against spend-weighted.',
    unit: '%',
    lo: 30,
    hi: 38,
    mid: 30,
    loTag: 'spend-weighted',
    hiTag: 'median account',
    midTag: 'weighted',
    stamp: 'SellerPlex H1 2026 · 38 US accounts · method stated',
    stampShort: 'H1 2026 · 38 accounts',
    tone: 'cost',
  },

  'buy-box-featured-offer': {
    kind: 'range',
    label: 'Landed price tolerance to rotate',
    labelShort: 'Price tolerance',
    figure: '~5%',
    caption: 'Of the lowest qualified landed price. Outside it: invisible.',
    unit: '%',
    lo: 0,
    hi: 5,
    mid: 0,
    loTag: 'lowest offer',
    hiTag: '+5%',
    midTag: 'the floor',
    stamp: 'Item price plus shipping, not the sticker price',
    stampShort: 'Landed price',
    tone: 'cost',
  },

  'vine-and-early-reviews': {
    kind: 'ledger',
    label: 'What a Vine enrolment actually costs',
    labelShort: 'True cost',
    figure: 'Once per ASIN',
    caption: 'The fee is the small part. The units are the cost.',
    rows: [
      { k: 'Enrolment fee', v: '$0–200', tone: 'neutral' },
      { k: 'Up to 30 free units + FBA fees', v: 'yours', tone: 'cost' },
      { k: 'Second attempt', v: 'none', tone: 'cost' },
    ],
    stamp: 'Fee tiers revised during 2026 · confirm in Seller Central',
    stampShort: 'Confirm current tier',
    tone: 'cost',
  },

  'peak-season-cost-stack': {
    kind: 'range',
    label: 'Q4 standard storage, per cubic foot',
    labelShort: 'Q4 storage',
    figure: '$0.87 → $2.40',
    caption: 'Roughly threefold. On what is already in the network.',
    unit: '$',
    lo: 0.87,
    hi: 2.40,
    mid: 0.87,
    loTag: 'Jan–Sep',
    hiTag: 'Oct–Dec',
    midTag: 'off-peak',
    stamp: 'Published 2026 rates · decide by 30 September',
    stampShort: 'Decide by 30 Sep',
    tone: 'cost',
  },

  'variations-review-pooling': {
    kind: 'cliff',
    label: 'Review pooling across variations',
    labelShort: 'Review pooling',
    figure: 'Parent → child',
    caption: 'One count for the family, or one count each.',
    before: 'pooled',
    after: 'separate',
    dropAt: 0.46,
    marks: [
      { x: 0.46, date: '12 Feb 2026', note: 'pooling ends' },
    ],
    stamp: 'Significant feature differences hold separate pools',
    stampShort: '12 Feb 2026',
    tone: 'cost',
  },


































































  'shipment-discrepancy-claims': {
    kind: 'range',
    label: 'Published claim window',
    labelShort: 'Claim window',
    figure: '60 days – 9 months',
    caption: 'Two 2026 sources. Not close. Review monthly and it stops mattering.',
    unit: '',
    lo: 60,
    hi: 270,
    mid: 60,
    loTag: 'tightest',
    hiTag: 'loosest',
    midTag: 'tightest',
    stamp: 'Roughly 20% of shipments arrive with a discrepancy',
    stampShort: '~1 in 5',
    tone: 'cost',
  },

  'ungating-restricted-categories': {
    kind: 'ledger',
    label: 'The three gates, cleared separately',
    labelShort: 'Three gates',
    figure: 'Category · Brand · ASIN',
    caption: 'Clearing one does not clear the others.',
    rows: [
      { k: 'Category approval', v: 'one-time', tone: 'neutral' },
      { k: 'Brand approval', v: 'per brand', tone: 'cost' },
      { k: 'ASIN block', v: 'still possible', tone: 'cost' },
    ],
    stamp: 'Invoice: authorised distributor, 10+ units, 90\u2013180 days',
    stampShort: 'Invoice test',
    tone: 'cost',
  },
  'narf-canada-mexico': {
    kind: 'range',
    label: 'Reported Prime delivery, remote fulfilment',
    labelShort: 'Delivery days',
    figure: '5–12 days',
    caption: 'Mexico at the low end, Canada at the high end.',
    unit: '',
    lo: 5,
    hi: 12,
    mid: 5,
    loTag: 'Mexico',
    hiTag: 'Canada',
    midTag: 'fastest',
    stamp: 'One US inventory pool \u00b7 customer pays the duty',
    stampShort: 'One pool',
    tone: 'cost',
  },
  'amazon-stopped-prepping': {
    kind: 'range',
    label: 'Third-party prep, per unit',
    labelShort: 'Prep cost',
    figure: '$0.35–2.00',
    caption: 'The work did not disappear. It moved.',
    unit: '$',
    lo: 0.35,
    hi: 2.00,
    mid: 0,
    loTag: 'simple',
    hiTag: 'complex',
    midTag: 'was included',
    stamp: 'US FBA prep and labelling ended 1 January 2026',
    stampShort: '1 Jan 2026',
    tone: 'cost',
  },
  'selling-your-fba-business': {
    kind: 'range',
    label: 'Reported FBA multiples, 2021 against 2026',
    labelShort: 'Exit multiple',
    figure: '2.5x–4x SDE',
    caption: 'Down from 4x\u20136x peaks. Aggregator era over.',
    unit: 'x',
    lo: 2.5,
    hi: 4,
    mid: 6,
    loTag: 'typical low',
    hiTag: 'typical high',
    midTag: '2021 peak',
    stamp: 'Six sources · all sell transaction services',
    stampShort: 'Sources sell services',
    tone: 'cost',
  },
  'us-product-compliance': {
    kind: 'cliff',
    label: 'Where a missing certificate stops you',
    labelShort: 'Where it stops you',
    figure: 'Listing → border',
    caption: 'CPSC certificates now filed electronically at import.',
    before: 'Seller Central',
    after: 'CBP',
    dropAt: 0.44,
    marks: [
      { x: 0.44, date: '8 Jul 2026', note: 'eFile begins' },
    ],
    stamp: 'CPSC eFile via PGA message set · CPSC is a partner agency',
    stampShort: '8 Jul 2026',
    tone: 'cost',
  },
  'hazmat-dangerous-goods': {
    kind: 'range',
    label: 'Dangerous goods review, inbound blocked',
    labelShort: 'Review window',
    figure: '2–5 days',
    caption: 'No new inventory in. Existing stock may be held.',
    unit: '',
    lo: 2,
    hi: 5,
    mid: 2,
    loTag: 'complete docs',
    hiTag: 'typical upper',
    midTag: 'best case',
    stamp: 'Incomplete or misformatted SDS is the leading rejection cause',
    stampShort: 'SDS formatting',
    tone: 'cost',
  },
  'off-amazon-diversification': {
    kind: 'ledger',
    label: 'What diversification is worth',
    labelShort: 'Why diversify',
    figure: 'Two reasons',
    caption: 'Priced by buyers. Reportedly rewarded by the algorithm.',
    rows: [
      { k: 'Amazon-only multiple', v: '2.5\u20134x', tone: 'cost' },
      { k: 'Off-Amazon revenue', v: 'raises it', tone: 'gain' },
      { k: 'External traffic signal', v: 'est. 15\u201320%', tone: 'gain' },
    ],
    stamp: 'Weighting estimates are estimates, not specifications',
    stampShort: 'Estimates only',
    tone: 'gain',
  },
  'holiday-peak-fulfilment-fee': {
    kind: 'cliff',
    label: 'Peak fulfilment window',
    labelShort: 'Peak window',
    figure: '+$0.32/unit',
    caption: 'Opens before Q4 storage. Closes two weeks into January.',
    before: 'standard',
    after: 'peak',
    dropAt: 0.3,
    marks: [
      { x: 0.3, date: '15 Oct 2026', note: 'peak begins' },
      { x: 0.88, date: '14 Jan 2027', note: 'peak ends' },
    ],
    stamp: 'Plus the 3.5% surcharge on top \u00b7 FBA, RFF, MCF, Buy with Prime',
    stampShort: 'Plus 3.5%',
    tone: 'cost',
  },
  'deal-and-coupon-fees': {
    kind: 'range',
    label: 'Variable fee on promotional sales',
    labelShort: 'Variable fee',
    figure: '1.5% / 2.5%',
    caption: 'Deals against coupons. The cheap-to-start option costs more.',
    unit: '%',
    lo: 1.5,
    hi: 2.5,
    mid: 1.5,
    loTag: 'deals',
    hiTag: 'coupons',
    midTag: 'lower',
    stamp: '$100 upfront per deal, capped at $5,000 variable',
    stampShort: '$100 upfront',
    tone: 'cost',
  },
  'the-supplier-invoice': {
    kind: 'timeline',
    label: 'Systems that ask for the same document',
    labelShort: 'Six systems',
    figure: 'Six uses',
    caption: 'Different organisations, different reasons, one piece of paper.',
    points: [
      { x: 0.03, date: 'Customs', note: 'declared value' },
      { x: 0.26, date: 'Ungating', note: '10+ units' },
      { x: 0.5, date: 'Refunds', note: 'sourcing cost' },
      { x: 0.74, date: 'Appeals', note: 'authenticity' },
      { x: 0.97, date: 'Exit', note: 'COGS' },
    ],
    stamp: 'Obtainable only at purchase · every window is short',
    stampShort: 'Get it at purchase',
    tone: 'cost',
  },
  'accrual-accounting-cogs': {
    kind: 'cliff',
    label: 'When cost meets revenue',
    labelShort: 'Cost vs revenue',
    figure: 'Cash → accrual',
    caption: 'One books the container in March. One books it as it sells.',
    before: 'lump',
    after: 'matched',
    dropAt: 0.3,
    marks: [
      { x: 0.3, date: 'Pay supplier', note: 'cash records here' },
      { x: 0.72, date: 'Units sell', note: 'accrual records here' },
    ],
    stamp: 'Transition reported at 3\u20136 months of parallel records',
    stampShort: '3\u20136 months',
    tone: 'cost',
  },
  'currency-conversion-payouts': {
    kind: 'range',
    label: 'Published cost of Amazon currency conversion',
    labelShort: 'Conversion cost',
    figure: '0.75–3.75%',
    caption: 'Primary source at the bottom. Competitors at the top.',
    unit: '%',
    lo: 0.75,
    hi: 3.75,
    mid: 0.75,
    loTag: 'Amazon',
    hiTag: 'FX provider',
    midTag: 'stated',
    stamp: 'Every figure above 2.5% comes from a party selling an alternative',
    stampShort: 'Check the publisher',
    tone: 'cost',
  },
  'gs1-barcodes-fnsku': {
    kind: 'cliff',
    label: 'Who must label every unit',
    labelShort: 'Who labels',
    figure: 'Split in two',
    caption: 'Brand owners stopped stickering. Resellers started.',
    before: 'commingled',
    after: 'FNSKU',
    dropAt: 0.44,
    marks: [
      { x: 0.44, date: '31 Mar 2026', note: 'commingling ends' },
    ],
    stamp: 'Unlabelled reseller inventory reported as classified defective',
    stampShort: '31 Mar 2026',
    tone: 'cost',
  },
  'brand-registry-trademark': {
    kind: 'ledger',
    label: 'What Brand Registry actually costs',
    labelShort: 'Registry cost',
    figure: 'Free + trademark',
    caption: 'Enrolment costs nothing. Getting eligible does not.',
    rows: [
      { k: 'Enrolment', v: 'free', tone: 'gain' },
      { k: 'USPTO filing', v: '$250\u2013350', tone: 'cost' },
      { k: 'Time to registration', v: '8\u201314 mo', tone: 'cost' },
    ],
    stamp: 'One source reports ~68% of first applications rejected',
    stampShort: '~68% rejected',
    tone: 'cost',
  },
  'authorised-reseller': {
    kind: 'ledger',
    label: 'What authorisation solves',
    labelShort: 'What it solves',
    figure: 'Five systems',
    caption: 'One relationship. The invoice is only the artefact.',
    rows: [
      { k: 'Ungating and appeals', v: 'solved', tone: 'gain' },
      { k: 'IP complaints', v: 'solved', tone: 'gain' },
      { k: 'Arbitrage sourcing', v: 'cannot', tone: 'cost' },
    ],
    stamp: 'Brands gate for counterfeits, price control and experience',
    stampShort: 'Why brands gate',
    tone: 'gain',
  },
  'fba-vs-fbm-breakeven': {
    kind: 'range',
    label: 'Cumulative FBA fee increase since 2020',
    labelShort: 'Fee trend',
    figure: '25–35%',
    caption: 'By size tier. The reason the question keeps being asked.',
    unit: '%',
    lo: 25,
    hi: 35,
    mid: 25,
    loTag: 'lower tiers',
    hiTag: 'upper tiers',
    midTag: 'lowest',
    stamp: 'Plus $0.08 in Jan 2026 and a reported 3.5% surcharge in April',
    stampShort: 'Plus 2026 changes',
    tone: 'cost',
  },
  'order-defect-rate': {
    kind: 'range',
    label: 'Order Defect Rate, published against practice',
    labelShort: 'ODR levels',
    figure: '0.3% – 1%',
    caption: 'Threshold, warning level, and where top sellers sit.',
    unit: '%',
    lo: 0.3,
    hi: 1.0,
    mid: 0.8,
    loTag: 'top sellers',
    hiTag: 'suspension',
    midTag: 'flag fires',
    stamp: 'Rolling 60-day window \u00b7 alerts arrive after you cross',
    stampShort: '60-day window',
    tone: 'cost',
  },
  'awd-vs-3pl-warehousing': {
    kind: 'range',
    label: 'Published AWD storage rates',
    labelShort: 'AWD storage',
    figure: '$0.43–0.75',
    caption: 'Six sources. Region, programme and date explain the spread.',
    unit: '$',
    lo: 0.43,
    hi: 0.75,
    mid: 0.43,
    loTag: 'Smart, East',
    hiTag: 'upper claim',
    midTag: 'lowest',
    stamp: 'Storage is the smallest line in this comparison',
    stampShort: 'Six sources',
    tone: 'cost',
  },
  'sales-tax-nexus': {
    kind: 'ledger',
    label: 'What marketplace facilitator laws cover',
    labelShort: 'What is covered',
    figure: 'Sales tax only',
    caption: 'Everything else from FBA inventory stays with you.',
    rows: [
      { k: 'Sales tax, Amazon orders', v: 'Amazon', tone: 'gain' },
      { k: 'Direct-sale sales tax', v: 'you', tone: 'cost' },
      { k: 'Income & franchise tax', v: 'you', tone: 'cost' },
    ],
    stamp: '45 sales-tax states plus DC · FBA inventory creates nexus',
    stampShort: '45 states plus DC',
    tone: 'cost',
  },
  'launch-sequence': {
    kind: 'range',
    label: 'Longest lead time in a launch',
    labelShort: 'Trademark clock',
    figure: '8–14 months',
    caption: 'Sequence by who controls the clock, not by what feels next.',
    unit: '',
    lo: 8,
    hi: 14,
    mid: 8,
    loTag: 'fastest',
    hiTag: 'slowest',
    midTag: 'best case',
    stamp: 'Five launch decisions cost a production run to reverse',
    stampShort: 'Five are permanent',
    tone: 'cost',
  },
  'changes-timeline-2026': {
    kind: 'timeline',
    label: 'Dated changes across 2026',
    labelShort: '2026 timeline',
    figure: '11 changes',
    caption: 'Amazon, CBP and Congress. Several of them interact.',
    points: [
      { x: 0.04, date: '1 Jan', note: 'prep ends' },
      { x: 0.24, date: '31 Mar', note: 'FNSKU' },
      { x: 0.44, date: '17 Apr', note: 'surcharge' },
      { x: 0.66, date: '1 Jul', note: 'storage' },
      { x: 0.94, date: '15 Oct', note: 'peak fee' },
    ],
    stamp: 'Two more ahead: 22 Sep 2026 and 1 Jul 2027',
    stampShort: 'Two still ahead',
    tone: 'cost',
  },
  'amazon-business-b2b': {
    kind: 'ledger',
    label: 'Reported business buyer behaviour',
    labelShort: 'B2B buyers',
    figure: 'No extra fee',
    caption: 'A feature layer on the account you already have.',
    rows: [
      { k: 'Conversion rate', v: '3\u00d7', tone: 'gain' },
      { k: 'Units per order', v: '+74%', tone: 'gain' },
      { k: 'Returns', v: '\u221242%', tone: 'gain' },
    ],
    stamp: 'Agency figures without stated method \u00b7 direction, not precision',
    stampShort: 'Agency figures',
    tone: 'gain',
  },
  'listing-optimisation-a10': {
    kind: 'ledger',
    label: 'Confirmed against inferred',
    labelShort: 'What is confirmed',
    figure: 'A9, not A10',
    caption: 'One is Amazon\u2019s name. One is the seller community\u2019s.',
    rows: [
      { k: 'A9 (Amazon\u2019s name)', v: 'official', tone: 'gain' },
      { k: 'A10 / seller authority', v: 'inferred', tone: 'cost' },
      { k: 'Backend field, 249 bytes', v: 'spec', tone: 'gain' },
    ],
    stamp: 'Exceeding 249 bytes reportedly voids the whole field',
    stampShort: '249 bytes',
    tone: 'cost',
  },
  'seller-insurance-coi': {
    kind: 'ledger',
    label: 'What the certificate must show',
    labelShort: 'COI requirements',
    figure: '$1M / $2M',
    caption: 'A valid policy with the wrong wording is non-compliance.',
    rows: [
      { k: 'Per occurrence / aggregate', v: '1M / 2M', tone: 'neutral' },
      { k: 'Basis', v: 'occurrence', tone: 'cost' },
      { k: 'Amazon as additional insured', v: 'required', tone: 'cost' },
    ],
    stamp: 'Triggered at $10,000 across three consecutive months',
    stampShort: 'Trigger: $10k / 3 mo',
    tone: 'cost',
  },
  'aplus-content-brand-tools': {
    kind: 'ledger',
    label: 'The registry stack, by cost',
    labelShort: 'Tool stack',
    figure: 'Four are free',
    caption: 'Most sellers deploy two of eight.',
    rows: [
      { k: 'A+ Content', v: 'free', tone: 'gain' },
      { k: 'Brand Analytics', v: 'free', tone: 'gain' },
      { k: 'Project Zero / Transparency', v: 'position', tone: 'gain' },
    ],
    stamp: 'Reported A+ conversion lift 3\u201310% \u00b7 vendor figures',
    stampShort: 'Vendor figures',
    tone: 'gain',
  },

  /* Site-level covers. These belong to the publication rather than to one
     guide, so they can sit on the home page without repeating a story. */
  'policy-timeline': {
    kind: 'timeline',
    label: 'Fee & policy changes on record',
    labelShort: 'Policy log',
    figure: '8 changes',
    caption: 'Every entry dated, with the primary source attached.',
    points: [
      { x: 0.04, date: 'May 2025', note: 'China de minimis' },
      { x: 0.26, date: 'Aug 2025', note: 'all origins' },
      { x: 0.50, date: 'Jan 2026', note: 'US FBA fees' },
      { x: 0.72, date: 'Jun 2026', note: 'codified' },
      { x: 0.95, date: 'Sep 2026', note: 'CBP test' },
    ],
    stamp: 'Amazon · CBP · Federal Register',
    stampShort: 'Amazon · CBP',
    tone: 'neutral',
  },

  'method-ledger': {
    kind: 'ledger',
    label: 'How figures get published here',
    labelShort: 'Sourcing rule',
    figure: 'Dated or cited',
    caption: 'Nothing is published without one or the other.',
    rows: [
      { k: 'From operations, period stated', v: 'ok', tone: 'gain' },
      { k: 'From a primary source, retrieval dated', v: 'ok', tone: 'gain' },
      { k: 'Undated claims', v: 'none', tone: 'cost' },
    ],
    stamp: 'See /editorial-standards/',
    stampShort: 'Editorial standards',
    tone: 'gain',
  },
};

/** Fallback when a guide has no cover of its own yet. */
export const CATEGORY_FALLBACK: Record<string, Cover> = {
  'Fees & reimbursements': {
    kind: 'ledger',
    label: 'Fees & reimbursements',
    figure: '—',
    caption: 'Fee arithmetic, shown line by line.',
    rows: [
      { k: 'Referral', v: '%', tone: 'neutral' },
      { k: 'Fulfilment', v: '$', tone: 'cost' },
      { k: 'Storage', v: '$', tone: 'cost' },
    ],
    stamp: 'Every figure dated or sourced',
    tone: 'cost',
  },
  'Shipping & logistics': {
    kind: 'ledger',
    label: 'Shipping & logistics',
    figure: '—',
    caption: 'Landed cost, from port to parcel.',
    rows: [
      { k: 'Freight', v: '$', tone: 'cost' },
      { k: 'Duty', v: '$', tone: 'cost' },
      { k: 'Last mile', v: '$', tone: 'cost' },
    ],
    stamp: 'Every figure dated or sourced',
    tone: 'neutral',
  },
  'Software': {
    kind: 'ledger',
    label: 'Software',
    figure: '—',
    caption: 'Scored against a published rubric, on paid plans.',
    rows: [
      { k: 'Data quality', v: '/40', tone: 'neutral' },
      { k: 'Workflow fit', v: '/35', tone: 'neutral' },
      { k: 'Price', v: '/25', tone: 'neutral' },
    ],
    stamp: 'See /how-we-test/',
    tone: 'neutral',
  },
  'Getting started': {
    kind: 'ledger',
    label: 'Getting started',
    figure: '—',
    caption: 'The four decisions, in the order they bind.',
    rows: [
      { k: 'Model', v: '1', tone: 'neutral' },
      { k: 'Capital', v: '2', tone: 'neutral' },
      { k: 'Sourcing', v: '3', tone: 'neutral' },
    ],
    stamp: 'Every figure dated or sourced',
    tone: 'gain',
  },
  'Scaling': {
    kind: 'ledger',
    label: 'Scaling',
    figure: '—',
    caption: 'What breaks first when volume doubles.',
    rows: [
      { k: 'Cash cycle', v: 'days', tone: 'cost' },
      { k: 'Stock cover', v: 'weeks', tone: 'neutral' },
      { k: 'Fee load', v: '%', tone: 'cost' },
    ],
    stamp: 'Every figure dated or sourced',
    tone: 'neutral',
  },
};

export function coverFor(slug: string, category: string): Cover {
  return COVERS[slug] ?? CATEGORY_FALLBACK[category] ?? CATEGORY_FALLBACK['Getting started'];
}
