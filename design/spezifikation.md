# Czechster – Vollständige Design-Spezifikation
**Version 1.0 · Für automatisierte Generierung (Gemini / andere Systeme)**  
**Ziel:** Exakte, reproduzierbare Vorgaben für Vorder- und Rückseite aller Karten.

---

## 1. Technische Vorgaben (verbindlich)

| Parameter                  | Wert                                      |
|---------------------------|-------------------------------------------|
| Fertiges Kartenformat     | 59 × 91 mm (Hochformat)                   |
| Dateiformat pro Seite     | 65 × 97 mm (inkl. 3 mm Beschnitt rundum)  |
| Pixelmaß bei 300 dpi      | 768 × 1146 Pixel                          |
| Farbsystem                | RGB, 8 Bit, sRGB                          |
| Eckenradius (fertig)      | 5 mm                                      |
| Sicherheitsabstand        | Mindestens 4 mm von der Schnittkante      |
| Sichere Zone              | 51 × 83 mm (innen)                        |
| Feine Linien              | ≥ 0,18 mm                                 |
| Rückseite                 | Um 180° gedreht anlegen                   |

**Wichtige Inhalte** (QR-Code, Texte, Codes) dürfen **niemals** in den 3 mm Beschnitt oder näher als 4 mm an die Schnittkante ragen.

---

## 2. Farbpalette

### Decade-Farben (Okabe-Ito, farbblind-sicher)

| Jahrzehnt | Hex       | Verwendung auf Rückseite                  |
|-----------|-----------|-------------------------------------------|
| 1960er    | `#E69F00` | Hintergrund (aufgehellt) + Akzente        |
| 1970er    | `#56B4E9` | Hintergrund (aufgehellt) + Akzente        |
| 1980er    | `#009E73` | Hintergrund (aufgehellt) + Akzente        |
| 1990er    | `#F0E442` | Hintergrund (aufgehellt) + Akzente        |
| 2000er    | `#0072B2` | Hintergrund (aufgehellt) + Akzente        |
| 2010er    | `#D55E00` | Hintergrund (aufgehellt) + Akzente        |
| 2020er    | `#CC79A7` | Hintergrund (aufgehellt) + Akzente        |

**Aufgehellte Hintergründe (Rückseite):**  
Die Decade-Farbe wird mit Weiß gemischt (ca. 18–25 % Sättigung / hohe Helligkeit), damit der große Jahr-Text maximal lesbar bleibt.

**Gemeinsame Farben**
- Ocker (Vorderseite): `#C9A227`
- Dunkler Ocker (Muster): `#A8841E`
- Text dunkel: `#1A1A1A`
- Reinweiß: `#FFFFFF`
- Creme (optional): `#F8F1E3`

---

## 3. Typografie

Nur Google Fonts mit vollständigem tschechisch-slowakischem Zeichensatz (ě š č ř ž ý á í é ů ú ň ť ď ľ ĺ ŕ ô ä + Großbuchstaben).

| Element              | Schrift              | Schnitt     | Größe (ca.)     | Bemerkung                     |
|----------------------|----------------------|-------------|-----------------|-------------------------------|
| Jahr (Rückseite)     | Archivo Black        | Regular     | 72–78 pt / 22–25 mm Höhe | Hauptelement, extrem dominant |
| Interpret            | Noto Sans            | Bold        | 14–16 pt        | Max. 2 Zeilen                 |
| Liedtitel            | Noto Sans            | Regular     | 11–13 pt        | Max. 2 Zeilen                 |
| Spielname „Czechster“| Archivo Black        | Regular     | 18–20 pt        | Vorderseite                   |
| Kartencode           | Noto Sans            | Regular     | 8–9 pt          | Klein, dezent                 |

**Umbruch-Regeln**
- Interpret: max. 2 Zeilen, bei > 38 Zeichen automatisch umbrechen + leicht verkleinern.
- Titel: max. 2 Zeilen, bei > 42 Zeichen umbrechen + verkleinern.
- Niemals unter 10 pt gehen.

---

## 4. Vorderseite (für alle Karten identisch)

### Aufbau (von oben nach unten)

1. **Hintergrund**  
   - Vollflächig Ocker `#C9A227` bis in den Beschnitt.  
   - Darauf ein sehr dezentes radial ausgehendes Strahlenmuster (Sonnenstrahlen-Effekt à la Supraphon-Etiketten).  
   - Konstruktion: repeating-conic-gradient oder 24–36 dünne Linien (0,2–0,3 mm), die vom Zentrum ausstrahlen, in Farbe `#A8841E` mit 15–20 % Deckkraft.  
   - Das Muster wird im Zentrum (unter dem QR) ausgeblendet (radial mask).

2. **Spielname „Czechster“**  
   - Schrift: Archivo Black, ca. 7,2 mm Höhe.  
   - Farbe: `#1A1A1A`.  
   - Horizontal zentriert.  
   - Oberkante ca. 11–12 mm von der Datei-Oberkante.

