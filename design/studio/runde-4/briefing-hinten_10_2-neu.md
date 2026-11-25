# Briefing Runde 4 (neu) – `hinten_10_2`

`data-motiv="hinten_10_2"`, Leitfarbe Rotorange `#D55E00`. Thema Variante 2: **Klang im Ohr – die
Kopfhörer-Generation** (Streaming unterwegs, Festivalsommer, große Over-Ear-Hörer der 2010er). Ersetzt das alte
Briefing (Trommel/Akkordeon – beide verworfen: Mund/Auge bzw. folkloristisch = 60er-Nähe).
Variante 1 (`hinten_10_1`) ist der Equalizer mit Schallwellen und Facettenrauten – hier also **keine Pegelsäulen,
keine Sinus-Wellenbänder, keine Strahlenfächer neben den Rosetten**.

Warum Kopfhörer: im Graubild für jede Altersgruppe sofort Musik, eindeutig Gegenwart statt Folklore, bisher nicht
vergeben (vergeben: Single, Radio, LP, Discokugel, Kassette, Boxen, CD, Fernseher, Keyboard, Mischpult, Equalizer).
Hinweis für später: Die 20er nehmen den Kopfhörer dann nicht mehr als Leitobjekt.

## Bildidee
Ein großer Over-Ear-Studiokopfhörer steht frontal auf der Achse, kantig facettiert wie ein Art-déco-Bauwerk:
flacher Bügel mit abgeschrägten Schultern, Polster in Kantenansicht als hohe Blöcke. Gespannte Lichterketten aus
kleinen Rauten und gestufte Giebel (Zikkurat-Stufen der Déco-Plakate) machen daraus ein Festivalbild der 2010er –
kantig, dunkel, modern, klar weg von den runden 60ern.

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


### Zusätzlich verboten beim Kopfhörer
- **Keine runden Ohrmuscheln in Frontalansicht** (zwei gleiche Kreise auf einer Höhe = Augen/Brille). Die Polster
  stehen in **Kantenansicht**: hohe, schmale Blöcke mit Fasen.
- **Kein runder Bügel als „∩“ oder „Ω“, kein rechtwinkliger „Π“:** Bügel aus geraden Stücken mit abgeschrägten
  Schultern (Trapez), Ecken mit r 0,8 gerundet.
- **Unter dem Bügel nichts leer lassen** (leerer Raum zwischen den Hörern = Kopf/Gesicht) und dort nichts Einzelnes
  mittig setzen (Raute/Punkt in der Mitte = Nase/drittes Auge) – nur flächige Struktur.
- **Keine Schallbögen um die Hörer** („((( )))“ = Funk/WLAN), keine Kabel (Kabelende wird „J“/„?“), keine Ohrhörer.
- Keine Logos auf den Hörerschalen (kein Kreis, kein Buchstabe, kein „b“-Kreis).

## Bausteine und Lagen (für beide Ansätze)
- **Leitobjekt** auf der Achse im Kopffeld (y 7,2–17,8), Fuß gespiegelt – siehe Ansatz A / B. Hell
  (`#F7DFCC` / `#EDB088`) mit Kontur 0,6 `#1A1A1A` auf dunklem Grund.
- **Lichterketten, gespannt statt durchhängend**: gerade waagerechte Linie 0,3 `#1A1A1A`, darauf Lichter als
  kleine über Eck gestellte Rauten 0,9 × 1,2 `#F7DFCC`, Kontur 0,3, Teilung 1,6 – keine Kreise, keine
  Strahlenkränze, keine Glühbirnenform. Lage je Ansatz.
- **Konfetti-Dreieckspaare** (Spitze an Spitze oder Kante an Kante, gefüllt, 1,2–1,6) in `#EDB088` / `#1A1A1A`,
  höchstens vier Paare je Viertel, Rest Punktraster `#8A3C00` auf `#D55E00` (r 0,25, Teilung 1,4).
