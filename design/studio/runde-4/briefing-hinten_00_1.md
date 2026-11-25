# Briefing Runde 4 – `hinten_00_1`

`data-motiv="hinten_00_1"`, Leitfarbe Blau `#0072B2`. Thema Variante 1: **Bühne / Castingshow-Jahre**.
Variante 2 (`hinten_00_2`) ist „Musik digital in der Tasche“ (MP3-Player, DJ-Pult) – hier also keine
Taschengeräte, keine Kabel als Hauptmotiv.

## Bildidee
Die 2000er als großer Bühnenabend der Castingshow-Jahre: Auf der Achse steht ein hell angestrahltes
Bühneninstrument vor einem Fächer aus Stroboskop-Strahlen, ringsum flache Kreisblasen und Pixelquadrate.
Die Art-déco-Ordnung der Vorderseite (Strahlenfächer, Rosetten, Doppelrahmen) trägt das wie ein Supraphon-Plakat.

## Familie – aus den freigegebenen Rückseiten übernehmen (Pflicht)
Maßstab: alle acht freigegebenen Rückseiten in `design/motive/` (Vorschau `design/studio/runde-3/vorlage.png`),
besonders `hinten_90_1.svg` für Aufbau und Maße.
- `data-motiv="hinten_00_1" data-frei="8,19,49,59"` – **exakt** (lichte Fläche x 8–57, y 19–78), glatt `#CCE3F0`.
  Nichts hineinzeichnen; Jahreszahl-Oberkante 22 mm vom Dateirand wie auf allen Karten.
- Freiflächenrahmen: eine Linie 0,5 `#1A1A1A`, `rect x 7.4 y 18.4 w 50.2 h 60.2 rx 1.4`.
- Außenrahmen d 5,5 (0,6, rx 5,5) und d 6,3 (0,3, rx 4,7) `#1A1A1A`; Fläche dazwischen und innen Leitfarbe.
- Beschnitt und Streifen außerhalb des Außenrahmens: ruhig, `#0072B2` mit Punktraster `#005D93` r 0,25,
  Teilung 1,4 (Ton in Ton) – bis zum Dateirand 0–65 / 0–97. Dort keine Einzelformen.
- Kopffeld y 6,5–18,1, Fußfeld gespiegelt y 78,9–90,5, Grund kräftig `#0072B2`. Leitobjekt im Kopf
  y 7,2–17,8, mittig x 32,5, Breite höchstens x 19–46.
- Eckrosette um (11 / 11), Viertelbögen r 3,6 / 4,5 (0,5 `#1A1A1A`) parallel zur Stanzrundung (Mittelpunkt 8 / 8);
  Enden der Viertelringe als Punkte r 0,3, keine Endstriche.
- Nur das linke obere Viertel zeichnen und dreimal spiegeln; das Leitobjekt selbst symmetrisch zu x 32,5,
  für den Fuß an y 48,5 gespiegelt (steht dort also kopf – das ist gewollt).
- Seitenbänder x 3,6–5,4 (rechts 59,6–61,4), y 20–77: **durchlaufende Kette ohne Einzelformen**, als ein Pfad
  über die Achse y 48,5 ohne Phasensprung; Abstand zur Schnittkante ≥ 0,6 mm.
- Flimmer-Regel: Wiederholmuster am Rand Periode ≥ 2 mm oder Ton in Ton; Punkte Ø ≥ 0,4, Teilung ≥ 1,0;
  Linien ≥ 0,3; `stroke-linejoin="round"`. Keine Verläufe, keine Transparenz, kein Glanz.
