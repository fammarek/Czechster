# Briefing Runde 2 – `hinten_60_2`

Maßstab: freigegebene `design/motive/hinten_80_1.svg` (Aufbau, Dichte, Rahmenlogik). Leitfarbe Orange
`#E69F00`. Variante 1 (`hinten_60_1`) hat die Single – hier keine Schallplatte, keine Rillen, keine Puks.

## Bildidee
Die 60er als Musik aus dem Kofferradio: Auf der Achse steht ein Transistorradio mit gelochtem
Lautsprechergitter und Skalenfenster, und seine Wellen und Antennen strahlen als Art-déco-Fächer in die Ecken.
Orange und Fast-Schwarz, Lochraster statt Rillen, Sputnik-Sterne statt Scherenschnitt – dieselbe Familie,
ein anderes Objekt.

## Familie – aus `hinten_80_1` übernehmen (Pflicht)
- `data-motiv="hinten_60_2"`, `data-frei="8,19,49,59"` (x 8–57, y 19–78), Freifläche glatt `#FAEAC7`.
- Freiflächenrahmen: eine Linie 0,5 `#1A1A1A` außen, `rect x 7.4 y 18.4 w 50.2 h 60.2 rx 1.4`.
- Außenrahmen d 5,5 (0,6, rx 5,5) / d 6,3 (0,3, rx 4,7) `#1A1A1A`; Fläche innen `#E69F00`.
- Beschnitt und Streifen außerhalb des Außenrahmens: `#E69F00` mit Punktraster `#B07800` r 0,25, Teilung 1,4.
- Kopffeld y 6,5–18,1, Fußfeld gespiegelt y 78,9–90,5. Achsenobjekt Kopf ca. y 7,2–17,8, mittig x 32,5.
- Eckrosette um (11 / 11), Viertelbögen r 3,6 / 4,5 parallel zur Stanzrundung, dazwischen Fächer.
- Nur linkes oberes Viertel zeichnen, dreimal spiegeln; Achsenobjekt selbst symmetrisch, für den Fuß gespiegelt.
- Flimmer-Regel H7: Wiederholmuster am Rand Periode ≥ 2 mm oder nur Orange-auf-Orange; Punkte Ø ≥ 0,4,
  Teilung ≥ 1,0; Linien ≥ 0,3. Das Lochgitter ist das größte Rastermuster der Karte: Löcher Ø 0,5–0,6,
  Teilung 1,1–1,2, hell auf Fast-Schwarz – dicht, aber nur innerhalb der Radioform, nie als Randband.

## Bausteine und Lagen
- **Leitobjekt Transistorradio (Achse, Querformat):** Gehäuse x 21–44, y 9,2–17,6, rx 1,6, Kontur `#1A1A1A`
  0,6, Grund `#F5C45A` oder `#FAEAC7` (hell, damit das dunkle Gitter darauf steht). Mitte: rundes
  Lautsprechergitter r 2,9 um (32,5 / 14,3), also unterhalb des Skalenfensters, Fast-Schwarz mit Lochraster `#FAEAC7` und Ring 0,4. Oben quer
  das **Skalenfenster** x 23–42, y 9,8–11,2: helle Fläche mit Skalenstrichen (lang/kurz im Wechsel, 0,3, Teilung
  1,0) und einem senkrechten Zeiger in der Mitte – **keine Ziffern, keine Buchstaben, kein Markenzeichen**.
  Links und rechts im Gehäuse je ein Drehknopf r 1,5 (Riffelkranz aus 10 Kerben). Tragegriff als Bügel über
  dem Gehäuse, y 7,2–9,2, x 26–39, Doppellinie. Ohne Farbe lesbar: helles Gehäuse, dunkles Lochgitter, Knöpfe.
- **Eckrosette** (11 / 11): Fächer als drei Funkwellen-Bögen `#1A1A1A`, Kern kleiner Lochgitter-Kreis r 1,3
  (sieben Löcher) – das Radio in Miniatur.
