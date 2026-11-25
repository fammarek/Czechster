# Briefing Runde 4 – `hinten_10_1`

`data-motiv="hinten_10_1"`, Leitfarbe Rotorange `#D55E00`. Thema Variante 1: **Streaming und Klang aus dem
Netz**. Variante 2 (`hinten_10_2`) ist Sommerfestival/handgemacht (Trommel, Akkordeon, Lichterketten) – hier
also keine Lichterketten, keine Papierschnitt-Lagen.

## Bildidee
Die 2010er als Klangbild: Ein Leitobjekt der Streaming-Jahre auf der Achse, eingebettet in Low-Poly-Facetten,
die wie geschliffenes Glas an die Strahlenfächer der Vorderseite anschließen. Weiche, gerundete
Schallwellen-Bänder laufen ruhig durch das Kopffeld – Art déco in Dreiecken statt in Kreisen.

## Familie – aus den freigegebenen Rückseiten übernehmen (Pflicht)
Maßstab: alle acht freigegebenen Rückseiten in `design/motive/` (Vorschau `design/studio/runde-3/vorlage.png`),
besonders `hinten_90_1.svg` für Aufbau und Maße.
- `data-motiv="hinten_10_1" data-frei="8,19,49,59"` – **exakt** (lichte Fläche x 8–57, y 19–78), glatt `#F7DFCC`.
  Nichts hineinzeichnen; Jahreszahl-Oberkante 22 mm vom Dateirand wie auf allen Karten.
- Freiflächenrahmen: eine Linie 0,5 `#1A1A1A`, `rect x 7.4 y 18.4 w 50.2 h 60.2 rx 1.4`.
- Außenrahmen d 5,5 (0,6, rx 5,5) und d 6,3 (0,3, rx 4,7) `#1A1A1A`; Fläche dazwischen und innen Leitfarbe.
- Beschnitt und Streifen außerhalb des Außenrahmens: ruhig, `#D55E00` mit Punktraster `#A94A00` r 0,25,
  Teilung 1,4 (Ton in Ton) – bis zum Dateirand 0–65 / 0–97. Dort keine Einzelformen.
- Kopffeld y 6,5–18,1, Fußfeld gespiegelt y 78,9–90,5, Grund kräftig `#D55E00`. Leitobjekt im Kopf
  y 7,2–17,8, mittig x 32,5, Breite höchstens x 19–46.
- Eckrosette um (11 / 11), Viertelbögen r 3,6 / 4,5 (0,5 `#1A1A1A`) parallel zur Stanzrundung (Mittelpunkt 8 / 8);
  Enden der Viertelringe als Punkte r 0,3, keine Endstriche.
- Nur das linke obere Viertel zeichnen und dreimal spiegeln; das Leitobjekt selbst symmetrisch zu x 32,5,
  für den Fuß an y 48,5 gespiegelt (steht dort also kopf – das ist gewollt).
- Seitenbänder x 3,6–5,4 (rechts 59,6–61,4), y 20–77: **durchlaufende Kette ohne Einzelformen**, als ein Pfad
  über die Achse y 48,5 ohne Phasensprung; Abstand zur Schnittkante ≥ 0,6 mm.
- Flimmer-Regel: Wiederholmuster am Rand Periode ≥ 2 mm oder Ton in Ton; Punkte Ø ≥ 0,4, Teilung ≥ 1,0;
  Linien ≥ 0,3; `stroke-linejoin="round"`. Keine Verläufe, keine Transparenz, kein Glanz.
- **Abgrenzung zu den 60ern (`#E69F00`) und 90ern (`#F0E442`) bei Rot-Grün-Schwäche**: Für Deuteranope wird
  `#D55E00` ein dunkles Oliv-Braun, `#E69F00` ein helles Ocker, `#F0E442` fast Weißgelb. Die Unterscheidung läuft
  also über **Dunkelheit**: Kopf-/Fußgrund wirklich `#D55E00` (nie aufhellen), Zwischenton `#8A3C00` (Rost) großzügig,
  Fast-Schwarz kräftig (Konturen 0,5–0,6, Anteil 25–30 %). Helle Töne nur für das Leitobjekt und kleine Lichter,
  zusammen ≤ 18 %. Zusätzlich Struktur: 10er sind **kantig-facettiert** (Polygone, Dreiecke), 60er rund
  (Op-Art-Kreise) – im Rot-Grün-Bild neben `hinten_60_1`, `hinten_60_2`, `hinten_90_1` und `vorne` prüfen; die
  10er müssen als einzige Karte deutlich dunkel wirken.
