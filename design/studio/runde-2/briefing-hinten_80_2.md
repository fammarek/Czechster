# Briefing Runde 2 – `hinten_80_2`

Maßstab: freigegebene `design/motive/hinten_80_1.svg` (Vorschau `design/studio/runde-1/vorlage.png`). Gleiche
Familie, gleiche Dichte – aber **keine Kassette, keine Klaviatur** (gehören `hinten_80_1`).

## Bildidee
Die 80er als Klang, der aus der Wand kommt: Auf der Achse sitzt ein Lautsprecher aus konzentrischen Membranringen,
und ein Perspektivgitter läuft auf ihn zu wie die Strahlenfächer der Vorderseite auf ihr Rautenmedaillon.
Grün, Fast-Schwarz und Konfetti wie auf `hinten_80_1`, doch die Form ist rund und räumlich statt kantig und flach.

## Familie – unverändert aus `hinten_80_1` übernehmen (Pflicht)
- `data-motiv="hinten_80_2"`, `data-frei="8,19,49,59"` (x 8–57, y 19–78), Freifläche glatt `#C7EAE0`.
- Freiflächenrahmen: eine Linie 0,5 `#1A1A1A` außen, `rect x 7.4 y 18.4 w 50.2 h 60.2 rx 1.4`.
- Außenrahmen d 5,5 (0,6, rx 5,5) / d 6,3 (0,3, rx 4,7) in `#1A1A1A`; Fläche innen `#009E73`.
- Beschnitt und Streifen außerhalb des Außenrahmens: `#009E73` mit Punktraster `#006B4E` r 0,25, Teilung 1,4.
- Kopffeld y 6,5–18,1, Fußfeld gespiegelt y 78,9–90,5. Achsenobjekt Kopf ca. y 7,2–17,8, mittig x 32,5.
- Eckrosette um (11 / 11): Viertelbögen r 3,6 / 4,5 parallel zur Stanzrundung, dazwischen Fächer.
- Nur linkes oberes Viertel zeichnen, dreimal spiegeln; Achsenobjekt selbst symmetrisch, einmal für den Fuß
  gespiegelt (`translate(0,97) scale(1,-1)`).
- Flimmer-Regel aus Runde 1 (H7): Wiederholmuster am Rand Periode ≥ 2 mm **oder** nur Grün auf Grün;
  Schwarz-Hell-Wechsel nur in Einzelformen. Punkte Ø ≥ 0,4, Teilung ≥ 1,0; Linien ≥ 0,3.

## Bausteine und Lagen
- **Leitobjekt Lautsprecher (Achse):** Membran um (32,5 / 12,5), Außenkorb r 5,2 (Fast-Schwarz-Ring 0,6),
  darin 4–5 konzentrische Sicken-Ringe im Wechsel `#006B4E` / `#7FCFB5`, Staubkappe r 1,4 `#1A1A1A` mit hellem
  Glanzring r 0,6 `#C7EAE0` (flach, kein Verlauf). Muss im Graubild als „Lautsprecher“ lesbar sein: dunkler
  Korb, helle Sicke, dunkle Kappe – Hell-Dunkel-Rhythmus wie eine Zielscheibe.
- **Perspektivgitter** links und rechts des Lautsprechers, x ≈ 8–26 und gespiegelt, y 7–18: Fluchtpunkt im
  Membranzentrum, 7–9 Fluchtlinien plus 4 Querlinien mit nach außen wachsendem Abstand (z. B. 0,8 / 1,3 / 2 /
  3 mm). Linien `#1A1A1A` 0,3, Querlinien `#006B4E` 0,4.
- **Eckrosette** (11 / 11): Kern als Mini-Lautsprecher (Ring r 1,3, Kappe r 0,5) – bindet die Ecken an die Achse
  wie die Spule auf `hinten_80_1`. Fächer: 5–7 Segmente, Grün/Fast-Schwarz im Wechsel.
- **Blitze:** je Seite eine gestufte Blitz-Doppellinie (hell/schwarz) zwischen Gitter und Rosette, y 9–15.
- **Memphis-Konfetti** in den Restzwickeln (Dreiecke, Halbkreise, Ringe, Zickzackstücke) – streng gespiegelt,
  höchstens jede zweite Form mit Hellanteil.
