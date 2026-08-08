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
