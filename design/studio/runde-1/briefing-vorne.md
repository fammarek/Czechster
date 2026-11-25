# Briefing Runde 1 – `vorne`

## Bildidee
Ein Art-déco-Portal in Ocker, gebaut aus den Bausteinen der gelobten Grok-Referenz, aber jetzt exakt
konstruiert: Titelband oben und ein gleich gebautes Gegenband unten, dazwischen das ruhige QR-Feld, rundherum
dichte Strahlen, Rauten und Punktraster. Die Karte ist links–rechts exakt spiegelgleich und oben–unten
so gut wie gleich gebaut; nur der Schriftzug oben und der kleine Kartencode unten unterscheiden die beiden Hälften.

## Was aus der Referenz `design/motive/vorne.png` übernommen wird und was nicht

| Baustein der Referenz | Entscheidung |
|---|---|
| Verschachtelte Raute über dem Titelband (3 Stufen, Kern mit Punktraster), Spitze berührt das Band | **übernehmen** als Kopfmedaillon, gespiegelt als Fußmedaillon unter dem Gegenband |
| Strahlenfächer links/rechts davon (Linie + schmaler dunkler Keil, zu den Ecken laufend) | **übernehmen**, oben und gespiegelt unten |
| Randloses Titelband zwischen zwei Doppellinien | **übernehmen**; als Gegenband unten wiederholen |
| Strahlenkranz unter dem Titelband (vom QR-Oberrand nach oben, Rauten-Eckstücke, Punkt-Enden) | **übernehmen**, gespiegelt über dem Gegenband |
| Seitenbänder: Strahlenfächer aus der Kante der Freifläche + Diagonal-Rautengitter mit dunklen Feldern und Punkten | **übernehmen**; Fächer exakt auf halbe Höhe (y 48,5) legen, Gitter darüber und darunter gleich |
| Rauten-Medaillon mit Kreiskern unter dem Freifeld, große Diagonal-Rautenfelder, „Sonnenaufgang“ unten | **übernehmen**, aber neu verteilt: kleine Achsenraute mit Kreiskern zwischen Band und QR-Feld (oben und unten), Rautenfelder in die vier Ecktaschen, Sonnenaufgang ins Fußfeld (gespiegelt als Sonnen-„Untergang“ ins Kopffeld) |
| Eckquadrate mit Punktraster und Dreieckskeile mit großen Punkten, die von der Kante angeschnitten werden | **ersetzen** durch Eckrosetten um den Radiusmittelpunkt (siehe Ecken) |
| Kästchen unten rechts | **entfällt ersatzlos** (Kartencode wandert ins Gegenband, siehe unten) |
| Ungleich große, frei verteilte Elemente oben/unten | **entfällt** – alles wird aus dem linken oberen Viertel gespiegelt |

## Freiflächen (Attribute am `<svg>`, mm: x,y,Breite,Höhe) – glatt in Grund `#C9A227`

- `data-titel="7,14,51,9"` – Titelband-Inneres, y 14–23 (Schriftzug „Czechster“, ca. 7,2 mm).
- `data-qr="12.5,29,40,39"` – QR-Bereich, y 29–68, Mitte genau auf y 48,5; weißes Feld 37 × 37 bei (14, 30).
- `data-code="24.5,76,16,5"` – Kartusche für den Kartencode im Gegenband, y 76–81.

Symmetrie-Kontrolle: Titelband 14–23 ↔ Gegenband 74–83 (= 97 − 23 … 97 − 14), QR 29–68 ↔ 29–68.
Das Gegenband ist eine exakte Kopie des Titelbands (gleiche Doppellinien, gleiche glatte Fläche);
die Code-Kartusche ist nur eine feine Doppellinie mit rx 1,2 *außerhalb* des Rechtecks, sonst nichts.

**Zwei Punkte für die Produktmanagerin (Besitzer fragen, je einzeln):**
1. Kartencode in die Mitte unten statt unten rechts – nur so bleibt die Karte symmetrisch und das Kästchen
   unten rechts kann entfallen. (Rückfall, falls er unten rechts bleiben soll: alle vier Ecktaschen bekommen
   eine gleich große ruhige Fläche 6 × 4 mm bei x 51,5–57,5 / y 85,5–89,5 und gespiegelt – das ist dann
   nur noch scheinbar ein Ornament.)
2. Titel-Oberkante bei ca. 15,5 mm statt 11–12 mm laut Spezifikation – sonst bleibt über dem Band kein Platz
   für das Kopfmedaillon in der sicheren Zone. Die Referenz hat das Band selbst bei ca. 15–22 mm.
`tools/druckdateien.js` liest die Rechtecke später aus den Attributen; bis dahin gelten die Lagen hier.

## Rahmen und Ecken (gilt für beide Ansätze)

- Schnitt hat bis 1,5 mm Versatz. Deshalb: **keine Rahmenlinie näher als 5,5 mm am Dateirand.** Außerhalb des
  äußersten Rahmens nur durchlaufendes Muster bis in den Beschnitt (feines Punktraster oder Diagonalschraffur
  in `#A8841E`), damit ein Versatz unsichtbar bleibt. Keine Einzelformen (Punkte, Kästchen, Keile) in 0–7 mm,
  die halb abgeschnitten werden könnten.
- Außenrahmen als Doppellinie: d = 5,5 (0,6 mm, Fast-Schwarz) und d = 6,3 (0,3 mm), Radien nach Baukasten
  mit Zusatz 3: rx 5,5 und rx 4,7. Titel- und Gegenband laufen als Doppellinien über die volle Breite und
  enden am Außenrahmen.
