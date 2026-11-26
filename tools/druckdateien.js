#!/usr/bin/env node
/*
 * Druckdateien für meinspiel.de (Format 59 × 91 mm) nach design/spezifikation.md,
 * mit den freigegebenen Motiven aus design/motive/ (Kartendesign-Studio).
 *
 * Erzeugt pro Karte zwei PNG-Dateien, 768 × 1146 Pixel (65 × 97 mm inkl. 3 mm Beschnitt, 300 dpi):
 *   Vorderseite: Motiv vorne.svg (für alle Karten gleich), Schriftzug, QR-Code mit
 *                https://fammarek.github.io/Czechster/#<code>, Kartencode
 *   Rückseite:   Motiv hinten_<jahrzehnt>_<1|2>.svg, Jahr, Interpret, Titel, Kartencode –
 *                um 180° gedreht angelegt (Spezifikation Abschnitt 8)
 * Variante 1/2 der Rückseite wechselt sich innerhalb eines Jahrzehnts ab (nach Jahr sortiert).
 * Texte stehen in der Freifläche data-frei (8,19,49,59); das Jahr steht auf jeder Karte an derselben Stelle
 * (Oberkante 22 mm, Archivo Black 16,5 mm). Interpret/Titel höchstens zwei Zeilen, notfalls bis 10 pt verkleinert.
 *
 * Karten mit ok:true, Video und Jahr; aufgeteilt auf Spiele zu höchstens 110 Karten, nach Jahr reihum
 * ausgeteilt, damit jedes Spiel auch allein spielbar ist. Jeder QR-Code wird nach dem Rendern gelesen und geprüft.
 *
 * Zusätzlich je Spiel zwei PDFs für den PDF-Upload bei meinspiel.de (Leitfaden 8.1): Spiel_<n>_Vorderseiten.pdf und
 * Spiel_<n>_Rueckseiten.pdf, je eine Seite 65 × 97 mm pro Karte, Seite k vorne gehört zu Seite k hinten.
 * Die Seiten enthalten die geprüften 300-dpi-PNGs unverändert (verlustfrei, keine Vektoren, Farben sRGB).
 *
 * Braucht Node, Playwright und die npm-Pakete qrcode, jsqr, pngjs sowie @fontsource/archivo-black und
 * @fontsource/noto-sans (alles richtet .claude/skills/kartendesign-studio/scripts/einrichten.sh ein):
 *   NODE_PATH=.studio-werkzeug/node_modules node tools/druckdateien.js [ziel] [fontsource-ordner]
 */
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const QRCode = require('qrcode'), jsQR = require('jsqr'), { PNG } = require('pngjs');

const ROOT = path.join(__dirname, '..');
const ZIEL = path.resolve(process.argv[2] || 'druck');
const FONTS = path.resolve(process.argv[3] || path.join(ROOT, '.studio-werkzeug/node_modules/@fontsource'));
const MOTIVE = path.join(ROOT, 'design/motive');
const BASIS = 'https://fammarek.github.io/Czechster/#';
const PRO_SPIEL = 110;
const JAHR_OBEN = 22, JAHR_MM = 16.5;

const songs = JSON.parse(fs.readFileSync(path.join(ROOT, 'songs.json'), 'utf8'));
const karten = Object.keys(songs).filter(c => c[0] !== '_' && songs[c].ok && songs[c].v && songs[c].j)
  .map(c => Object.assign({ code: c }, songs[c]));
karten.sort((a, b) => a.j - b.j || a.code.localeCompare(b.code));

// Rückseiten-Variante: innerhalb eines Jahrzehnts abwechselnd 1, 2, 1, 2 …
const zaehler = {};
for (const k of karten) {
  const d = String(Math.floor(k.j / 10) * 10).slice(2);
  zaehler[d] = (zaehler[d] || 0) + 1;
  k.motiv = `hinten_${d}_${zaehler[d] % 2 ? 1 : 2}`;
}

// Auf Spiele verteilen: nach Jahr sortiert reihum austeilen
const nSpiele = Math.ceil(karten.length / PRO_SPIEL);
const spiele = Array.from({ length: nSpiele }, () => []);
karten.forEach((k, i) => spiele[i % nSpiele].push(k));

const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));

const motivCache = {};
function motiv(name) {
  if (motivCache[name]) return motivCache[name];
  const datei = path.join(MOTIVE, name + '.svg');
  if (!fs.existsSync(datei)) throw new Error(`Motiv fehlt: ${datei}`);
  const svg = fs.readFileSync(datei, 'utf8');
  const attr = (a) => { const m = svg.match(new RegExp(`${a}="([^"]+)"`)); return m ? m[1].split(',').map(Number) : null; };
  return (motivCache[name] = { url: 'data:image/svg+xml;base64,' + Buffer.from(svg).toString('base64'),
    frei: attr('data-frei'), titel: attr('data-titel'), qr: attr('data-qr'), code: attr('data-code') });
}

