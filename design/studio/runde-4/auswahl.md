# Runde 4 – Auswahl (Art Direction)

Grundlage: `kontaktbogen.png` (mit `hinten_70_2`, `hinten_60_1`, `hinten_90_1` und Rot-Grün-Reihe), Einzelvorschauen,
Ausschnitte der Kopffelder, `pruefberichte.md`, Wünsche in `design/studio/status.md` (neu: 2010er bleiben `#D55E00`
→ eindeutig modernes Leitobjekt und kantige Formen, nichts Folkloristisches).

## Gilt für alle Feinschliffe dieser Runde

1. **Zeichen-Regel streng:** Formen, die als Buchstabe, Ziffer, Symbol, Zifferblatt, Zielscheibe, Fadenkreuz,
   Speichenrad, Gesicht oder Auge lesbar sind, werden **ersetzt**, nicht abgeschwächt (Ersatz: Punkt, Kreis ohne
   Mittelpunkt, Raute, gefülltes Dreieckspaar, Streifen, Pixelquadrat).
2. **Eckrosetten um (11 / 11)** – neue gemeinsame Regel für 00er und 10er:
   - Viertelbögen r 3,6 / 4,5 (0,5 `#1A1A1A`) parallel zur Stanzrundung bleiben, Enden als Punkte r 0,3.
   - **Verboten im Kranz:** Radialstriche, Speichen, Punktkranz mit gleichen Abständen (= Zifferblatt),
     Sägezahn/Zackenkranz (= Blitz-Nähe), Diagonalen durch den Kern (= X/Fadenkreuz), konzentrische Ringe mit
     dunkler Mittelscheibe (= Zielscheibe), Nabe (= Drehknopf/Lüfter).
   - **Erlaubt:** geschlossener, glatter Ring oder ein Ring aus dicht gesetzten Flächen (Lücke ≤ 0,3 mm, damit er
     als Band und nicht als Markenkranz wirkt), darin Grundton, im Kern eine über Eck gestellte Raute 2,0 mit
     Kontur 0,3 – **ohne Mittelpunkt**.
3. **Seitenbänder als echte Kette:** x 3,6–5,4 (rechts 59,6–61,4), y 20–77, Abstand zur Schnittkante ≥ 0,6.
   Zwei Fassungslinien 0,3 `#1A1A1A` bei x 3,75 und 5,25 durchgehend; dazwischen Glieder, die sich **berühren
   oder überlappen** (Spitze an Spitze, Kante an Kante oder auf einem durchgehenden Mittelsteg) – keine lose
   gestreuten Einzelformen. Als **ein** Pfad bzw. ein Pattern mit Startpunkt so gewählt, dass bei y 48,5 kein
   Phasensprung entsteht (Periode teilt 57 mm oder Glied mittig auf y 48,5). Bandenden y 20 / 77 sauber mit
   Querstrich 0,3 oder halbem Glied an der Linie abschließen – keine Haken, keine halben Dreiecke.
4. Freifläche exakt `8,19,49,59`, Jahreszahl-Oberkante 22 mm, Freiflächenrahmen und Außenrahmen nicht anfassen.
5. Nach dem Feinschliff: `render.js --pruefen`, Symmetrie ≤ 0,2, Rot-Grün-Vorschau neu, neuer Kontaktbogen mit
   den Schwestervarianten. Jede kleine Form einzeln aus einem Meter auf Zeichen-/Gesichts-Anmutung prüfen.

---

## hinten_00_1 → Entwurf **B** (Stagepiano unter der LED-Wand)

**Warum:** Tester Note 1–2, „bester 2000er“. Die Klaviatur ist aus zwei Metern und im Graubild sofort Musik, die
helle Tastenreihe auf dunklem Blau ist die klarste Silhouette der Runde, das Kopffeld ist dicht und trotzdem
geordnet. A (Mikrofon im Stroboskop) ist stark, aber die Doppelkreise in den Zwickeln wirken wie Augen und der
Mikrofonkopf mit Gitter liegt nahe an Zielscheibe/Kugel (70_2). B ist zudem klar dunkler als die 70er.

**Feinschliff:**
1. **Eckrosetten** (Zifferblatt aus Speichen + Punktkranz): Speichenkranz und äußeren Punktkranz entfernen.
   Neu zwischen r 3,6 und 4,5 ein **Pixelring** aus dicht gesetzten Ringsegmenten (16 Segmente, Fuge 0,25) im
   Wechsel `#CCE3F0` / `#A9CDE5`, innen glatter Grund `#004F7C`, Kern Raute 2,0 `#CCE3F0`, Kontur 0,3, kein
   Mittelpunkt. Die Segmente sind Flächen, keine Striche.
