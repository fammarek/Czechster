# Briefing Runde 2 – `hinten_60_1`

Maßstab: freigegebene `design/motive/hinten_80_1.svg` (Aufbau, Dichte, Rahmenlogik). Leitfarbe neu: Orange
`#E69F00`. Variante 2 (`hinten_60_2`) bekommt das Transistorradio – hier keine Radio- oder Gittermotive.

## Bildidee
Die 60er als Single auf dem Plattenteller: Auf der Achse dreht sich eine Siebzoll-Single mit Dreispeichen-
Puk und Strahlenkranz-Etikett, und von ihr laufen Op-Art-Rillen und Wellen in die Ecken. Warmes Orange,
Fast-Schwarz und Scherenschnitt-Sterne – Supraphon-Etikett trifft Op-Art-Plakat.

## Familie – aus `hinten_80_1` übernehmen (Pflicht)
- `data-motiv="hinten_60_1"`, `data-frei="8,19,49,59"` (x 8–57, y 19–78), Freifläche glatt `#FAEAC7`.
- Freiflächenrahmen: eine Linie 0,5 `#1A1A1A` außen, `rect x 7.4 y 18.4 w 50.2 h 60.2 rx 1.4`.
- Außenrahmen d 5,5 (0,6, rx 5,5) / d 6,3 (0,3, rx 4,7) `#1A1A1A`; Fläche innen `#E69F00`.
- Beschnitt und Streifen außerhalb des Außenrahmens: `#E69F00` mit Punktraster `#B07800` r 0,25, Teilung 1,4.
- Kopffeld y 6,5–18,1, Fußfeld gespiegelt y 78,9–90,5. Achsenobjekt Kopf ca. y 7,2–17,8, mittig x 32,5.
- Eckrosette um (11 / 11), Viertelbögen r 3,6 / 4,5 parallel zur Stanzrundung, dazwischen Fächer.
- Nur linkes oberes Viertel zeichnen, dreimal spiegeln; Achsenobjekt selbst symmetrisch, für den Fuß
  gespiegelt. Flimmer-Regel H7: Wiederholmuster am Rand Periode ≥ 2 mm oder nur Orange-auf-Orange; Punkte
  Ø ≥ 0,4, Teilung ≥ 1,0; Linien ≥ 0,3. **Op-Art-Rillen besonders aufpassen:** Abstand ≥ 0,9 mm, Kontrast
  Fast-Schwarz auf Orange (nicht Schwarz auf Hell), sonst Moiré.

## Bausteine und Lagen
- **Leitobjekt Single (Achse):** Scheibe um (32,5 / 12,5) r 5,3, Grund `#1A1A1A`, 3–4 Rillenringe `#B07800`
  0,3 (Abstand ≥ 0,9). Etikett r 2,6 `#E69F00` mit Strahlenkranz aus 16 Keilen `#1A1A1A`/`#F5C45A` im Wechsel.
  Mittelloch r 1,0 `#FAEAC7` mit **Dreispeichen-Puk** (drei Speichen 0,4 breit, Nabe r 0,35 `#1A1A1A`) – das
  macht „Single“ auch ohne Farbe unverwechselbar. Puk symmetrisch zur Senkrechten: eine Speiche nach oben,
  zwei nach links/rechts unten (im Fuß automatisch gespiegelt).
- **Rillen-Wellen:** links und rechts der Scheibe, x 13–26 und gespiegelt, y 7–18: 4–6 konzentrische Bögen um
  das Scheibenzentrum, Doppellinien `#1A1A1A` 0,35 auf Orange, nach außen auslaufend in die Eckrosette.
- **Scherenschnitt-Sterne:** vierzackige und achtzackige Sterne (Spannweite 1,6–2,4 mm) `#1A1A1A` mit Lichtpunkt
  `#FAEAC7`, gespiegelt in die Zwickel zwischen Wellen und Rahmen, nicht mehr als 3 je Viertel.
- **Eckrosette** (11 / 11): Viertel einer Single – Fächer als drei Rillenbögen `#1A1A1A`, Kern Viertel-Etikett
  mit Mini-Strahlenkranz, Punkt r 0,8.
- **Abschlussband** zur Freifläche, y 16,2–18,0: Op-Art-Halbkreise (r 0,9, Teilung 2,0) `#1A1A1A` auf Orange,
  Öffnung zur Freifläche – Periode ≥ 2 mm.
- **Seitenbänder (neu):** x 3,3–5,3 (rechts 59,7–61,7), y 20–77: Wellenlinie (Periode 2,4 mm, Amplitude 0,5)
  `#B07800` 0,45 mit kleinen Punkten r 0,25 `#1A1A1A` in jedem zweiten Wellental. Auf y 48,5 eine Raute 1,8 ×
  1,8 als Kettenglied. Kein Hell in den Seitenbändern.

## Farbanteile (außerhalb der Freifläche)
- Leitfarbe `#E69F00`: 45–55 %
- Fast-Schwarz `#1A1A1A`: 25 % (Scheibe, Rillen, Sterne – die Scheibe ist die größte dunkle Fläche)
- Zwischenton dunkles Orange `#B07800`: ca. 10 %; Lichter `#F5C45A` / `#FAEAC7`: höchstens 10 %
- Achtung Rot-Grün: Orange wird dort gelblich wie das Ocker der Vorderseite. Unterscheidung über Hell-Dunkel:
  schwarze Scheibe auf der Achse, helle Freifläche – die Vorderseite hat beides nicht.

## Freiflächen-Rechteck
`data-frei="8,19,49,59"` (lichte Fläche x 8–57, y 19–78). Nichts hineinzeichnen.

## Ansatz A – „Strahlende Single“ (radial, ganze Scheibe)
Die Single liegt vollständig auf der Achse (r 5,3) und ist eingefasst von einem gezackten Sonnenkranz
(16–20 Zacken bis r 6,2, `#B07800`) – das Etikett-Strahlenmotiv wird so zweimal gestaffelt. Die Rillenbögen
verlaufen als Op-Art-Wellen bis an die Eckrosetten, jedes zweite Feld zwischen zwei Bögen Punktraster
`#1A1A1A`. Scherenschnitt-Sterne setzen die Akzente. Wirkung: großer dunkler Kreis, warmer Strahlenkranz –
aus zwei Metern „Schallplatte“.

## Ansatz B – „Hülle als Raute“ (Art-déco-Medaillon, Single im Lochcover)
Die Single steckt in einer Papierhülle, die auf der Spitze steht: Raute 15 × 11 mm (Spitzen bei x 25 / 40,
y 7 / 18) in `#E69F00` mit Doppellinien-Kontur, mittig das runde Lochcover-Fenster r 3,6, durch das Etikett und
Puk zu sehen sind; zwei dunkle Scheibenkanten (Kreissegmente r 5,3) schauen links und rechts aus der Hülle.
Links und rechts verlaufen statt Bögen gestufte Op-Art-Streifen (Bänder, deren Breite nach außen von 1,2 auf
0,4 mm abnimmt, `#1A1A1A` auf Orange) bis zur Eckrosette, dazwischen Sterne. Wirkung: näher an der Raute der
Vorderseite, grafischer und flacher – Hülle und Puk tragen das Jahrzehnt.

## Prüfung
`node .claude/skills/kartendesign-studio/scripts/render.js <datei.svg> --pruefen --text "1966|Václav Neckář &
Helena Vondráčková|Stín katedrál"` – Freifläche glatt, Leitfarbe ≥ 45 %, Symmetrie ≤ 0,2, keine Moiré-Rillen.
