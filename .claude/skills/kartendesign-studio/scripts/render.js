#!/usr/bin/env node
/*
 * Rendert ein Czechster-Motiv (SVG, viewBox 0 0 65 97 mm) in Druckgröße und prüft es.
 *
 *   node render.js <motiv.svg> [--pruefen] [--text "Jahr|Interpret|Titel"]
 *
 * Ausgabe: <motiv>.png (768 × 1146 px, 300 dpi, ohne Überlagerungen)
 *          <motiv>-vorschau.png (mit Beispieltext bzw. QR-Platzhalter, Schnittkante rot, sichere Zone blau)
 * Mit --pruefen: Messwerte und am Ende "ERGEBNIS: BESTANDEN" oder "ERGEBNIS: NACHBESSERN".
 */
const fs = require('fs'), path = require('path'), { execSync } = require('child_process');
const ROOT = execSync('git rev-parse --show-toplevel', { cwd: __dirname }).toString().trim();
const WZ = path.join(ROOT, '.studio-werkzeug', 'node_modules');
module.paths.push(WZ, execSync('npm root -g').toString().trim());
let chromium, PNG;
try { ({ chromium } = require('playwright')); ({ PNG } = require('pngjs')); }
catch (e) { console.error('Werkzeug fehlt: bash .claude/skills/kartendesign-studio/scripts/einrichten.sh'); process.exit(2); }

const args = process.argv.slice(2);
const datei = args.find(a => !a.startsWith('--') && args[args.indexOf(a) - 1] !== '--text');
if (!datei) { console.error('Aufruf: node render.js <motiv.svg> [--pruefen] [--text "Jahr|Interpret|Titel"]'); process.exit(2); }
const pruefen = args.includes('--pruefen');
const tIdx = args.indexOf('--text');
const svg = fs.readFileSync(datei, 'utf8');
const attr = (n) => { const m = svg.match(new RegExp(`<svg[^>]*\\s${n}="([^"]*)"`)); return m ? m[1] : null; };
const rechteck = (s) => s ? s.split(',').map(Number) : null;
const istVorne = !!attr('data-qr');
const motiv = attr('data-motiv') || path.basename(datei, '.svg');
const dekade = (motiv.match(/hinten_(\d\d)/) || [])[1];
const LEIT = { 60: '#E69F00', 70: '#56B4E9', 80: '#009E73', 90: '#D9C400', '00': '#0072B2', 10: '#D55E00', 20: '#CC79A7' };
const beispiel = tIdx >= 0 ? args[tIdx + 1].split('|') : ['1985', 'Václav Neckář & Helena Vondráčková', 'Stříhali dohola malého chlapečka'];

const font = (fam, w, sub) => {
  const f = path.join(WZ, '@fontsource', fam === 'Archivo Black' ? 'archivo-black' : 'noto-sans', 'files',
    `${fam === 'Archivo Black' ? 'archivo-black' : 'noto-sans'}-${sub}-${w}-normal.woff2`);
  return `@font-face{font-family:'${fam}';font-weight:${w};src:url(data:font/woff2;base64,${fs.readFileSync(f).toString('base64')}) format('woff2');unicode-range:${sub === 'latin' ? 'U+0000-00FF' : 'U+0100-024F'}}`;
};
const fonts = ['latin', 'latin-ext'].map(s => font('Archivo Black', 400, s) + font('Noto Sans', 400, s) + font('Noto Sans', 700, s)).join('');
const svgUrl = 'data:image/svg+xml;base64,' + Buffer.from(svg).toString('base64');

