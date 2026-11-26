# Briefing Runde 6 – `deckel` (Schachteldeckel Teil 1–3)

Wunsch des Besitzers: „3 Designs für die Schachteln, Design gleich, andere Farbe … Czechster – Untertitel
Teil 1, Teil 2, Teil 3.“ → **Ein** Motiv-SVG, drei Farbsätze. Schachtel: meinspiel.de Spielkartenbox 1, nur der
Deckel wird bedruckt. Technik und Maße: Kopfkommentar in `.claude/skills/kartendesign-studio/scripts/schachtel.js`.

## Bildidee
Der Deckel ist die große Schwester der Kartenvorderseite (`design/motive/vorne.svg`): dasselbe Art-déco-Portal
in Ocker mit Doppelrahmen, Kopf- und Fußmedaillon, Strahlenfächern, Rautengitter und Punktraster, nur
anderthalbmal so groß und noch dichter. Wo auf der Karte das QR-Feld liegt, dreht sich hier ein Plattenteller
mit Strahlenkranz und Rauten-Etikett (wie auf der Spielseite). Titel- und Untertitelband bleiben glatt.

## Datei und Koordinaten
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175 207" width="175mm" height="207mm"
     data-motiv="deckel" data-titel="46.5,58.5,82,15" data-untertitel="62.5,137.5,50,11">
```
- 1 Einheit = 1 mm. Deckelfläche (gestaltbar) x 40,5–134,5 / y 41,5–165,5. **Achse x = 87,5.**
- Seitenflügel: oben x 40,5–134,5 / y 21,3–34,3 · unten y 172,7–185,7 · links x 20,3–33,3 / y 41,5–165,5 ·
  rechts x 141,7–154,7. Faltkanten liegen 3 mm außerhalb der grünen Flächen (Stanzlinie in der Vorschau rot).
- Nur die Platzhalterfarben verwenden, exakt als Hex: `#C9A227` Grund, `#A8841E` dunkel, `#E3C25A` Licht,
  `#1A1A1A`. **Kein anderer Ton** (auch nicht in `<pattern>`), sonst wird er beim Farbtausch nicht ersetzt.
  Keine `rgb()`-Schreibweise, keine Transparenz, keine Verläufe, kein Text.
- Symmetrie links–rechts: nur die linke Hälfte (x ≤ 87,5) zeichnen und mit
  `<use href="#links" transform="translate(175,0) scale(-1,1)"/>` spiegeln; Achsenelemente (Medaillons,
  Platte, Bänder) direkt und selbst symmetrisch um x 87,5. Oben–unten ähnlich, aber nicht gleich (Titel oben
  größer als Untertitel unten).

## Hintergrund, Flügel, Falz (für beide Ansätze gleich)
- Ganze Datei (0–175 / 0–207) glatt `#C9A227`. Außerhalb des äußeren Deckelrahmens **nichts** – keine
  Raster, keine Einzelformen, die über eine Faltkante laufen und dort halb abgeschnitten wirken.
- **Flügel ruhig:** nur Grund. Erlaubt: je Flügel zwei Linien 0,4 `#1A1A1A` parallel zu den Längskanten,
  1,0 mm innerhalb der grünen Fläche (oben/unten: y 22,3 / 33,3 bzw. 173,7 / 184,7, x 42,5–132,5;
  links/rechts: x 21,3 / 32,3 bzw. 142,7 / 153,7, y 43,5–163,5), Enden gerade. Sonst nichts – darauf steht
  „Czechster · Teil N“ (6,2 mm).

## Rahmen und Ecken
- Äußerer Rahmen: `rect x 42.5 y 43.5 w 90 h 120 rx 7`, 0,8 `#1A1A1A`.
- Innerer Rahmen: `rect x 43.7 y 44.7 w 87.6 h 117.6 rx 5.8`, 0,4 `#1A1A1A` (konzentrisch, gemeinsamer
  Eckmittelpunkt). Zwischen beiden glatter Grund.