function fontCss() {
  const L = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
  const LX = 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF';
  const f = (fam, w, file, r) => `@font-face{font-family:'${fam}';font-weight:${w};src:url(data:font/woff2;base64,${fs.readFileSync(path.join(FONTS, file)).toString('base64')}) format('woff2');unicode-range:${r}}`;
  let css = f('Archivo Black', 400, 'archivo-black/files/archivo-black-latin-400-normal.woff2', L)
          + f('Archivo Black', 400, 'archivo-black/files/archivo-black-latin-ext-400-normal.woff2', LX);
  for (const w of [400, 700]) css += f('Noto Sans', w, `noto-sans/files/noto-sans-latin-${w}-normal.woff2`, L)
                                   + f('Noto Sans', w, `noto-sans/files/noto-sans-latin-ext-${w}-normal.woff2`, LX);
  return css;
}
const FONT_CSS = fontCss();

// Seite 65 × 97 mm; zoom bringt 1 mm CSS exakt auf 300 dpi bei Viewport 768 × 1146 (wie render.js im Studio)
const SEITE = (body) => `<!doctype html><html><head><meta charset="utf-8"><style>${FONT_CSS}
*{margin:0;padding:0;box-sizing:border-box}
html{zoom:${768 / (65 / 25.4 * 96)}}html,body{width:65mm;height:97mm;overflow:hidden}
.seite{position:absolute;left:0;top:0;width:65mm;height:97mm;overflow:hidden;color:#1A1A1A}
.motiv{position:absolute;left:0;top:0;width:65mm;height:97mm;display:block}
.hinten{transform:rotate(180deg)}
</style></head><body>${body}</body></html>`;

function vorderseite(k, qr) {
  const m = motiv('vorne'), [tx, ty, tw, th] = m.titel, [qx, qy, qw, qh] = m.qr, [cx, cy, cw, ch] = m.code;
  return SEITE(`<div class="seite"><img class="motiv" src="${m.url}">
    <div style="position:absolute;left:${tx}mm;top:${ty}mm;width:${tw}mm;height:${th}mm;display:flex;align-items:center;justify-content:center;font:400 7.2mm/1 'Archivo Black'">Czechster</div>
    <div style="position:absolute;left:${qx + qw / 2 - 17.5}mm;top:${qy + qh / 2 - 19}mm;width:35mm;height:38mm;background:#fff;border-radius:2mm">
      <div style="position:absolute;left:2.5mm;top:2.5mm;width:30mm;height:30mm">${qr.replace('<svg', '<svg style="width:30mm;height:30mm;display:block"')}</div></div>
    <div style="position:absolute;left:${cx}mm;top:${cy}mm;width:${cw}mm;height:${ch}mm;display:flex;align-items:center;justify-content:center;font:400 3mm/1 'Noto Sans'">${esc(k.code)}</div></div>`);
}

function rueckseite(k) {
  const m = motiv(k.motiv), [fx, fy, fw, fh] = m.frei;
  return SEITE(`<div class="seite hinten"><img class="motiv" src="${m.url}">
    <div id="frei" style="position:absolute;left:${fx}mm;top:${fy}mm;width:${fw}mm;height:${fh}mm;text-align:center">
      <div id="satz" style="position:absolute;left:1mm;right:1mm;top:${JAHR_OBEN - fy}mm;bottom:6mm;display:flex;flex-direction:column;align-items:center">
        <div id="jahr" style="font:400 ${JAHR_MM}mm/1 'Archivo Black';letter-spacing:-.25mm">${k.j}</div>
        <div id="interpret" style="font:700 15pt/1.2 'Noto Sans';margin-top:3.5mm">${esc(k.i)}</div>
        <div id="titel" style="font:400 12pt/1.25 'Noto Sans';margin-top:1.6mm">${esc(k.n)}</div></div>
      <div id="code" style="position:absolute;left:0;right:0;bottom:1.5mm;font:400 3mm/1 'Noto Sans';opacity:.7">${esc(k.code)}</div></div></div>`);
}

