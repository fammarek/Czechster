# Briefing Runde 3 – `hinten_70_1`

`data-motiv="hinten_70_1"`, Leitfarbe Blau `#56B4E9`. Variante 2 (`hinten_70_2`) ist Disco/Licht – hier also
keine Discokugel, keine Scheinwerfer, kein Facettenraster.

## Bildidee
Die 70er als Langspielplatten-Zeit: Ein großes Klang-Leitobjekt auf der Achse, hinter dem sich konzentrische
Regenbogenbögen in vier Blautönen wie ein Plattencover der Supraphon-Stereo-Ära auffächern. Weiche, runde
Bögen und geometrische Blüten statt Strahlenkeilen – dieselbe Familie, aber die rundeste Karte der Serie.

## Familie – aus den freigegebenen Rückseiten übernehmen (Pflicht)
Maßstab: `design/motive/hinten_80_1.svg`, `hinten_80_2.svg`, `hinten_60_1.svg`, `hinten_60_2.svg`
(Vorschau `design/studio/runde-2/vorlage.png`, `vorlage-80er.png`).
- `data-frei="8,19,49,59"` **exakt** (lichte Fläche x 8–57, y 19–78), glatt `#DAEEFA`. Nichts hineinzeichnen.
- Freiflächenrahmen: eine Linie 0,5 `#1A1A1A`, `rect x 7.4 y 18.4 w 50.2 h 60.2 rx 1.4`.
- Außenrahmen d 5,5 (0,6, rx 5,5) und d 6,3 (0,3, rx 4,7) `#1A1A1A`; Fläche dazwischen und innen Leitfarbe.
- Beschnitt und Streifen außerhalb des Außenrahmens: ruhig, `#56B4E9` mit Punktraster `#2A7DB0` r 0,25,
  Teilung 1,4 (Blau-auf-Blau) – bis zum Dateirand 0–65 / 0–97.
- Kopffeld y 6,5–18,1, Fußfeld gespiegelt y 78,9–90,5. Leitobjekt Kopf ca. y 7,2–17,8, mittig x 32,5,
  Breite höchstens x 19–46, damit links/rechts Platz für Rosette und Zwickelornamente bleibt.
- Eckrosette um (11 / 11), Viertelbögen r 3,6 / 4,5 parallel zur Stanzrundung (Mittelpunkt 8 / 8).
- Nur linkes oberes Viertel zeichnen, dreimal spiegeln; Leitobjekt selbst symmetrisch zur Achse x 32,5,
  für den Fuß an y 48,5 gespiegelt.
- Seitenbänder x 3,6–5,4 (rechts 59,6–61,4), y 20–77: **durchlaufende Kette ohne Einzelformen**, Abstand zur
  Schnittkante (x 3 / 62) ≥ 0,6 mm. Keine Raute, kein Medaillon im Band (in Runde 2 zweimal nachgebessert).
- Flimmer-Regel: Wiederholmuster am Rand Periode ≥ 2 mm oder Ton-in-Ton; Punkte Ø ≥ 0,4, Teilung ≥ 1,0;
  Linien ≥ 0,3; `stroke-linejoin="round"`.
- Rot-Grün / Graubild: Leitobjekt mit hellen Flächen (`#A6D8F4` / `#DAEEFA`) auf kräftigem Grund und
  schwarzer Kontur – muss im Graubild als Objekt erkennbar bleiben. Blau ist für Rot-Grün-Schwache stabil
  und hebt sich gut vom Ocker der Vorderseite ab; trotzdem Hell-Dunkel-Kontrast im Objekt halten.

## Verboten (Besitzer, absolut)
Keine gezackten Linien, keine eckigen Knickformen in Strichen, keine Ziffern, Buchstaben, Symbole, Figuren.
Alle Wellen, Bögen und Strahlen sind **rund oder gerade**. Zwickel mit Dreiecken füllen, nicht mit Knicklinien.
Nach dem Zeichnen jede kleine Form einzeln prüfen: Liest sie sich als Buchstabe, Zeichen oder Symbol → ersetzen
durch Punkt, Kreis, Raute oder gefülltes Dreieck.

## Farben (Zwischentöne)
`#56B4E9` Leitfarbe, `#2A7DB0` dunkles Blau, `#A6D8F4` helles Blau, `#DAEEFA` Freifläche/Licht, `#1A1A1A`.

## Bausteine und Lagen (für beide Ansätze)
- **Leitobjekt** auf der Achse im Kopffeld (y 7,2–17,8, x 20–45), Fuß gespiegelt – siehe Ansatz A / B.
- **Regenbogenbögen** hinter dem Leitobjekt: konzentrische Bänder um den Objektmittelpunkt, Breite je 0,8–1,0,
  Reihenfolge von innen `#DAEEFA` → `#A6D8F4` → `#56B4E9` → `#2A7DB0`, getrennt durch Linien 0,3 `#1A1A1A`;
  auf das Kopffeld geclippt, laufen links und rechts hinter der Eckrosette aus.
