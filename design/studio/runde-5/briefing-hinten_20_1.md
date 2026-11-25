# Briefing Runde 5 – `hinten_20_1`

`data-motiv="hinten_20_1"`, Leitfarbe Pink `#CC79A7`, Freifläche `#F4E2EC`. Thema Variante 1:
**Vinyl-Renaissance**. Variante 2 (`hinten_20_2`) ist „Streaming / Klangwellen“ – hier also keine
Wellenform-Hüllkurven und keine Glitch-Streifen als Hauptmotiv.

## Bildidee
Die 2020er als Rückkehr der Schallplatte: Auf der Achse liegt eine Vinylscheibe mit sichtbar gruppierten Rillen
(Titelpausen als helle Ringe) und einem Rauten-Etikett, umgeben von weichen Bögen und funkelnden Vierzack-Sternen.
Gebaut wie ein Supraphon-Etikett im Art-déco-Plakatstil – Platte als Ornament, nicht als Illustration.

## Familie – aus den freigegebenen Rückseiten übernehmen (Pflicht)
Maßstab: alle zwölf freigegebenen Rückseiten in `design/motive/`, besonders `hinten_00_1.svg` und
`hinten_10_1.svg` für Aufbau und Maße (Kontaktbogen Runde 4: `design/studio/runde-4/kontaktbogen.png`).
- `data-motiv="hinten_20_1" data-frei="8,19,49,59"` – **exakt** (lichte Fläche x 8–57, y 19–78), glatt `#F4E2EC`.
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
Schallplatten gibt es schon: 60_1 (Single mit Strahlenkranz, orange), 70_1 (Halbkreis-Rillen auf der
Freiflächenkante), 90_1 (CD mit Mittelloch). Die 20er-Platte unterscheidet sich durch:
- **Rillen in Gruppen** (3–4 Titelbänder, dazwischen helle Pausenringe) – das „Vinyl-Revival“-Detail;
- **Rauten-Etikett statt rundem Etikett mit Loch** – kein Mittelpunkt, kein Spindelloch (sonst Auge);
- **weiche Bögen und Funkelsterne** ringsum statt Strahlenkranz, Blüten oder Pixel.

## Bausteine und Lagen (für beide Ansätze)
- **Leitobjekt** auf der Achse im Kopffeld (y 7,2–17,8), Fuß gespiegelt – siehe Ansatz A / B.
- **Zwickel** x 14–20, y 8–17: je ein großer **Funkelstern** (vierzackig, konkave Seiten, Höhe 4,0, `#F4E2EC`,
  Kontur 0,3) bei (17 / 11,5), darunter zwei kleine Sterne (Höhe 1,6, `#E7B9D2`) und ein Feld Punktraster
  `#7A2F5A` (r 0,25, Teilung 1,1) im unteren Drittel. Die Sterne bilden je Zwickel eine Gruppe (Sternbild);
durch die Spiegelung entsteht zwangsläufig ein Paar links/rechts – deshalb nie runde Formen dafür (Sterne
sind kantig und lesen sich nicht als Augen) und der große Stern höchstens 4,0 hoch.
- **Weiche Bögen** als Rahmenmotiv: zwischen Rosette und Leitobjekt zwei bis drei konzentrische Viertel-/
  Korbbögen (0,4 `#1A1A1A`, Zwischenräume abwechselnd `#E7B9D2` / `#CC79A7`), die das Leitobjekt umarmen.
- **Abschlussband** zur Freifläche, y 16,4–18,0 (links/rechts des Leitobjekts): **Bogenfries** – Halbbögen
  r 0,9 auf einer Linie 0,3 `#1A1A1A`, Teilung 2,0, Füllung `#E7B9D2`, offene Seite zur Freifläche hin.
- **Seitenbänder**: Kette aus Rauten (1,3 hoch, Spitze an Spitze auf Mittelsteg), im Wechsel
  `#F4E2EC` / `#E7B9D2` mit Kontur 0,3; Teilung 1,9 (30 Glieder, Gliedgrenze auf y 48,5).

