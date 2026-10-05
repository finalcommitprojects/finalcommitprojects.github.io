// Renders the poster pack and checks it.
//   node posters/build.mjs            -> ~/Downloads/FinalCommit-posters/
//   node posters/build.mjs deadline   -> only posters whose id contains "deadline"
// Needs Google Chrome installed. Uses the Chrome DevTools Protocol directly (no extra deps).
import { spawn } from 'node:child_process';
import { mkdirSync, mkdtempSync, writeFileSync, readFileSync, copyFileSync } from 'node:fs';
import { homedir, tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import QRCode from 'qrcode';
import jsQR from 'jsqr';
import { PNG } from 'pngjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(homedir(), 'Downloads', 'FinalCommit-posters');
const WA_NUMBER = '918197112324';
const only = process.argv[2] || '';

const POSTERS = ['deadline', 'register', 'viva', 'checklist', 'idea', 'sticky', 'deadline-kn', 'viva-kn', 'sticky-kn'];
const FORMATS = { status: [1080, 1920], feed: [1080, 1350] };

// The flyer's QR opens a chat with this message, so you know the student came from a printed poster.
const FLYER_TEXT = 'Hi Final Commit, I saw your poster on the notice board. I need help with my project.';
const FLYER_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(FLYER_TEXT)}`;

mkdirSync(OUT, { recursive: true });
writeFileSync(
  join(HERE, 'qr-wa.svg'),
  await QRCode.toString(FLYER_URL, { type: 'svg', margin: 0, errorCorrectionLevel: 'M', color: { dark: '#1f2a44', light: '#00000000' } }),
);

// ---- Chrome over CDP ----
const PORT = 9400 + Math.floor(Math.random() * 400);
const chrome = spawn(
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files', `--remote-debugging-port=${PORT}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), 'posters-'))}`, 'about:blank'],
  { stdio: 'ignore' },
);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let targets;
for (let i = 0; i < 60; i++) {
  try {
    targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
    if (targets.length) break;
  } catch {}
  await sleep(200);
}
const ws = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let seq = 0;
const pending = new Map();
const events = [];
ws.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) {
    pending.get(m.id)(m);
    pending.delete(m.id);
  } else events.push(m);
};
const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const id = ++seq;
    pending.set(id, (m) => (m.error ? reject(new Error(`${method}: ${m.error.message}`)) : resolve(m.result)));
    ws.send(JSON.stringify({ id, method, params }));
  });
const evaluate = async (expression) => (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result.value;

async function load(url, w, h, scale = 1) {
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: scale, mobile: false });
  events.length = 0;
  await send('Page.navigate', { url });
  for (let i = 0; i < 100 && !events.some((e) => e.method === 'Page.loadEventFired'); i++) await sleep(50);
  await evaluate('document.fonts.ready.then(() => document.fonts.size)');
  await sleep(250);
  // anything poking out of the poster is a layout bug
  return evaluate(`(() => {
    const poster = document.getElementById('poster') || document.body;
    const rect = poster.getBoundingClientRect();
    // content must stay inside the padding box: for Status that is the safe zone clear of WhatsApp's UI
    const cs = getComputedStyle(poster);
    const box = { top: rect.top + parseFloat(cs.paddingTop) - 120, right: rect.right, bottom: rect.bottom - parseFloat(cs.paddingBottom) };
    const bad = [...document.querySelectorAll('h1, p, li, .wa-pill, .sheet, .reg, .sticky, .scrap, .strip')].filter(el => !el.closest('.tear'))
      .filter(el => { const r = el.getBoundingClientRect(); return r.width && (r.right > box.right - 40 || r.bottom > box.bottom + 1 || r.top < box.top); })
      .map(el => (el.className || el.tagName) + ' +' + Math.round(el.getBoundingClientRect().bottom - box.bottom) + 'px');
    return { bad, broken: [...document.fonts].filter(f => f.status === 'error').map(f => f.family) };
  })()`);
}

async function shot(path, w, h) {
  const { data } = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: w, height: h, scale: 1 } });
  writeFileSync(path, Buffer.from(data, 'base64'));
}

await send('Page.enable');
const problems = [];
let n = 0;
for (const id of POSTERS.filter((p) => p.includes(only))) {
  n++;
  for (const [fmt, [w, h]] of Object.entries(FORMATS)) {
    const check = await load(`file://${HERE}/poster.html?p=${id}&f=${fmt}`, w, h);
    const name = `${String(POSTERS.indexOf(id) + 1).padStart(2, '0')}-${id}-${fmt}.png`;
    await shot(join(OUT, name), w, h);
    if (check.bad.length) problems.push(`${name}: overflows -> ${check.bad.join(', ')}`);
    if (check.broken.length) problems.push(`${name}: fonts failed -> ${check.broken.join(', ')}`);
    console.log(`  ${name}`);
  }
}

if (!only || 'profile'.includes(only)) {
  await load(`file://${HERE}/profile.html`, 640, 640);
  await shot(join(OUT, '00-whatsapp-profile-picture.png'), 640, 640);
  console.log('  00-whatsapp-profile-picture.png');
}

if (!only || 'flyer'.includes(only)) {
  const check = await load(`file://${HERE}/flyer.html`, 794, 1123, 2);
  await shot(join(OUT, '10-flyer-A4-preview.png'), 794, 1123);
  const { data } = await send('Page.printToPDF', { printBackground: true, preferCSSPageSize: true, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 });
  writeFileSync(join(OUT, '10-flyer-A4-print.pdf'), Buffer.from(data, 'base64'));
  if (check.bad.length) problems.push(`flyer: overflows -> ${check.bad.join(', ')}`);
  console.log('  10-flyer-A4-print.pdf + preview');

  // the QR must decode to exactly the chat link
  const png = PNG.sync.read(readFileSync(join(OUT, '10-flyer-A4-preview.png')));
  const qr = jsQR(new Uint8ClampedArray(png.data), png.width, png.height);
  if (!qr) problems.push('flyer: QR code did not decode');
  else if (qr.data !== FLYER_URL) problems.push(`flyer: QR decodes to ${qr.data}`);
  else console.log('  QR decodes to the WhatsApp chat link');
}

ws.close();
chrome.kill();

// every wa.me link in the captions must go to our number, and the prefilled texts must differ
const captions = readFileSync(join(HERE, 'captions.md'), 'utf8');
const links = [...captions.matchAll(/https:\/\/wa\.me\/[^\s)]+/g)].map((m) => new URL(m[0]));
const texts = links.map((u) => u.searchParams.get('text'));
links.forEach((u) => u.pathname !== `/${WA_NUMBER}` && problems.push(`captions: wrong number in ${u.href}`));
texts.forEach((t) => !t && problems.push('captions: a wa.me link has no prefilled text'));
const dupes = texts.filter((t, i) => texts.indexOf(t) !== i);
if (dupes.length) problems.push(`captions: repeated prefill -> ${[...new Set(dupes)].join(' | ')}`);
if (/[—–]/.test(captions)) problems.push('captions: contains an em or en dash');
console.log(`  captions: ${links.length} WhatsApp links checked`);
copyFileSync(join(HERE, 'captions.md'), join(OUT, 'captions.md'));

console.log(`\n${n} posters x 2 sizes -> ${OUT}`);
if (problems.length) {
  console.error('\nPROBLEMS:\n' + problems.join('\n'));
  process.exit(1);
}
console.log('all checks passed');
