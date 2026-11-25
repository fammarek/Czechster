# Briefing Runde 5 – `hinten_20_2`

`data-motiv="hinten_20_2"`, Leitfarbe Pink `#CC79A7`, Freifläche `#F4E2EC`. Thema Variante 2:
**Streaming – Musik als Klangwelle**. Variante 1 (`hinten_20_1`) ist die Vinyl-Renaissance – hier also
**keine Schallplatte, keine Rillenringe, keine Scheibe** als Motiv.

## Bildidee
Die 2020er als Musik ohne Gegenstand: Auf der Achse schwebt eine weich gerundete Klangwelle, die sich wie ein
Art-déco-Medaillon in Schimmer-Stufen staffelt, eingebettet in übereinanderliegende weiche Bögen.
Ruhig versetzte Streifen und Funkelsterne geben das Digitale, ohne ein einziges Gerät oder App-Zeichen.

## Familie – aus den freigegebenen Rückseiten übernehmen (Pflicht)
Maßstab: alle zwölf freigegebenen Rückseiten in `design/motive/`, besonders `hinten_00_1.svg` und
`hinten_10_1.svg` für Aufbau und Maße (Kontaktbogen Runde 4: `design/studio/runde-4/kontaktbogen.png`).
- `data-motiv="hinten_20_2" data-frei="8,19,49,59"` – **exakt** (lichte Fläche x 8–57, y 19–78), glatt `#F4E2EC`.
  Nichts hineinzeichnen; Jahreszahl-Oberkante 22 mm wie auf allen Karten.
- Freiflächenrahmen: eine Linie 0,5 `#1A1A1A`, `rect x 7.4 y 18.4 w 50.2 h 60.2 rx 1.4`.
- Außenrahmen d 5,5 (0,6, rx 5,5) und d 6,3 (0,3, rx 4,7) `#1A1A1A`; Fläche dazwischen und innen Leitfarbe.
- Beschnitt und Streifen außerhalb des Außenrahmens: ruhig, `#CC79A7` mit Punktraster `#B5638F` r 0,25,
  Teilung 1,4 (Ton in Ton) bis zum Dateirand 0–65 / 0–97. Dort keine Einzelformen.
- Kopffeld y 6,5–18,1, Fußfeld gespiegelt y 78,9–90,5, Grund kräftig `#CC79A7`. **Kopf-/Fußornament nur
  y 7–18 bzw. 79–90.** Leitobjekt im Kopf y 7,2–17,8, mittig x 32,5, Breite höchstens x 19–46.
- Eckrosette um (11 / 11), Viertelbögen r 3,6 / 4,5 (0,5 `#1A1A1A`) parallel zur Stanzrundung (Mittelpunkt 8 / 8),
  Enden als Punkte r 0,3. Zwischen den Bögen ein **geschlossener** Ring (glatt oder dicht gesetzte Segmente,
  Fuge ≤ 0,3), innen glatter Grund `#7A2F5A`, Kern über Eck gestellte Raute 2,0 `#F4E2EC`, Kontur 0,3,
  **kein Mittelpunkt**. Verboten im Kranz: Speichen, Radialstriche, Punktkranz in gleichen Abständen,
  Zackenkranz, Diagonalen durch den Kern, Nabe.
- Nur das linke obere Viertel zeichnen und dreimal spiegeln; Leitobjekt selbst symmetrisch zu x 32,5, im Fuß an
  y 48,5 gespiegelt (steht dort kopf – gewollt). Symmetrie-Messwert ≤ 0,2.
- Seitenbänder x 3,6–5,4 (rechts 59,6–61,4), y 20–77: Fassungslinien 0,3 `#1A1A1A` bei x 3,75 / 5,25, dazwischen
  eine **durchlaufende Kette** (Glieder berühren sich), ein Pfad/Pattern ohne Phasensprung bei y 48,5
  (Periode teilt 57 mm oder Glied mittig auf 48,5), Enden mit Querstrich 0,3. Abstand zur Schnittkante ≥ 0,6.
