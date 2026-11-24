#!/usr/bin/env node
/*
 * Druckdateien für meinspiel.de (Format 59 × 91 mm) nach design/spezifikation.md.
 *
 * Erzeugt pro Karte zwei PNG-Dateien, 768 × 1146 Pixel (65 × 97 mm inkl. 3 mm Beschnitt, 300 dpi):
 *   Vorderseite: QR-Code mit https://fammarek.github.io/Czechster/#<code>
 *   Rückseite:   Jahr, Interpret, Titel – um 180° gedreht (gleiche Leserichtung nach dem Falten)
 * Karten mit ok:true, Video und Jahr; aufgeteilt auf Spiele zu höchstens 110 Karten,
 * Jahrzehnte gleichmäßig verteilt, damit jedes Spiel auch allein spielbar ist.
 *
 * Abweichungen von der Spezifikation (Abschnitt 1 der Spezifikation hat Vorrang, siehe CLAUDE.md):
 *   - Jahr: eine gemeinsame Schriftgröße, so dass das breiteste Jahr in die sichere Zone passt.
 *   - Kartencode: 7,5 mm vom Dateirand statt 6–7 mm.
 *
 * Nicht Teil des Spiels selbst – braucht Node, Playwright und die npm-Pakete qrcode, jsqr, pngjs
 * sowie die Schriften @fontsource/archivo-black und @fontsource/noto-sans:
 *   NODE_PATH=<ordner>/node_modules node tools/druckdateien.js <ziel> <schriftordner>
 */
const fs = require('fs'), path = require('path'), zlib = require('zlib');
const { chromium } = require('playwright');
const QRCode = require('qrcode'), jsQR = require('jsqr'), { PNG } = require('pngjs');

const ROOT = path.join(__dirname, '..');
const ZIEL = path.resolve(process.argv[2] || 'druck');
const FONTS = path.resolve(process.argv[3] || 'fonts');
const BASIS = 'https://fammarek.github.io/Czechster/#';
const PRO_SPIEL = 110;

const songs = JSON.parse(fs.readFileSync(path.join(ROOT, 'songs.json'), 'utf8'));
const karten = Object.keys(songs).filter(c => c[0] !== '_' && songs[c].ok && songs[c].v && songs[c].j)
  .map(c => Object.assign({ code: c }, songs[c]));

// Auf Spiele verteilen: nach Jahr sortieren und reihum austeilen
karten.sort((a, b) => a.j - b.j || a.code.localeCompare(b.code));
const nSpiele = Math.ceil(karten.length / PRO_SPIEL);
const spiele = Array.from({ length: nSpiele }, () => []);
karten.forEach((k, i) => spiele[i % nSpiele].push(k));

// Farben laut Spezifikation (Jahrzehnt-Farbe mit Weiß gemischt)
const DEKADE = { 1960: ['#E69F00', 22], 1970: ['#56B4E9', 22], 1980: ['#009E73', 22], 1990: ['#F0E442', 28],
                 2000: ['#0072B2', 20], 2010: ['#D55E00', 20], 2020: ['#CC79A7', 22] };
function mische(hex, pct) {
  const n = parseInt(hex.slice(1), 16), c = [n >> 16, (n >> 8) & 255, n & 255];
  return '#' + c.map(v => Math.round(v * pct / 100 + 255 * (1 - pct / 100)).toString(16).padStart(2, '0')).join('');
}
const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));

function fontCss() {
  const L = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
  const LX = 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF';
  const f = (fam, w, file, r) => `@font-face{font-family:'${fam}';font-weight:${w};src:url(data:font/woff2;base64,${fs.readFileSync(path.join(FONTS, file)).toString('base64')}) format('woff2');unicode-range:${r}}`;
  let css = f('Archivo Black', 400, 'fontsource-archivo-black/files/archivo-black-latin-400-normal.woff2', L)
          + f('Archivo Black', 400, 'fontsource-archivo-black/files/archivo-black-latin-ext-400-normal.woff2', LX);
  for (const w of [400, 700]) css += f('Noto Sans', w, `fontsource-noto-sans/files/noto-sans-latin-${w}-normal.woff2`, L)
                                   + f('Noto Sans', w, `fontsource-noto-sans/files/noto-sans-latin-ext-${w}-normal.woff2`, LX);
  return css;
}

