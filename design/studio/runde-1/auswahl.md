# Runde 1 – Auswahl (Art Director)

Grundlage: `kontaktbogen.png`, die vier `*-vorschau.png`, `pruefberichte.md`, aktueller `svg-baukasten.md`
(lichte Freifläche Rückseite `8,19,49,59`, Kopf-/Fußornament nur y 7–18 bzw. 79–90).

| Motiv | Wahl | Bewertung kurz |
|---|---|---|
| `vorne` | **Entwurf B** („Etikett-Architektur“) als Basis | feinere, dichtere Bordüren (Rand 51 % gegenüber 43 %), Spieletester-Favorit; es fehlen die großen Strahlenfächer und Rasterflächen der Referenz – die liefert Entwurf A |
| `hinten_80_1` | **Entwurf B** („Memphis-Raster“) als Basis | Kassette macht das Jahrzehnt aus zwei Metern und ohne Farbsehen sofort lesbar, Code in der Freifläche lesbar; Schwächen: Rand flimmert, zu wenig Grün, Maße veraltet |

Beide Feinschliffe gehen an **einen** Grafiker je Motiv; es wird nur die B-Datei weiterbearbeitet
(`entwurf-<motiv>-b.svg` → `runde-2/entwurf-<motiv>.svg`). Konstruktion bleibt: linkes oberes Viertel zeichnen,
dreimal spiegeln; Achsenelemente selbst symmetrisch.

---

## Vorderseite – Feinschliff von Entwurf B

Unverändert lassen: `data-titel="7,14,51,9"`, `data-qr="12.5,29,40,39"`, `data-code="24.5,76,16,5"`,
Titel- und Gegenband, Code-Kartusche, Außenrahmen d 5,5 / 6,3, Eckrosetten, Kopf-/Fußraute, Rautenkette an der
Außenkante der Seitenbänder, Schraffur im Beschnitt. Die Vorderseite hat kein neues Freiflächenmaß.

**V1 – Kopffächer (aus A übernehmen, Kritik „Strahlenfächer fehlen“).** Im Kopffeld zwischen Eckrosette
(x ≤ 11) und Kopfraute (linke Spitze ca. x 25,2 / y 10,3) die bisherigen schmalen Schraffur- und Punktstreifen
ersetzen durch einen Fächer aus 11 Strahlen, Fluchtpunkt = linke Rautenspitze, Enden auf einer Linie von
(11,5 / 7,0) bis (11,5 / 13,6). Rhythmus wie Referenz: Linie 0,3 `#1A1A1A` / schmaler Keil `#1A1A1A`
(Basis 0,6 mm) im Wechsel; jedes zweite Zwischenfeld Punktraster `#A8841E` (r 0,2, Teilung 1,0), die übrigen
glatt im Grund. Clip auf y 6,45–13,9 (Unterkante = obere Doppellinie des Titelbands). Fuß gespiegelt.

**V2 – Strahlenkranz über dem QR-Feld (y 23,4–28,4).** Die kurzen schrägen Schraffurstriche durch einen
echten Kranz ersetzen: Fluchtpunkt (32,5 / 31), je Seite 14 Strahlen, die an der unteren Titelband-Linie enden,
Enden mit Punkt r 0,3; Zwischenkeile abwechselnd `#A8841E` gefüllt und Punktraster. Achsenraute mit Kreiskern
(32,5 / 26) bleibt obenauf. Außen (x 11,7–17, Dreieck zwischen Seitenband und Kranz) ein Punktraster-Dreieck
`#1A1A1A` r 0,2 Teilung 1,0 – das ist die Rasterfläche, die der Tester vermisst. Gespiegelt bei y 69–73,6.

**V3 – Seitenbänder (x 7,3–11,7, y 29–68) wie A gliedern.** Innenteil des Bands (rechts von der
Rautenkette): auf y 48,5 der Halbfächer aus A – Fluchtpunkt (12 / 48,5), 9 Strahlen, Enden y 38–59 an der
Rautenkette, Keile `#1A1A1A`/`#A8841E` im Wechsel, Grund Punktraster; die vorhandene Seitenraute
(ca. 9,4 / 48,5) bleibt obenauf als Medaillon. Darüber (y 29–38) und darunter (y 59–68): Diagonal-Rautengitter
Teilung 2,6 mm, Linien 0,3 `#1A1A1A`, jedes zweite Feld `#A8841E` gefüllt, in den übrigen ein Punkt r 0,3
(aus A, `cGitter`). Die bisherigen senkrechten Punktreihen dort entfallen.

**V4 – Ecktaschen (x 11–20, y 7–13,9 und gespiegelt).** Soweit nach V1 noch Grund sichtbar ist: Dreiecksfeld
an der Eckrosette mit grobem Punktraster (r 0,3, Teilung 1,2, `#1A1A1A`), wie die gepunkteten Dreiecke der
Referenz. Kein Element näher als 6,5 mm am Dateirand.

**V5 – Farbe und Dichte.** Dunkler Ocker auf ≈ 30 % der Ornamentfläche anheben (bisher wirkt B fast nur
schwarz auf Ocker); Licht `#E3C25A` nur in der Mittelstufe der vier Achsenrauten. Ziel im Prüfskript:
Rand ≥ 55 % Kantenpixel, Symmetrie ≤ 0,2, kleinste Punkte Ø ≥ 0,4 mm, Freiflächen glatt.

---

## Rückseite `hinten_80_1` – Feinschliff von Entwurf B