- **Abgrenzung zu den 70ern (`#56B4E9`)**: Die 2000er sind *dunkler und satter*. Kopf-/Fußgrund wirklich in
  `#0072B2` lassen, nie aufhellen. Mitteltöne zwischen `#0072B2` und `#CCE3F0` (also alles um `#56B4E9`/`#7FC5EE`)
  **nicht verwenden** – Lichter nur als `#A9CDE5` (blass) oder `#CCE3F0`. Fast-Schwarz kräftig (Konturen 0,5–0,6),
  dazu `#004F7C` als Nachtblau. Im Kontaktbogen neben `hinten_70_1`/`hinten_70_2` legen: mittlere Helligkeit des
  Kopffelds muss sichtbar dunkler sein (Zielwert: mindestens 25 % dunkler als 70_2, nachmessen).
- Graubild: Leitobjekt hell (`#CCE3F0`/`#A9CDE5`) auf dunklem Grund mit schwarzer Kontur – als Gegenstand lesbar.

## Farben
`#0072B2` Leitfarbe, `#004F7C` dunkle Stufe, `#A9CDE5` helle Stufe, `#CCE3F0` Licht/Freifläche, `#1A1A1A`.
Keine weiteren Töne.

## Farbanteile (außerhalb der Freifläche)
- Leitfarbe `#0072B2`: 45–55 % (aus zwei Metern muss das Jahrzehnt allein über die Farbe stehen)
- Fast-Schwarz `#1A1A1A`: 22–28 %
- Zwischenton `#004F7C`: 10–15 %
- Lichter `#A9CDE5` / `#CCE3F0`: 10–18 %, fast ganz im Leitobjekt gebündelt

## Freiflächen-Rechteck
`data-frei="8,19,49,59"` (x 8–57, y 19–78), glatt `#CCE3F0`. Kopf- und Fußornament nur in y 7–18 bzw. 79–90
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
- **Stroboskop-Fächer** hinter dem Leitobjekt: Strahlen vom Punkt (32,5 / 18,2) nach oben, ±70°, im Wechsel
  schmaler Keil `#004F7C` (an der Spitze 0, außen 1,2 breit) und gerade Linie 0,3 `#A9CDE5`, Teilung 6–7°,
  geclippt auf das Kopffeld x 19–46. Strahlen gerade, ohne Knick, enden am Kopffeldrand (nicht an der Rosette).
  Das ist das Echo der Strahlenfächer auf der Vorderseite.
- **Eckrosette** um (11 / 11): zwischen den Viertelbögen r 3,6 / 4,5 ein Ring aus Pixelquadraten (0,8 × 0,8,
  achsparallel, im Wechsel `#CCE3F0` / `#004F7C`); Kern: über Eck gestellte Raute 2,0 `#A9CDE5`, Kontur 0,3,
  **kein Mittelpunkt**.
- **Zwickel** x 14–20, y 8–17: **Kreisblasen** der 2000er – drei bis vier flache Vollkreise r 0,6–1,3 in
  `#A9CDE5` / `#CCE3F0` mit Kontur 0,3, leicht überlappend, ohne Glanzpunkt (Glanzpunkt = Auge); darunter ein
  Feld aus Pixelquadraten 0,9 (Teilung 1,2) in drei Tonstufen `#004F7C` → `#0072B2` → `#A9CDE5`, als Treppe zur
  Freifläche hin heller werdend (Stufen nur als Flächen, nie als Linie mit Knick).
- **Abschlussband** zur Freifläche, y 16,4–18,0 (links und rechts des Leitobjekts): Pixelfries – Quadrate
  1,0 × 1,0 auf einer Linie 0,3 `#1A1A1A`, Teilung 2,0, im Wechsel `#CCE3F0` / `#004F7C`.
- **Seitenbänder** x 3,6–5,4, y 20–77: Kette aus achsparallelen Quadraten 1,0 (Teilung 2,0, im Wechsel
  `#CCE3F0` / `#004F7C`) zwischen zwei senkrechten Linien 0,3 `#1A1A1A`. Durchlaufend, keine Einzelform.

