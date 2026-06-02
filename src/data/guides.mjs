// Guide content. Articles are loaded from editable JSON in src/cms-content/guides/
// (managed via the /admin panel). Categories & helpers stay here.

export const guideCategories = [
  { id: 'getting-started', name: 'Getting Started', color: '#F1641E', soft: '#FFEDE4', icon: 'rocket', desc: 'First steps for new sellers — choosing a platform, setting up, and avoiding rookie mistakes.' },
  { id: 'shipping-logistics', name: 'Shipping & Logistics', color: '#0071DC', soft: '#E6F1FB', icon: 'truck', desc: 'Inbound shipments, fulfillment, discrepancies, and getting inventory where it needs to be.' },
  { id: 'fees-reimbursements', name: 'Fees & Reimbursements', color: '#0E7C66', soft: '#E7F4F0', icon: 'refund', desc: 'Understanding marketplace fees and recovering the money platforms owe you.' },
  { id: 'account-management', name: 'Account Management', color: '#8B5CF6', soft: '#F1ECFD', icon: 'shield', desc: 'Staying compliant, healthy metrics, and handling suspensions and appeals.' },
  { id: 'scaling', name: 'Scaling Your Business', color: '#E8A33D', soft: '#FBF0DC', icon: 'chart', desc: 'Growing past your first product — new channels, automation, and team building.' },
];

const modules = import.meta.glob('../cms-content/guides/*.json', { eager: true });
export const guides = Object.values(modules)
  .map(m => m.default)
  .sort((a, b) => (a.order || 999) - (b.order || 999));

export const getGuide = (slug) => guides.find(g => g.slug === slug);
export const guidesByCategory = (catId) => guides.filter(g => g.category === catId);
export const getGuideCategory = (id) => guideCategories.find(c => c.id === id);
