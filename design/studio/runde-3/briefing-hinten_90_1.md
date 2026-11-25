# Briefing Runde 3 – `hinten_90_1`

`data-motiv="hinten_90_1"`, Leitfarbe Gelb `#D9C400`. Variante 2 (`hinten_90_2`) ist Walkman/Fernsehen –
hier also keine Kopfhörer, kein Bildschirm.

## Bildidee
Die 90er als Collage: Ein helles Leitobjekt auf der Achse liegt auf übereinandergeschobenen Papier- und
Booklet-Flächen, ringsum flache Kreise, Halbkreise, Dreiecke und weich geschwungene Kringel wie auf
Plakaten und Kassettencovern der Nachwende-Jahre. Art-déco-Ordnung bleibt (Symmetrie, Rahmen, Rosetten),
nur die Füllungen werden verspielter.

## Familie – aus den freigegebenen Rückseiten übernehmen (Pflicht)
Maßstab: `design/motive/hinten_80_1.svg`, `hinten_80_2.svg`, `hinten_60_1.svg`, `hinten_60_2.svg`
(Vorschau `design/studio/runde-2/vorlage.png`, `vorlage-80er.png`).
- `data-frei="8,19,49,59"` **exakt** (lichte Fläche x 8–57, y 19–78), glatt `#FBF7CA`. Nichts hineinzeichnen.
- Freiflächenrahmen: eine Linie 0,5 `#1A1A1A`, `rect x 7.4 y 18.4 w 50.2 h 60.2 rx 1.4`.
- Außenrahmen d 5,5 (0,6, rx 5,5) und d 6,3 (0,3, rx 4,7) `#1A1A1A`; Fläche dazwischen und innen Leitfarbe.
- Beschnitt und Streifen außerhalb des Außenrahmens: ruhig, `#D9C400` mit Punktraster `#9A8B00` r 0,25,
  Teilung 1,4 (Gelb-auf-Gelb) – bis zum Dateirand 0–65 / 0–97.
- Kopffeld y 6,5–18,1, Fußfeld gespiegelt y 78,9–90,5. Leitobjekt Kopf ca. y 7,2–17,8, mittig x 32,5,
  Breite höchstens x 19–46, damit links/rechts Platz für Rosette und Zwickelornamente bleibt.
- Eckrosette um (11 / 11), Viertelbögen r 3,6 / 4,5 parallel zur Stanzrundung (Mittelpunkt 8 / 8).
- Nur linkes oberes Viertel zeichnen, dreimal spiegeln; Leitobjekt selbst symmetrisch zur Achse x 32,5,
  für den Fuß an y 48,5 gespiegelt.
- Seitenbänder x 3,6–5,4 (rechts 59,6–61,4), y 20–77: **durchlaufende Kette ohne Einzelformen**, Abstand zur
  Schnittkante (x 3 / 62) ≥ 0,6 mm. Keine Raute, kein Medaillon im Band (in Runde 2 zweimal nachgebessert).
- Flimmer-Regel: Wiederholmuster am Rand Periode ≥ 2 mm oder Ton-in-Ton; Punkte Ø ≥ 0,4, Teilung ≥ 1,0;
  Linien ≥ 0,3; `stroke-linejoin="round"`.
- Rot-Grün / Graubild: Leitobjekt mit hellen Flächen (`#EEE37A` / `#FBF7CA`) auf kräftigem Grund und
  schwarzer Kontur – muss im Graubild als Objekt erkennbar bleiben. **Achtung:** Für Rot-Grün-Schwache
  erscheinen Gelb (90er), Orange (60er) und Ocker (Vorderseite) fast gleich (siehe Rot-Grün-Reihe in
  `runde-2/vorlage.png`). Abgrenzung deshalb über Struktur und Helligkeit: Gelb ist heller als Ocker/Orange –
  den Grund wirklich in `#D9C400` lassen (nicht abdunkeln), Fast-Schwarz kräftiger als bei den 60ern
  (Konturen 0,5–0,6), und das Leitobjekt muss in der Silhouette klar anders sein als Single und Radio.

## Verboten (Besitzer, absolut)
Keine gezackten Linien, keine eckigen Knickformen in Strichen, keine Ziffern, Buchstaben, Symbole, Figuren.
Alle Wellen, Bögen und Strahlen sind **rund oder gerade**. Zwickel mit Dreiecken füllen, nicht mit Knicklinien.
Nach dem Zeichnen jede kleine Form einzeln prüfen: Liest sie sich als Buchstabe, Zeichen oder Symbol → ersetzen
durch Punkt, Kreis, Raute oder gefülltes Dreieck.

## Farben (Zwischentöne)
`#D9C400` Leitfarbe, `#9A8B00` dunkles Gelb (Oliv), `#EEE37A` helles Gelb, `#FBF7CA` Freifläche/Licht, `#1A1A1A`.

## Bausteine und Lagen (für beide Ansätze)
- **Leitobjekt** auf der Achse im Kopffeld (y 7,2–17,8, x 21–44), Fuß gespiegelt – siehe Ansatz A / B.
- **Collage-Flächen** hinter dem Objekt: zwei bis drei übereinandergelegte, achsensymmetrische Rechtecke mit
  abgerundeten Ecken (rx 0,6), leicht gegeneinander versetzt (0,6–1,0 mm, nur senkrecht/waagerecht – nicht
  gedreht), in `#9A8B00`, `#EEE37A` und `#1A1A1A`. Kanten gerade oder rund – **keine Reißkanten, keine
  Zacken**.
