#!/usr/bin/env node
/*
 * Schachteldeckel rendern und prüfen – meinspiel.de „Spielkartenbox 1“ (100 × 133 × 20 mm), Deckel-Druckdatei
 * 175 × 207 mm (2067 × 2445 px bei 300 dpi). Maße aus dem Datenblatt (datenblatt-box1.pdf):
 *   Deckelfläche (gestaltbar)  x 40,5–134,5  y 41,5–165,5  (94 × 124 mm)
 *   Seitenflügel oben          x 40,5–134,5  y 21,3–34,3   (94 × 13)
 *   Seitenflügel unten         x 40,5–134,5  y 172,7–185,7
 *   Seitenflügel links         x 20,3–33,3   y 41,5–165,5  (13 × 124)
 *   Seitenflügel rechts        x 141,7–154,7 y 41,5–165,5
 *   Hintergrund bis zum Dateirand füllen. Wichtiges ≥ 3 mm innerhalb der grünen Flächen bleibt automatisch frei.
 *
 * Das Motiv-SVG (viewBox 0 0 175 207) enthält KEINEN Text. Es ist in den Platzhalterfarben der Vorderseite
 * angelegt; je Teil werden sie ersetzt:  #C9A227 Grund · #A8841E dunkler Ton · #E3C25A Licht · #1A1A1A bleibt.
 * Texte setzt dieses Skript: Attribute am <svg>
 *   data-titel="x,y,b,h"        „Czechster“ (Archivo Black, so groß wie es passt, höchstens --titelmm)
 *   data-untertitel="x,y,b,h"   „Teil 1“ …
 *   Seitenflügel: „Czechster · Teil N“ automatisch, lesbar von außen (oben 180°, links/rechts gedreht).
 *
 *   node schachtel.js <motiv.svg> <teil 1|2|3> <grund> <dunkel> <licht> [--aus <datei.png>] [--pruefen]
 * erzeugt <aus>.png (Druck, 300 dpi) und <aus>-vorschau.png (mit Stanzlinie rot, gestaltbaren Flächen grün).
 */
const fs = require('fs'), path = require('path'), { execSync } = require('child_process');
const WZ = path.join(__dirname, '../../../../.studio-werkzeug/node_modules');
module.paths.push(WZ, execSync('npm root -g').toString().trim());
const { chromium } = require('playwright'); const { PNG } = require('pngjs');