- Flimmer-Regel: Wiederholmuster am Rand Periode ≥ 2 mm oder Ton in Ton; Punkte Ø ≥ 0,4, Teilung ≥ 1,0;
  Linien ≥ 0,3; `stroke-linejoin="round"`. Keine Verläufe, keine Transparenz, kein Glanz – „Schimmer“ heißt
  immer: harte Flächen in 2–3 Tonstufen nebeneinander.

## Farben
`#CC79A7` Leitfarbe, `#7A2F5A` dunkle Stufe (Pflaume), `#E7B9D2` helle Stufe, `#F4E2EC` Licht/Freifläche,
`#1A1A1A`. Raster im Beschnitt `#B5638F`. Keine weiteren Töne, kein Neon-Magenta.

## Farbanteile (außerhalb der Freifläche)
- Leitfarbe `#CC79A7`: 45–55 %
- Fast-Schwarz `#1A1A1A`: 20–25 %
- Zwischenton `#7A2F5A`: 10–15 %
- Lichter `#E7B9D2` / `#F4E2EC`: 12–18 %, überwiegend im Leitobjekt gebündelt

## Rot-Grün: Abgrenzung zu 70er-Blau und 00er-Blau – Hebel Helligkeit
Bei Deuteranopie wird `#CC79A7` zu einem graustichigen Lavendel/Blau – also genau in die Nähe der Blau-Karten.
Der Farbton trennt dann nicht mehr, **nur die Helligkeit**: L* 70er-Grund `#56B4E9` ≈ 70, 20er `#CC79A7` ≈ 61,
00er `#0072B2` ≈ 46. Pink liegt in der Mitte – der Abstand muss erhalten, nicht verwischt werden:
- Kopf-/Fußgrund und Beschnitt **exakt `#CC79A7`**, nie aufhellen (Richtung 70er) und nie großflächig
  abdunkeln (Richtung 00er). Großflächige Töne mit L* 64–76 oder 42–52 sind verboten.
- Dunkle Stufe deshalb klar dunkel (`#7A2F5A`, L* ≈ 32), helle Stufe klar hell (`#E7B9D2`, L* ≈ 80) –
  kein Mittelton dazwischen.
- Zusätzlicher Formhebel: weiche, runde Formen statt der Pixelquadrate der 00er und statt der Rosetten-Blüten
  der 70er.
- Nachmessen in der Rot-Grün-Reihe des Kontaktbogens neben `hinten_70_1`, `hinten_70_2`, `hinten_00_1`,
  `hinten_00_2`: mittlere Helligkeit des Kopffelds mindestens 8 L*-Punkte unter 70_2 und mindestens 10 über 00_1.

## Verboten (Besitzer, absolut)
- **Keine Blitze, nichts Runenartiges**: keine gezackten Linien, Knickstriche, eckigen S-/Z-Formen, kein
  Zickzack, auch nicht als Glitch-Treppe. Wellen und Bögen sind **rund**, Streifen **gerade**.
- **Keine Gesichter/Augen/Zähne**: keine dunkle Scheibe mit hellem Punkt, keine zwei gleichen Kreise auf
  Augenhöhe, keine Stabgitter (Reihe senkrechter Stäbe = Zähne/Grill), kein Kreis mit Mittelpunkt.
- **Keine Kopfhörer** (gehören 10_2), keine Equalizer-Balken (10_1), keine Pixelquadrate als Hauptmotiv (00er),
  kein Halbkreis-Regenbogen auf der Freiflächenkante (70_1).
- Keine Bedien-/App-Symbole: Play-Dreieck, Pause, Herz, Like, WLAN-Bögen „((( )))“ um einen Punkt,
  Bluetooth, Notensymbole, Logos von Streamingdiensten (auch nicht die drei geschwungenen Linien im Kreis).
