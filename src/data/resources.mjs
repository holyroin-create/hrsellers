// Resources directory — curated tools by category.
// Reviewed tools link to their full review; others are described by function.
// Affiliate links are placeholders (#) for the owner to fill in after joining each program.

export const resourceCategories = [
  { id: 'research', name: 'Research & Product Tools', icon: 'search', desc: 'Find and validate products, track keywords, and analyze competitors.' },
  { id: 'reimbursement', name: 'Reimbursement & Refunds', icon: 'refund', desc: 'Recover money marketplaces owe you for lost, damaged, and mishandled inventory.' },
  { id: 'repricing', name: 'Repricing', icon: 'tag', desc: 'Automated price adjustments to stay competitive and win the Buy Box.' },
  { id: 'accounting', name: 'Accounting & Tax', icon: 'calc', desc: 'Reconcile payouts, track profit, and stay compliant with sales tax.' },
  { id: 'operations', name: 'Inventory & Operations', icon: 'box', desc: 'Sync stock across channels, manage fulfillment, and avoid overselling.' },
];

// reviewed: slug links to /reviews/<slug>/ ; rating shown
export const resourceTools = [
  // --- research ---
  { cat: 'research', name: 'Helium 10', color: '#1E1B4B', reviewed: 'helium-10', rating: 4.5, tag: 'Best overall', url: 'https://i.helium10.com/c/7363542/3314049/37271',
    desc: 'The deepest all-in-one suite: product & keyword research, listing optimization, PPC, and refund recovery in one platform.' },
  { cat: 'research', name: 'Jungle Scout', color: '#3DAE2B', reviewed: 'jungle-scout', rating: 4.6, tag: 'Best for research', url: 'https://www.junglescout.com',
    desc: 'Cleaner and more beginner-friendly, with trusted sales estimates and a strong supplier database. Cheaper at every tier.' },
  { cat: 'research', name: 'AMZScout', color: '#FF6A45', reviewed: 'amzscout', rating: 4.3, tag: 'Budget pick', url: 'https://www.amzscout.net',
    desc: 'A lower-cost entry point for product validation, with frequent lifetime-deal promotions.' },
  { cat: 'research', name: 'ZonGuru', color: '#00B5B0', reviewed: 'zonguru', rating: 4.2, tag: 'Beginner suite', url: 'https://www.zonguru.com',
    desc: 'A clean research suite with standout Love/Hate review-sentiment analysis; great for newer private-label sellers.' },
  { cat: 'research', name: 'Keepa', color: '#FF8C1A', reviewed: 'keepa', rating: 4.4, tag: 'Price tracking', url: 'https://keepa.com',
    desc: 'The definitive price-history and sales-rank tracker. Free Chrome extension; cheap paid plan for alerts and tracking.' },

  // --- reimbursement ---
  { cat: 'reimbursement', name: 'GETIDA', color: '#0E7C66', reviewed: 'getida', tag: 'Popular service', url: 'https://getida.com',
    desc: 'A dedicated FBA reimbursement service that audits your account and files claims for you, typically taking a percentage of what it recovers.' },
  { cat: 'reimbursement', name: 'Helium 10 Refund Service', color: '#1E1B4B', reviewed: 'helium-10', tag: 'Built into suite', url: 'https://i.helium10.com/c/7363542/3314049/37271',
    desc: 'Refund recovery bundled into Helium 10\u2019s higher plans — convenient if you already use the suite for research.' },

  // --- repricing ---
  { cat: 'repricing', name: 'Aura', color: '#7C3AED', reviewed: 'aura', tag: 'Repricer', url: 'https://goaura.com',
    desc: 'An automated repricer focused on winning the Buy Box without constant manual monitoring; commonly used by Walmart and Amazon sellers.' },

  // --- accounting ---
  { cat: 'accounting', name: 'A2X', color: '#0071DC', reviewed: 'a2x', tag: 'Reconciliation', url: 'https://www.a2xaccounting.com',
    desc: 'Automatically reconciles marketplace payouts into QuickBooks or Xero, separating sales, fees, and refunds accurately.' },
  { cat: 'accounting', name: 'Sellerboard', color: '#2563EB', reviewed: 'sellerboard', rating: 4.5, tag: 'Profit analytics', url: 'https://sellerboard.com',
    desc: 'Accurate real-time per-SKU profit tracking covering 100+ Amazon fee types, plus inventory and reimbursement alerts.' },
  { cat: 'accounting', name: 'QuickBooks', color: '#2CA01C', reviewed: null, tag: 'Bookkeeping', url: 'https://quickbooks.intuit.com',
    desc: 'Widely used small-business accounting software; pairs with A2X for clean ecommerce books.' },
  { cat: 'accounting', name: 'Xero', color: '#13B5EA', reviewed: null, tag: 'Bookkeeping', url: 'https://www.xero.com',
    desc: 'Cloud accounting popular with ecommerce sellers; integrates with most marketplace and reconciliation tools.' },

  // --- operations ---
  { cat: 'operations', name: 'Inventory sync tools', color: '#E8A33D', reviewed: null, tag: 'Multichannel',
    desc: 'Keep stock counts accurate across multiple channels to prevent overselling as you expand beyond one marketplace.' },
];

export const toolsByCat = (id) => resourceTools.filter(t => t.cat === id);
