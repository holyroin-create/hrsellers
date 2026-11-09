// Gate: AdSense/Search policy lint (rule IDs in docs/POLITIKA_KONTROL_LISTESI.md).
import fs from 'node:fs'; import path from 'node:path';
import { ROOT, read, walk, Report } from './lib.mjs';
const r = new Report('policy'); const REL = process.env.RELEASE === '1'; const soft = (m) => (REL ? r.err(m) : r.warn(m));
const cfg = JSON.parse(read('site.config.json'));
const miss = cfg.required.filter((k) => !String(cfg[k] || '').trim()); if (miss.length) soft(`site.config.json empty: ${miss.join(', ')} — SAHİP BİLGİSİ BEKLİYOR`);
if (!cfg.ownerConfirmed) soft('site.config.json ownerConfirmed=false');
// Editor review log: only the configured editor, valid non-future dates, existing pages (docs/EDITOR_INCELEME_SISTEMI.md).
{ const log = JSON.parse(read('data/editor-reviews.json')); const today = new Date().toISOString().slice(0, 10);
  for (const x of log) { if (x.reviewer !== cfg.editorName) r.err(`editor-reviews: reviewer "${x.reviewer}" is not the configured editor`); if (!/^\d{4}-\d{2}-\d{2}$/.test(x.date) || x.date > today) r.err(`editor-reviews: bad date ${x.date} for ${x.url}`); const [, c, sl] = String(x.url).split('/'); if (!fs.existsSync(path.join(ROOT, `src/content/${c}/${sl}.mdx`))) r.err(`editor-reviews: no page ${x.url}`); } }
if (cfg.adsEnabled && (!cfg.googleCmpConfigured || !Object.values(cfg.adSlots).every((s) => /^\d{6,}$/.test(s)))) r.err('adsEnabled requires googleCmpConfigured and numeric ad slot ids');
const REQ = ['index.html', '404.html', 'about/index.html', 'contact/index.html', 'privacy/index.html', 'cookie-policy/index.html', 'terms/index.html', 'disclaimer/index.html', 'editorial-standards/index.html', 'corrections/index.html', 'image-credits/index.html', 'author/muhammet-ali-turk/index.html', 'affiliate-disclosure/index.html', 'sitemap/index.html', 'robots.txt', 'ads.txt', 'sitemap-index.xml'];
for (const f of REQ) if (!fs.existsSync(path.join(ROOT, 'dist', f))) r.err(`dist/${f} missing`);
if (fs.existsSync(path.join(ROOT, 'dist/ads.txt')) && !read('dist/ads.txt').includes(`google.com, ${cfg.adsensePublisherId.replace('ca-', '')}, DIRECT, f08c47fec0942fa0`)) r.err('ads.txt does not match the publisher id');
const BAD = [[/(?<!per-)\bclick (on )?(the |our )?ads?\b/i, 'encourages ad clicks'], [/support (us|this site) by clicking/i, 'encourages ad clicks'], [/\b(we|I) (have )?tested\b|\bin our experience\b|\bour clients\b/i, 'unbacked experience claim'], [/\blimited[- ]time (offer|deal)\b|\bact now\b/i, 'artificial urgency'], [/lorem ipsum|\bTODO\b|photo pending/, 'placeholder text']];
const NOADS = /^dist\/(404\.html|(about|contact|privacy|terms|cookie-policy|disclaimer|editorial-standards|corrections|image-credits|sitemap|search|tools|quiz|glossary|policy-log|resources|start-here|faq|reference|checklists)\/|index\.html)/;
for (const f of walk('dist', '.html')) {
  const h = read(f); if (/http-equiv="refresh"/.test(h)) continue;
  const text = h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ');
  for (const [re, why] of BAD) if (re.test(text)) r.err(`${f}: ${why} ("${text.match(re)[0]}")`);
  const units = (h.match(/class="adsbygoogle"/g) || []).length; if (units > 2) r.err(`${f}: ${units} ad units`);
  if ((units || /adsbygoogle\.js/.test(h)) && NOADS.test(f)) r.err(`${f}: ad code on a page that must not carry ads`);
  if (!cfg.adsEnabled && /adsbygoogle/.test(h)) r.err(`${f}: ad code while ads are off`);
  if (!f.endsWith('404.html') && !/rel="canonical"/.test(h)) r.err(`${f}: no canonical`);
  if ((h.match(/<h1\b/g) || []).length !== 1) r.err(`${f}: needs exactly one h1`);
  if (!/<meta name="description" content="[^"]{60,}"/.test(h)) r.err(`${f}: description missing/short`);
  if (/^dist\/(guides|marketplaces|reviews)\/[^/]+\/index\.html$/.test(f)) {
    const words = text.split(/\s+/).filter(Boolean).length; const floor = f.startsWith('dist/reviews/') ? 800 : 1000; if (words < floor) r.err(`${f}: ${words} words (min ${floor})`);
    if (!/class="sources"/.test(h)) r.err(`${f}: no sources`);
    if (!/<img\b[^>]*src="\/photos\//.test(h)) soft(`${f}: no photo`);
  }
}
r.done();
