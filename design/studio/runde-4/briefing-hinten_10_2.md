# Briefing Runde 4 – `hinten_10_2`

`data-motiv="hinten_10_2"`, Leitfarbe Rotorange `#D55E00`. Thema Variante 2: **Sommerfestival und
Handgemachtes** (Folk-Pop- und Festivalwelle der 2010er). Variante 1 (`hinten_10_1`) ist Streaming
(Smartphone, Equalizer, Polygon-Parkett) – hier also keine Bildschirme, keine Pegelsäulen.

## Bildidee
Ein Festivalabend der 2010er: Ein akustisches Instrument steht auf der Achse unter durchhängenden
Lichterketten, dahinter liegen Papierschnitt-Ornamente in mehreren Lagen wie bei einem Plakat aus
Scherenschnitt. Weich und warm statt digital – aber in derselben strengen Art-déco-Symmetrie.

## Familie – aus den freigegebenen Rückseiten übernehmen (Pflicht)
Maßstab: alle acht freigegebenen Rückseiten in `design/motive/` (Vorschau `design/studio/runde-3/vorlage.png`),
besonders `hinten_90_1.svg` für Aufbau und Maße.
- `data-motiv="hinten_10_2" data-frei="8,19,49,59"` – **exakt** (lichte Fläche x 8–57, y 19–78), glatt `#F7DFCC`.
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
- **Lichterketten**: zwei durchhängende Bögen (Kettenlinie, rund) je Viertel, von der Rosette (≈ 14 / 8,0) bis
  an das Leitobjekt (≈ 20 / 9,0), tiefster Punkt y ≈ 11,5 bzw. 13,5. Linie 0,3 `#1A1A1A`, darauf Lichter als
  Vollkreise r 0,45 `#F7DFCC` mit Kontur 0,3, Abstand 1,4 – keine Glühbirnen-Form, keine Strahlenkränze um die
  Lichter (sonst Sonne/Stern).
- **Papierschnitt-Lagen** hinter dem Leitobjekt: drei gestaffelte, achsensymmetrische Bogen-Kanten (Bogenreihen
  aus Halbkreisen r 1,0 – wie gestanzte Spitzenborte), `#8A3C00` hinten, `#D55E00` Mitte, `#1A1A1A` vorne,
  jeweils 0,8 versetzt. Kanten **rund**, keine Zacken.
- **Eckrosette** um (11 / 11): Papierschnitt-Rosette – zwischen r 3,6 / 4,5 ein Kranz aus kleinen Halbkreisen
  `#F7DFCC`; Kern: Blüte aus sechs Vollkreisen r 0,5 `#EDB088` um einen leeren Mittelraum (kein Mittelpunkt).
- **Zwickel** x 14–20, y 8–17: Konfetti-Dreieckspaare (Spitze an Spitze, gefüllt, 1,2–1,6) in `#EDB088` /
  `#1A1A1A`, höchstens vier Paare je Viertel, Rest Punktraster `#8A3C00` auf `#D55E00`.
- **Abschlussband** y 16,4–18,0: Spitzenborte – Halbkreise r 0,8, Teilung 2,0, nach unten hängend `#F7DFCC`
  auf einer Linie 0,3 `#1A1A1A`, **ohne Lochung** (Loch im Bogen = Auge).
- **Seitenbänder** x 3,6–5,4, y 20–77: Lichterkette senkrecht – Linie 0,3 `#1A1A1A` in sanfter Welle
  (Amplitude 0,4, Periode 4,0, rund), Lichter r 0,45 `#F7DFCC` an jedem Wellenscheitel. Durchlaufend.

## Ansatz A – „Festivaltrommel unter Lichterketten“
Leitobjekt: **Marschtrommel in Seitenansicht**, quer auf der Achse, x 22–43, y 9,0–17,2. Kessel als Rechteck
x 22,6–42,4, y 10,2–16,0, `#F7DFCC`, Kontur 0,6. Oben und unten Spannreifen als Bänder 0,9 hoch `#1A1A1A`, rx 0,4,
je 0,3 breiter als der Kessel. Darüber das Fell als flache Halbellipse (rx 9,9, ry 1,0) `#EDB088`, Kontur 0,4 –
signalisiert „Trommel“ statt „Dose“. Am Kessel sieben senkrechte Spannböckchen 0,7 × 2,2, rx 0,3, `#8A3C00`,
gleichmäßig verteilt (mittleres auf x 32,5), oben und unten mit Reifen verbunden durch gerade senkrechte Linien
0,3 – **keine schrägen Spannschnüre** (ergeben Zickzack). Keine Schlägel (gekreuzt = X/Wappen). Die
Lichterketten hängen von der Rosette bis an die Trommel. Wirkung: breiter, heller, gestreifter Körper – im
Graubild klar Trommel, eigene Silhouette gegenüber allen bisherigen Objekten.

## Ansatz B – „Akkordeon im Papierschnitt“
Leitobjekt: **Akkordeon frontal, quer**, x 20,5–44,5, y 8,2–17,4. Links und rechts je ein Gehäuseblock
x 20,5–25,0 bzw. 40,0–44,5, rx 0,6, `#1A1A1A`, darauf ein Raster aus Knöpfen (Vollkreise r 0,35 `#F7DFCC`,
Teilung 1,2, 3 × 6 – gleichmäßig, nicht zwei einzelne Kreise). Dazwischen der Balg x 25,0–40,0: **zwölf
senkrechte Streifen** à 1,25 im Wechsel `#F7DFCC` / `#8A3C00`, Ober- und Unterkante **gerade** – keine
Zickzack-Kontur (Balgfalten im Profil = Runen-Zacken, absolut verboten). Ober- und Unterkante des Balgs mit
je einer Leiste 0,5 `#EDB088` und kleinen Eckwinkeln als Viertelkreise r 0,6 (Metallecken). Über dem
Instrument ein flacher Tragriemen als Korbbogen x 26–39, Scheitel y 7,4, Band 0,6 `#EDB088` mit Kontur 0,3.
Hinter dem Akkordeon die Papierschnitt-Lagen breiter (x 19–46). Wirkung: Streifen-Balg zwischen zwei
gepunkteten Blöcken ist im Graubild sofort Akkordeon, verweist auf die tschechisch-slowakische
Folk-Pop-Welle und unterscheidet sich in Silhouette und Rhythmus klar von 10_1.

## Prüfung
`node .claude/skills/kartendesign-studio/scripts/render.js <datei.svg> --pruefen --text "2015|Helena Beispielová & Orchestr Ukázka|Dlouhý ukázkový název písně"`
– Freifläche glatt, Leitfarbe ≥ 45 %, Symmetrie ≤ 0,2, keine Linie < 0,3, keine Text-/Ziffern-Elemente.
Vorschau neben `design/studio/runde-3/vorlage.png` legen: Familie erkennbar? Leitobjekt im Graubild als
Musikgegenstand lesbar (nicht als Gesicht, Figur, Symbol)? Rot-Grün-Vorschau neben hinten_60_1/60_2, hinten_90_1 und vorne – klar unterscheidbar?