- Sterne nur als **vierzackige Funkelsterne** mit eingezogenen (konkaven) Seiten oder als Raute mit
  Strahlenpunkten – keine fünfzackigen Sterne, keine Drehformen.
- Kein Text, keine Buchstaben, keine Ziffern.
- Jede kleine Form einzeln aus einem Meter ansehen: Zeichen, Symbol, Gesicht, Auge → **ersetzen**
  (Punkt, Raute, Funkelstern, Streifen), nicht abschwächen.

## Abgrenzung innerhalb der Familie
- 10_1 hat Equalizer-Balken mit dünnen Sinuslinien dahinter → hier **keine Balken**, die Welle ist eine
  **gefüllte, weich gerundete Fläche** (Hüllkurve), keine Linie über einem Raster.
- 70_1 hat Regenbogenbögen um einen Punkt auf der Freiflächenkante → hier Bögen **flach und quer liegend**
  (Korbbögen / liegende Wellenbänder), nie als aufrechter Halbkreis-Fächer.
- 00er haben Pixelquadrate → „Glitch“ hier nur als **lange, gerade Streifen mit runden Enden**, keine Quadrate.

## Bausteine und Lagen (für beide Ansätze)
- **Leitobjekt** auf der Achse im Kopffeld (y 7,2–17,8), Fuß gespiegelt – siehe Ansatz A / B.
- **Eckrosette** wie in der Familie; der Ring zwischen r 3,6 und 4,5 hier als **glattes Wellenband**:
  geschlossener Ring `#E7B9D2`, darin eine sanfte Welle (Linie 0,3 `#7A2F5A`, 6 Perioden auf dem Viertelkreis,
  Amplitude 0,25 – rund, keine Spitzen).
- **Zwickel** x 14–20, y 8–17: **Funkelsterne** (vierzackig, konkave Seiten): einer 3,2 hoch `#F4E2EC` oben,
  drei kleine 1,2 hoch `#E7B9D2` als Sternbild; darunter zwei **ruhige Glitch-Streifen** (siehe unten).
- **Glitch-Streifen** (ruhig): waagerechte Streifen 0,8 hoch, runde Enden, Länge 3–6 mm, in zwei bis drei
  Zeilen; jede Zeile gegenüber der darüber um 0,8–1,2 mm **seitlich** versetzt. Nie verbunden, keine schrägen
  Übergänge, keine Treppe aus Ecken (Treppe → Zickzack → Rune). Farben `#F4E2EC` / `#7A2F5A` / `#1A1A1A`.
- **Abschlussband** zur Freifläche, y 16,4–18,0: liegende **Wellenlinie** (Sinus, Periode 2,4, Amplitude 0,4,
  Linie 0,4 `#1A1A1A`) über einer geraden Linie 0,3, die Täler gefüllt `#E7B9D2`. Periode so wählen, dass die
  Welle an x 32,5 symmetrisch ist (Scheitel oder Tal genau auf der Achse).
- **Seitenbänder**: Kette aus **Linsen** (spitzovale Glieder 1,3 × 1,9, Spitze an Spitze auf Mittelsteg), im
  Wechsel `#F4E2EC` / `#E7B9D2`, Kontur 0,3; Teilung 1,9 (30 Glieder, Gliedgrenze auf y 48,5). Weich statt
  der Rauten von 20_1 – so unterscheiden sich die Schwestern auch am Rand.