// 300 dpi im PNG vermerken (pHYs-Chunk), Pixelmaß bleibt unverändert
function mitDpi(buf) {
  const t = []; for (let n = 0; n < 256; n++) { let c = n; for (let j = 0; j < 8; j++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
  const crc = (b) => { let x = 0xffffffff; for (const v of b) x = t[(x ^ v) & 255] ^ (x >>> 8); return (x ^ 0xffffffff) >>> 0; };
  const data = Buffer.alloc(9); data.writeUInt32BE(11811, 0); data.writeUInt32BE(11811, 4); data[8] = 1;
  const typ = Buffer.from('pHYs'), len = Buffer.alloc(4), c = Buffer.alloc(4);
  len.writeUInt32BE(9); c.writeUInt32BE(crc(Buffer.concat([typ, data])));
  const ende = 8 + 25;                                      // Signatur + IHDR
  return Buffer.concat([buf.slice(0, ende), len, typ, data, c, buf.slice(ende)]);
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 768, height: 1146 }, deviceScaleFactor: 1 });
  const laden = async (html) => { await page.setContent(html); await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => Promise.all([...document.images].map(i => i.decode()))); };
  const foto = async () => { const b = await page.screenshot({ type: 'png' }); const p = PNG.sync.read(b);
    if (p.width !== 768 || p.height !== 1146) throw new Error(`Bildgröße ${p.width}×${p.height}`); return mitDpi(b); };

  const bericht = [], motivZahl = {};
  for (let s = 0; s < spiele.length; s++) {
    const ordner = path.join(ZIEL, `Spiel_${s + 1}`);
    fs.mkdirSync(ordner, { recursive: true });
    for (let n = 0; n < spiele[s].length; n++) {
      const k = spiele[s][n], nr = String(n + 1).padStart(3, '0');
      motivZahl[k.motiv] = (motivZahl[k.motiv] || 0) + 1;

      // Vorderseite
      const qr = await QRCode.toString(BASIS + k.code, { type: 'svg', errorCorrectionLevel: 'M', margin: 0, color: { dark: '#000000', light: '#ffffff' } });
      await laden(vorderseite(k, qr));
      const vorne = await foto();
      fs.writeFileSync(path.join(ordner, `${nr}_Czechster_Front_${k.code}.png`), vorne);
      const png = PNG.sync.read(vorne), gelesen = jsQR(new Uint8ClampedArray(png.data), png.width, png.height);
      if (!gelesen || gelesen.data !== BASIS + k.code) bericht.push(`${k.code}: QR-Code liest ${gelesen ? gelesen.data : 'nichts'}`);

      // Rückseite: lange Namen bis 10 pt verkleinern, dann Luft zum Rand der Freifläche prüfen
      await laden(rueckseite(k));
      const satz = await page.evaluate(() => {
        const seite = document.querySelector('.hinten'); seite.style.transform = 'none';   // ungedreht messen
        const f = document.getElementById('frei'), mm = f.getBoundingClientRect().width / parseFloat(f.style.width);
        const z = (e) => Math.round(e.offsetHeight / parseFloat(getComputedStyle(e).lineHeight));
        for (const id of ['interpret', 'titel']) { const e = document.getElementById(id); let pt = id === 'interpret' ? 15 : 12;
          while (z(e) > 2 && pt > 10) { pt -= 0.5; e.style.fontSize = pt + 'pt'; } }
        const fr = f.getBoundingClientRect(), rg = document.createRange();
        rg.selectNodeContents(document.getElementById('satz')); const t = rg.getBoundingClientRect();
        const c = document.getElementById('code').getBoundingClientRect();
        seite.style.transform = '';
        return { luft: Math.min(t.left - fr.left, fr.right - t.right, c.top - t.bottom) / mm,
          zI: z(document.getElementById('interpret')), zT: z(document.getElementById('titel')) };
      });
      if (satz.luft < 0.9 || satz.zI > 2 || satz.zT > 2)
        bericht.push(`${k.code} ${k.i} – ${k.n}: Luft ${satz.luft.toFixed(1)} mm, Zeilen ${satz.zI}/${satz.zT}`);
      fs.writeFileSync(path.join(ordner, `${nr}_Czechster_Back_${k.code}_${k.j}.png`), await foto());
    }
    // PDFs: dieselben PNGs, gleiche Reihenfolge, eine Seite je Karte
    for (const [seite, name] of [['Front', 'Vorderseiten'], ['Back', 'Rueckseiten']]) {
      const bilder = fs.readdirSync(ordner).filter(f => f.includes(`_Czechster_${seite}_`) && f.endsWith('.png')).sort();
      if (bilder.length !== spiele[s].length) throw new Error(`${name}: ${bilder.length} statt ${spiele[s].length} Bilder`);
      const pdfSeite = await browser.newPage();
      await pdfSeite.setContent(`<!doctype html><html><head><style>@page{size:65mm 97mm;margin:0}*{margin:0;padding:0}
        img{display:block;width:65mm;height:97mm;page-break-after:always;break-after:page}img:last-child{page-break-after:auto;break-after:auto}</style></head><body>`
        + bilder.map(f => `<img src="data:image/png;base64,${fs.readFileSync(path.join(ordner, f)).toString('base64')}">`).join('') + '</body></html>');
      await pdfSeite.evaluate(() => Promise.all([...document.images].map(i => i.decode())));
      await pdfSeite.pdf({ path: path.join(ZIEL, `Spiel_${s + 1}_${name}.pdf`), width: '65mm', height: '97mm', printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }, preferCSSPageSize: true });
      await pdfSeite.close();
    }
    console.log(`Spiel ${s + 1}: ${spiele[s].length} Karten → ${ordner} + 2 PDFs`);
  }
  await browser.close();
  console.log('Rückseiten je Motiv: ' + Object.keys(motivZahl).sort().map(m => `${m} ${motivZahl[m]}`).join(', '));
  console.log(bericht.length ? 'Auffällig:\n  ' + bericht.join('\n  ') : 'Alle Karten geprüft: QR-Codes lesbar, Texte passen in die Freifläche.');
})();
