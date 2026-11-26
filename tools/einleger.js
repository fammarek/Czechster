#!/usr/bin/env node
/*
 * Einleger für den Schachteldeckel (Spielkartenbox 1, Deckel innen ca. 94 × 127 mm): Kurzanleitung DE/CZ
 * mit QR-Code zur Spielseite. Erzeugt ein A4-PDF zum Selbstdrucken mit drei Einlegern à 90 × 123 mm
 * (zwei auf Seite 1, einer auf Seite 2), dünne Schnittlinie außen.
 *   NODE_PATH=.studio-werkzeug/node_modules:$(npm root -g) node tools/einleger.js [ziel.pdf]
 */
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright'); const QRCode = require('qrcode');
const ROOT = path.join(__dirname, '..'), ZIEL = path.resolve(process.argv[2] || 'Czechster_Einleger.pdf');
const URL = 'https://fammarek.github.io/Czechster/';
const font = (fam, w, f) => `@font-face{font-family:'${fam}';font-weight:${w};src:url(data:font/woff2;base64,${fs.readFileSync(path.join(ROOT, 'schrift', f)).toString('base64')}) format('woff2')}`;

// Regeln nach dem Vorbild des Originals (in eigenen Worten), dazu die gemeinsame Variante.
const TEXT = {
  de: { o: 'Original <i>(2–10 Personen)</i>', schritte: [
    'Alle bekommen 1 Karte mit dem <b>Jahr nach oben</b> (Start der eigenen Zeitleiste) und <b>2 Chips</b>.',
    'Reihum: Karte <b>scannen</b>, Lied hören, Karte in die eigene Zeitleiste legen – <b>davor, dahinter oder dazwischen</b>.',
    'Wer <b>Interpret und Titel</b> richtig nennt, bekommt 1 Chip (höchstens 5).',
    'Vor dem Aufdecken dürfen andere <b>„Czechster!“</b> rufen und mit 1 Chip die Lücke markieren, die sie für richtig halten.',
    'Aufdecken: Richtig gelegt → Karte bleibt. Falsch → wer die richtige Lücke markiert hat, bekommt die Karte, sonst ist sie raus. Eingesetzte Chips sind weg.',
    '1 Chip = Lied überspringen · 3 Chips = Karte ohne Raten in die Zeitleiste.',
    'Wer zuerst <b>10 Karten</b> hat, gewinnt.'],
    g: 'Gemeinsam', gtext: 'Alle bilden ein Team mit <b>einer Zeitleiste</b> und <b>5 Chips</b> und beraten, in welche Lücke das Lied gehört. Falsch → 1 Chip weg. <b>10 Karten</b>, bevor die Chips aufgebraucht sind = gewonnen.',
    app: 'Chips: z. B. Münzen. App: QR-Code scannen, Kamera erlauben, am besten Chrome.' },
  cs: { o: 'Originál <i>(2–10 hráčů)</i>', schritte: [
    'Každý dostane 1 kartu <b>rokem nahoru</b> (začátek vlastní časové osy) a <b>2 žetony</b>.',
    'Postupně: kartu <b>naskenuj</b>, poslouchej a vlož ji do své osy – <b>před, za nebo mezi</b>.',
    'Kdo správně řekne <b>interpreta a název</b>, získá 1 žeton (nejvýše 5).',
    'Před otočením mohou ostatní zvolat <b>„Czechster!“</b> a žetonem označit mezeru, kterou považují za správnou.',
    'Otoč kartu: Správně → karta zůstává. Špatně → kartu získá ten, kdo označil správnou mezeru, jinak jde ze hry. Použité žetony propadají.',
    '1 žeton = přeskočit píseň · 3 žetony = karta do osy bez hádání.',
    'Kdo má jako první <b>10 karet</b>, vyhrává.'],
    g: 'Společně', gtext: 'Všichni tvoří jeden tým s <b>jednou časovou osou</b> a <b>5 žetony</b> a radí se, do které mezery píseň patří. Špatně → 1 žeton pryč. <b>10 karet</b> dřív, než dojdou žetony = výhra.',
    app: 'Žetony: např. mince. Aplikace: naskenuj QR kód, povol kameru, nejlépe v Chrome.' }
};

