// Fails the build if copy that students read as fake, or that we no longer promise, creeps back into the site.
// Run after `npm run build`: node scripts/check-copy.mjs
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BANNED = [
  [/anydesk/i, 'AnyDesk (associated with UPI fraud; we use Google Meet screen share)'],
  [/ready to build|projects ready/i, '"ready" claims (they are ideas, built from scratch)'],
  [/75\+/, '"75+" (the count is 77)'],
  [/all done/i, '"all done" (staged, pre-ticked visuals)'],
  [/\(we did\.\)/i, 'cute aside'],
  [/\bhonestly\b/i, '"honestly"'],
  [/[—–]/, 'em/en dash'],
  [/price\? depends|depends on scope/i, 'vague price line (use the payment stages)'],
  [/pay in parts/i, '"pay in parts" (link to how paying works instead)'],
  [/research paper/i, 'research-paper writing (not offered)'],
  [/\bthe register\b|>Register</, '"register" wording (they are project ideas)'],
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