## Ansatz A – „Handmikrofon im Stroboskop“
Leitobjekt: **Bühnen-Handmikrofon, senkrecht** auf der Achse. Korb: Kreis r 2,7 um (32,5 / 10,2), Grund
`#CCE3F0`, darauf Rautengitter (Linien 0,3 `#1A1A1A`, Teilung 1,1, über Eck) – **kein Querband durch die Mitte**
(sonst „Θ“), Kontur 0,6. Darunter Kragen x 30,2–34,8, y 12,9–13,7, rx 0,3, `#A9CDE5`, Kontur 0,4. Griff als
schlankes, nach unten verjüngtes Trapez mit runden Ecken (oben 3,4 breit, unten 2,0 breit, y 13,7–17,6),
`#1A1A1A`, ohne Schalter, ohne Innenlinien. Der Korb trägt das Gitter, der Griff bleibt glatt – so liest es sich
als Mikrofon und nicht als Eiswaffel (dort ist das Gitter unten). Kein Ständer (Kugel + Stange = Figur).
Links und rechts (x 21–28 / 37–44) zwei kleine Bühnenpodeste als gestaffelte Rechtecke rx 0,4 (`#004F7C`,
`#1A1A1A`, Innenrand `#A9CDE5`), auf denen die Strahlen „stehen“. Wirkung: helle Kugel im dunklen
Strahlenkranz – im Graubild sofort Mikrofon, ganz andere Silhouette als Single, Platte, CD.

## Ansatz B – „Stagepiano unter der LED-Wand“
Leitobjekt: **Keyboard quer** auf der Achse, x 20,5–44,5. Tastatur y 13,0–17,6: elf weiße Tasten à 2,0 breit
(F G A B C **D** E F G A B – mittig das D auf x 31,5–33,5; die Klaviatur ist um D exakt spiegelsymmetrisch),
Tasten `#CCE3F0`, Fugen 0,3 `#1A1A1A`; acht schwarze Tasten 1,2 × 2,8 (y 13,0–15,8) `#1A1A1A` an den echten
Stellen (zwischen F-G, G-A, A-B, C-D, D-E, F-G, G-A, A-B). Seitenwangen je 1,0 `#1A1A1A`, rx 0,5. Gehäuse
darüber y 10,4–13,0, `#1A1A1A`, mit einer flachen Anzeige x 29–36, y 10,9–12,4 (Pixelquadrate 0,7 in zwei
Reihen, `#A9CDE5` / `#004F7C`, keine Zeichen) und je drei kleinen liegenden Kapseln 1,2 × 0,5 `#A9CDE5` als
Regler links und rechts – **keine Drehknöpfe** (Kreise = Augen). Über dem Keyboard statt Strahlen ein flacher
Bühnenbogen (Korbbogen x 19–46, Scheitel y 7,4) gefüllt mit einer **LED-Wand aus Pixelquadraten** 0,9
(Teilung 1,2) in drei Tonstufen, Kontur 0,5 – kantig-pixelig, damit er sich klar von den runden
Regenbogenbögen der 70er (70_1) unterscheidet. Den Stroboskop-Fächer dafür nur in den Zwickeln x 14–20 als
Strahlenbündel von der Rosette weg. Wirkung: Klaviatur ist im Graubild unverwechselbar; Pixelwand gibt das
Jahrzehnt.

## Prüfung
`node .claude/skills/kartendesign-studio/scripts/render.js <datei.svg> --pruefen --text "2004|Helena Beispielová & Orchestr Ukázka|Dlouhý ukázkový název písně"`
– Freifläche glatt, Leitfarbe ≥ 45 %, Symmetrie ≤ 0,2, keine Linie < 0,3, keine Text-/Ziffern-Elemente.
Vorschau neben `design/studio/runde-3/vorlage.png` legen: Familie erkennbar? Leitobjekt im Graubild als
Musikgegenstand lesbar (nicht als Gesicht, Figur, Symbol)? Rot-Grün-Vorschau neben hinten_70_1/70_2 und vorne – klar unterscheidbar?
