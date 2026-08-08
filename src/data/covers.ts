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
