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

const TEXT = {
  de: { h: 'So wird gespielt', schritte: [
    'Jede Person bekommt eine Karte mit dem <b>Jahr nach oben</b> – der Start der eigenen Zeitleiste.',
    'Wer dran ist, <b>scannt</b> mit der App eine neue Karte (QR-Seite). Das Lied läuft – ohne Titel.',
    'Die Karte in die eigene Zeitleiste legen: <b>davor, dahinter oder dazwischen</b> – je nachdem, wann das Lied erschienen ist.',
    'Karte umdrehen: Passt die Stelle, <b>bleibt die Karte liegen</b>. Sonst kommt sie aus dem Spiel.',
    'Wer zuerst <b>10 Karten</b> richtig in der Zeitleiste hat, gewinnt.'],
    app: 'App: QR-Code scannen, Kamera erlauben. Am besten in Chrome – mit YouTube-Premium-Konto angemeldet ohne Werbung.' },
  cs: { h: 'Jak se hraje', schritte: [
    'Každý hráč dostane jednu kartu <b>rokem nahoru</b> – to je začátek jeho časové osy.',
    'Hráč na tahu <b>naskenuje</b> v aplikaci novou kartu (strana s QR kódem). Píseň hraje – bez názvu.',
    'Kartu vlož do své časové osy: <b>před, za nebo mezi</b> ostatní – podle toho, kdy píseň vyšla.',
    'Otoč kartu: Je-li místo správné, <b>karta zůstává</b>. Jinak jde ze hry.',
    'Kdo má jako první <b>10 karet</b> správně ve své časové ose, vyhrává.'],
    app: 'Aplikace: naskenuj QR kód a povol kameru. Nejlépe v Chrome – s přihlášeným účtem YouTube Premium bez reklam.' }
};

(async () => {
  const qr = await QRCode.toString(URL, { type: 'svg', errorCorrectionLevel: 'M', margin: 0, color: { dark: '#1A1A1A', light: '#FFFFFF' } });
  const block = (t) => `<h2>${t.h}</h2><ol>${t.schritte.map(s => `<li>${s}</li>`).join('')}</ol><p class="app">${t.app}</p>`;
  const einleger = `<div class="e"><h1>Czechster</h1>
    <div class="qr">${qr.replace('<svg', '<svg style="width:20mm;height:20mm;display:block"')}<div class="url">fammarek.github.io/Czechster</div></div>
    <div class="sp">${block(TEXT.de)}</div><div class="trenn"></div><div class="sp">${block(TEXT.cs)}</div></div>`;
  const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"><style>
    ${font('Archivo Black', 400, 'archivo-black-latin-400-normal.woff2')}${font('Archivo Black', 400, 'archivo-black-latin-ext-400-normal.woff2')}
    ${['latin', 'latin-ext'].map(s => font('Noto Sans', 400, `noto-sans-${s}-400-normal.woff2`) + font('Noto Sans', 700, `noto-sans-${s}-700-normal.woff2`)).join('')}
    @page{size:A4;margin:0}*{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Noto Sans',sans-serif;color:#1A1A1A}
    .seite{width:210mm;height:297mm;display:flex;justify-content:center;align-items:flex-start;gap:8mm;padding-top:20mm;page-break-after:always}
    .seite:last-child{page-break-after:auto}
    .e{width:90mm;height:123mm;border:.2mm dashed #999;padding:4.5mm 5mm;display:flex;flex-direction:column;align-items:center}
    h1{font:400 9.5mm/1 'Archivo Black';letter-spacing:.1mm}
    .qr{margin:2mm 0 1.5mm;display:flex;flex-direction:column;align-items:center}
    .url{font-size:6.5pt;margin-top:1mm;letter-spacing:.02em}
    .sp{width:100%}
    h2{font:700 8pt/1.2 'Noto Sans';margin-bottom:.8mm}
    ol{padding-left:4mm;font-size:6.4pt;line-height:1.25}
    li{margin-bottom:.2mm}
    .app{font-size:6.2pt;line-height:1.25;margin-top:.8mm;font-style:normal}
    .trenn{width:30mm;border-top:.25mm solid #1A1A1A;margin:1.6mm 0}
  </style></head><body>
    <div class="seite">${einleger}${einleger}</div><div class="seite">${einleger}</div></body></html>`;
  const b = await chromium.launch(); const p = await b.newPage();
  await p.setContent(html); await p.evaluate(() => document.fonts.ready);
  const ueber = await p.evaluate(() => [...document.querySelectorAll('.e')].some(e => e.scrollHeight > e.clientHeight + 1));
  if (ueber) console.log('WARNUNG: Text passt nicht in 90 × 123 mm');
  await p.pdf({ path: ZIEL, format: 'A4', printBackground: true, preferCSSPageSize: true });
  await p.screenshot({ path: ZIEL.replace(/\.pdf$/, '-vorschau.png'), fullPage: true });
  await b.close(); console.log('PDF: ' + ZIEL);
})();
