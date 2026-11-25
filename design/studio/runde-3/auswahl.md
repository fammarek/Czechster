# Runde 3 – Auswahl (Art Direction)

Grundlage: `kontaktbogen.png` (mit freigegebenem `vorne` und `hinten_60_1`, Rot-Grün-Reihe), Einzelvorschauen,
Ausschnitte der Kopffelder, `pruefberichte.md`. Maßstab: Niveau der freigegebenen Rückseiten, Wünsche in
`design/studio/status.md`.

Gilt für alle vier Motive:
- **Zeichen-Regel streng:** Formen, die als Buchstabe, Ziffer, Symbol, Zielscheibe/Fadenkreuz, Gesicht oder Auge
  lesbar sind, werden **ersetzt**, nicht abgeschwächt. Ersatz nur durch Punkt, Kreis ohne Mittelpunkt,
  Raute, gefülltes Dreieck oder Streifen.
- Freifläche exakt 8,19,49,59, Jahreszahl-Oberkante 22 mm – nicht anfassen.
- Im Band zwischen Schnittlinie und Außenrahmen nur durchlaufende Bänder, keine Einzelformen.
- Nach dem Feinschliff: Skript `--pruefen`, Symmetrie ≤ 0,2, Rot-Grün-Vorschau neu rendern und neben `vorne`,
  `hinten_60_1` und die Schwestervariante legen. Jede kleine Form noch einmal aus einem Meter auf
  Zeichen-/Gesichts-Anmutung prüfen.

---

## hinten_70_1 → Entwurf **A** (Langspielplatte steigt aus der Hülle)

**Warum:** Tester Note 2, Druckvorstufe bestanden. Ruhigste und rundeste Karte der Runde, klar hellblau, Rand
dicht (Blüten-Rosetten, Punktbögen, Halbkreisfächer, Bogenfries), Freifläche glatt. Die Regenbogenbögen geben
die 70er sofort und unterscheiden die Karte deutlich von der Discokugel in 70_2. B fällt weg: das Oval liest
sich als „Θ“/„0“/Maske – genau die Zeichen-Anmutung, die wir ausschließen. Schwäche von A: Das Leitobjekt liest
sich eher als Tunnel/Sonnenaufgang als als Platte; das behebt der Feinschliff.

**Feinschliff:**
1. **Bogenstummel neben der Eckrosette** (x ≈ 7,0 / y ≈ 13,5–14,6, alle vier Ecken) wirkt wie ein „l“: Clipping
   so setzen, dass der Bogen sauber an der Rosettenkontur (r 4,5 um 8/8 bzw. Rosettenrand um 11/11) endet;
   kein freistehendes Reststück.
2. **Platte lesbar machen:** Den kleinen Strahlenfächer in der Plattenmitte (um 32,5 / 14,6) ersetzen durch ein
   großes helles Etikett – Halbscheibe r 2,6 `#DAEEFA`, innerer Ring 0,3 `#1A1A1A`, Mittelloch als Halbkreis
   r 0,5 `#1A1A1A` an der Hüllenkante. Keine Strahlen im Etikett (sonst Sonne statt Platte).
3. **Rillen** zwischen Etikett und Plattenrand als Wechsel `#1A1A1A` / `#A6D8F4` (je 0,4, vier bis fünf Paare)
   statt der jetzt fast durchgehend schwarzen Ringe; Plattenrand als Kontur 0,6. So hebt sich die Platte als
   Scheibe von den farbigen Regenbogenbögen dahinter ab.
4. **Hülle** (Querband y 14,6–17,8): die beiden Schraubenpunkte an den Enden (Ring mit Mittelpunkt) entfernen,
   sie machen das Band zum Typenschild; stattdessen die drei Cover-Streifen bis an die Rundung führen.
5. Sonst nichts ändern – Rosetten, Zwickelblüten, Bogenfries, Seitenbänder, Beschnitt bleiben.

---

## hinten_70_2 → Entwurf **A** (Spiegelkugel mit Strahlenkranz)

**Warum:** Tester Note 2, Discokugel aus zwei Metern sofort erkennbar – das stärkste Jahrzehnt-Signal der Runde.
Strahlenkranz und Rautenleiste stehen der Vorderseite am nächsten (Familie), und die Karte ist klar anders als
die runde, bogige 70_1. B ist zwar hell und aufgeräumt, aber das Leitobjekt ist doppelt problematisch
(Linse = Zielscheibe, Klappen = Bonbon/Fliege); ein Ersatz der Linse würde das Objekt ganz neu erfinden.
Hauptmangel von A ist die Dunkelheit (Nähe zum späteren 00er-Blau `#0072B2`) – der Feinschliff hellt auf.

**Feinschliff:**
1. **Zweiten Funkelstern streichen** (Umriss-Stern x ≈ 20,2 / y ≈ 9,0, alle vier Viertel): bildet mit der
   Kranzlinie ein Fadenkreuz. Den gefüllten Stern behalten; höchstens dieser eine je Viertel.
