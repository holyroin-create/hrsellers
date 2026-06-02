// Tool reviews. Entries are loaded from editable JSON in src/cms-content/reviews/
// (managed via the /admin panel). Categories & helpers stay here.

export const categories = [
  { id: 'research-tools', name: 'Research Tools', desc: 'Product, keyword, and market research suites.' },
  { id: 'reimbursement-tools', name: 'Reimbursement Tools', desc: 'Recover money Amazon owes you from lost & damaged inventory.' },
  { id: 'repricing-tools', name: 'Repricing Tools', desc: 'Automated price adjustments to win the Buy Box.' },
  { id: 'accounting-tax', name: 'Accounting & Tax', desc: 'Bookkeeping, reconciliation, and sales-tax compliance.' },
];

const modules = import.meta.glob('../cms-content/reviews/*.json', { eager: true });
export const reviews = Object.values(modules)
  .map(m => m.default)
  .sort((a, b) => (a.order || 999) - (b.order || 999));

export const getReview = (slug) => reviews.find(r => r.slug === slug);
export const reviewsByCategory = (catId) => reviews.filter(r => r.category === catId);
