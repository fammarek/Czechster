# SVG-Baukasten

## Koordinaten

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 97" width="65mm" height="97mm"
     data-motiv="hinten_80_1" data-frei="8,19,49,59">
```

- Eine Einheit = 1 mm. Datei 65 × 97 mm inkl. 3 mm Beschnitt. Fertige Karte: x 3–62, y 3–94.
- Sichere Zone für alles Wichtige (Medaillons, markante Ornamente): x 7–58, y 7–90.
- Hintergrundflächen und durchlaufende Muster bis zum Dateirand (0–65 / 0–97) ziehen.
- Mittelpunkt: (32.5, 48.5).

## Freiflächen (Attribute am `<svg>`, Werte in mm: x,y,Breite,Höhe)

Rückseite: `data-frei` – die **lichte** Fläche, die glatt im hellen Hintergrund bleibt; Rahmenlinien liegen
außerhalb. Standard `8,19,49,59` (x 8–57, y 19–78). Mindestens 47 × 56 mm, mittig (Symmetrie).
Darin stehen Jahr (Archivo Black 16,5 mm, bis 43 mm breit), Interpret (≤ 2 Zeilen, 15 → 10 pt), Titel
(≤ 2 Zeilen) und unten der Kartencode, alles mit ≥ 1 mm Luft. Kopf- und Fußornament müssen sich deshalb auf
y 7–18 und 79–90 beschränken (plus Beschnitt) – dort dicht und reich, nicht in die Freifläche hinein.

Vorderseite: `data-titel` (Streifen für den Schriftzug „Czechster“, z. B. `7,13,51,10`) und `data-qr`
(Feld für das weiße QR-Feld 35 × 38 mm plus Rand, z. B. `12.5,28,40,43`). Beide glatt in Grundfarbe.
Die Vorderseite ist nur links–rechts symmetrisch (der Titel sitzt oben); oben–unten so ähnlich wie möglich.

Das Druckskript setzt Texte und QR-Code exakt in diese Rechtecke. Was darin gezeichnet ist, stört.

## Symmetrie konstruktiv erzwingen

Zeichne nur das linke obere Viertel (x 0–32.5, y 0–48.5) in eine Gruppe und spiegle sie dreimal:

```xml
<defs>
  <g id="viertel"> … nur Formen mit x ≤ 32.5 und y ≤ 48.5 … </g>
</defs>
<use href="#viertel"/>
<use href="#viertel" transform="translate(65,0) scale(-1,1)"/>
<use href="#viertel" transform="translate(0,97) scale(1,-1)"/>
<use href="#viertel" transform="translate(65,97) scale(-1,-1)"/>
```

Elemente, die über die Achsen laufen (Medaillon auf der Mittelachse, durchgehende Rahmen), direkt und
selbst symmetrisch um (32.5, 48.5) zeichnen. Zahlen auf höchstens zwei Nachkommastellen.

## Ecken

Die Karte wird mit 5 mm Radius gestanzt; die Rundung hat ihren Mittelpunkt bei (8, 8) bzw. gespiegelt.
Rahmenlinien folgen ihr konzentrisch: Ein Rahmen im Abstand d vom Dateirand bekommt den Radius
`r = max(8 − d, 0) + Zusatz`, wobei ein Zusatz von 2–4 mm für alle Rahmen gleich gut aussieht
(z. B. `<rect x="5" y="5" width="55" height="87" rx="6" fill="none" …/>`). Keine spitzen Rahmenecken.
Eckornamente als Viertelkreis-Fächer oder Bögen um (8, 8) bauen.

## Linien und Punkte

- Linienstärke mindestens 0,3 mm (`stroke-width="0.3"`), Hauptrahmen 0,5–0,8 mm.
- Punkte im Raster: Radius ≥ 0,18 mm (Durchmesser ≥ 0,35 mm), Abstand ≥ 0,9 mm.
- Raster als `<pattern patternUnits="userSpaceOnUse">` und mit `<clipPath>` in Formen begrenzen.
- `stroke-linejoin="round"` für saubere Ecken. Keine Filter, keine Transparenz unter 15 %.

## Selbstkontrolle

```
node .claude/skills/kartendesign-studio/scripts/render.js <datei.svg> --pruefen [--text "1966|Václav Neckář & Helena Vondráčková|Stín katedrál"]
```

erzeugt `<datei>.png` (768 × 1146, Druckmaß), `<datei>-vorschau.png` (mit Schnittkante rot, sichere Zone blau,
Beispieltext) und gibt Messwerte aus: Symmetrie, Ruhe und Helligkeit der Freiflächen, Leitfarbanteil,
zu dünne Linien, Text-/Ziffern-Elemente. Ansehen mit dem Read-Tool.
