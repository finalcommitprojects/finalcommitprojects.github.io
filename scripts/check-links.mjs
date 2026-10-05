// Checks the built site in dist/: every internal link resolves to a page, and every
// WhatsApp / tel / mailto link points at the contact details in src/data/site.ts.
// Run after `npm run build`: node scripts/check-links.mjs
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const site = readFileSync('src/data/site.ts', 'utf8');
const pick = (k) => site.match(new RegExp(`${k}: '([^']+)'`))[1];
const WA = pick('whatsapp');
const EMAIL = pick('email');
const TEL = pick('phoneHref');

const files = [];
const walk = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p);
});
walk('dist');

const bad = [];
const waTexts = new Set();
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  for (const [, raw] of html.matchAll(/href="([^"]+)"/g)) {
    const href = raw.replace(/&amp;/g, '&');
    if (href.startsWith('https://wa.me/')) {
      const u = new URL(href);
      if (u.pathname !== `/${WA}`) bad.push(`${f}: WhatsApp number ${u.pathname}`);
      waTexts.add(u.searchParams.get('text'));
    } else if (href.startsWith('tel:')) {
      if (href !== TEL) bad.push(`${f}: ${href}`);
    } else if (href.startsWith('mailto:')) {
      if (!href.startsWith(`mailto:${EMAIL}?`)) bad.push(`${f}: ${href}`);
    } else if (href.startsWith('/')) {
      const path = href.split(/[?#]/)[0];
      const target = path.endsWith('/') ? join('dist', path, 'index.html') : join('dist', path);
      if (!existsSync(target)) bad.push(`${f}: broken ${href}`);
    }
  }
}
console.log(`${files.length} pages checked, ${waTexts.size} distinct WhatsApp messages`);
console.log('sample messages:', [...waTexts].slice(0, 3));
if (bad.length) {
  console.error(bad.join('\n'));
  process.exit(1);
}
console.log('all links OK');