- Eckmittelpunkte: (49,5 / 50,5), (125,5 / 50,5), (49,5 / 156,5), (125,5 / 156,5).
- **Eckrosetten** um diese Punkte wie auf der Vorderseite, aber 1,4-fach: Viertelbögen r 3,4 und 4,6
  (0,5 `#1A1A1A`) parallel zur Rahmenrundung, Enden mit Punkten r 0,35; zwischen den Bögen ein
  geschlossener Ring `#A8841E`, innen glatter Grund, Kern über Eck gestellte Raute 2,4 mm `#E3C25A`
  mit Kontur 0,3. **Kein Mittelpunkt, keine Speichen im Kern** (Augen-/Rad-Wirkung).

## Bausteine mit Lagen (mm, Dateikoordinaten)

| Zone | Lage | Inhalt |
|---|---|---|
| Kopffeld | y 44,7–57,0 | **Kopfmedaillon** auf der Achse: flache Raute 24 × 10,5, Mitte (87,5 / 50,6), drei Stufen Raute-in-Raute (Kontur `#1A1A1A` 0,7 · Fläche `#A8841E` · `#E3C25A` · Kern Punktraster `#1A1A1A`). Links/rechts davon **Kopffächer** zu den Eckrosetten: je 12–14 Strahlen, Linie 0,35 und schmaler Keil `#1A1A1A` im Wechsel, Zwischenfelder teils Punktraster `#A8841E`. Untere Medaillonspitze unterbricht die obere Bandlinie wie auf der Karte. |
| Titelband | Linien y 57,0 (0,7) / 57,8 (0,35) und 74,2 (0,35) / 75,0 (0,7), x 43,7–131,3 | Dazwischen **glatt** Grund. `data-titel="46.5,58.5,82,15"` → „Czechster“ ca. 12,5 mm Schrifthöhe. |
| Kranz unter dem Titel | y 75,0–80,1 | **Achsenraute** 4,6 × 4,6, Mitte (87,5 / 77,6), Kern Raute `#E3C25A` (kein Kreis). Beidseits Strahlen vom Plattenrand zur Bandlinie, Enden mit Punkten r 0,35. |
| Plattenteller | Mitte (87,5 / 105,3) | siehe unten, Außenkante r 25,2 → y 80,1–130,5, x 62,3–112,7 |
| Zwickel | x 44,5–68 / y 75,8–92 und gespiegelt (vier Zwickel zwischen Platte, Bändern und Seitenband) | Strahlen, die auf die Plattenmitte zielen und am Plattenrand enden, Felder dazwischen Punktraster; im Zwickel eine kleine Raute 3,5 mm als Anker. |
| Seitenbänder | x 44,5–58 (rechts 117–130,5), y 76–135 | Diagonal-Rautengitter Teilung 3,4 mm, jede zweite Raute `#A8841E`, einzelne Punkte r 0,4; auf y 105,3 ein **Halbfächer** aus 11 Strahlen, der vom Plattenrand nach außen läuft, flankiert von einer Seitenraute 5 × 7 mm bei (50,5 / 105,3). |
| Kranz über dem Untertitel | y 130,5–135,6 | Achsenraute 4,2 × 4,2 bei (87,5 / 133,1), sonst wie oben. |
| Untertitelband | Linien y 135,6 (0,7) / 136,4 (0,35) und 149,2 (0,35) / 150,0 (0,7) | `data-untertitel="62.5,137.5,50,11"` → „Teil N“ ca. 9 mm. Neben dem Rechteck (x 44–61 / 114–131) siehe Ansätze. |
| Fußfeld | y 150,0–162,3 | Fußmedaillon Raute 24 × 10,5 bei (87,5 / 156,4) + Fußfächer, Spiegelbild des Kopffelds. |

**Plattenteller** (Mitte 87,5 / 105,3), nach der Spielseite `index.html` (.stage/.disc), geometrisch übersetzt:
- r 25,2 Kontur 0,7 `#1A1A1A`; r 24,4–21,6 **Strahlenkranz** aus 60 Segmenten (Keil `#1A1A1A` 2,5° /
  `#E3C25A` 3,5°), innen Kontur 0,4; r 21,6–20,6 glatter Ring Grund.