const a = process.argv.slice(2);
const [datei, teil, grund, dunkel, licht] = a;
const ausIdx = a.indexOf('--aus');
const aus = ausIdx >= 0 ? a[ausIdx + 1].replace(/\.png$/, '') : datei.replace(/\.svg$/, '') + '-teil' + teil;
const pruefen = a.includes('--pruefen');
let svg = fs.readFileSync(datei, 'utf8');
const attr = (n) => { const m = svg.match(new RegExp(`${n}="([^"]+)"`)); return m ? m[1].split(',').map(Number) : null; };
const fehler = [];
if (/<text|<tspan|<image|<foreignObject/i.test(svg)) fehler.push('Motiv enthält Text- oder Bildelemente.');
svg = svg.replace(/#C9A227/gi, grund).replace(/#A8841E/gi, dunkel).replace(/#E3C25A/gi, licht);

const font = (fam, file) => `@font-face{font-family:'${fam}';src:url(data:font/woff2;base64,${fs.readFileSync(path.join(WZ, '@fontsource', file)).toString('base64')}) format('woff2')}`;
const fonts = font('Archivo Black', 'archivo-black/files/archivo-black-latin-400-normal.woff2')
  + font('Noto Sans', 'noto-sans/files/noto-sans-latin-700-normal.woff2');

const FLUEGEL = { oben: [40.5, 21.3, 94, 13, 180], unten: [40.5, 172.7, 94, 13, 0], links: [20.3, 41.5, 13, 124, 90], rechts: [141.7, 41.5, 13, 124, -90] };
const titel = attr('data-titel'), unter = attr('data-untertitel');
if (!titel || !unter) fehler.push('data-titel oder data-untertitel fehlt.');

function seite(overlay) {
  const box = (r, inner, extra = '') => `<div style="position:absolute;left:${r[0]}mm;top:${r[1]}mm;width:${r[2]}mm;height:${r[3]}mm;display:flex;align-items:center;justify-content:center;${extra}">${inner}</div>`;
  let h = `<img src="data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}" style="position:absolute;left:0;top:0;width:175mm;height:207mm">`;
  h += box(titel, `<span id="titel" style="font:400 30mm/1 'Archivo Black';white-space:nowrap;color:#1A1A1A">Czechster</span>`);
  h += box(unter, `<span id="unter" style="font:400 12mm/1 'Archivo Black';white-space:nowrap;color:#1A1A1A;letter-spacing:.4mm">Teil ${teil}</span>`);
  for (const [n, [x, y, b, hh, rot]] of Object.entries(FLUEGEL)) {
    const quer = rot === 90 || rot === -90, w = quer ? hh : b, ht = quer ? b : hh;
    h += `<div style="position:absolute;left:${x + b / 2}mm;top:${y + hh / 2}mm;width:${w}mm;height:${ht}mm;transform:translate(-50%,-50%) rotate(${rot}deg);display:flex;align-items:center;justify-content:center">
      <span class="fl" style="font:400 6.2mm/1 'Archivo Black';white-space:nowrap;color:#1A1A1A">Czechster · Teil ${teil}</span></div>`;
  }
  if (overlay) {
    h += `<svg style="position:absolute;left:0;top:0;width:175mm;height:207mm" viewBox="0 0 175 207">
      <g fill="#3c3" fill-opacity=".18" stroke="#080" stroke-width=".3">
        <rect x="40.5" y="41.5" width="94" height="124"/><rect x="40.5" y="21.3" width="94" height="13"/><rect x="40.5" y="172.7" width="94" height="13"/>
        <rect x="20.3" y="41.5" width="13" height="124"/><rect x="141.7" y="41.5" width="13" height="124"/></g>
      <path fill="none" stroke="#e0007a" stroke-width=".5" d="M37.5 13.3 H137.5 V33.3 L144.5 38.5 H162.7 V168.5 H144.5 L137.5 173.7 V193.7 H37.5 V173.7 L30.5 168.5 H12.3 V38.5 H30.5 L37.5 33.3 Z"/></svg>`;
  }
  return `<!doctype html><html><head><meta charset="utf-8"><style>${fonts}*{margin:0;padding:0}html{zoom:${2067 / (175 / 25.4 * 96)}}html,body{width:175mm;height:207mm;overflow:hidden;position:relative}</style></head><body>${h}</body></html>`;
}

(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 2067, height: 2445 }, deviceScaleFactor: 1 });
  const laden = async (html) => { await p.setContent(html); await p.evaluate(() => document.fonts.ready);
    await p.evaluate(() => Promise.all([...document.images].map(i => i.decode())));
    // Titel und Flügeltexte in ihre Flächen einpassen (nur verkleinern)
    return p.evaluate(() => {
      const passe = (el) => { const par = el.parentElement; let fs = parseFloat(getComputedStyle(el).fontSize);
        const bw = par.offsetWidth * 0.94, bh = par.offsetHeight * 0.9;   // ungedrehte Layoutmaße, Zoom-unabhängig
        while ((el.offsetWidth > bw || el.offsetHeight > bh) && fs > 4) { fs *= 0.97; el.style.fontSize = fs + 'px'; } return fs; };
      const mm = 96 / 25.4 * parseFloat(getComputedStyle(document.documentElement).zoom || 1);
      return { titel: passe(document.getElementById('titel')) / (96 / 25.4), unter: passe(document.getElementById('unter')) / (96 / 25.4),
        fl: [...document.querySelectorAll('.fl')].map(e => passe(e) / (96 / 25.4)) };
    }); };
  const groessen = await laden(seite(false));
  const druck = await p.screenshot({ type: 'png' });
  fs.writeFileSync(aus + '.png', druck);
  await laden(seite(true));
  fs.writeFileSync(aus + '-vorschau.png', await p.screenshot({ type: 'png' }));
  await b.close();
  const png = PNG.sync.read(druck);
  if (png.width !== 2067 || png.height !== 2445) fehler.push(`Bildgröße ${png.width}×${png.height} statt 2067×2445`);
  // Symmetrie links–rechts nur in der Deckelfläche ohne Text prüfen ist aufwendig; grob: ganze Datei ohne Texte nicht prüfbar → nur melden
  console.log(`${aus}.png: Titel ${groessen.titel.toFixed(1)} mm, Untertitel ${groessen.unter.toFixed(1)} mm, Flügelschrift ${Math.min(...groessen.fl).toFixed(1)} mm`);
  if (groessen.fl.some(x => x < 3)) fehler.push('Flügelschrift unter 3 mm.');
  if (pruefen) console.log(fehler.length ? 'NACHBESSERN:\n  ' + fehler.join('\n  ') : 'BESTANDEN');
})();