2. **Fader auf der Keyboard-Oberkante streichen** (sechs kleine Schieber über den Tasten, x ≈ 21–44, y ≈ 10–11):
   lesen sich als „+“ und doppeln das Mischpult von 00_2. Stattdessen das Display-Pixelband (Quadrate in drei
   Tonstufen) über die ganze Breite des Bedienfelds ziehen.
3. **Zwickelkästen** (x ≈ 15–20, y ≈ 8–17): Kreis-Paare (großer + kleiner Kreis übereinander = „8“/Gesicht, und
   über die Achse gespiegelt zwei gleiche Kreise auf Augenhöhe) ersetzen durch **eine** Kreisblase r 1,1 ohne
   Mittelpunkt oben und darunter das vorhandene Pixelmosaik bis an den Kastenrand.
4. **Seitenbänder**: lose Quadrat-/Punktfolge → Kette nach Regel 3: Quadrate 0,9 über Eck (Rauten 1,3 hoch),
   Spitze an Spitze auf Mittelsteg, im Wechsel `#CCE3F0` / `#A9CDE5`, Teilung 1,9 (30 Glieder auf 57 mm, eine
   Gliedgrenze – Spitze an Spitze – genau auf y 48,5). Band beginnt bei x 3,6.
5. Pixelleiste unter den Zwickeln (y ≈ 17) bleibt, Quadrate aber auf eine durchgehende Linie 0,3 setzen.
6. Klaviatur, LED-Wand und Abschlussband bleiben unverändert.

---

## hinten_00_2 → Entwurf **B** (DJ-Mischpult), gründlich umzubauen

**Warum:** Beide Entwürfe nur Note 3. A (MP3-Player) ist nicht reparierbar ohne neues Leitobjekt: Bildschirm über
Scheibe ist die Gerätelogik selbst – genau sie ergibt mit den flankierenden dunklen Fenstern (Ohren) und den
schulterhoch austretenden Kabeln (Arme) den Roboterkopf, und Ältere erkennen den Player ohnehin kaum. Bei B liegt
der Fehler nur in der Zeichnung der Kappen und Zwickel; das Pult selbst ist für alle Altersgruppen Musikgerät und
ergibt mit der Klaviatur von 00_1 ein gutes Paar (Bühne / Studio).

**Feinschliff – Plus-Wirkung konsequent beheben:**
1. **Kanalschlitze** nicht als dünne Linie, sondern als **Nut**: gefülltes Rechteck 0,9 × 6,0, rx 0,45, `#1A1A1A`
   (y 9,2–15,2), sechs Kanäle wie im Briefing bei x 24,5 / 27,5 / 30,5 / 34,5 / 37,5 / 40,5.
2. **Fader-Kappen als Blöcke**: 2,4 breit × 1,6 hoch, rx 0,3, `#CCE3F0`, Kontur 0,4 `#1A1A1A`, mit **einer**
   Griffrille quer (Linie 0,3 `#004F7C`, über die volle Kappenbreite, nicht darüber hinaus). Eine Kappe deckt die
   Nut vollständig ab; alle sechs Kappen auf **derselben** Höhe y 10,8–12,4 (versetzte Höhen ergeben
   Mund/Lächeln oder doppeln den Equalizer von 10_1), so dass über der Kappe 1,6 und darunter 2,8 Nut stehen –
   ungleiche Arme, kein symmetrisches Kreuz.
   Ergebnis: „Block auf Nut“ statt „Strich kreuzt Strich“ – kein „+“.
3. **Skalenstriche neben den Nuten entfernen**, falls vorhanden – zwischen den Kappen (Abstand 0,6) bleibt
   glattes `#004F7C`. Keine Zusatzzeichen auf der Bedienfläche.
4. **Crossfader streichen**: Die waagerechte Nut unter der senkrechten Pegel-Leiste ergibt mit ihr ein „⊥“/Kreuz.
   Die Pegel-Leiste in der Mitte (x 31,6–33,4, y 9,2–15,2) bleibt, Quadrate 0,8 lückenarm (Fuge 0,2); unter den
   Kanälen glattes `#004F7C` bis zum Pultrahmen.
5. **Pixelrauten in den Zwickeln** (x ≈ 17–21, Spitze nach unten = Pfeil): ersetzen durch ein **achsparalleles
   Pixelquadrat** 4 × 4 Quadrate 0,9 (Teilung 1,1), Tonstufen von außen `#004F7C` nach innen `#CCE3F0`, ohne
   Spitze. Die Kreisblasen daneben: höchstens zwei, unterschiedlich groß (r 0,7 und 1,1), nicht auf einer Höhe.
6. **Eckrosetten** (Speichenrad mit Nabe): wie 00_1 Punkt 1 – Pixelring aus Flächensegmenten `#CCE3F0` / `#A9CDE5`,
   Grund `#004F7C`, Kern Raute 2,0, kein Mittelpunkt, keine Speichen.