- **Eckrosette** um (11 / 11): Viertelbögen r 3,6 / 4,5 (0,5 `#1A1A1A`), Enden Punkte r 0,3. Dazwischen ein
  **geschlossener Facettenring** aus acht Trapezflächen, Fuge 0,25, im Wechsel `#EDB088` / `#8A3C00` (Flächen,
  keine Striche – kein Zifferblatt). Innen glatter Grund `#1A1A1A`, Kern über Eck gestellte Raute 2,0 `#F7DFCC`,
  Kontur 0,3, **kein Mittelpunkt, keine Diagonalen, kein Zackenkranz**.
- **Abschlussband** y 16,4–18,0: Rautenkette Spitze an Spitze (Rauten 2,0 × 1,2, Teilung 2,0) `#EDB088` auf
  `#8A3C00`, oben und unten von Linie 0,3 `#1A1A1A` gefasst. Gerade Kanten, keine Dreieckszacken.
- **Seitenbänder** x 3,6–5,4 (rechts 59,6–61,4), y 20–77: **LED-Streifen** – zwei Fassungslinien 0,3 `#1A1A1A`
  bei x 3,75 / 5,25, dazwischen Rechteckglieder 1,2 × 1,6, rx 0,2, Fuge 0,3 (Teilung 1,9, 30 Glieder), im Wechsel
  `#EDB088` / `#8A3C00`, eine Fuge genau auf y 48,5. Ein Pattern, durchlaufend, Bandenden mit Querlinie 0,3.
  (Unterscheidet sich von der Rautenkette in 10_1.)
- Kantigkeit: alle Ornamentkanten gerade oder in Viertelbögen um (8 / 8); einzige Rundungen sind Eckradien,
  Rosettenbögen und die Rautenlichter-Ketten. Keine Op-Art-Kreise (60er).

## Ansatz A – „Studiokopfhörer auf dem Stufengiebel“
Kompaktes, helles Objekt in der Mitte, Kopffeld dicht drumherum (Lesart wie Kassette/CD/Discokugel).
- **Bügel**: Band 1,4 breit, Mittellinie über die Punkte (23,2 / 12,0) → (23,2 / 10,2) → (26,6 / 8,1) →
  (38,4 / 8,1) → (41,8 / 10,2) → (41,8 / 12,0); Füllung `#EDB088`, Kontur 0,5 `#1A1A1A`, Ecken r 0,8. Auf der
  Unterseite des waagerechten Stücks ein Kopfpolster aus fünf Kissen 2,2 × 0,9, rx 0,3, `#F7DFCC`, Fuge 0,3.
- **Gabeln**: kurze Rechtecke 1,0 × 1,0 `#1A1A1A` zwischen Bügelende und Hörer.
- **Hörer** (Kantenansicht): Schale x 20,4–24,2 bzw. 40,8–44,6, y 12,4–17,4, Fasen 0,8 an allen vier Ecken
  (gestutztes Rechteck), `#F7DFCC`, Kontur 0,6. Polster zur Achse hin als Streifen 1,2 breit `#8A3C00` mit
  Kontur 0,3, achsseitig mit rx 0,6. Auf der Schale ein senkrechter Lichtstreifen 0,6 `#EDB088` – kein Kreis,
  kein Punkt.
- **Zwischen den Hörern** (x 25,4–39,6, y 10,0–17,4): Stufengiebel in drei Stufen, achssymmetrisch:
  x 25,6–39,4 / y 14,8–17,4 `#1A1A1A`; x 27,6–37,4 / y 12,6–14,8 `#8A3C00`; x 29,6–35,4 / y 10,6–12,6 `#1A1A1A`,
  jede Stufe mit senkrechten Kannelur-Streifen 0,4 `#D55E00` (Teilung 1,2) und Oberkante 0,3 `#EDB088`.
  Rechte Winkel, **kein Treppenzug als Linie** (Flächen, keine Zickzackkontur), kein Einzelelement auf der Achse.
- **Lichterketten**: zwei gespannte Ketten je Viertel von der Rosette zum Objekt, y 9,2 (Rosettenrand bis
  Bügelschulter, x ≈ 15,5–22,6) und y 12,8 (Rosettenrand bis Hörerschale, x ≈ 15,5–20,0).