- **Konfetti der 90er** in den Zwickeln (x 14–20, y 8–17): kleine Vollkreise, Halbkreise, Quadrate und
  gefüllte Dreiecke (1,0–1,8 mm), dazu Kringel als **weiche Wellenlinie** (Sinusbogen mit runden Scheiteln,
  0,4 `#1A1A1A`, 2–3 Bögen lang, nie mit Knick). Höchstens fünf Formen je Viertel, Rest Punktraster.
- **Eckrosette** um (11 / 11): Viertelbögen r 3,6 / 4,5 (0,5 `#1A1A1A`), dazwischen Fächer aus sechs flachen
  Sektoren im Wechsel `#EEE37A` / `#FBF7CA` (Schimmer als flache Fläche), Kern r 1,3 als Mini-Scheibe
  (heller Ring, dunkles Loch r 0,4).
- **Abschlussband** zur Freifläche, y 16,4–18,0: Halbkreise r 0,8 nebeneinander, abwechselnd nach oben und
  unten offen gefüllt (`#1A1A1A` / `#EEE37A`), Teilung 2,0 – Collage-Fries.
- **Seitenbänder** x 3,6–5,4, y 20–77: Perlenschnur – durchlaufende senkrechte Linie 0,3 `#1A1A1A`, darauf
  Kreisringe r 0,7 (0,35 `#1A1A1A`, Füllung `#EEE37A`) mit Teilung 2,0. Keine Einzelform außerhalb der Kette.

## Farbanteile (außerhalb der Freifläche)
- Leitfarbe `#D9C400`: 40–50 %
- Fast-Schwarz `#1A1A1A`: 22–28 % (kräftiger als 60er – Abgrenzung im Rot-Grün-Bild)
- Zwischenton `#9A8B00` 10–15 %, Lichter `#EEE37A`/`#FBF7CA` 12–18 % (Leitobjekt)

## Freiflächen-Rechteck
`data-frei="8,19,49,59"` (x 8–57, y 19–78), glatt `#FBF7CA`.

## Ansatz A – „Compact Disc auf Booklet“ (Scheibe, Schimmer-Sektoren)
Leitobjekt: **CD** r 5,2 um (32,5 / 12,6), Grund `#FBF7CA`, Datenfläche in 12 flache Sektoren im Wechsel
`#FBF7CA` / `#EEE37A` (Schimmer ohne Verlauf), Außenkontur 0,6 `#1A1A1A`, schmaler Randring 0,3.
Innen ein klarer Ring r 1,8 `#D9C400` (Klarsicht-Nabe) mit Kontur 0,3, Mittelloch r 0,75 `#1A1A1A`. Dahinter
als Collage ein querliegendes Booklet/Jewel-Case x 22–43, y 8,6–17,4, rx 0,6, `#1A1A1A` mit hellem
Innenrand 0,4 `#EEE37A` und zwei Scharnierstreifen an den Seiten. Wirkung: helle Scheibe auf dunklem
Rechteck – im Graubild sofort lesbar, ganz anders als die dunkle Single der 60er (dort Etikett mit Kranz).

## Ansatz B – „Unplugged“ (Gitarren-Schallloch als Medaillon)
Leitobjekt: **Schallloch einer Akustikgitarre** als Rosette auf der Achse: Loch r 3,2 um (32,5 / 12,6)
`#1A1A1A`, Rosettenringe r 3,6–4,8 aus Mosaik (kleine Quadrate 0,6 im Wechsel `#EEE37A` / `#9A8B00`
zwischen zwei Linien 0,3), außen Ring `#FBF7CA` 0,8. Sechs Saiten als waagerechte Linien 0,3 `#EEE37A`
(Abstand 0,9, y 10,4–14,9) laufen über das Loch von x 20 bis 45 und enden links und rechts an je einem
Steg (Rechteck 1,2 × 5,8, rx 0,4, `#1A1A1A`, mit sechs Punkten r 0,3 `#EEE37A`). Hinter dem Ganzen ein
heller Korpus-Ausschnitt `#FBF7CA` mit zwei Taillenbögen als C-Bögen (rund, keine S-Linie). Wirkung: warm,
handgemacht, eindeutig Instrument – eigene Silhouette gegenüber allen bisherigen Leitobjekten.

## Prüfung
`node .claude/skills/kartendesign-studio/scripts/render.js <datei.svg> --pruefen --text "1994|Helena Beispielová & Orchestr Ukázka|Dlouhý ukázkový název písně"`
– Freifläche glatt, Leitfarbe ≥ 45 %, Symmetrie ≤ 0,2, keine Linie < 0,3. Vorschau neben
`design/studio/runde-2/vorlage.png` legen: Familie erkennbar? Leitobjekt im Graubild erkennbar? In der
Rot-Grün-Vorschau neben `hinten_60_1`/`hinten_60_2` und `vorne` klar unterscheidbar? Jede kleine Form auf
Buchstaben-/Zeichen-Anmutung prüfen.