3. **QR-Code-Bereich**  
   - Weißes Feld: 37 × 37 mm, abgerundet 2 mm.  
   - QR-Code selbst: 32 × 32 mm, schwarz auf reinem Weiß.  
   - Ruhezone: mindestens 2,5 mm rundum (bereits im weißen Feld enthalten).  
   - Position: horizontal zentriert, Oberkante des weißen Feldes bei y ≈ 22 mm.  
   - Kein Logo im Code, keine Farbverläufe, Fehlerkorrektur Stufe M, möglichst kurze URL (≈ 40 Zeichen).

4. **Kartencode** (z. B. „a12“)  
   - Schrift: Noto Sans Regular, 3,2 mm.  
   - Position: unten rechts, ca. 6–7 mm vom unteren und rechten Rand der Datei.  
   - Farbe: `#1A1A1A`.

**Alle Vorderseiten müssen optisch identisch sein** – nur der QR-Code und der kleine Kartencode ändern sich.

---

## 5. Rückseite (individuell pro Karte)

### Aufbau

1. **Hintergrund**  
   - Aufgehellte Decade-Farbe (siehe Tabelle oben).  
   - Optional: sehr dezente geometrische Akzente (kleine Rauten, Linien, Punkte) in der reinen Decade-Farbe mit niedriger Deckkraft (8–15 %).

2. **Jahr**  
   - Extrem groß (22–25 mm Höhe), Archivo Black.  
   - Horizontal zentriert.  
   - Vertikal etwa im oberen Drittel (Mitte des Jahres bei y ≈ 32–38 mm).  
   - Farbe: `#1A1A1A`.

3. **Interpret**  
   - Noto Sans Bold, 14–16 pt.  
   - Zentriert, max. 2 Zeilen.  
   - Abstand zum Jahr: ca. 4–6 mm.

4. **Liedtitel**  
   - Noto Sans Regular, 11–13 pt.  
   - Zentriert, max. 2 Zeilen.  
   - Etwas kleiner und leichter als der Interpret.

5. **Kartencode**  
   - Klein, unten, gleiche Position wie auf der Vorderseite.  
   - Etwas transparenter (70 % Deckkraft).

6. **Dezente Trennlinie** (optional)  
   - Dünne horizontale Linie (0,3–0,4 mm) unter dem Titel, zentriert, ca. 18 mm lang, 20–25 % Deckkraft.

---

## 6. Grafische Elemente – Konstruktionsregeln

### Vorderseite – Strahlenmuster
- Zentrum des Musters liegt hinter dem QR-Code.
- 28–36 Strahlen.
- Strichstärke 0,25 mm.
- Farbe `#A8841E` @ 18 % Opacity.
- Im inneren Kreis (unter dem QR) komplett ausgeblendet.

### Rückseite – Geometrische Akzente (optional, dezent)
- Kleine Rauten (◆), Punkte oder kurze Linien.
- Immer in der reinen Decade-Farbe.
- Sehr niedrige Deckkraft (8–15 %).
- Nie den Text stören.
- Inspiriert von tschechoslowakischer Plakat- und Etikettengrafik der 60er–80er Jahre (Supraphon/Opus).

---

## 7. Beispielkarten (exakte Daten)

### Karte 1
- Code: a12
- Jahr: 1966
- Decade: 60s (`#E69F00`)
- Interpret: Václav Neckář & Helena Vondráčková
- Titel: Stín katedrál

### Karte 2
- Code: b07
- Jahr: 1985
- Decade: 80s (`#009E73`)
- Interpret: Elán
- Titel: Stužková

### Karte 3
- Code: c19
- Jahr: 2021
- Decade: 20s (`#CC79A7`)
- Interpret: Kollárovci
- Titel: Len tebe spievam

---

## 8. Generierungsregeln für Systeme (Gemini etc.)

1. Jede Karte besteht aus **zwei getrennten Dateien**: Vorderseite + Rückseite.
2. Vorderseite immer identisch (nur QR + Code ändern).
3. Rückseite: Jahr dominant, Interpret und Titel klar hierarchisch, Decade-Farbe korrekt.
4. QR-Code muss real scannbar sein (nicht nur optisches Muster).
5. Alle tschechischen und slowakischen Sonderzeichen müssen korrekt dargestellt werden.
6. Keine Neonfarben, keine Schnittmarken, keine zu feinen Linien.
7. Hintergrund geht immer bis in den Beschnitt (randlos erlaubt).
8. Rückseite um 180° drehen, bevor sie an die Druckerei geliefert wird.

---

## 9. Dateinamen-Empfehlung

```
Czechster_Front_a12.png
Czechster_Back_a12_1966.png
Czechster_Front_b07.png
Czechster_Back_b07_1985.png
...
```

---

**Ende der Spezifikation**  
Diese Datei enthält alle Informationen, die benötigt werden, um die Karten pixelgenau und stilistisch konsistent zu erzeugen.  
Bei Unklarheiten immer auf Lesbarkeit und Scanbarkeit priorisieren.