## Ansatz A – „Klangwellen-Medaillon“ (gefüllte Hüllkurve)
Leitobjekt: **Wellenform als liegende Linse**, x 19,5–45,5, y 8,0–17,2, Mittellinie y 12,6, symmetrisch zu
x 32,5 **und** zur Mittellinie. Die Außenkontur ist eine weiche Hüllkurve: in der Mitte am höchsten
(± 4,4), nach außen in **drei sanften Bäuchen** abnehmend (± 3,2 / ± 2,0 / ± 0,9), Übergänge als Kurven,
keine Spitzen, keine Stacheln. Die Bäuche müssen deutlich sichtbar sein – eine einfache Mandelform wäre ein
Auge. Darin **Schimmer-Staffelung als waagerechte Streifen** (auf die Hüllkurve geclippt, symmetrisch zur
Mittellinie): Mittelstreifen 1,6 hoch `#F4E2EC`, dann je ein Streifen `#E7B9D2`, dann `#CC79A7`, außen
`#7A2F5A` – also **hell innen, dunkel außen als Bänder**, keine konzentrischen Konturen und kein dunkler Kern
(verschachtelte Linsen mit Kern = Auge). Kontur 0,6 `#1A1A1A`, Streifenfugen 0,3. Hinter der Linse zwei liegende **Korbbögen** (x 19–46, Scheitel y 7,3 bzw. 8,3,
Linien 0,4 `#1A1A1A`, Zwischenraum `#7A2F5A` mit Punktraster `#CC79A7`) als Bühnen-/Klangraum. Wirkung: eine
große, helle, weiche Form auf Pink – im Graubild „Schallwelle“, aus zwei Metern klar anders als jedes Gerät der
übrigen Jahrzehnte.
Achtung Augenprobe: Die Wellenform liegt allein auf der Achse (keine zweite daneben), hat keinen Punkt und
keinen Kern im Inneren und zeigt ihre drei Bäuche je Seite – so bleibt sie Welle.

## Ansatz B – „Wellenbänder und versetzte Streifen“ (Fläche statt Objekt)
Leitobjekt: das ganze Mittelfeld x 19–46 als **Feld übereinanderliegender Wellenbänder**: fünf liegende
Bänder (je 1,4 hoch, Linien 0,4 `#1A1A1A`), jedes eine weiche Welle mit **nach außen abnehmender Amplitude**
(Mitte 1,2 → Rand 0,2) – zusammen ergeben sie eine Klangwolke, die zur Achse anschwillt. Bänder abwechselnd
`#F4E2EC`, `#E7B9D2`, `#CC79A7`, `#E7B9D2`, `#F4E2EC` (Schimmer zur Mitte hin dunkler, oben/unten hell).
Auf der Achse darüber ein **Rauten-Medaillon mit Schimmer**: verschachtelte Raute 4,5 hoch bei (32,5 / 12,6),
Raute in Raute in Raute `#F4E2EC` → `#E7B9D2` → `#7A2F5A` (Kern gefüllt, kein Punkt), Kontur 0,5 – Echo der
Vorderseite und Ruhepunkt des Felds. Links und rechts davon brechen die beiden mittleren Wellenbänder zu
**ruhigen Glitch-Streifen** auf (je zwei Streifensegmente pro Seite, um 1,0 mm seitlich versetzt, runde Enden),
dann läuft die Welle weiter. Zwickel mit Funkelsternen wie oben. Wirkung: textiles, sehr dichtes Kopffeld,
das an gewebte Art-déco-Bordüren erinnert – deutlich anders als 20_1 (dort ein klares Rund-Objekt) und als
10_1 (dort senkrechte Balken).

## Prüfung
`node .claude/skills/kartendesign-studio/scripts/render.js <datei.svg> --pruefen --text "2023|Helena Beispielová & Orchestr Ukázka|Dlouhý ukázkový název písně"`
– Freifläche glatt, Leitfarbe ≥ 45 %, Symmetrie ≤ 0,2, keine Linie < 0,3, keine Text-/Ziffern-Elemente.
Kontaktbogen mit allen zwölf freigegebenen Rückseiten, `hinten_20_1` daneben und Rot-Grün-Reihe; Helligkeit
gegen 70er und 00er nachmessen. Wellen auf Spitzen/Zacken prüfen (jede Kurve muss rund durchlaufen), Linse und
Streifen auf Augen-/Zeichenwirkung prüfen.