function seite(overlay) {
  let inhalt = '';
  if (overlay) {
    if (istVorne) {
      const [tx, ty, tw, th] = rechteck(attr('data-titel')) || [7, 13, 51, 10];
      const [qx, qy, qw, qh] = rechteck(attr('data-qr'));
      inhalt += `<div style="position:absolute;left:${tx}mm;top:${ty}mm;width:${tw}mm;height:${th}mm;display:flex;align-items:center;justify-content:center;font:400 7.2mm/1 'Archivo Black';color:#1A1A1A">Czechster</div>`;
      inhalt += `<div style="position:absolute;left:${qx + qw / 2 - 17.5}mm;top:${qy + qh / 2 - 19}mm;width:35mm;height:38mm;background:#fff;border-radius:2mm">
        <div style="position:absolute;left:2.5mm;top:2.5mm;width:30mm;height:30mm;background:repeating-conic-gradient(#000 0 25%,#fff 0 50%) 0 0/3mm 3mm"></div>
        ${attr('data-code') ? '' : `<div style="position:absolute;left:0;right:0;top:34mm;text-align:center;font:400 2.8mm/1 'Noto Sans'">k1x</div>`}</div>`;
      const code = rechteck(attr('data-code'));
      if (code) inhalt += `<div style="position:absolute;left:${code[0]}mm;top:${code[1]}mm;width:${code[2]}mm;height:${code[3]}mm;display:flex;align-items:center;justify-content:center;font:400 3mm/1 'Noto Sans';color:#1A1A1A">k1x</div>`;
    } else {
      // Satz wie im Druck: Jahr 16,5 mm, Interpret ≤ 2 Zeilen (15 → min. 10 pt), Titel ≤ 2 Zeilen (12 → min. 10 pt),
      // Kartencode fest unten in der Freifläche. Alles mit ≥ 1 mm Luft zum Rand der Freifläche.
      // Das Jahr steht auf JEDER Rückseite exakt gleich: Oberkante 22 mm vom Dateirand (Wunsch des Besitzers).
      const [fx, fy, fw, fh] = rechteck(attr('data-frei')) || [8, 19, 49, 59];
      inhalt += `<div id="frei" style="position:absolute;left:${fx}mm;top:${fy}mm;width:${fw}mm;height:${fh}mm;color:#1A1A1A;text-align:center">
        <div id="satz" style="position:absolute;left:1mm;right:1mm;top:${22 - fy}mm;bottom:6mm;display:flex;flex-direction:column;align-items:center;justify-content:flex-start">
          <div id="jahr" style="font:400 16.5mm/1 'Archivo Black';letter-spacing:-.25mm">${beispiel[0]}</div>
          <div id="interpret" style="font:700 15pt/1.2 'Noto Sans';margin-top:3.5mm">${beispiel[1]}</div>
          <div id="titel" style="font:400 12pt/1.25 'Noto Sans';margin-top:1.6mm">${beispiel[2]}</div></div>
        <div id="code" style="position:absolute;left:0;right:0;bottom:1.5mm;font:400 3mm/1 'Noto Sans';opacity:.7">k1x</div></div>`;
    }
    inhalt += `<div style="position:absolute;left:3mm;top:3mm;width:59mm;height:91mm;border:.25mm dashed #e00;border-radius:5mm"></div>
      <div style="position:absolute;left:7mm;top:7mm;width:51mm;height:83mm;border:.25mm dotted #00f"></div>`;
  }
  return `<!doctype html><html><head><meta charset="utf-8"><style>${fonts}*{margin:0;padding:0}html{zoom:${768 / (65 / 25.4 * 96)}}html,body{width:65mm;height:97mm;overflow:hidden}</style></head>
    <body><img src="${svgUrl}" style="position:absolute;left:0;top:0;width:65mm;height:97mm">${inhalt}</body></html>`;
}

