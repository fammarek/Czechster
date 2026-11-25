# Briefing Runde 3 – `hinten_90_2`

`data-motiv="hinten_90_2"`, Leitfarbe Gelb `#D9C400`. Variante 1 (`hinten_90_1`) ist CD/Gitarre und
Collage – hier also keine Scheibe, kein Schallloch.

## Bildidee
Die 90er als Musik unterwegs und im Musikfernsehen: Ein Leitobjekt aus der Unterhaltungselektronik der
Dekade auf der Achse, eingefasst von abgerundeten Bildschirm-Rahmen, die sich wie gestaffelte Doppellinien
durch die Ecken ziehen. Ordnung über gerundete Rechtecke und Klangbögen statt Collage – technischer als 90_1.

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
- **Leitobjekt** auf der Achse im Kopffeld (y 7,2–17,8, x 20–45), Fuß gespiegelt – siehe Ansatz A / B.
- **Bildschirm-Rahmen:** gestaffelte gerundete Rechtecke (rx 1,0–1,6, Doppellinie 0,4 / 0,3 `#1A1A1A`,
  Abstand 0,8) in den Kopffeld-Hälften links und rechts vom Objekt, Innenflächen abwechselnd `#9A8B00` und
  Punktraster – wie hintereinanderstehende Fernseher in einem Schaufenster.
- **Eckrosette** um (11 / 11): Viertelbögen r 3,6 / 4,5 (0,5 `#1A1A1A`), dazwischen Fächer aus acht Strahlen
  (Linie 0,3 / schmaler Keil `#9A8B00` im Wechsel), Kern ein Mini-Bildschirm (Quadrat 2,4, rx 0,6, `#FBF7CA`,
  Kontur 0,4, mittig Punkt r 0,4 `#1A1A1A`).
- **Zwickel** (x 14–20, y 8–17): drei bis vier konzentrische Klangbögen (rund, 0,35 `#1A1A1A`), dazu Punktfeld
  mit nach außen abnehmenden Punkten (r 0,35 → 0,2, Teilung 1,1).
- **Abschlussband** zur Freifläche, y 16,4–18,0: Tastenleiste – gerundete Rechtecke 1,4 × 1,0 (rx 0,3),
  Teilung 2,0, im Wechsel `#EEE37A` und `#1A1A1A` (Bedientasten, ohne Symbole).
- **Seitenbänder** x 3,6–5,4, y 20–77: Zeilenband – zwei durchlaufende Längslinien 0,35 `#1A1A1A`, dazwischen
  Querstriche 0,4 `#9A8B00`, Teilung 2,0 (Bildzeilen/Lautsprecherschlitze). Ton nahe Grund, flimmerfrei.
  Keine Einzelform.

## Farbanteile (außerhalb der Freifläche)
- Leitfarbe `#D9C400`: 40–50 %
- Fast-Schwarz `#1A1A1A`: 22–28 % (Abgrenzung im Rot-Grün-Bild gegen 60er/Vorderseite)
- Zwischenton `#9A8B00` 10–15 %, Lichter `#EEE37A`/`#FBF7CA` 12–18 % (Leitobjekt)

## Freiflächen-Rechteck
`data-frei="8,19,49,59"` (x 8–57, y 19–78), glatt `#FBF7CA`.

## Ansatz A – „Kopfhörer“ (Bogen, Klangwellen nach innen)
Leitobjekt: **Bügelkopfhörer des Walkman-Zeitalters**, frontal. Bügel als Halbbogen um (32,5 / 15,0), r 9,5
(Scheitel y 7,4), Doppellinie 0,6 / 0,3 mit Polsterstück auf dem Scheitel (x 29–36, `#9A8B00`, rx 0,5).
Ohrmuscheln als hochkant gerundete Rechtecke x 20,8–25,2 und 39,8–44,2, y 11,0–17,8, rx 1,6, Kontur 0,6;
Polster `#EEE37A` mit Punktraster r 0,25 `#9A8B00` (Schaumstoff), außen schmale Kapsel `#1A1A1A`. Zwischen
den Muscheln, unter dem Bügel, drei bis vier Klangbögen beidseitig nach innen gerichtet (rund, 0,35/0,8
im Wechsel), in der Mitte ein flacher Rauten-Medaillon-Kern r 1,6 `#FBF7CA`. Kein Kabel nötig; wenn doch,
nur als weiche runde Schlaufe. Wirkung: große helle Silhouette, aus zwei Metern sofort „Kopfhörer“.

## Ansatz B – „Röhrenfernseher“ (Rechteck, Bildschirm-Staffelung)
Leitobjekt: **Röhrenfernseher frontal.** Gehäuse x 22–43, y 8,8–17,6, rx 1,6, `#1A1A1A`, Kontur 0,6.
Gewölbter Bildschirm x 24,5–40,5, y 9,6–16,8, rx 2,4, `#FBF7CA`, darin ein abstraktes Testbild aus
Geometrie: Kreis r 2,6 (Linie 0,4) mit waagerechtem Band aus fünf Feldern in Helligkeitsstufen
`#FBF7CA` → `#EEE37A` → `#D9C400` → `#9A8B00` → `#1A1A1A` und gespiegelt zurück (symmetrisch) –
**keine Ziffern, Buchstaben oder Senderlogos**. Seitlich keine Drehknöpfe (Abgrenzung zum 60er-Radio),
stattdessen links und rechts im Gehäuserand senkrechte Lautsprecherschlitze. Oben Zimmerantenne als V
aus zwei geraden Stäben (0,4) von (31,8 / 8,8) bzw. (33,2 / 8,8) bis etwa (28,5 / 7,3) bzw. (36,5 / 7,3),
Kugelenden r 0,4 – gerade, ohne Knick. Die Bildschirm-Rahmen der Grundbausteine wiederholen das gewölbte
Rechteck nach außen. Wirkung: hell leuchtender Schirm im dunklen Kasten, Musikfernsehen der 90er.

## Prüfung
`node .claude/skills/kartendesign-studio/scripts/render.js <datei.svg> --pruefen --text "1996|Helena Beispielová & Orchestr Ukázka|Dlouhý ukázkový název písně"`
– Freifläche glatt, Leitfarbe ≥ 45 %, Symmetrie ≤ 0,2, keine Linie < 0,3. Vorschau neben
`design/studio/runde-2/vorlage.png` legen: Familie erkennbar? Leitobjekt im Graubild erkennbar? In der
Rot-Grün-Vorschau neben `hinten_60_1`/`hinten_60_2` und `vorne` klar unterscheidbar? Jede kleine Form auf
Buchstaben-/Zeichen-Anmutung prüfen.