- **Eckrosette Blüte** um (11 / 11): Viertelbögen r 3,6 / 4,5 (0,4 `#1A1A1A`), darin eine geometrische Blüte aus
  acht runden Blütenblättern (Ellipsen 1,0 × 2,2, `#A6D8F4`, Kontur 0,3), Kern r 1,0 `#DAEEFA` mit Punkt
  r 0,4 `#1A1A1A`. Außen im Viertelring Punktreihe r 0,25, Teilung 1,1.
- **Zwickel** zwischen Rosette und Leitobjekt (ca. x 15–20, y 8–17): kleine Blüten (r 1,2, sechs Blätter) und
  Halbkreis-Fächer, Fast-Schwarz mit hellem Kern; höchstens drei Einzelformen je Viertel, sonst Punktraster
  `#2A7DB0` auf `#56B4E9`.
- **Abschlussband** zur Freifläche, y 16,4–18,0, links/rechts vom Objekt: Bogenfries (aneinandergereihte
  Halbkreise r 0,8, Öffnung nach unten, 0,35 `#1A1A1A` auf `#2A7DB0`) – rund, keine Spitzen.
- **Seitenbänder** x 3,6–5,4, y 20–77: drei durchlaufende Längsstreifen (0,4 `#A6D8F4` / 0,6 `#2A7DB0` /
  0,4 `#1A1A1A`, Regenbogen im Kleinen), auf dem mittleren eine Punktkette r 0,25 `#DAEEFA`, Teilung 2,0.
  Keine Einzelform, durchgehend von oben bis unten.

## Farbanteile (außerhalb der Freifläche)
- Leitfarbe `#56B4E9`: 45–55 % (Grund Kopf-/Fußfeld, Beschnitt, Bögen)
- Fast-Schwarz `#1A1A1A`: 18–22 % (Konturen, Trennlinien, Rillen)
- Zwischentöne `#2A7DB0` 12–15 %, Lichter `#A6D8F4`/`#DAEEFA` 12–15 % (vor allem im Leitobjekt)

## Freiflächen-Rechteck
`data-frei="8,19,49,59"` (x 8–57, y 19–78), glatt `#DAEEFA`.

## Ansatz A – „Langspielplatte steigt aus der Hülle“ (konzentrisch, Sonnenaufgang)
Leitobjekt: **LP, halb aus der Hülle gezogen.** Die Hülle liegt als flaches Querband an der Unterkante des
Kopffelds (x 20–45, y 14,6–17,8, rx 0,8, `#2A7DB0` mit Kontur 0,5 und drei dünnen Längslinien `#A6D8F4` als
Cover-Streifen). Darüber geht die Platte als Halbscheibe auf: Mittelpunkt (32,5 / 14,6), r 7,2 (Scheitel
y 7,4). Rillen als Wechsel `#1A1A1A` / `#A6D8F4` (je 0,4, vier bis fünf Paare), großes helles Etikett r 2,6
`#DAEEFA` mit innerem Ring 0,3 und Mittelloch-Andeutung (Halbkreis r 0,5) an der Hüllenkante. Die
Regenbogenbögen teilen genau diesen Mittelpunkt – Platte und Bögen gehen gemeinsam auf wie eine Sonne.
Abgrenzung zu `hinten_60_1` (volle dunkle Single mit Sonnenkranz): hier Halbscheibe auf Rechteck, kein Kranz.

## Ansatz B – „Studiomikrofon mit Klangbögen“ (Objekt im Ring, symmetrisch gerahmt)
Leitobjekt: **Kapselmikrofon in Federaufhängung**, wie im Rundfunkstudio. Ovale Kapsel x 29,3–35,7,
y 8,2–15,8 (rx 3,2), Grund `#DAEEFA`, darin waagerechte Gitterstäbe 0,3 `#1A1A1A`, Teilung 1,0, mittig ein
Querband `#2A7DB0` 0,8. Drumherum ein Ring r 5,4 um (32,5 / 12,0), Doppellinie 0,4 / 0,3, mit acht kurzen
geraden Federn (Linie 0,3 + Punkt r 0,3 an beiden Enden) zur Kapsel. Darunter kurzer Stativhals und flacher
Fuß x 29–36, y 16,8–17,8. Die Regenbogenbögen gehen links und rechts als Klangbögen vom Ring aus (Mittelpunkt
32,5 / 12,0) und werden nach außen breiter. Wirkung: grafisch, Art-déco-Studio, sehr gut im Graubild (helle
Kapsel, dunkler Ring). Abgrenzung: kein Rechteckgehäuse wie das Radio, keine Membrankreise wie die 80er-Boxen.

## Prüfung
`node .claude/skills/kartendesign-studio/scripts/render.js <datei.svg> --pruefen --text "1975|Helena Beispielová & Orchestr Ukázka|Dlouhý ukázkový název písně"`
– Freifläche glatt, Leitfarbe ≥ 45 %, Symmetrie ≤ 0,2, keine Linie < 0,3. Vorschau neben
`design/studio/runde-2/vorlage.png` legen: Familie erkennbar? Leitobjekt im Graubild erkennbar? Jede kleine Form
auf Buchstaben-/Zeichen-Anmutung prüfen.