- r 20,6 Scheibe `#1A1A1A`. Rillen als konzentrische Ringe `#A8841E` 0,3 mm, Abstand ≥ 0,9, **in drei
  Gruppen** (Titelpausen als 1,6 mm breite glatte Ringe) – keine Spirale, keine Glanzkeile/-sicheln.
- r 8,5 Etikett `#E3C25A`, Ring 0,4 `#1A1A1A`, innen bei r 6,8 ein Ring `#A8841E` 0,9 breit.
  Kern: **Rauten-Etikett** – über Eck gestellte Raute 8 × 8 Kontur `#1A1A1A` 0,5, darin Raute 5 × 5 `#A8841E`,
  darin Raute 2,2 × 2,2 Grund. **Kein Mittelpunkt, kein Spindelloch, kein dunkler Kreis im Hellen.**
- Kein Tonarm (bricht die Symmetrie und wirkt figürlich).

Dichte: außerhalb der beiden Bänder kaum ein Quadratzentimeter ohne Linie oder Raster. Linien ≥ 0,35 mm,
Hauptkonturen 0,7–0,8; Punkte r ≥ 0,25, Teilung ≥ 1,1 mm. Alle Ornamente ≥ 1 mm innerhalb des inneren Rahmens.

## Farbanteile (Deckelfläche außerhalb der Bänder)
- Grund (`#C9A227` bzw. Ersatz): ca. 40 %
- Dunkler Ton: ca. 25 %
- Fast-Schwarz `#1A1A1A`: ca. 25 % (Platte trägt viel davon – Rest der Fläche nicht zusätzlich schwärzen)
- Licht: ca. 10 % (Strahlenkranz, Etikett, Medaillon-Mittelstufen)

## Drei Farbsätze (Grund / dunkel / Licht) – Aufruf je Teil
| Teil | Name | Grund | dunkel | Licht | L* Grund | Kontrast Schwarz-Schrift |
|---|---|---|---|---|---|---|
| 1 | Ocker (Vorderseite) | `#C9A227` | `#A8841E` | `#E3C25A` | 68 | 7,2 : 1 |
| 2 | Supraphon-Blau | `#5E9FC4` | `#3F7A9E` | `#9CC8E0` | 63 | 6,0 : 1 |
| 3 | Plakat-Ziegelrot | `#D7645D` | `#AE4641` | `#EFA198` | 56 | 4,9 : 1 |

```
node .claude/skills/kartendesign-studio/scripts/schachtel.js <motiv.svg> 1 "#C9A227" "#A8841E" "#E3C25A" --aus <…-teil1> --pruefen
node .claude/skills/kartendesign-studio/scripts/schachtel.js <motiv.svg> 2 "#5E9FC4" "#3F7A9E" "#9CC8E0" --aus <…-teil2> --pruefen
node .claude/skills/kartendesign-studio/scripts/schachtel.js <motiv.svg> 3 "#D7645D" "#AE4641" "#EFA198" --aus <…-teil3> --pruefen
```

Unterscheidbarkeit (CIELAB ΔE der Grundtöne, simuliert nach Machado 2009):

| Paar | normal | Deuteranopie | Protanopie | Hebel |
|---|---|---|---|---|
| Ocker – Blau | 90 | 91 | 91 | Blau-Gelb-Achse (b* +64 / −25) |
| Ocker – Rot | 58 | 34 | 54 | Helligkeit (L* 68 / 56) + weniger Gelb (b* 64 / 26) |
| Blau – Rot | 75 | 58 | 42 | Blau-Gelb-Achse |

Ocker–Rot ist bei Deuteranopie das knappste Paar; deshalb Rot nicht aufhellen und nicht gelblicher machen.
Die dunklen Töne liegen je ~12 L* unter, die Lichter ~12–16 L* über dem Grund – so bleibt die Stufung in allen
drei Sätzen gleich. Untertitel „Teil N“ trennt zusätzlich ohne Farbe.