- **Eckrosette** in jeder der vier Ecken, gebaut um den Mittelpunkt der Rahmenrundung (ca. 11, 11 und gespiegelt):
  zwei konzentrische Viertelbögen (r 3,5 und 4,5), dazwischen ein Viertelkreis-Fächer aus 7 Strahlen
  (Linie / schmaler Keil im Wechsel), im Mittelpunkt ein gefüllter Kreis r 0,8. Die Bögen öffnen sich zur
  Ecke hin, d. h. sie liegen parallel zur Stanzrundung. Alles innerhalb x, y ≥ 6,5.
- Ecktasche (Bereich zwischen Eckrosette, Band und Seitenband, ca. x 7–20 / y 7–14): Punktraster-Dreieck +
  Strahlen, die zur Kopfraute zielen.

## Bausteine mit Lagen (linkes oberes Viertel zeichnen, dreimal spiegeln)

1. **Kopfmedaillon** auf der Achse: flache Raute 12 × 7 mm, Mitte (32,5 / 10,4), Spitzen bei y 6,9 und
   13,9 – drei Stufen Raute-in-Raute, äußerste Kontur Fast-Schwarz 0,6, mittlere dunkler Ocker gefüllt,
   Kern Punktraster oder gefüllt. Die obere Doppellinie des Titelbands wird um die Unterspitze herum
   unterbrochen (wie in der Referenz). Fußmedaillon = Spiegelung bei (32,5 / 86,6).
2. **Kopffächer**: von der Raute aus je 9–12 Strahlen nach links/rechts zu den Ecktaschen, Linie 0,3 und
   schmaler Keil `#1A1A1A` abwechselnd, Zwischenfelder teils mit Punktraster (Punkt Ø 0,4, Abstand 1,0).
3. **Achsenraute** zwischen Band und QR-Feld: 5 × 5 mm, Mitte (32,5 / 26), Kreiskern r 0,9 Fast-Schwarz.
   Beidseits davon der Strahlenkranz der Referenz: Strahlen, die von der QR-Oberkante nach oben zum Band
   laufen (y 24,4–28,2), Enden mit Punkten r 0,3. Gespiegelt bei y 71.
4. **Seitenbänder** x 6,3–11,7 (bis vor den feinen Rahmen des QR-Felds), y 24,4–72,6: auf y 48,5 ein
   Halbfächer, der vom QR-Rand nach außen strahlt (Mittelpunkt 12 / 48,5, 9–11 Strahlen); darüber und darunter
   Diagonal-Rautengitter (Teilung ca. 2,6 mm) mit dunklen Ocker-Feldern und einzelnen Punkten.
5. **Rahmen ums QR-Feld**: Doppellinie außen um `data-qr` im Abstand 0,6 / 1,2 mm, rx ≤ 2,0 bzw. 2,6
   (größer würde die Ecke des Rechtecks anschneiden).
6. **Punktraster** in Dreiecksfeldern überall dort, wo zwischen Strahlen und Gitter sonst glatter Grund bliebe.

Dichte: wie Referenz – außerhalb der drei Freiflächen kaum ein Quadratzentimeter ohne Linie oder Raster.

## Farbanteile (Fläche außerhalb der Freiflächen)
- Grund Ocker `#C9A227`: ca. 45 % (sichtbar zwischen den Linien)
- Dunkler Ocker `#A8841E`: ca. 30 % (Keile, Rautenfelder, Raster)
- Fast-Schwarz `#1A1A1A`: ca. 20 % (Konturen, Doppellinien, Medaillon-Kerne, Punkte)
- Licht `#E3C25A`: ca. 5 % (Mittelstufe der Medaillons, einzelne Rautenfelder) – sparsam

## Ansatz A – „Strahlenportal“ (nah an der Referenz)
Die Referenz wird Baustein für Baustein in exakte Geometrie übersetzt: Strahlenfächer sind das tragende
Motiv (Kopf- und Fußfächer aus den Medaillons, Halbfächer in den Seitenbändern, Strahlenkranz an den
QR-Kanten), dazwischen Rautengitter und Punktraster. Die vier Eckrosetten sind kleine Fächer im selben
Rhythmus. Ziel: Der Besitzer erkennt „seine“ Karte sofort wieder, nur sauberer und symmetrisch.

## Ansatz B – „Etikett-Architektur“ (konzentrisch, gestaffelt)
Die Karte wird wie ein Supraphon-Etikett um einen Mittelpunkt gebaut: drei gestaffelte Doppellinien-Rahmen
mit konzentrischen Eckradien (d 5,5 / 8 / 10,5), deren Zwischenräume verschieden gefüllt sind – außen
Rautengitter, Mitte Punktraster, innen ein Strahlenkranz, dessen Strahlen alle auf den Kartenmittelpunkt
(32,5 / 48,5) zielen und am QR-Rahmen enden. Die Rauten-Medaillons sitzen an den vier Achsenpunkten der
Rahmen (oben, unten, links, rechts auf y 48,5) und verklammern die Ringe; die Ecken werden zu gestuften
Viertelkreis-Bögen über alle drei Rahmen. Titel- und Gegenband schneiden die Rahmen und unterbrechen sie
(Rahmen enden mit Punkt r 0,4 an der Bandlinie); die seitlichen Achsenrauten 4,4 × 6 mm bei (9,4 / 48,5)
und gespiegelt, ganz in x ≥ 7. Weniger „Fächer-Sonne“, mehr Architektur und Tiefe – gleiche
Bausteine, andere Ordnung.