(async () => {
  const qr = await QRCode.toString(URL, { type: 'svg', errorCorrectionLevel: 'M', margin: 0, color: { dark: '#1A1A1A', light: '#FFFFFF' } });
  const block = (t) => `<h2>${t.o}</h2><ol>${t.schritte.map(s => `<li>${s}</li>`).join('')}</ol><h2>${t.g}</h2><p class="g">${t.gtext}</p><p class="app">${t.app}</p>`;
  const einleger = `<div class="e"><div class="kopf"><div><h1>Czechster</h1><div class="url">fammarek.github.io/Czechster</div></div>
    <div class="qr">${qr.replace('<svg', '<svg style="width:17mm;height:17mm;display:block"')}</div></div>
    <div class="sp">${block(TEXT.de)}</div><div class="trenn"></div><div class="sp">${block(TEXT.cs)}</div></div>`;
  const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"><style>
    ${font('Archivo Black', 400, 'archivo-black-latin-400-normal.woff2')}${font('Archivo Black', 400, 'archivo-black-latin-ext-400-normal.woff2')}
    ${['latin', 'latin-ext'].map(s => font('Noto Sans', 400, `noto-sans-${s}-400-normal.woff2`) + font('Noto Sans', 700, `noto-sans-${s}-700-normal.woff2`)).join('')}
    @page{size:A4;margin:0}*{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Noto Sans',sans-serif;color:#1A1A1A}
    .seite{width:210mm;height:297mm;display:flex;justify-content:center;align-items:flex-start;gap:8mm;padding-top:20mm;page-break-after:always}
    .seite:last-child{page-break-after:auto}
    .e{width:90mm;height:123mm;border:.2mm dashed #999;padding:4mm 4.5mm;display:flex;flex-direction:column;align-items:center}
    h1{font:400 9mm/1 'Archivo Black';letter-spacing:.1mm}
    .kopf{width:100%;display:flex;align-items:center;justify-content:space-between;margin-bottom:1mm}.qr{flex:none}
    .url{font-size:6.3pt;margin-top:1.2mm;letter-spacing:.02em}
    .sp{width:100%}
    h2{font:700 6.8pt/1.2 'Noto Sans';margin:.6mm 0 .4mm}h2 i{font-weight:400}.g{font-size:5.9pt;line-height:1.22}
    ol{padding-left:3.4mm;font-size:5.9pt;line-height:1.22}
    li{margin-bottom:.1mm}
    .app{font-size:5.6pt;line-height:1.2;margin-top:.6mm;font-style:italic}
    .trenn{width:30mm;border-top:.25mm solid #1A1A1A;margin:1.2mm 0}
  </style></head><body>
    <div class="seite">${einleger}${einleger}</div><div class="seite">${einleger}</div></body></html>`;
  const b = await chromium.launch(); const p = await b.newPage();
  await p.setContent(html); await p.evaluate(() => document.fonts.ready);
  const ueber = await p.evaluate(() => Math.max(...[...document.querySelectorAll('.e')].map(e => e.scrollHeight - e.clientHeight)) / (96 / 25.4));
  console.log(ueber > 0.1 ? `WARNUNG: Text ${ueber.toFixed(1)} mm zu lang für 90 × 123 mm` : `passt (Reserve ${(-ueber).toFixed(1)} mm)`);
  await p.pdf({ path: ZIEL, format: 'A4', printBackground: true, preferCSSPageSize: true });
  await p.screenshot({ path: ZIEL.replace(/\.pdf$/, '-vorschau.png'), fullPage: true });
  await b.close(); console.log('PDF: ' + ZIEL);
})();
