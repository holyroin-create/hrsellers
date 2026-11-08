// Generates 1200x630 Open Graph PNGs from page titles. Original graphics; no photos or third-party marks.
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
import { ROOT, read, walk } from './lib.mjs';
const out = path.join(ROOT, 'public/og');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function wrap(s, n) { const o = []; let l = ''; for (const w of s.split(' ')) { if ((l + ' ' + w).trim().length > n) { o.push(l.trim()); l = w; } else l += ' ' + w; } if (l.trim()) o.push(l.trim()); return o; }
function svg(title, eyebrow) {
  const lines = wrap(title, 30).slice(0, 4);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fbfaf7"/>${Array.from({ length: 14 }, (_, i) => `<line x1="0" x2="1200" y1="${i * 45 + 20}" y2="${i * 45 + 20}" stroke="#ece8e0"/>`).join('')}
  <rect width="18" height="630" fill="#b4400f"/>
  <g transform="translate(80,70)"><path d="M3 9.5 9.5 3H31v28H9.5L3 24.5z" fill="#15202b" transform="scale(2)"/><circle cx="18" cy="34" r="5.2" fill="#fbfaf7"/><rect x="30" y="20" width="22" height="5" fill="#b4400f"/><rect x="30" y="31.6" width="22" height="5" fill="#fbfaf7"/><rect x="30" y="43.2" width="14" height="5" fill="#fbfaf7"/>
  <text x="84" y="44" font-family="DejaVu Serif, Georgia, serif" font-weight="700" font-size="34" fill="#15202b">FBA Tactics</text></g>
  <text x="84" y="210" font-family="DejaVu Sans Mono, monospace" font-size="24" fill="#b4400f" letter-spacing="2">${esc(eyebrow.toUpperCase())}</text>
  ${lines.map((l, i) => `<text x="80" y="${280 + i * 72}" font-family="DejaVu Serif, Georgia, serif" font-weight="700" font-size="58" fill="#15202b">${esc(l)}</text>`).join('')}
  <text x="84" y="590" font-family="DejaVu Sans, sans-serif" font-size="24" fill="#3d4a57">Read from the primary source · fbatactics.com</text></svg>`;
}
async function make(file, title, eyebrow) { fs.mkdirSync(path.dirname(file), { recursive: true }); await sharp(Buffer.from(svg(title, eyebrow))).png({ compressionLevel: 9, palette: true }).toFile(file); }
await make(path.join(out, 'default.png'), 'Marketplace fees and US import rules', 'Reference for marketplace sellers');
for (const [dir, kind] of [['src/content/guides', 'guides'], ['src/content/marketplaces', 'marketplaces']]) {
  for (const f of walk(dir, '.mdx')) {
    const t = read(f); const title = (t.match(/^title:\s*"?(.*?)"?\s*$/m) || [])[1] || ''; const cat = (t.match(/^category:\s*"?(.*?)"?\s*$/m) || [])[1] || '';
    await make(path.join(out, kind, path.basename(f, '.mdx') + '.png'), title.replace(/\\"/g, '"'), cat);
  }
}
console.log('og images written');
