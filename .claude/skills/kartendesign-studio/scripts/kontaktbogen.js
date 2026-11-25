#!/usr/bin/env node
/*
 * Kontaktbogen: legt Vorschauen nebeneinander, optional mit Rot-Grün-Simulation (Deuteranopie).
 *
 *   node kontaktbogen.js <ausgabe.png> <bild1.png> [bild2.png …] [--farbsehen] [--titel "Runde 1"]
 *
 * Beschriftung je Bild = Dateiname ohne Endung. Mit --farbsehen kommt eine zweite Reihe, wie Menschen mit
 * Rot-Grün-Schwäche die Karten sehen (Machado 2009, Schweregrad 1,0).
 */
const fs = require('fs'), path = require('path'), { execSync } = require('child_process');
module.paths.push(execSync('npm root -g').toString().trim());
const { chromium } = require('playwright');
const a = process.argv.slice(2), aus = a[0];
const titelIdx = a.indexOf('--titel'), titel = titelIdx >= 0 ? a[titelIdx + 1] : '';
const bilder = a.slice(1).filter((x, i, arr) => !x.startsWith('--') && arr[i - 1] !== '--titel');
const farbsehen = a.includes('--farbsehen');
const img = (f, filt) => `<figure><img src="data:image/png;base64,${fs.readFileSync(f).toString('base64')}"${filt ? ' style="filter:url(#deut)"' : ''}><figcaption>${path.basename(f, '.png').replace(/-vorschau$/, '')}${filt ? ' · Rot-Grün' : ''}</figcaption></figure>`;
const html = `<!doctype html><html><body style="margin:0;background:#6b6b6b;font:13px sans-serif;color:#fff;padding:14px">
<svg width="0" height="0" style="position:absolute"><filter id="deut" color-interpolation-filters="linearRGB"><feColorMatrix type="matrix"
 values="0.367322 0.860646 -0.227968 0 0  0.280085 0.672501 0.047413 0 0  -0.011820 0.042940 0.968881 0 0  0 0 0 1 0"/></filter></svg>
${titel ? `<div style="font-size:16px;margin-bottom:10px">${titel}</div>` : ''}
<style>.r{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:12px}figure{margin:0;width:230px}img{width:230px;height:343px;display:block;border-radius:4px}figcaption{margin-top:4px}</style>
<div class="r">${bilder.map(f => img(f)).join('')}</div>${farbsehen ? `<div class="r">${bilder.map(f => img(f, true)).join('')}</div>` : ''}</body></html>`;
(async () => {
  const b = await chromium.launch(), p = await b.newPage({ viewport: { width: Math.min(bilder.length, 6) * 242 + 28, height: 400 }, deviceScaleFactor: 2 });
  await p.setContent(html); await p.waitForTimeout(200);
  await p.screenshot({ path: aus, fullPage: true }); await b.close();
  console.log('Kontaktbogen: ' + aus);
})();
