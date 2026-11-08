// Gate 5: policy lint. Required pages, owner config, ad switch rules, forbidden patterns.
// Each rule maps to an ID in docs/POLITIKA_KONTROL_LISTESI.md.
import fs from 'node:fs'; import path from 'node:path';
import { ROOT, read, walk, Report } from './lib.mjs';
const r = new Report('policy');
const cfg = JSON.parse(read('site.config.json'));
const RELEASE = process.env.RELEASE === '1';
const miss = cfg.required.filter((k) => !String(cfg[k] || '').trim());
if (miss.length) r.err(`site.config.json required fields empty: ${miss.join(', ')} — status "SAHİP BİLGİSİ BEKLİYOR"`);
if (!cfg.ownerConfirmed) (RELEASE ? r.err.bind(r) : r.warn.bind(r))('site.config.json ownerConfirmed=false — the owner has not confirmed publisher/editor/contact details (blocks deploy)');
if (cfg.adsEnabled && !cfg.googleCmpConfigured) r.err('adsEnabled=true but googleCmpConfigured=false (consent message must be live first)');
if (cfg.adsEnabled && !Object.values(cfg.adSlots).every((s) => /^\d{6,}$/.test(s))) r.err('adsEnabled=true but ad slot ids missing');

const REQUIRED = ['index.html', '404.html', 'about/index.html', 'contact/index.html', 'privacy/index.html', 'terms/index.html', 'cookie-policy/index.html', 'disclaimer/index.html', 'editorial-standards/index.html', 'corrections/index.html', 'image-credits/index.html', 'sitemap/index.html', 'robots.txt', 'ads.txt', 'sitemap-index.xml', 'CNAME'];
for (const f of REQUIRED) if (!fs.existsSync(path.join(ROOT, 'dist', f))) r.err(`dist/${f} missing`);
const ads = fs.existsSync(path.join(ROOT, 'dist/ads.txt')) ? read('dist/ads.txt') : '';
if (!new RegExp(`google\\.com, ${cfg.adsensePublisherId.replace('ca-', '')}, DIRECT, f08c47fec0942fa0`).test(ads)) r.err('ads.txt does not contain the AdSense line for the configured publisher id');
const robots = fs.existsSync(path.join(ROOT, 'dist/robots.txt')) ? read('dist/robots.txt') : '';
if (/User-agent:\s*Mediapartners-Google\s*\nDisallow:\s*\//i.test(robots) || /User-agent:\s*\*\s*\nDisallow:\s*\/\s*$/im.test(robots)) r.err('robots.txt blocks crawling');

const FORBIDDEN = [
  [/click (on )?(the |our )?ads?/i, 'encourages ad clicks (A: encouraging clicks)'],
  [/support (us|this site) by (clicking|visiting)/i, 'encourages ad clicks'],
  [/text-indent:\s*-\d{3,}/i, 'hidden text (B05)'],
  [/\b(we|I) (have )?tested\b|\bin our experience\b|\bour (clients|customers) (told|say)/i, 'experience/testing claim not backed by a real process'],
  [/\bonly \d+ (left|spots)\b|\bact now\b|\blimited[- ]time (offer|only|deal)\b/i, 'artificial urgency'],
  [/lorem ipsum|\bTODO\b|FILL_ME|REPLACE THIS/, 'placeholder text'],
  [/novadata|amzprep|feedvisor|junglescout|helium ?10/i, 'reference to a non-primary source or vendor'],
];
for (const f of [...walk('src/content/guides', '.mdx'), ...walk('src/content/marketplaces', '.mdx')]) {
  const fm = read(f).split('---')[1] || '';
  if (!/^reviewedBy:\s*\S/m.test(fm)) (RELEASE ? r.err.bind(r) : r.warn.bind(r))(`${f}: no reviewedBy — a named person must review the page before release (B06/A03)`);
}
const NO_ADS = /^dist\/(404\.html|(about|contact|privacy|terms|cookie-policy|disclaimer|editorial-standards|corrections|image-credits|sitemap|search|tools|quiz|glossary|policy-log|resources|start-here)\/)/;
for (const f of walk('dist', '.html')) {
  const html = read(f);
  if (/http-equiv="refresh"/i.test(html)) continue; // redirect stubs
  const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ');
  for (const [re, why] of FORBIDDEN) if (re.test(f.includes('tools/') ? text : html.replace(/<script[\s\S]*?<\/script>/g, ''))) r.err(`${f}: ${why} (${(text.match(re) || [''])[0]})`);
  const slots = (html.match(/class="adsbygoogle"/g) || []).length;
  if (slots > 2) r.err(`${f}: ${slots} ad units (site maximum is 2)`);
  if ((slots || /adsbygoogle\.js/.test(html)) && NO_ADS.test(f)) r.err(`${f}: ad code on a page that must not carry ads`);
  if (!cfg.adsEnabled && /adsbygoogle/.test(html)) r.err(`${f}: ad code present while adsEnabled=false`);
  if (!f.endsWith('dist/404.html') && !/<link rel="canonical"/.test(html)) r.err(`${f}: no canonical`);
  if ((html.match(/<h1\b/g) || []).length !== 1) r.err(`${f}: must have exactly one <h1>`);
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (desc.length < 50) r.err(`${f}: meta description missing/short`);
  if (/^dist\/(guides|marketplaces)\/[^/]+\/index\.html$/.test(f)) {
    const words = text.split(/\s+/).filter(Boolean).length;
    if (words < 900) r.err(`${f}: only ${words} words on a content page`);
    if (!/Last verified/.test(html)) r.err(`${f}: no "Last verified" date`);
    if (!/class="sources"/.test(html)) r.err(`${f}: no sources section`);
  }
}
r.done();