## Ansatz A – „Platte im Sternenkranz“ (Vollscheibe, frontal)
Leitobjekt: **ganze Vinylscheibe** r 5,0 um (32,5 / 12,4), Grund `#7A2F5A` (nicht Schwarz!), Kontur 0,6
`#1A1A1A`. Rillen als konzentrische Ringe 0,3 `#E7B9D2` in **drei Gruppen** (je 3 Ringe, Teilung 0,55) mit
zwei breiteren glatten Pausenringen dazwischen (0,7, `#CC79A7`). Etikett: über Eck gestellte **Raute**
4,0 × 4,0 `#F4E2EC`, Kontur 0,4, darin eine kleinere Raute 2,2 `#CC79A7` und ein Kranz aus vier winzigen
Rauten 0,6 `#7A2F5A` an den Spitzen – **kein Mittelpunkt, kein Loch**. Hinter der Platte ein flacher
**Schimmer-Fächer**: drei gestaffelte Halbellipsen-Bänder (x 19–46, Scheitel y 7,4) in `#E7B9D2` / `#F4E2EC` /
`#CC79A7`, je mit Kontur 0,3 – weich, nicht strahlig. Wirkung: dunkle Pflaumen-Scheibe mit hellem
Rillen-Schimmer und heller Raute – im Graubild Schallplatte, durch die Raute kein Auge, durch die Rillengruppen
kein Zielscheibe-Effekt (Zielscheibe = gleichmäßige Ringe, hier bewusst ungleichmäßig).

## Ansatz B – „Vinyl-Horizont“ (Ausschnitt einer großen Platte)
Leitobjekt: kein ganzer Kreis, sondern ein **flacher Kreisausschnitt einer riesigen Platte**: Rillenbögen mit
gemeinsamem Mittelpunkt (32,5 / 44) – weit unten in der Freifläche, dort **nicht gezeichnet** –, Radien
r 27–36, geclippt auf x 15–50, y 7,2–17,8. Das Kopffeld wird zu einem gewölbten „Plattenrand“, der von
Ecke zu Ecke läuft. Rillen 0,3 `#1A1A1A` auf `#7A2F5A`, in vier Titelbändern, getrennt durch glatte
Pausenbögen 0,8 `#E7B9D2`. Der äußerste Bogen (r 36, Plattenkante) als Doppellinie 0,5 / 0,3. Auf der Achse
oben im Scheitel ein **Schimmer-Medaillon**: verschachtelte Raute 5,5 hoch (Raute in Raute in Raute,
`#F4E2EC` → `#E7B9D2` → `#CC79A7`, Kern gefüllt `#7A2F5A`, Konturen 0,3–0,5) – Echo der Rauten-Medaillons der
Vorderseite. Kein Lichtreflex-Keil (Glanz ist verboten); der „Schimmer“ kommt allein aus den Tonstufen der
Raute. Auf dem mittleren Pausenbogen eine **Sternenkette**: sieben kleine Funkelsterne (Höhe 1,4, `#F4E2EC`)
in gleichem Bogenabstand – als Reihe gelesen, nie nur zwei einzelne Sterne links und rechts (Augen).
Zwickel bleiben wie oben. Wirkung: das ganze Kopffeld ist Platte – ruhig,
groß, sehr anders als die kleine Scheibe in 60_1/90_1 und als der aufrechte Halbkreis in 70_1 (dort Bögen nach
oben gewölbt um einen Punkt auf der Freiflächenkante, hier flache Krümmung mit weit entferntem Mittelpunkt).

## Prüfung
`node .claude/skills/kartendesign-studio/scripts/render.js <datei.svg> --pruefen --text "2023|Helena Beispielová & Orchestr Ukázka|Dlouhý ukázkový název písně"`
– Freifläche glatt, Leitfarbe ≥ 45 %, Symmetrie ≤ 0,2, keine Linie < 0,3, keine Text-/Ziffern-Elemente.
Kontaktbogen mit allen zwölf freigegebenen Rückseiten und der Rot-Grün-Reihe; Helligkeitsabstand zu 70er und
00er nachmessen (siehe oben). Platte im Graubild als Schallplatte lesbar, nicht als Auge oder Zielscheibe?