## Ansatz A – „Plattenteller-Portal“ (nah an der Vorderseite)
Die Kartenvorderseite wird 1:1 in der Logik übernommen und hochskaliert: Kopf-/Fußfächer aus den Medaillons,
volles Titelband und volles Untertitelband (wie das Gegenband der Karte), Seitenbänder mit Rautengitter und
Halbfächer, der Plattenteller sitzt genau dort, wo auf der Karte das QR-Feld ist, mit einem feinen
Doppelrahmen (Abstand 0,6 / 1,2) als gerundetem Quadrat x 61,5–113,5 / y 79,3–131,3, rx 3 – die Zwickel
zwischen Quadrat und Kreis gefüllt mit Punktraster und kurzen Strahlen. Die beiden Achsenrauten
(oben/unten) sitzen auf der Quadratlinie und unterbrechen sie, wie die Achsenraute am QR-Rahmen der Karte. Untertitel in einer Kartusche wie der
Kartencode (feine Doppellinie rx 1,5 außerhalb des Rechtecks, sonst glatt); links/rechts davon im Band je ein
liegender Strahlenfächer aus 7 Strahlen, der zur Kartusche zeigt, und eine Raute 3 mm am Bandende.
Ziel: Wer Karte und Schachtel nebeneinander sieht, erkennt sofort dieselbe Handschrift.

## Ansatz B – „Sonnenhalle“ (konzentrisch, Strahlen aus der Platte)
Die Platte ist die Sonne des Deckels: Zwischen Titel- und Untertitelband läuft **ein einziger großer
Strahlenfächer** von der Plattenmitte bis an den inneren Rahmen – 72 Strahlen, Linie / schmaler Keil im
Wechsel, gerade, nie geknickt; jedes zweite Feld Punktraster `#A8841E`, jedes vierte `#A8841E` gefüllt. Die
Seitenbänder entfallen dafür; an ihre Stelle treten auf y 105,3 je eine große **Seitenraute** 8 × 12 mm
(x 45–53 bzw. 122–130) mit drei Stufen, die die Strahlen fasst. Kopf- und Fußfeld werden **gestaffelt**: drei
konzentrische Bögen um den Medaillonmittelpunkt (r 8 / 10 / 12, nur die untere bzw. obere Hälfte), Zwischenräume
Rautenkette, Punktraster, Strahlen – wie ein Supraphon-Etikettrand. Das Untertitelband ist **kein volles Band**,
sondern eine hängende Kartusche x 60,5–114,5 / y 136,4–149,2 mit doppelter Kontur (rx 3) und kleinen
Stufenecken; links/rechts davon setzt sich der Fußfächer bis zur Bandlinie fort. Mehr Tiefe und Bewegung,
gleiche Bausteine, andere Ordnung – Titel- und Untertitelrechteck bleiben exakt wie oben.

## Verboten (Besitzer, absolut)
- **Keine Blitze, nichts Runenartiges**: keine Zickzacklinien, Knickstriche, eckigen S-/Z-Formen, auch nicht
  als Rillen- oder Strahlenvariante. Strahlen sind gerade, Bögen rund.
- Keine Figuren, Gesichter, Augen: keine dunkle Scheibe mit hellem Punkt, keine zwei gleichen Kreise
  nebeneinander, kein Kreis mit Mittelpunkt (gilt auch für Platte, Rosetten, Achsenrauten), keine Stabreihen.
- Kein Text, keine Buchstaben, Ziffern, Noten, Play-Symbole, Logos, Flaggen, Wappen, kein Glanz/Schatten/3D.
- Nichts Gestalterisches über die Faltkanten; keine Ornamente unter der Flügelschrift.

## Selbstkontrolle der Grafiker
- Alle drei Teile rendern (Aufrufe oben), Vorschau mit dem Read-Tool ansehen: Titel ≥ 11 mm, Untertitel
  ≥ 8 mm, Flügelschrift ≥ 3 mm (Skript), „BESTANDEN“.
- Symmetrie: linke Hälfte gespiegelt, keine Formen auf x 87,5, die nicht selbst symmetrisch sind.
- Jede kleine Form aus einem Meter ansehen: Zeichen, Gesicht, Auge, Rune → ersetzen, nicht abschwächen.
- Entwürfe als `design/studio/runde-6/entwurf-deckel-a.svg` / `-b.svg`, PNGs `entwurf-deckel-a-teil1..3`.
