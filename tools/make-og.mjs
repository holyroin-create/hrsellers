// 1200x630 share images: the page's verified photo under a navy panel with the title. Original composition.
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
import { ROOT, read, walk } from './lib.mjs';
const man = fs.existsSync(path.join(ROOT, 'data/images.json')) ? JSON.parse(read('data/images.json')).filter((m) => m.status === 'verified') : [];
const byId = new Map(man.map((m) => [m.image_id, m]));
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const wrap = (s, n) => { const o = []; let l = ''; for (const w of s.split(' ')) { if ((l + ' ' + w).trim().length > n) { o.push(l.trim()); l = w; } else l += ' ' + w; } if (l.trim()) o.push(l.trim()); return o; };
async function make(out, title, kicker, photoId) {
  const lines = wrap(title, 26).slice(0, 4);
  const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#0b1f33" stop-opacity="1"/><stop offset=".55" stop-color="#0b1f33" stop-opacity=".92"/><stop offset="1" stop-color="#0b1f33" stop-opacity=".35"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/><rect x="72" y="70" width="44" height="6" rx="3" fill="#f26a21"/>
  <text x="130" y="80" font-family="DejaVu Sans, sans-serif" font-weight="700" font-size="22" fill="#ffb27f" letter-spacing="2">${esc(kicker.toUpperCase())}</text>
  ${lines.map((l, i) => `<text x="72" y="${180 + i * 74}" font-family="DejaVu Sans, sans-serif" font-weight="700" font-size="60" fill="#ffffff">${esc(l)}</text>`).join('')}
  <text x="72" y="566" font-family="DejaVu Sans, sans-serif" font-weight="700" font-size="30" fill="#ffffff">FBA Tactics</text>
  <text x="270" y="566" font-family="DejaVu Sans, sans-serif" font-size="22" fill="#c3d1e3">Fees · duties · rules — checked at the source</text></svg>`);
  const m = byId.get(photoId);
  const base = m && fs.existsSync(path.join(ROOT, 'public', `${m.file}-1600.webp`)) ? sharp(path.join(ROOT, 'public', `${m.file}-1600.webp`)).resize(1200, 630, { fit: 'cover', position: 'attention' }) : sharp({ create: { width: 1200, height: 630, channels: 3, background: '#0b1f33' } });
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await base.composite([{ input: svg }]).png({ palette: true, quality: 80, compressionLevel: 9 }).toFile(out);
  
}
const kick = { importing: 'Importing to the US', fees: 'Marketplace fees', compliance: 'Product compliance', money: 'Money & tax', operations: 'Selling operations' };
await make(path.join(ROOT, 'public/og/default.png'), 'Know every fee, duty and rule before you ship', 'Reference for marketplace sellers', 'home-hero');
for (const [dir, kind] of [['src/content/guides', 'guides'], ['src/content/marketplaces', 'marketplaces'], ['src/content/reviews', 'reviews']]) for (const f of walk(dir, '.mdx')) {
  const t = read(f); const title = (t.match(/^title:\s*"?(.*?)"?\s*$/m) || [])[1] || ''; const pillar = (t.match(/^pillar:\s*"?(\w+)/m) || [])[1] || 'fees'; const slug = path.basename(f, '.mdx');
  await make(path.join(ROOT, 'public/og', kind, slug + '.png'), title, kick[pillar] || '', (t.match(/^\s+image:\s*"?([a-z0-9-]+)/m) || [])[1] || slug);
}
console.log('og images written');