- **Abschlussband** zur Freifläche, y 16,2–18,0 (ersetzt die Klaviatur): Reihe kleiner Lautsprecher-Ringe
  (r 0,7, Teilung 2,2) oder Rautenkette auf `#1A1A1A` – Periode ≥ 2 mm.
- **Seitenbänder (neu, Rückmeldung Runde 1):** zwischen Schnittlinie und Außenrahmen x 3,3–5,3 (rechts
  gespiegelt 59,7–61,7), y 20–77: statt der reinen Zickzacklinie eine durchlaufende Kette aus kleinen
  Ringen r 0,6 (`#006B4E`, Linie 0,35) im Abstand 2,4 mm, jeder zweite Ring mit Kern `#1A1A1A` r 0,25;
  zwischen den Ringen kurze Querstriche `#006B4E`. Auf y 48,5 ein Kettenglied als Raute 1,8 × 1,8 (gleiche Breite
  wie die Kette, keine Einzelform, die bei Schnittversatz halb fällt). Kein Hell in den Seitenbändern.

## Farbanteile (außerhalb der Freifläche)
- Leitfarbe `#009E73`: 45–55 % (Kopf-/Fußgrund, Gitterfelder)
- Fast-Schwarz `#1A1A1A`: 20–25 % (Korb, Kappe, Linien, Konturen)
- Zwischenton `#006B4E`: ca. 10–15 %; Lichter `#C7EAE0` / `#7FCFB5`: höchstens 10 %

## Freiflächen-Rechteck
`data-frei="8,19,49,59"` (lichte Fläche x 8–57, y 19–78). Nichts hineinzeichnen; Jahr, Interpret, Titel und
Code setzt das Druckskript.

## Ansatz A – „Membran-Portal“ (radial, Vorderseiten-Echo)
Der Lautsprecher ist ein Rundmedaillon (r 5,2) auf der Achse, eingefasst von einer liegenden Raute 16 × 11 mm
(Doppellinie, Spitzen bei x 24,5 / 40,5), sodass Rund-in-Raute das Art-déco-Medaillon der Vorderseite zitiert.
Das Perspektivgitter fächert von ihm in die Ecken wie die Sonnenstrahlen der Vorderseite: jedes zweite Feld
zwischen zwei Fluchtlinien gefüllt (`#006B4E` oder Punktraster `#1A1A1A`), die übrigen Grün. Konfetti nur
in den Zwickeln an der Rosette. Wirkung: ein großer Kreis, der aus zwei Metern „Box“ sagt, umgeben von Bewegung.

## Ansatz B – „Boxenwand“ (orthogonal, Gitterboden)
Auf der Achse steht eine Kartusche aus drei Boxen nebeneinander (Mitte 11 × 10,6 mit Tieftöner r 4,2, links
und rechts je 7 × 9 mit Hochtöner r 1,6 über Mitteltöner r 2,2; Gehäuse rx 1, Eckschrauben als Punkte r 0,25),
x ca. 20–45. Darunter (y 15,5–18) läuft ein flaches Perspektivgitter wie ein Bühnenboden über die ganze Breite,
Fluchtpunkt (32,5 / 8). Links und rechts der Boxen ein dichtes Memphis-Quadratraster (2,2 mm) mit Konfetti wie
`hinten_80_1`, aber mit Ringen statt Spulen. Wirkung: sachlicher, technischer, näher an `hinten_80_1` – die
Familienähnlichkeit ist hier die Stärke, der Unterschied liegt in den Kreisen.

## Prüfung
`node .claude/skills/kartendesign-studio/scripts/render.js <datei.svg> --pruefen --text "1985|Václav Neckář &
Helena Vondráčková|Stříhali dohola malého chlapečka"` – Freifläche glatt, Leitfarbe ≥ 45 %, Symmetrie ≤ 0,2.
Rot-Grün-Vorschau neben `hinten_80_1` legen: Beide müssen als Geschwister und doch sofort unterscheidbar wirken.