2. **Rosettenkern ersetzen:** Das Kreuzgitter im Kern der vier Eckrosetten (Kreis mit zwei Breiten- und zwei
   Längslinien, umgeben von Speichen) liest sich als Fadenkreuz/Zielscheibe. Ersetzen durch eine über Eck
   gestellte Raute (Quadrat 2,0, `#DAEEFA`, Kontur 0,3 `#1A1A1A`) – greift die Rauten der Lichtleiste auf.
   Kein Mittelpunkt.
3. **Aufhellen (Abstand zum 00er-Blau):**
   - Schachbrett in den Zwickeln und im Facettenring der Rosetten: `#2A7DB0` / `#56B4E9` → `#56B4E9` / `#A6D8F4`.
   - Dunkle Strahlkeile des Kranzes: `#2A7DB0` → `#56B4E9`; helle Keile `#A6D8F4` bleiben, jeder vierte Keil
     `#DAEEFA`. Trennlinien 0,3 `#1A1A1A` bleiben (Kontur und Struktur).
   - Facettenband in den Seitenbändern und das Schachbrett außerhalb des Außenrahmens: Ton in Ton
     `#56B4E9` / `#7FC5EE` (geringer Kontrast, flimmerfrei), kein `#2A7DB0` mehr.
   - Zielwerte außerhalb der Freifläche: Leitfarbe ≥ 50 %, `#2A7DB0` ≤ 8 %, Lichter `#A6D8F4`/`#DAEEFA` ≥ 20 %.
     Mittlere Helligkeit des Kopffelds mindestens so hell wie bei 70_1-A (nachmessen, im Kontaktbogen neben
     70_1 legen).
4. **Naht im Seitenband:** Das Schachbrett hat bei y ≈ 48,5 einen Phasensprung (doppeltes Quadrat an der
   Spiegelachse). Periode/Startpunkt so wählen, dass das Muster über die Achse ohne Sprung durchläuft.
5. Discokugel selbst, Aufhängung, Punktkranz und Rautenleiste bleiben, wie sie sind.

---

## hinten_90_1 → Entwurf **A** (Compact Disc auf Booklet)

**Warum:** Tester Note 2, „CD sofort erkennbar, stärkster 90er-Entwurf“. Helle Scheibe auf dunklem Jewel-Case
ist aus zwei Metern die klarste Silhouette und eindeutig 90er; Rand dicht (Perlenschnur, Halbkreisfries,
Schimmer-Rosetten). B (Gitarre) liest sich zuerst als Fliege. Die Zeichen-Probleme von A sitzen in klar
abgegrenzten Zwickelkästen und lassen sich durch Ersatz sauber lösen.

**Feinschliff:**
1. **Neue Leitfarbe `#F0E442`** (statt `#D9C400`), alle Gelbtöne mitziehen:

   | Rolle | alt | neu |
   |---|---|---|
   | Leitfarbe/Grund Kopf-, Fußfeld, Rahmenzwischenraum, Beschnitt | `#D9C400` | `#F0E442` |
   | Helles Gelb (Schimmer, Perlen, Innenränder) | `#EEE37A` | `#F7EF9A` |
   | Licht/Freifläche | `#FBF7CA` | `#FBF7CA` (bleibt) |
   | Dunkles Gelb/Oliv (Collage-Fläche, Stege) | `#9A8B00` | `#A89A1C` |
   | Punktraster im Beschnitt (Gelb-auf-Gelb) | `#9A8B00` auf `#D9C400` | `#C8BA2A` auf `#F0E442` |

   Auch die Klarsicht-Nabe der CD (r 1,8) und die Rosetten-Mininabe (r 0,85) auf `#F0E442`. Fast-Schwarz bleibt
   bei Konturen 0,5–0,6 (Anteil 22–28 %). Ziel: im Rot-Grün-Bild klar heller als `hinten_60_1` (`#E69F00`) und die
   Vorderseite – im Kontaktbogen nebeneinander prüfen.
2. **Zwickelkästen ersetzen** (x 15,4–20,4 / y 7,65–16,05, alle vier Viertel): Kreis + Quadrat + Dreieck
   übereinander = PlayStation-Symbole, die senkrechte weiße Schlangenlinie daneben liest sich als „S“-Kette bzw.
   Schlange. Beides entfernen. Neu: im dunklen Kasten mit Punktraster eine senkrechte Reihe aus drei **gleichen**
   Vollkreisen r 0,6 `#F7EF9A` (Kontur 0,3 `#1A1A1A`, Mitten y ≈ 9,4 / 11,85 / 14,3, x ≈ 17,0) und daneben
   (x ≈ 18,9) eine gerade Doppellinie 0,3 `#F7EF9A` über die Kastenhöhe. Keine drei verschiedenen Grundformen
   nebeneinander, keine Wellenlinie.