- **Sputnik-Sterne:** Kreis r 0,5 mit 4–8 Strahlen 0,3, Spannweite 2–2,6 mm, `#1A1A1A` mit Kern `#FAEAC7`,
  höchstens 3 je Viertel, an Strahlenenden oder in Zwickeln.
- **Op-Art-Punktfelder:** Dreiecksfelder an der Eckrosette mit Punkten, deren Größe nach außen abnimmt
  (r 0,35 → 0,2, Teilung 1,1) – Halbton wie Plakatdruck.
- **Abschlussband** zur Freifläche, y 16,2–18,0, links und rechts vom Radio (x 7,6–21 und gespiegelt): flaches
  Zickzack der Skala – kurze/lange Striche `#1A1A1A` auf `#B07800`, Teilung 2,0.
- **Seitenbänder (neu):** x 3,3–5,3 (rechts 59,7–61,7), y 20–77: Kette aus offenen Halbkreisbögen, die
  abwechselnd nach innen und außen zeigen (Funkwellen-Mäander, Periode 2,4 mm) `#B07800` 0,45, in jedem zweiten
  Bogen ein Punkt r 0,25 `#1A1A1A`. Auf y 48,5 eine Raute 1,8 × 1,8 als Kettenglied. Kein Hell im Band.

## Farbanteile (außerhalb der Freifläche)
- Leitfarbe `#E69F00`: 45–55 % (Kopf-/Fußgrund und Fächerfelder)
- Fast-Schwarz `#1A1A1A`: 20–25 % (Lochgitter, Konturen, Strahlen)
- Zwischenton `#B07800`: 10–15 %; Lichter `#F5C45A` / `#FAEAC7`: 10 % (vor allem das Radiogehäuse)
- Rot-Grün: Orange nähert sich dem Ocker der Vorderseite – deshalb hell-dunkle Radioform als Signal (helles
  Gehäuse mit schwarzem Gitterkreis), unverwechselbar gegenüber Vorderseite und `hinten_60_1` (dunkle Scheibe).

## Freiflächen-Rechteck
`data-frei="8,19,49,59"` (lichte Fläche x 8–57, y 19–78). Nichts hineinzeichnen.

## Ansatz A – „Funkwellen“ (konzentrisch, Op-Art)
Vom Lautsprechergitter gehen links und rechts konzentrische Funkwellen-Bögen aus (Zentrum 32,5 / 14,3,
Radien 13 / 15 / 17 / 19 / 21 / 23 mm, geclippt auf das Kopffeld), im Wechsel Linie `#1A1A1A` 0,35 und
Band `#B07800` 0,9 breit, jedes zweite Zwischenfeld Op-Art-Punktfeld. Die Bögen laufen hinter der
Eckrosette aus, Sputnik-Sterne sitzen auf drei Bögen. Wirkung: das Radio sendet, die Karte schwingt –
weich, rund, eindeutig 60er-Op-Art.

## Ansatz B – „Antennenfächer“ (radial, Art-déco-Strahlen)
Aus dem Gehäuse ragen zwei Teleskopantennen als V (Ansatz bei x 30 / 34,5, y 9,2, Enden bei etwa
x 13 / 52, y 7,5, Doppellinie mit drei Segment-Absätzen), an den Spitzen je ein Sputnik-Stern. Unter den
Antennen fächert ein Strahlenkranz wie auf der Vorderseite (10–12 Strahlen je Seite, Fluchtpunkt
32,5 / 14,3, Linie/schmaler Keil im Wechsel `#1A1A1A`, Zwischenfelder abwechselnd Orange und Punktraster).
Kein Tragegriff in diesem Ansatz – die Antennen übernehmen die Silhouette. Wirkung: näher an der
Strahlen-Architektur der Vorderseite, festlich, plakativ.

## Prüfung
`node .claude/skills/kartendesign-studio/scripts/render.js <datei.svg> --pruefen --text "1966|Václav Neckář &
Helena Vondráčková|Stín katedrál"` – Freifläche glatt, Leitfarbe ≥ 45 %, Symmetrie ≤ 0,2. Graustufen- bzw.
Rot-Grün-Vorschau neben `hinten_60_1` und `vorne` legen: Radio und Single müssen sofort unterscheidbar sein.
