import { allEntries } from '../lib/entries';
export async function GET() {
  const strip = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/[#*|`{}\[\]]/g, ' ').replace(/\s+/g, ' ').slice(0, 5000);
  const docs = (await allEntries()).map((x) => ({ u: x.href, t: x.e.data.title, d: x.e.data.description, c: x.e.data.pillar, b: strip(x.e.body || '') + ' ' + x.e.data.faq.map((f) => f.q).join(' ') }));
  docs.push(
    { u: '/tools/', t: 'Free seller calculators', d: 'Profit, duty, fee comparison, dimensional weight, cash flow, ad budget.', c: 'tools', b: 'calculator profit margin duty tariff mpf hmf dimensional weight cash flow acos' },
    { u: '/policy-log/', t: 'Policy log', d: 'Official notices and fee changes.', c: 'reference', b: 'federal register cbp ustr notice change' },
    { u: '/glossary/', t: 'Glossary', d: 'Terms as the rules define them.', c: 'reference', b: '' },
    { u: '/faq/', t: 'Seller FAQ', d: 'Questions sellers search for, answered.', c: 'reference', b: '' },
  );
  return new Response(JSON.stringify(docs), { headers: { 'Content-Type': 'application/json' } });
}