3. **Dreieckszähne neben der CD** (Kranz aus kleinen Dreiecken in `bclip`, sichtbar links/rechts der Scheibe auf
   dem schwarzen Case) lesen sich als ◀ ▶: durch Punkte r 0,3 `#F7EF9A` auf demselben Kreis ersetzen.
4. **Eckrosette:** Den halben Außenbogen rechts der Rosette (`M11 6.5 A4.5 … 11 15.5`, endet stumpf unter der
   Rosette) entfernen – die Ecke soll nur dem Viertelring parallel zur Stanzrundung folgen. Die zwei
   Endstriche des Viertelrings (`M6.2 11H6.9`, `M11 6.2V6.9`) durch Punkte r 0,3 `#1A1A1A` ersetzen.
5. CD, Booklet, Halbkreisfries und Perlenschnur bleiben sonst unverändert.

---

## hinten_90_2 → Entwurf **B** (Röhrenfernseher)

**Warum:** A fällt aus: Der Kopfhörer liest sich als Gesicht (Tester Note 4) – das ist Bauform, kein Detail, und
nicht reparierbar ohne neues Leitobjekt. B hat die eindeutige 90er-Silhouette (Fernseher im Kasten) und ist
klar anders als die CD in 90_1 (Rechteck vs. Scheibe). Die Auge-/Insekten-Anmutung kommt aus dem Testbild und
den Antennen – beides wird ersetzt, nicht abgeschwächt.

**Feinschliff:**
1. **Neue Leitfarbe `#F0E442`**, Gelbtöne wie bei 90_1 (Tabelle oben) mitziehen – inklusive der fünf
   Helligkeitsstufen im Testbild (`#FBF7CA` → `#F7EF9A` → `#F0E442` → `#A89A1C` → `#1A1A1A`) und des
   Punktrasters im Beschnitt (`#C8BA2A` auf `#F0E442`). Beide 90er-Karten müssen exakt dieselben Töne tragen.
2. **Testbild ersetzen:** Kreis, Bogensegmente und das dunkle Mittelquadrat ganz entfernen (Kreis mit dunklem
   Kern = Auge). Neu: klassisches Balken-Testbild aus senkrechten Streifen über die ganze Schirmbreite, neun
   Streifen symmetrisch zur Achse in den fünf Helligkeitsstufen (außen hell → Mitte dunkel → außen hell), dazu
   unten ein schmales waagerechtes Band (y ≈ 15,6–16,4) in umgekehrter Reihenfolge. Kein Kreis, kein Punkt in
   der Mitte. Die Punktgruppen in den Schirmecken entfallen ebenfalls.
3. **Antennen ersetzen:** Das V mit Kugelenden plus Halbkreis-Sockel macht mit dem Schirm einen Insektenkopf.
   Entfernen; stattdessen auf der Gehäuseoberkante ein flacher Tragegriff als gerundetes Rechteck
   (x 29–36, y 7,4–8,4, rx 0,5, `#A89A1C`, Kontur 0,4) mit drei Punkten r 0,25 `#F7EF9A`. Im Fuß gespiegelt.
   Die Punktreihen links und rechts davon bleiben.
4. **Untere Zwickelkästen** (unter den Mini-Testbildern, Oval im Oval bei x ≈ 22,5 / y ≈ 14): lesen sich als
   Augen. Füllung ersetzen durch drei waagerechte Lautsprecherschlitze (gerundete Rechtecke 2,4 × 0,4, rx 0,2,
   `#1A1A1A` auf `#F7EF9A`). Die oberen Kästen mit Mini-Balken bleiben (passen jetzt zum neuen Testbild).
5. **Rosettenkern:** Das helle Quadrat mit dunklem Mittelpunkt im Ziffernring wirkt wie Auge/Objektiv. Punkt
   entfernen; Kern als Mini-Bildschirm mit drei senkrechten Streifen (`#FBF7CA` / `#F0E442` / `#FBF7CA`) – greift
   das Balken-Testbild auf.
6. **Naht im Seitenband** (0,2-mm-Unterbrechung bei y 48,5): Band als ein durchgehender Pfad von y 20 bis 77
   zeichnen bzw. an der Spiegelachse überlappen lassen; Querstrich-Teilung über die Achse ohne Sprung.

---

## Familienabgleich nach dem Feinschliff
- 70er: 70_1 rund/bogig/hell, 70_2 radial/funkelnd – nach Aufhellung beide klar hellblau, nicht in Richtung
  `#0072B2`.
- 90er: 90_1 Scheibe auf Rechteck, 90_2 Rechteck mit Streifenbild – gleiche Gelbpalette, im Rot-Grün-Bild
  sichtbar heller als 60er und Vorderseite.
- Alle vier: Eckrosette um 11/11 mit Viertelring parallel zur Stanzrundung, Leitfarbe als Grund im Kopf-/Fußfeld,
  glatte helle Freifläche, ruhiger Beschnitt.
