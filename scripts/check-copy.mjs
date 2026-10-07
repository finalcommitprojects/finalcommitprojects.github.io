// House-style check on the built site: fails on wording we don't use.
// Run after `npm run build`: node scripts/check-copy.mjs
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BANNED = [
  [/anydesk/i, 'AnyDesk (setup is by Google Meet screen share)'],
  [/ready to build|projects ready/i, '"ready" (the list is project ideas)'],
  [/75\+/, '"75+" (the count is 77)'],
  [/all done/i, '"all done"'],
  [/\(we did\.\)/i, 'aside'],
  [/\bhonestly\b/i, '"honestly"'],
  [/[—–]/, 'em/en dash'],
  [/price\? depends|depends on scope/i, 'price wording (use the price table)'],
  [/pay in parts/i, '"pay in parts" (link to the payment stages)'],
  [/research paper/i, 'research papers (not offered)'],
  [/\bthe register\b|>Register</, '"register" (use "project ideas")'],
];

const files = [];
const walk = (d) =>
  readdirSync(d).forEach((f) => {
    const p = join(d, f);
    statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p);
  });
walk('dist');

const hits = [];
for (const f of files) {
  // visible text only: drop scripts, styles and tags
  const text = readFileSync(f, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ');
  for (const [re, why] of BANNED) {
    const m = text.match(re);
    if (m) hits.push(`${f}: ${why} -> "${text.slice(Math.max(0, m.index - 40), m.index + 40).replace(/\s+/g, ' ').trim()}"`);
  }
}
console.log(`${files.length} pages checked for banned copy`);
if (hits.length) {
  console.error(hits.join('\n'));
  process.exit(1);
}
console.log('copy OK');
