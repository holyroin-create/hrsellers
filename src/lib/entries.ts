import { getCollection } from 'astro:content';
import { PILLARS } from './pillars';
export async function allEntries() {
  const g = await getCollection('guides', (e) => !e.data.draft);
  const m = await getCollection('marketplaces', (e) => !e.data.draft);
  const r = await getCollection('reviews', (e) => !e.data.draft);
  return [...r.map((e) => ({ e, href: `/reviews/${e.id}/`, kind: 'reviews' as const })), ...g.map((e) => ({ e, href: `/guides/${e.id}/`, kind: 'guides' as const })), ...m.map((e) => ({ e, href: `/marketplaces/${e.id}/`, kind: 'marketplaces' as const }))];
}
export const pillarName = (p: keyof typeof PILLARS) => PILLARS[p].name;
