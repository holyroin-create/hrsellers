#!/usr/bin/env node
/**
 * Pre-deploy audit.
 *
 * Runs the checks that the AdSense review of August 2026 turned up by hand, so
 * a regression fails a build instead of failing an application. Run after
 * `npm run build`:
 *
 *   npm run verify
 *
 * Exit code 1 on any error. Warnings do not fail the run.
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative, dirname, normalize, sep } from 'node:path';
import { existsSync } from 'node:fs';

const DIST = 'dist';
const MIN_WORDS = 350;          // below this, an indexed page reads as thin
const MAX_ADS_PER_PAGE = 3;
const errors = [];
const warnings = [];
const notes = [];

const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);
const note = (m) => notes.push(m);

/* ------------------------------------------------------------------ */

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const strip = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/gi, ' ');

const mainOf = (html) => {
  const m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  return m ? m[1] : html;
};

/* ------------------------------------------------------------------ */

if (!existsSync(DIST)) {
  console.error(`\n  ${DIST}/ not found. Run "npm run build" first.\n`);
  process.exit(1);
}

const files = (await walk(DIST)).filter((f) => f.endsWith('.html'));
const pages = [];

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const route = '/' + relative(DIST, file).split(sep).join('/').replace(/index\.html$/, '');
  const noindex = /name="robots"[^>]*noindex/.test(html);
  const words = strip(mainOf(html)).split(/\s+/).filter(Boolean).length;

  pages.push({ file, route, noindex, words, html });

  /* --- placeholder text that must never reach production --- */
  for (const marker of ['REPLACE THIS PAGE', 'FILL_ME_IN', 'Lorem ipsum', 'TODO:', 'TK TK']) {
    if (html.includes(marker)) err(`${route} contains placeholder text: "${marker}"`);
  }

  /* --- unrendered template syntax --- */
  if (/\{\{|\$\{[a-z]/i.test(strip(mainOf(html)))) {
    warn(`${route} may contain unrendered template syntax in visible text`);
  }

  /* --- SEO basics --- */
  if (!/rel="canonical"/.test(html)) err(`${route} has no canonical link`);
  const desc = html.match(/<meta name="description" content="([^"]*)"/);
  if (!desc || desc[1].trim().length < 50) err(`${route} has a missing or very short meta description`);
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) err(`${route} has ${h1s} <h1> elements, expected exactly 1`);
  const title = html.match(/<title>([^<]*)<\/title>/);
  if (!title || !title[1].trim()) err(`${route} has no title`);

  /* --- thin content --- */
  if (!noindex && words < MIN_WORDS) {
    err(`${route} is indexed with only ${words} words of body copy (minimum ${MIN_WORDS})`);
  }

  /* --- advertising placement --- */
  const adCount = (html.match(/class="adslot/g) || []).length;
  if (adCount > MAX_ADS_PER_PAGE) {
    err(`${route} renders ${adCount} ad containers, maximum is ${MAX_ADS_PER_PAGE}`);
  }
  if (adCount > 0 && words < MIN_WORDS) {
    err(`${route} carries ${adCount} ad container(s) on a page with only ${words} words`);
  }
  if (adCount > 0 && noindex) {
    err(`${route} carries ad containers but is noindex`);
  }
  /* an ad inside the sticky category bar or the ticker would be a policy breach */
  const chrome = html.match(/<nav class="navbar[\s\S]*?<\/nav>|<div class="ticker[\s\S]*?<\/div>\s*<\/div>/g) || [];
  if (chrome.some((c) => c.includes('adslot'))) {
    err(`${route} has an ad container inside the navigation or ticker`);
  }
  /* a CTA button sharing an ad container */
  if (/class="adslot[\s\S]{0,600}?class="btn/.test(html) || /class="btn[^"]*"[\s\S]{0,300}?class="adslot/.test(html)) {
    warn(`${route} has a call-to-action button close to an ad container — check the spacing`);
  }
}

/* --- internal links resolve --- */
let brokenLinks = 0;
for (const { file, html, route } of pages) {
  const hrefs = [...html.matchAll(/(?:href|src)="([^"#?]+)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    if (/^(https?:|mailto:|data:|\/\/)/.test(href)) continue;
    const target = href.startsWith('/')
      ? join(DIST, href)
      : normalize(join(dirname(file), href));
    const candidates = [target, join(target, 'index.html')];
    if (!candidates.some((c) => existsSync(c))) {
      err(`${route} links to ${href}, which does not exist in the build`);
      brokenLinks++;
    }
  }
}

/* --- required public files --- */
for (const [f, why] of [
  ['dist/robots.txt', 'crawlers need it'],
  ['dist/ads.txt', 'AdSense requires it at the domain root'],
  ['dist/sitemap-index.xml', 'submitted in Search Console'],
  ['dist/404.html', 'a real 404 rather than a soft 200'],
]) {
  if (!existsSync(f)) err(`${f} is missing — ${why}`);
}

if (existsSync('dist/robots.txt')) {
  const robots = await readFile('dist/robots.txt', 'utf8');
  if (/Disallow:\s*\/\s*$/m.test(robots)) err('robots.txt disallows the whole site');
  if (!robots.includes('Sitemap:')) warn('robots.txt does not point at the sitemap');
  if (!robots.includes('/style-guide/')) warn('robots.txt does not disallow /style-guide/');
}

if (existsSync('public/_redirects')) {
  const r = await readFile('public/_redirects', 'utf8');
  if (/\/\*\s+\/index\.html\s+200/.test(r)) {
    err('public/_redirects has a catch-all rule that returns the homepage with 200 for every URL');
  }
}

/* --- required trust pages, reachable from the footer --- */
const home = pages.find((p) => p.route === '/');
for (const required of ['/privacy/', '/terms/', '/contact/', '/about/', '/editorial-standards/', '/corrections/']) {
  if (!pages.some((p) => p.route === required)) {
    err(`required page ${required} is missing`);
  } else if (home && !home.html.includes(`href="${required}"`)) {
    warn(`${required} is not linked from the home page footer`);
  }
}

/* --- every guide must cite dated sources --- */
for (const p of pages.filter((x) => x.route.startsWith('/guides/') && x.route !== '/guides/')) {
  if (!p.html.includes('class="sources"')) {
    err(`${p.route} has no sources block`);
  } else {
    const accessed = (p.html.match(/class="acc"/g) || []).length;
    if (accessed === 0) err(`${p.route} cites sources without retrieval dates`);
  }
  if (!/datePublished/.test(p.html)) warn(`${p.route} has no datePublished in its structured data`);
}

/* --- advertising switch state --- */
const cfg = await readFile('src/config.ts', 'utf8');
const adsOn = /adsenseEnabled:\s*true/.test(cfg);
const anyAdRendered = pages.some((p) => p.html.includes('class="adslot'));
if (!adsOn && anyAdRendered) {
  err('AdSense is disabled but ad containers are still rendering');
}
if (adsOn && !anyAdRendered) {
  warn('AdSense is enabled but no ad container rendered — are the slot IDs set?');
}
note(adsOn ? 'AdSense: ENABLED' : 'AdSense: disabled (no ad containers rendered — expected before approval)');

/* --- content volume, the thing the rejection was actually about --- */
const guides = pages.filter((p) => p.route.startsWith('/guides/') && p.route !== '/guides/').length;
note(`Published guides: ${guides}`);
if (guides < 12) {
  warn(`${guides} guides published. The August 2026 rejection reason was low-value content; 12-15 is a reasonable target before re-applying.`);
}

/* ------------------------------------------------------------------ */

const line = '─'.repeat(60);
console.log(`\n${line}\n  Pre-deploy audit — ${pages.length} pages\n${line}`);
for (const n of notes) console.log(`  ·  ${n}`);
console.log(`  ·  Internal links checked, ${brokenLinks} broken`);

if (warnings.length) {
  console.log(`\n  WARNINGS (${warnings.length})`);
  for (const w of warnings) console.log(`    !  ${w}`);
}

if (errors.length) {
  console.log(`\n  ERRORS (${errors.length})`);
  for (const e of errors) console.log(`    x  ${e}`);
  console.log(`\n${line}\n  Not ready to deploy.\n${line}\n`);
  process.exit(1);
}

console.log(`\n${line}\n  No errors. Safe to deploy.\n${line}\n`);