**H1 – Freifläche auf das neue Maß.** `data-frei="8,19,49,59"` (x 8–57, y 19–78), Fläche `#C7EAE0`.
Rahmen nur noch eine Linie 0,5 `#1A1A1A` **außerhalb**: `rect x 7.4 y 18.4 w 50.2 h 60.2 rx 1.4`
(Innenkante 0,35 mm vor der Freifläche; größerer Radius würde die Ecke anschneiden). Die Zickzack-Doppellinien
`#zo` (y 19,8–20,8) und `#zl` (x 6,75–7,75) **entfallen** – sie lägen in der Freifläche bzw. im 1 mm-Spalt.
Der Streifen zwischen innerem Außenrahmen (x 6,45) und Freiflächenrahmen (x 7,15) wird glatt `#009E73`.

**H2 – Kopf- und Fußfeld auf y 7–18 stauchen.** Alles aus `#viertel` und `#achse` muss in y 6,5–18,1 liegen
(Fuß gespiegelt y 78,9–90,5). Rastergrund 2,5 mm → 2,2 mm, damit vier Reihen hineinpassen
(y 7,2 / 9,4 / 11,6 / 13,8, unterste Reihe endet bei 16,0); darunter siehe H5.

**H3 – Kassette größer und als Graustufen-Signal (Rot-Grün-Kritik).** Kartusche `#achse` auf
x 19–46, y 7,2–17,8 (27 × 10,6, rx 1,5). Gehäuse Fast-Schwarz-Kontur 0,6, Fenster `#C7EAE0`, Spulen r 2,4
Fast-Schwarz mit hellem Zahnkranz (6 Zähne), Bandfenster dazwischen `#006B4E`, Andruckfeld unten (Trapez
y 15,8–17,8) Fast-Schwarz mit drei hellen Löchern. Regel: Die Kassette muss im Rot-Grün-Bild allein durch
Hell-Dunkel lesbar sein (helles Fenster, dunkle Spulen) – das ist das Jahrzehnt-Merkmal unabhängig vom Grün.

**H4 – Grün dominieren lassen (aus A).** Grund des Kopf- und Fußfelds außerhalb der Kassette `#009E73` statt
`#C7EAE0`; Konfetti darauf in Fast-Schwarz, `#006B4E` und als Lichter `#C7EAE0`/`#7FCFB5`. Ziel Leitfarbanteil
≥ 45 %. Nebeneffekt für Rot-Grün-Schwache: dunkles Kopf-/Fußfeld, helle Freifläche, helle Kassette – eine
Hell-Dunkel-Signatur, die die Vorderseite (durchgehend mittleres Ocker) nicht hat.

**H5 – Klaviatur-Band (aus A).** Unter dem Konfettiraster links und rechts der Kassette, x 7,6–19 und
46–57,4, y 16,2–18,0: weiße Tasten `#C7EAE0` 1,6 mm breit mit 0,3-Fugen `#1A1A1A`, schwarze Tasten
`#1A1A1A` 0,9 × 1,1 mm im Muster 2-3. Zweites 80er-Motiv, das ohne Farbe funktioniert, und es schließt das
Kopffeld sauber zur Freifläche ab. Fuß gespiegelt (Tasten zeigen zur Freifläche).

**H6 – Eckrosette als Spule (aus A).** Eckrosette um (11 / 11) behält die Viertelbögen r 3,6 / 4,5 und den
Zickzack-Fächer, der Kern wird statt Punkt r 0,8 eine kleine Spule: Ring r 1,3 Fast-Schwarz 0,4, sechs Zähne,
Kern `#C7EAE0` r 0,5. Bindet die Ecken an die Kassette.

**H7 – Rand beruhigen (Flimmer-Kritik).** Ursache sind feine, kontrastreiche Wiederholungen: Zickzack `#ko`
(Periode 0,81 mm) im Beschnitt oben/unten, Karo `#kl` in den Seiten, schwarz-weiße Konfetti-Wechsel.
Ersetzen bzw. begrenzen:
- Beschnitt und Streifen außerhalb des Außenrahmens (x 0–5,5, y 0–5,5 und gespiegelt): `#009E73` mit
  Punktraster `#006B4E` r 0,25, Teilung 1,4 – nur Grün auf Grün, kein Schwarz, kein Hell.
- Regel für alle Wiederholmuster am Rand: Periode ≥ 2 mm **oder** Kontrast nur Leitfarbe/Zwischenton.
  Schwarz-Hell-Wechsel nur in Einzelformen (Konfetti, Tasten, Kassette), nie als durchlaufendes Band.
- Konfetti: höchstens jede zweite Zelle mit `#C7EAE0`-Anteil; Punktraster in Zellen Ø ≥ 0,4, Teilung ≥ 1,0.

**H8 – Blitze behalten, verkürzen.** Die gestufte Blitz-Doppellinie (hell/schwarz/grün) von der Kassette zur
Eckrosette bleibt, muss aber in y 9–15 laufen; sie ist das Bindeglied zum Strahlenfächer der Vorderseite.

**H9 – Prüfung.** `render.js --pruefen --text "1985|Václav Neckář & Helena Vondráčková|Stříhali dohola
malého chlapečka"`: Freifläche glatt, Jahr/Code mit ≥ 1 mm Luft, Leitfarbe ≥ 45 %, Symmetrie ≤ 0,2;
Rot-Grün-Vorschau im Kontaktbogen neben `vorne` legen – die Kassette muss sofort zu sehen sein.