7. **Kabel**: Stecker-Enden an den Rosetten bleiben; die Kabel treten an den Pultwangen **unterhalb** der
   Kappenhöhe (y 14,5) aus, nicht auf Schulterhöhe.
8. **Seitenbänder**: lose Quadrate → „Datenkabel“-Kette nach Regel 3: zwei Linien 0,35, dazwischen Quadrate 0,9
   Kante an Kante auf durchgehendem Mittelsteg `#004F7C`, im Wechsel `#CCE3F0` / `#A9CDE5`, Teilung 1,9, ab x 3,6.
9. Abschlussband (Kreisblasen-Fries) bleibt. Helligkeit des Kopffelds nachmessen: mindestens 25 % dunkler als 70_2.

---

## hinten_10_1 → Entwurf **B** (Equalizer-Säulen über Schallwellen)

**Warum:** Tester Note 2, „bester 2010er“. Die Pegelsäulen sind im Graubild und aus zwei Metern unverwechselbar
Musik und eindeutig digital – genau das moderne Signal, das die 10er neben dem 60er-Orange brauchen. A fällt
durch (Note 4: kein Musikgegenstand erkennbar, Raute wie Auge, folkloristisch).

**Feinschliff:**
1. **Eckrosetten** (Achteck mit Diagonalen = X/Fadenkreuz): alle Linien durch den Kern entfernen. Kern nur Raute
   2,0 `#F7DFCC`, Kontur 0,3, auf glattem `#8A3C00`, kein Mittelpunkt. Zwischen r 3,6 und 4,5 ein **glatter
   Ring** `#EDB088` mit Kontur 0,3 innen und außen – kein Zacken-, Dreiecks- oder Punktkranz.
2. **Abschlussband** y 16,4–18,0 (Dreiecksleiste mit Punkt in jedem Dreieck = Augenreihe): Punkte ersatzlos
   streichen. Dreiecke als geschlossenes Parkett Kante an Kante (Spitze oben `#1A1A1A`, Spitze unten `#EDB088`),
   Ober- und Unterkante gerade, jeweils mit Linie 0,3 gefasst – keine freistehende Zackenkante.
3. **Seitenbänder** (Dreiecke mit Zickzack-Kante, dazu eine lose Einzellinie dicht an der Schnittkante):
   ersetzen durch Rautenkette nach Regel 3 – Rauten 1,4 × 1,9 Spitze an Spitze, jede längs geteilt `#EDB088` /
   `#8A3C00`, gefasst von zwei Linien 0,3 bei x 3,75 / 5,25. Die zusätzliche Einzellinie außerhalb (x ≈ 3,4)
   entfällt. 30 Rauten auf 57 mm, ein Spitzenstoß liegt genau auf y 48,5.
4. **Spitzen-Segmente der Säulen** (dunkle Kappen, die mit Lücke über den Säulen schweben und sich als lose
   Striche/„–“ lesen): an die Säule anschließen (Fuge 0,3 wie zwischen allen Segmenten), Breite gleich der Säule.
5. **Kantigkeit/Abstand zu den 60ern:** Schallwellen dürfen rund bleiben (Pflicht, keine Knicke). Den Strahlenfächer
   neben den Rosetten in Keile `#8A3C00` / `#D55E00` mit Linien 0,3 `#1A1A1A` ausführen (nicht nur feine Linien),
   damit die Karte im Rot-Grün-Bild als einzige deutlich dunkel steht. Zielanteile: `#1A1A1A` 25–30 %,
   `#8A3C00` 12–15 %, Lichter ≤ 18 %.
6. Facettenrauten in den Zwickeln, Säulen-Profil 3-5-4-7-9-7-4-5-3 und Wellen bleiben.

---

## hinten_10_2 → **beide Entwürfe verworfen, neues Leitobjekt: Over-Ear-Studiokopfhörer**

**Warum:** A (Marschtrommel) liest sich als Mund mit Zähnen bzw. Auge, B (Akkordeon) als Folklore und damit als
60er – bei gleicher Rot-Grün-Wirkung wie `#E69F00` ist das der falsche Weg. Der große Over-Ear-Kopfhörer ist *das*
Musikobjekt der Streaming- und Beats-Jahre, von allen Altersgruppen auch im Graubild sofort als Musik gelesen,
und noch nicht vergeben (vergeben: Single, Radio, LP, Discokugel, Kassette, Boxen, CD, Fernseher, Keyboard,
Mischpult, Equalizer). Frontal mit Polstern in Kantenansicht gibt es keine Augenwirkung; kantig facettiert grenzt
er sich klar von den runden 60ern ab. Neues Briefing: `briefing-hinten_10_2-neu.md`. Folge für später: Die
20er dürfen den Kopfhörer dann nicht mehr als Leitobjekt nehmen (Stilbibel-Liste dort anpassen).