- **Zwickel** x 14,5–20, y 13,6–16,2: zwei Konfetti-Dreieckspaare `#EDB088` / `#1A1A1A` auf Punktraster.
- Wirkung: heller trapezförmiger Bügel mit zwei hohen Blöcken über dunklem Stufengiebel – aus zwei Metern klar
  Kopfhörer, kantig, eigene Silhouette gegenüber Kassette (quer, Spulen) und Boxen (Türme ohne Bügel).

## Ansatz B – „Kopfhörer als Portal über dem LED-Vorhang“
Großform: Der Kopfhörer ist die Architektur des ganzen Kopffelds (Lesart wie Bühnenportal der Déco-Plakate).
- **Hörer** stehen als Pfeiler direkt neben den Rosetten auf dem Abschlussband: Schale x 15,8–19,8 bzw.
  45,2–49,2, y 10,6–16,4, Fasen 0,9, `#F7DFCC`, Kontur 0,6; Polster achsseitig 1,4 breit `#8A3C00`.
  Auf jeder Schale drei waagerechte Lichtstreifen 0,5 `#EDB088` (Teilung 1,4) – Gitter-Anmutung ohne Kreis.
- **Bügel** als Art-déco-Doppelband über die volle Breite: Mittellinie (17,8 / 10,6) → (17,8 / 9,4) →
  (21,6 / 7,6) → (43,4 / 7,6) → (47,2 / 9,4) → (47,2 / 10,6); außen Linie 0,6 `#1A1A1A`, Band 1,1 `#EDB088`,
  innen Linie 0,3 `#1A1A1A`, Ecken r 0,8. Kopfpolster: sieben Kissen 2,4 × 0,8 `#F7DFCC` unter dem Mittelstück.
- **Im Portal** (x 21–44, y 9,0–16,3) auf Grund `#1A1A1A`: **LED-Vorhang** aus elf senkrechten Lichterketten
  (Linie 0,3 `#8A3C00`, Rautenlichter 0,9 × 1,2 im Wechsel `#F7DFCC` / `#EDB088`, Teilung 1,6), Abstand 2,0,
  **alle gleich lang** (bis y 16,0 – gestufte Längen wären ein Equalizer = 10_1), Lichter zeilenweise auf
  gleicher Höhe, sodass ein ruhiges Rautenraster entsteht. Hinterlegt von zwei flachen Stufen `#8A3C00` an den
  Portalseiten (x 21–23,4 und 41,6–44, y 12,0–16,3) – kein Element mittig auf der Achse.
- **Zwickel** entfallen (die Hörer füllen sie); zwischen Rosette und Hörer nur Punktraster und je ein
  Konfetti-Dreieckspaar oben bei x ≈ 15 / y ≈ 7,6.
- Wirkung: monumentales, helles Trapez-Portal mit funkelnder Rasterfläche – aus zwei Metern „Kopfhörer und
  Festivalbühne“, deutlich anders als A (kompaktes Objekt) und als alle bisherigen Kopffelder.

## Prüfung
`node .claude/skills/kartendesign-studio/scripts/render.js <datei.svg> --pruefen --text "2015|Helena Beispielová & Orchestr Ukázka|Dlouhý ukázkový název písně"`
– Freifläche glatt, Leitfarbe ≥ 45 %, Symmetrie ≤ 0,2, keine Linie < 0,3, keine Text-/Ziffern-Elemente.
Vorschau neben `design/studio/runde-3/vorlage.png` und `hinten_10_1` legen: Familie erkennbar, Schwester klar
anders? Graubild: liest sich das Objekt als Kopfhörer – **nicht** als Gesicht, Kopf mit Ohren, Magnet, „Π“, Tor?
Kopfstehend im Fuß prüfen (darf nicht als „U“/Hufeisen kippen – Polster und Kissen machen es lesbar).
Rot-Grün-Vorschau neben hinten_60_1/60_2, hinten_90_1 und vorne: 10er als einzige Karte deutlich dunkel.