(async () => {
  const b = await chromium.launch();
  // Seite exakt 768 × 1146 px: mm-Maße per zoom skalieren statt per Geräte-Pixelfaktor (sonst rundet Chromium
  // die Bildbreite auf 246 CSS-px auf, und die Spiegelachse liegt ein halbes Pixel daneben).
  const p = await b.newPage({ viewport: { width: 768, height: 1146 }, deviceScaleFactor: 1 });
  const shot = async (html) => {
    await p.setContent(html); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(50);
    const src = PNG.sync.read(await p.screenshot({ clip: { x: 0, y: 0, width: 768, height: 1146 } }));
    const o = new PNG({ width: 768, height: 1146 }); PNG.bitblt(src, o, 0, 0, 768, 1146, 0, 0); return o;
  };
  const roh = await shot(seite(false));
  // Vorschau: lange Namen verkleinern wie im Druck und messen, ob der Text mit Luft in die Freifläche passt
  let satz = null;
  const vor = await (async () => {
    await p.setContent(seite(true)); await p.evaluate(() => document.fonts.ready);
    satz = await p.evaluate(() => {
      const f = document.getElementById('frei'); if (!f) return null;
      const mm = f.getBoundingClientRect().width / parseFloat(f.style.width);
      const z = (e) => Math.round(e.offsetHeight / parseFloat(getComputedStyle(e).lineHeight));
      for (const id of ['interpret', 'titel']) { const e = document.getElementById(id); let pt = id === 'interpret' ? 15 : 12;
        while (z(e) > 2 && pt > 10) { pt -= 0.5; e.style.fontSize = pt + 'pt'; } }
      const fr = f.getBoundingClientRect(), r = (id) => document.getElementById(id).getBoundingClientRect();
      const rg = document.createRange(); rg.selectNodeContents(document.getElementById('satz')); const t = rg.getBoundingClientRect();
      const c = r('code');
      return { links: (t.left - fr.left) / mm, rechts: (fr.right - t.right) / mm, oben: (t.top - fr.top) / mm, unten: (c.top - t.bottom) / mm,
        codeUnten: (fr.bottom - c.bottom) / mm, zI: z(document.getElementById('interpret')), zT: z(document.getElementById('titel')),
        jahrBreite: r('jahr').width / mm };
    });
    await p.waitForTimeout(50);
    const src = PNG.sync.read(await p.screenshot({ clip: { x: 0, y: 0, width: 768, height: 1146 } }));
    const o = new PNG({ width: 768, height: 1146 }); PNG.bitblt(src, o, 0, 0, 768, 1146, 0, 0); return o;
  })();
  await b.close();
  const basis = datei.replace(/\.svg$/, '');
  fs.writeFileSync(basis + '.png', PNG.sync.write(roh));
  fs.writeFileSync(basis + '-vorschau.png', PNG.sync.write(vor));
  console.log(`Gerendert: ${basis}.png, ${basis}-vorschau.png`);
  if (!pruefen) return;

  const W = 768, H = 1146, px = (mm) => mm * W / 65, D = roh.data;
  const rgb = (x, y) => { const i = (y * W + x) * 4; return [D[i], D[i + 1], D[i + 2]]; };
  const fehler = [], hinweise = [];
  // 1) Verbotene Elemente
  if (/<text[\s>]|<tspan|<foreignObject|<image[\s>]/.test(svg)) fehler.push('Motiv enthält <text>, <image> oder <foreignObject> – Motive sind reine Vektorformen ohne Schrift.');
  if (/<filter|filter=/.test(svg)) hinweise.push('Filter gefunden – im Druck riskant, besser vermeiden.');
  // 2) Linienstärken und Punktgrößen
  const duenn = [...svg.matchAll(/stroke-width="([\d.]+)"/g)].map(m => +m[1]).filter(v => v > 0 && v < 0.3);
  if (duenn.length) fehler.push(`${duenn.length}× stroke-width unter 0,3 mm (kleinster Wert ${Math.min(...duenn)}).`);
  const klein = [...svg.matchAll(/<circle[^>]*\sr="([\d.]+)"/g)].map(m => +m[1]).filter(v => v > 0 && v < 0.18);
  if (klein.length) fehler.push(`${klein.length}× Kreis mit Radius unter 0,18 mm.`);
  // 3) Symmetrie (mittlere Abweichung 0–255)
  const sym = (fn) => { let s = 0, n = 0; for (let y = 0; y < H; y += 2) for (let x = 0; x < W / 2; x += 2) { const a = rgb(x, y), [x2, y2] = fn(x, y), c = rgb(x2, y2); s += Math.abs(a[0] - c[0]) + Math.abs(a[1] - c[1]) + Math.abs(a[2] - c[2]); n += 3; } return s / n; };
  const lr = sym((x, y) => [W - 1 - x, y]);
  console.log(`Symmetrie links–rechts: Abweichung ${lr.toFixed(1)} (Ziel ≤ 4)`);
  if (lr > 4) fehler.push(`Nicht links–rechts-symmetrisch (Abweichung ${lr.toFixed(1)}).`);
  if (!istVorne) {
    const tb = sym((x, y) => [x, H - 1 - y]);
    console.log(`Symmetrie oben–unten:   Abweichung ${tb.toFixed(1)} (Ziel ≤ 4)`);
    if (tb > 4) fehler.push(`Nicht oben–unten-symmetrisch (Abweichung ${tb.toFixed(1)}).`);
  }
  // 4) Freiflächen: ruhig (Streuung) und für Rückseiten hell genug für schwarze Schrift
  const flaeche = (r, name, hell) => {
    if (!r) { fehler.push(`Attribut für ${name} fehlt am <svg>.`); return; }
    const [x0, y0, w, h] = r.map(px), L = [];
    for (let y = Math.ceil(y0 + 4); y < y0 + h - 4; y += 2) for (let x = Math.ceil(x0 + 4); x < x0 + w - 4; x += 2) { const c = rgb(x, y); L.push(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]); }
    const m = L.reduce((a, b) => a + b, 0) / L.length, sd = Math.sqrt(L.reduce((a, b) => a + (b - m) ** 2, 0) / L.length);
    console.log(`${name}: Helligkeit ${(m / 255 * 100).toFixed(0)} %, Unruhe ${sd.toFixed(1)} (Ziel ≤ 4${hell ? ', Helligkeit ≥ 75 %' : ''})`);
    if (sd > 4) fehler.push(`${name} ist nicht ruhig (Unruhe ${sd.toFixed(1)}) – dort darf nichts gezeichnet sein.`);
    if (hell && m / 255 < 0.75) fehler.push(`${name} zu dunkel für schwarze Schrift (${(m / 255 * 100).toFixed(0)} %).`);
    const [fx, fy, fw, fh] = r;
    if (fx < 7 || fy < 7 || fx + fw > 58 || fy + fh > 90) fehler.push(`${name} ragt aus der sicheren Zone (7–58 × 7–90 mm).`);
  };
  if (istVorne) { flaeche(rechteck(attr('data-titel')), 'Titelstreifen', false); flaeche(rechteck(attr('data-qr')), 'QR-Feld', false); }
  else {
    const fr = rechteck(attr('data-frei')); flaeche(fr, 'Freifläche', true);
    if (satz) {
      const luft = Math.min(satz.links, satz.rechts, satz.oben, satz.unten);
      console.log(`Textsatz: Jahr ${satz.jahrBreite.toFixed(1)} mm breit, Interpret ${satz.zI} Zeile(n), Titel ${satz.zT} Zeile(n), kleinster Abstand zum Rand der Freifläche ${luft.toFixed(1)} mm (Ziel ≥ 1)`);
      if (luft < 0.9) fehler.push(`Text passt nicht mit Luft in die Freifläche (kleinster Abstand ${luft.toFixed(1)} mm) – Freifläche vergrößern.`);
      if (satz.zI > 2 || satz.zT > 2) fehler.push('Interpret oder Titel braucht mehr als zwei Zeilen – Freifläche zu schmal.');
    }
    if (fr && fr.join(',') !== '8,19,49,59') fehler.push(`data-frei ist ${fr.join(',')} – alle Rückseiten müssen exakt 8,19,49,59 haben, damit Jahr und Text überall an derselben Stelle stehen.`);
    if (fr && (fr[2] < 47 || fr[3] < 56)) fehler.push(`Freifläche zu klein (${fr[2]} × ${fr[3]} mm, mindestens 47 × 56).`);
    // 5) Leitfarbe außerhalb der Freifläche
    if (dekade && fr) {
      const L0 = parseInt(LEIT[dekade].slice(1), 16), lc = [L0 >> 16, (L0 >> 8) & 255, L0 & 255];
      const [x0, y0, w, h] = fr.map(px); let n = 0, t = 0;
      for (let y = 0; y < H; y += 3) for (let x = 0; x < W; x += 3) {
        if (x >= x0 && x <= x0 + w && y >= y0 && y <= y0 + h) continue;
        const c = rgb(x, y); t++; if (Math.hypot(c[0] - lc[0], c[1] - lc[1], c[2] - lc[2]) < 70) n++;
      }
      const anteil = 100 * n / t;
      console.log(`Leitfarbe ${LEIT[dekade]} außerhalb der Freifläche: ${anteil.toFixed(0)} % (Ziel ≥ 30 %)`);
      if (anteil < 30) fehler.push(`Leitfarbe zu schwach (${anteil.toFixed(0)} %) – Jahrzehnt auf dem Tisch nicht erkennbar.`);
    } else if (!dekade) hinweise.push('data-motiv nennt kein Jahrzehnt (hinten_60_1 …) – Leitfarbe nicht geprüft.');
  }
  // 6) Detailreichtum am Rand: Anteil Pixel mit deutlicher Kante zum Nachbarn (Ornament statt Fläche)
  let kanten = 0, rt = 0;
  for (let y = 0; y < H - 3; y += 2) for (let x = 0; x < W - 3; x += 2) {
    if (x > px(12) && x < W - px(12) && y > px(20) && y < H - px(20)) continue;
    const a = rgb(x, y), r = rgb(x + 3, y), u = rgb(x, y + 3); rt++;
    if (Math.abs(a[0] - r[0]) + Math.abs(a[1] - r[1]) + Math.abs(a[2] - r[2]) > 60 || Math.abs(a[0] - u[0]) + Math.abs(a[1] - u[1]) + Math.abs(a[2] - u[2]) > 60) kanten++;
  }
  const detail = 100 * kanten / rt;
  console.log(`Detailreichtum am Rand: ${detail.toFixed(0)} % Kantenpixel (gelobte Referenz ≈ 52 %, Ziel ≥ 35 %)`);
  if (detail < 35) fehler.push(`Zu wenig Detail am Rand (${detail.toFixed(0)} % Kantenpixel) – die Referenz ist viel dichter.`);
  hinweise.forEach(h => console.log('Hinweis: ' + h));
  fehler.forEach(f => console.log('FEHLER: ' + f));
  console.log(fehler.length ? 'ERGEBNIS: NACHBESSERN' : 'ERGEBNIS: BESTANDEN');
})();
