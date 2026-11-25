# Briefing Runde 4 – `hinten_00_2`

`data-motiv="hinten_00_2"`, Leitfarbe Blau `#0072B2`. Thema Variante 2: **Musik digital in der Tasche**.
Variante 1 (`hinten_00_1`) ist Bühne/Castingshow (Mikrofon, Keyboard, Stroboskop) – hier also kein
Strahlenfächer hinter dem Objekt, kein Bühnenbogen.

## Bildidee
Musik wird klein, digital und tragbar: Ein Gerät der Download-Jahre steht hell auf der Achse, Kabel laufen als
ruhige Doppellinien in Art-déco-Schleifen zu den Eckrosetten. Pixelquadrate in Tonstufen und flache
Kreisblasen ersetzen das Punktraster – technisch, geordnet, deutlich anders als die Bühne von 00_1.

## Familie – aus den freigegebenen Rückseiten übernehmen (Pflicht)
Maßstab: alle acht freigegebenen Rückseiten in `design/motive/` (Vorschau `design/studio/runde-3/vorlage.png`),
besonders `hinten_90_1.svg` für Aufbau und Maße.
- `data-motiv="hinten_00_2" data-frei="8,19,49,59"` – **exakt** (lichte Fläche x 8–57, y 19–78), glatt `#CCE3F0`.
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
- **Kabelschleifen**: Doppellinie (2 × 0,35 `#1A1A1A`, Abstand 0,5, dazwischen `#A9CDE5`) vom Leitobjekt zur
  Eckrosette. Nur gerade Stücke und Viertelbögen mit r ≥ 1,5 – **kein Knick, keine Y-Gabel, keine Schlaufe in
  S-Form**. Ende an der Rosette als Stecker: gerundetes Rechteck 1,0 × 2,0, rx 0,4, `#CCE3F0`, Kontur 0,3,
  ohne Spitze.
- **Hintergrund des Kopffelds**: zwei bis drei gestaffelte gerundete Rechtecke hinter dem Objekt (Fenster der
  Software-Jahre, ohne Leisten oder Knöpfe), versetzt 0,8 nur senkrecht/waagerecht, `#004F7C` / `#1A1A1A`,
  Innenrand 0,3 `#A9CDE5`.
- **Eckrosette** um (11 / 11): zwischen r 3,6 / 4,5 ein Fächer aus acht flachen Sektoren im Wechsel `#CCE3F0` /
  `#A9CDE5`; Kern Vollkreis r 1,1 `#004F7C` **ohne** Mittelpunkt, Kontur 0,3.
- **Zwickel** x 14–20, y 8–17: Pixelmosaik – Quadrate 0,9 (Teilung 1,2) zu einer über Eck gestellten Raute
  geordnet, Ton von außen `#004F7C` nach innen `#CCE3F0`; daneben zwei bis drei flache Kreisblasen r 0,7–1,1
  (`#A9CDE5`, Kontur 0,3, ohne Glanzpunkt, nicht zwei gleich große auf einer Höhe).
- **Abschlussband** y 16,4–18,0: Halbkreise r 0,8, Teilung 2,0, nach oben offen `#CCE3F0` auf `#004F7C`
  (Kreisblasen-Fries), auf einer Linie 0,3 `#1A1A1A`.
- **Seitenbänder** x 3,6–5,4, y 20–77: „Datenkabel“ – zwei senkrechte Linien 0,35 `#1A1A1A`, dazwischen eine
  Kette aus Quadraten 0,9 im Wechsel `#CCE3F0` / `#004F7C`, Teilung 2,0. Durchlaufend.

## Ansatz A – „MP3-Player mit Kabel“
Leitobjekt: **MP3-Player hochkant**, x 28,4–36,6, y 7,4–17,8, rx 1,4, Gehäuse `#CCE3F0`, Kontur 0,6 `#1A1A1A`.
Bildschirm x 29,5–35,5, y 8,4–11,8, rx 0,4, `#004F7C`, darin ein ruhiges Pixelmosaik (Quadrate 0,7 in drei
Tonstufen, symmetrisch, keine Balkenreihe – Balken gehören den 2010ern). Darunter das Rad: **Vollscheibe**
r 2,3 um (32,5 / 14,8), `#A9CDE5`, Kontur 0,4 – **ohne Mittelknopf, ohne Markierungen, ohne Teilungslinien**
(Kreuzteilung = Fadenkreuz, Mittelknopf = Auge). Keine Ohrhörer (zwei runde Hörer = Augen). Das Kabel tritt
links und rechts an der Gehäusekante auf Höhe y 9,0 aus und läuft als Doppellinie waagerecht bis x 22, dann
im Viertelbogen nach unten zur Kopffeld-Unterkante und weiter zur Rosette (siehe Kabelschleifen). Wirkung:
heller Hochkantkörper auf dunklem Blau, Bildschirm über Scheibe – Taschenplayer im Graubild sofort lesbar,
klar verschieden von Kassette (quer, zwei Spulen) und CD (Scheibe).

## Ansatz B – „DJ-Mischpult mit Schiebereglern“
Leitobjekt: **Mischpult quer**, x 20–45, y 8,0–17,6, rx 0,8, Rahmen `#1A1A1A`, Bedienfläche eingesetzt
x 20,8–44,2, y 8,8–16,8, `#004F7C`. Sechs senkrechte Kanalschlitze 0,5 × 6,0 (y 9,4–15,4) `#1A1A1A` bei
x 24,5 / 27,5 / 30,5 und gespiegelt 34,5 / 37,5 / 40,5. Auf jedem Schlitz eine Fader-Kappe 1,8 × 1,0, rx 0,3,
`#CCE3F0`, Kontur 0,3 – **alle auf derselben Höhe y 11,9** (versetzte Höhen ergeben Mund/Lächeln oder
Equalizer). Unten der Crossfader: waagerechter Schlitz x 28,5–36,5, y 16,0, Kappe 1,0 × 1,8 mittig. In der Mitte
zwischen den Kanalgruppen (x 31,6–33,4) eine senkrechte Pegel-Leiste aus fünf Quadraten 0,8 in Tonstufen
`#CCE3F0` → `#A9CDE5` → `#0072B2`. **Keine Drehknöpfe.** Kabel: zwei Doppellinien treten an den Seitenwangen
bei y 12,8 aus und laufen wie oben zu den Rosetten. Wirkung: helle Kappenreihe auf dunklem Pult – rhythmisch,
technisch, eindeutig Musikgerät; Silhouette quer und kantig, klar anders als Boxenwand (80_2) und
Fernseher (90_2).

## Prüfung
`node .claude/skills/kartendesign-studio/scripts/render.js <datei.svg> --pruefen --text "2006|Helena Beispielová & Orchestr Ukázka|Dlouhý ukázkový název písně"`
– Freifläche glatt, Leitfarbe ≥ 45 %, Symmetrie ≤ 0,2, keine Linie < 0,3, keine Text-/Ziffern-Elemente.
Vorschau neben `design/studio/runde-3/vorlage.png` legen: Familie erkennbar? Leitobjekt im Graubild als
Musikgegenstand lesbar (nicht als Gesicht, Figur, Symbol)? Rot-Grün-Vorschau neben hinten_70_1/70_2 und vorne – klar unterscheidbar?