- Graubild: Leitobjekt hell (`#F7DFCC`/`#EDB088`) auf dunklem Grund mit schwarzer Kontur – als Gegenstand lesbar.

## Farben
`#D55E00` Leitfarbe, `#8A3C00` dunkle Stufe, `#EDB088` helle Stufe, `#F7DFCC` Licht/Freifläche, `#1A1A1A`.
Keine weiteren Töne.

## Farbanteile (außerhalb der Freifläche)
- Leitfarbe `#D55E00`: 45–55 % (aus zwei Metern muss das Jahrzehnt allein über die Farbe stehen)
- Fast-Schwarz `#1A1A1A`: 22–28 %
- Zwischenton `#8A3C00`: 10–15 %
- Lichter `#EDB088` / `#F7DFCC`: 10–18 %, fast ganz im Leitobjekt gebündelt

## Freiflächen-Rechteck
`data-frei="8,19,49,59"` (x 8–57, y 19–78), glatt `#F7DFCC`. Kopf- und Fußornament nur in y 7–18 bzw. 79–90
(plus Beschnitt).

## Verboten (Besitzer, absolut) – Runde 3 hat gezeigt, wo es passiert
- **Keine Blitze, nichts Runenartiges**: keine gezackten Linien, keine Knickstriche, keine eckigen S-/Z-Formen,
  keine Zickzack-Konturen. Wellen, Bögen und Strahlen sind **rund oder gerade**.
- **Keine Zeichen-, Symbol-, Gesichts- oder Augenwirkung.** Ausgeschieden sind bisher: PlayStation-Formen
  (Kreis + Quadrat + Dreieck nebeneinander), Play-Dreiecke ◀ ▶, Fadenkreuz, Zielscheibe, „Θ“, „≡“, Zifferblatt,
  Gesicht, Auge. Für die 2000er/2010er besonders gefährlich und deshalb verboten: Bedien-Symbole jeder Art
  (Play, Pause „‖“, Vor/Zurück, Ein/Aus, Lautstärke-Keil), **Bluetooth-Zeichen (ist selbst aus Runen gebaut)**,
  WLAN-/Funkbögen „((( )))“ um einen Punkt, Akku-, Herz-, Like- oder Notensymbole, Kamera-Punkte, Firmenformen
  (angebissener Apfel o. Ä.), Kreis mit Mittelpunkt, zwei gleiche Kreise nebeneinander auf Augenhöhe.
- Dreiecke nur gefüllt und **paarweise gegeneinander** (Spitze an Spitze oder Kante an Kante, als Parkett) –
  nie ein einzelnes seitwärts zeigendes Dreieck.
- Keine Sterne mit fünf Zacken, keine Hakenkreuz-ähnlichen Drehformen, keine Figuren, keine Ziffern/Buchstaben.
- Nach dem Zeichnen jede kleine Form einzeln aus einem Meter ansehen: Liest sie sich als Buchstabe, Zeichen,
  Symbol, Gesicht oder Auge → **ersetzen** (Punkt, Kreis ohne Mittelpunkt, Raute, gefülltes Dreieckspaar,
  Streifen), nicht abschwächen.

## Bausteine und Lagen (für beide Ansätze)
- **Leitobjekt** auf der Achse im Kopffeld (y 7,2–17,8), Fuß gespiegelt – siehe Ansatz A / B.
- **Low-Poly-Facetten** im Kopffeld-Grund hinter dem Objekt und in den Zwickeln: Dreiecksparkett (Kantenlänge
  1,8–3,0), Flächen in `#D55E00` / `#8A3C00` / `#1A1A1A`, nur vereinzelt `#EDB088`; Kanten 0,3 `#1A1A1A`. Das
  Parkett ist geschlossen (keine einzelnen Dreiecke, keine Pfeilwirkung) und läuft symmetrisch zur Achse.
- **Schallwellen-Bänder**: zwei waagerechte Sinusbänder (Linie 0,4 `#EDB088` und 0,3 `#1A1A1A`, Amplitude 0,9,
  Periode 6,0, runde Scheitel) von der Rosette bis an das Leitobjekt, y ≈ 10,5 und 13,5. Nie mit Knick.
- **Eckrosette** um (11 / 11): zwischen r 3,6 / 4,5 ein Kranz aus Dreieckspaaren (Spitze an Spitze, im Wechsel
  `#EDB088` / `#8A3C00`); Kern: über Eck gestellte Raute 2,0 `#F7DFCC`, Kontur 0,3, kein Mittelpunkt.