const SEITE = (body, css) => `<!doctype html><html><head><meta charset="utf-8"><style>
${fontCss()}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:65mm;height:97mm;overflow:hidden}
.seite{position:absolute;left:0;top:0;width:65mm;height:97mm;overflow:hidden;color:#1A1A1A}
.code{position:absolute;right:7.5mm;bottom:7.5mm;font:400 3mm/1 'Noto Sans';letter-spacing:.04em}
/* Vorderseite */
.vorne{background:#C9A227}
.vorne::before{content:"";position:absolute;inset:0;
  background:repeating-conic-gradient(from 0deg at 50% 40.7mm,transparent 0deg 10.25deg,rgba(168,132,30,.18) 10.25deg 11.25deg);
  -webkit-mask-image:radial-gradient(circle at 50% 40.7mm,transparent 22mm,#000 30mm);mask-image:radial-gradient(circle at 50% 40.7mm,transparent 22mm,#000 30mm)}
.titel{position:absolute;left:0;right:0;top:11mm;text-align:center;font:400 7.2mm/1 'Archivo Black';letter-spacing:.15mm}
.qrfeld{position:absolute;left:14mm;top:22mm;width:37mm;height:37mm;background:#fff;border-radius:2mm;display:flex;align-items:center;justify-content:center}
.qrfeld svg{width:32mm;height:32mm;display:block}
/* Rückseite */
.hinten{transform:rotate(180deg)}
.jahr{position:absolute;left:0;right:0;text-align:center;font-family:'Archivo Black';line-height:1;letter-spacing:-.3mm}
.text{position:absolute;left:7mm;right:7mm;text-align:center}
.interpret{font:700 15pt/1.2 'Noto Sans'}
.lied{font:400 12pt/1.25 'Noto Sans';margin-top:1.8mm;opacity:.9}
.linie{width:18mm;height:.35mm;background:#1A1A1A;opacity:.22;margin:4mm auto 0}
.hinten .code{opacity:.7}
${css || ''}
</style></head><body>${body}</body></html>`;

async function qrSvg(text) {
  return QRCode.toString(text, { type: 'svg', errorCorrectionLevel: 'M', margin: 0, color: { dark: '#000000', light: '#ffffff' } });
}

