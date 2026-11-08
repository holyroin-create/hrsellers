import { getCollection } from 'astro:content';
export async function GET() {
  const g = await getCollection('guides', (e) => !e.data.draft);
  const m = await getCollection('marketplaces', (e) => !e.data.draft);
  const strip = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/[#*|`{}\[\]]/g, ' ').replace(/\s+/g, ' ').slice(0, 4000);
  const docs = [
    ...g.map((e) => ({ u: `/guides/${e.id}/`, t: e.data.title, d: e.data.description, c: e.data.category, b: strip(e.body || '') })),
    ...m.map((e) => ({ u: `/marketplaces/${e.id}/`, t: e.data.title, d: e.data.description, c: e.data.category, b: strip(e.body || '') })),
    { u: '/tools/', t: 'Calculators', d: 'Margin, duty and fee, dimensional weight, cash flow and ad budget calculators.', c: 'Tools', b: '' },
    { u: '/policy-log/', t: 'Policy log', d: 'Official notices affecting importers and sellers.', c: 'Log', b: '' },
    { u: '/glossary/', t: 'Glossary', d: 'Terms as defined in regulations and platform pages.', c: 'Reference', b: '' },
  ];
  return new Response(JSON.stringify(docs), { headers: { 'Content-Type': 'application/json' } });
}