- **Zwickel** x 14–20, y 8–17: Facettenraute (Raute aus vier Dreiecken in vier Tönen – ein „geschliffener
  Stein“, wie das Rauten-Medaillon der Vorderseite, aber facettiert).
- **Abschlussband** y 16,4–18,0: Dreiecksfries – gefüllte Dreiecke Kante an Kante, abwechselnd Spitze oben
  `#1A1A1A` und Spitze unten `#EDB088`, Teilung 2,0 (Parkett, nicht Sägezahn: die Oberkante bleibt gerade).
- **Seitenbänder** x 3,6–5,4, y 20–77: Kette aus Rauten 1,4 × 2,0 Spitze an Spitze (Teilung 2,0), jede Raute
  längs in zwei Dreiecke `#EDB088` / `#8A3C00` geteilt, eingefasst von zwei Linien 0,3. Durchlaufend.

## Ansatz A – „Smartphone quer mit Polygon-Cover“
Leitobjekt: **Smartphone quer**, x 20,5–44,5, y 8,4–17,2, rx 1,4, Gehäuse `#1A1A1A`, Kontur 0,6; schmaler
Rand – Bildschirm x 21,6–43,4, y 9,3–16,3, rx 0,5, Grund `#F7DFCC`. Auf dem Bildschirm ein Albumcover als
Low-Poly-Dreiecksparkett (symmetrisch, `#D55E00` / `#EDB088` / `#8A3C00` / `#F7DFCC`), mittig eine über Eck
gestellte helle Raute `#F7DFCC` mit Kontur 0,3 als Ruhepunkt. **Keine Bedienelemente auf dem Schirm** (kein
Play-Dreieck, keine Fortschrittsleiste mit Punkt, keine Symbole), **kein Kamerapunkt, keine Knöpfe**.
Proportion ~2,7 : 1 und dünner Rand trennen es vom Röhrenfernseher (90_2, dicker Rahmen, 4 : 3). Die
Schallwellen-Bänder treten links und rechts aus der Gerätekante und laufen zu den Rosetten. Wirkung: großes
helles Facettenfeld im dunklen Rahmen auf Rotorange – aus zwei Metern hell-dunkel-kräftig.

## Ansatz B – „Equalizer-Säulen über Schallwellen“
Leitobjekt: **Equalizer** aus neun Säulen auf der Achse, x 20,5–44,5, Säulenbreite 2,0, Abstand 0,7. Jede Säule
aus gestapelten Segmenten 2,0 × 0,8, rx 0,2, Fuge 0,3, auf einer Grundlinie y 17,4 (zur Freifläche hin),
wachsend nach oben. Segmentzahlen von außen nach innen **3 – 5 – 4 – 7 – 9 – 7 – 4 – 5 – 3**, also ein bewegtes
Profil, kein Dreieck (Spitzenform = Pfeil/Tanne). Farbe je Segmenthöhe unten `#F7DFCC` → `#EDB088` → oben
`#1A1A1A` (Spitzen-Segment dunkel, so bleibt die Säulenreihe im Graubild klar). Hinter den Säulen ein dunkles
Feld `#8A3C00` x 20–45, y 7,4–17,8, rx 0,6, Kontur 0,5, auf dem die Schallwellen-Bänder als feine Linien
durchlaufen. Rechts und links davon statt Polygonfeld je ein Strahlenfächer aus der Rosette (gerade Linien und
Keile im Wechsel `#8A3C00` / `#D55E00`) – Familie zur Vorderseite. Wirkung: die stärkste Pegel-Grafik der
Serie, im Graubild unverwechselbar, und klar anders als die Kappenreihe in 00_2-B (dort Schlitze, hier Säulen).

## Prüfung
`node .claude/skills/kartendesign-studio/scripts/render.js <datei.svg> --pruefen --text "2014|Helena Beispielová & Orchestr Ukázka|Dlouhý ukázkový název písně"`
– Freifläche glatt, Leitfarbe ≥ 45 %, Symmetrie ≤ 0,2, keine Linie < 0,3, keine Text-/Ziffern-Elemente.
Vorschau neben `design/studio/runde-3/vorlage.png` legen: Familie erkennbar? Leitobjekt im Graubild als
Musikgegenstand lesbar (nicht als Gesicht, Figur, Symbol)? Rot-Grün-Vorschau neben hinten_60_1/60_2, hinten_90_1 und vorne – klar unterscheidbar?