// 300 dpi im PNG vermerken (pHYs-Chunk), Pixelmaß bleibt unverändert
function mitDpi(buf) {
  const crc = (b) => { let c, t = []; for (let n = 0; n < 256; n++) { c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
    let x = 0xffffffff; for (const v of b) x = t[(x ^ v) & 255] ^ (x >>> 8); return (x ^ 0xffffffff) >>> 0; };
  const data = Buffer.alloc(9); data.writeUInt32BE(11811, 0); data.writeUInt32BE(11811, 4); data[8] = 1;
  const typ = Buffer.from('pHYs'), len = Buffer.alloc(4), c = Buffer.alloc(4);
  len.writeUInt32BE(9); c.writeUInt32BE(crc(Buffer.concat([typ, data])));
  const ende = 8 + 25;                                      // Signatur + IHDR
  return Buffer.concat([buf.slice(0, ende), len, typ, data, c, buf.slice(ende)]);
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 246, height: 367 }, deviceScaleFactor: 768 / (65 / 25.4 * 96) });
  const clip = { x: 0, y: 0, width: 246, height: 367 };       // etwas größer, danach exakt zuschneiden
  const zuschnitt = (buf) => { const src = PNG.sync.read(buf), out = new PNG({ width: 768, height: 1146 });
    PNG.bitblt(src, out, 0, 0, 768, 1146, 0, 0); return PNG.sync.write(out); };
  const shot = async (html) => { await page.setContent(html); await page.evaluate(() => document.fonts.ready);
    return mitDpi(zuschnitt(await page.screenshot({ clip, type: 'png' }))); };

  // 1) gemeinsame Jahr-Schriftgröße: breitestes Jahr ≤ 49 mm
  const jahre = [...new Set(karten.map(k => String(k.j)))];
  await page.setContent(SEITE(jahre.map(j => `<span class="jahr" style="position:static;font-size:22mm">${j}</span><br>`).join('')));
  await page.evaluate(() => document.fonts.ready);
  const breiteMm = await page.evaluate(() => Math.max(...[...document.querySelectorAll('.jahr')].map(e => e.getBoundingClientRect().width)) / (96 / 25.4));
  const jahrMm = Math.min(22, Math.floor(22 * 49 / breiteMm * 10) / 10);
  console.log(`Jahr: breitestes ${breiteMm.toFixed(1)} mm bei 22 mm → Schriftgröße ${jahrMm} mm`);

  const bericht = [];
  for (let s = 0; s < spiele.length; s++) {
    const ordner = path.join(ZIEL, `Spiel_${s + 1}`);
    fs.mkdirSync(ordner, { recursive: true });
    for (let n = 0; n < spiele[s].length; n++) {
      const k = spiele[s][n], nr = String(n + 1).padStart(3, '0');
      // Vorderseite
      const vorne = await shot(SEITE(`<div class="seite vorne"><div class="titel">Czechster</div>
        <div class="qrfeld">${await qrSvg(BASIS + k.code)}</div><div class="code">${esc(k.code)}</div></div>`));
      fs.writeFileSync(path.join(ordner, `${nr}_Czechster_Front_${k.code}.png`), vorne);
      // Rückseite: Jahr mittig bei y = 35 mm, Text darunter; lange Namen bis 10 pt verkleinern
      const [farbe, pct] = DEKADE[Math.floor(k.j / 10) * 10] || ['#888888', 20];
      const html = SEITE(`<div class="seite hinten" style="background:${mische(farbe, pct)}">
        <div class="jahr" style="font-size:${jahrMm}mm;top:${35 - jahrMm * 0.36}mm">${k.j}</div>
        <div class="text" style="top:${35 + jahrMm * 0.36 + 5}mm"><div class="interpret">${esc(k.i)}</div><div class="lied">${esc(k.n)}</div><div class="linie"></div></div>
        <div class="code">${esc(k.code)}</div></div>`);
      await page.setContent(html); await page.evaluate(() => document.fonts.ready);
      const passt = await page.evaluate(() => {
        const zeilen = (e) => Math.round(e.getBoundingClientRect().height / parseFloat(getComputedStyle(e).lineHeight));
        for (const [sel, min] of [['.interpret', 10], ['.lied', 10]]) {
          const e = document.querySelector(sel); let pt = parseFloat(getComputedStyle(e).fontSize) * 0.75;
          while (zeilen(e) > 2 && pt > min) { pt -= 0.5; e.style.fontSize = pt + 'pt'; }
        }
        const r = document.querySelector('.text').getBoundingClientRect(), mm = 96 / 25.4;
        return { unten: r.bottom / mm, zeilenI: zeilen(document.querySelector('.interpret')), zeilenL: zeilen(document.querySelector('.lied')) };
      });
      if (passt.unten > 85 || passt.zeilenI > 2 || passt.zeilenL > 2) bericht.push(`${k.code} ${k.i} – ${k.n}: Text bis ${passt.unten.toFixed(1)} mm, Zeilen ${passt.zeilenI}/${passt.zeilenL}`);
      const hinten = mitDpi(zuschnitt(await page.screenshot({ clip, type: 'png' })));
      fs.writeFileSync(path.join(ordner, `${nr}_Czechster_Back_${k.code}_${k.j}.png`), hinten);

      // QR-Kontrolle: gedruckter Code muss die richtige Adresse liefern
      const png = PNG.sync.read(vorne), qr = jsQR(new Uint8ClampedArray(png.data), png.width, png.height);
      if (!qr || qr.data !== BASIS + k.code) bericht.push(`${k.code}: QR-Code liest ${qr ? qr.data : 'nichts'}`);
    }
    console.log(`Spiel ${s + 1}: ${spiele[s].length} Karten → ${ordner}`);
  }
  await browser.close();
  console.log(bericht.length ? 'Auffällig:\n  ' + bericht.join('\n  ') : 'Alle Karten geprüft: QR-Codes lesbar, Texte in der sicheren Zone.');
})();
