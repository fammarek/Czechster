---
name: kartendesign-studio
description: Designstudio für die Czechster-Spielkarten. Entwickelt Vorder- und Rückseitenmotive als Vektorgrafik (SVG) mit einem Team aus Agenten wie bei einem Spielwarenhersteller – Art Director, mehrere Grafiker, Druckvorstufe, Spieletester – und legt dem Besitzer Entwürfe zur Freigabe vor. Immer verwenden, wenn es um Gestaltung, Look, Ornamente, Rahmen, Farben je Jahrzehnt, Motive, Kartendesign, „schöner machen“, neue Entwürfe, Varianten oder Überarbeitung der Karten geht – auch wenn der Besitzer nur sagt „mach weiter mit dem Design“ oder ein Motiv kritisiert. Nicht für Jahresprüfung, Videosuche oder songs.json.
---

# Kartendesign-Studio

Der Besitzer will einen eigenständigen, detailreichen Look im Stil tschechoslowakischer Plakat- und
Schallplattengrafik (Supraphon/Opus, Art déco), der sich über die Jahrzehnte immer wieder neu interpretiert.
Bildgeneratoren wie Grok scheiden aus: Sie erfinden Text, halten Lagen und Symmetrie nicht ein und kippen
in fremde Motive. Dieses Studio konstruiert die Motive deshalb als SVG – exakt, symmetrisch, gestochen scharf,
gezielt änderbar. Das ist der Vorteil, den jede Runde ausspielen soll: Präzision UND Fülle.

Du selbst bist die **Produktmanagerin**: Du steuerst die Runde, sprichst mit dem Besitzer (Deutsch, knapp,
eine Rückfrage auf einmal) und holst seine Freigabe ein. Die Fachrollen sind Agenten in `.claude/agents/`.

## Was am Ende entsteht

- `design/motive/vorne.svg` – eine Vorderseite für alle Karten
- `design/motive/hinten_<jahrzehnt>_<1|2>.svg` – zwei Rückseiten je Jahrzehnt (60, 70, 80, 90, 00, 10, 20),
  im Spiel abwechselnd verwendet
- Jedes Motiv: viewBox `0 0 65 97` (Millimeter, Datei inkl. 3 mm Beschnitt), Freiflächen als Attribute am
  Wurzelelement (siehe `references/svg-baukasten.md`). Texte, QR-Code und Kartencode setzt erst
  `tools/druckdateien.js` ein – Motive enthalten nie Text oder Ziffern.

`design/studio/status.md` hält fest, welches Motiv freigegeben ist, was offen ist und welche Wünsche der Besitzer
geäußert hat. Lies sie zu Beginn jeder Sitzung; lege sie an, falls sie fehlt.

## Ablauf einer Runde

0. **Werkzeug bereit?** `bash .claude/skills/kartendesign-studio/scripts/einrichten.sh` (einmal pro Container,
   dauert Sekunden; installiert Schriften und PNG-Hilfen in `.studio-werkzeug/`, nicht eingecheckt).

1. **Umfang festlegen.** Nicht alle 15 Motive auf einmal. Erste Runde: Vorderseite + ein Jahrzehnt
   (kalibriert den Stil mit dem Besitzer). Danach zwei bis drei Jahrzehnte pro Runde. Ordner:
   `design/studio/runde-<N>/`.

2. **Briefing – Agent `art-director`.** Gib ihm Rundennummer, Motive und alle Wünsche aus `status.md`.
   Er schreibt je Motiv `briefing-<motiv>.md` mit Bildidee, Motivliste, Farbanteilen, Dichte.

3. **Entwurf – Agent `grafiker`, parallel.** Starte für jedes Motiv zwei Grafiker mit unterschiedlichem
   Ansatz (im Auftrag „Ansatz A: …“ / „Ansatz B: …“ aus dem Briefing benennen), alle im selben Zug, damit sie
   gleichzeitig arbeiten. Jeder liefert `entwurf-<motiv>-<a|b>.svg`, rendert ihn und prüft ihn selbst.

4. **Druckvorstufe – Agent `druckvorstufe`.** Prüft alle Entwürfe mit `scripts/render.js --pruefen` und meldet
   je Datei BESTANDEN / NACHBESSERN mit Messwerten. Was durchfällt, geht mit der Meldung einmal zurück an
   einen Grafiker. Was danach noch durchfällt, wird verworfen.

5. **Spieletest – Agent `spieletester`.** Bekommt den Kontaktbogen (`scripts/kontaktbogen.js`) mit echten
   Beispieltexten und der Rot-Grün-Simulation. Urteilt aus Sicht von Mitspielern am Tisch.

6. **Auswahl – Agent `art-director`.** Wählt je Motiv den besten Entwurf (oder verlangt einen gezielten
   Feinschliff), begründet in zwei Sätzen.

7. **Vorlage beim Besitzer (du).** Erzeuge den Kontaktbogen der ausgewählten Entwürfe, schick ihn mit
   `SendUserFile` (display: render) und frag nach Freigabe oder Änderungen – je Motiv. Freigegebenes nach
   `design/motive/` kopieren, `status.md` aktualisieren, committen und pushen.

Änderungswünsche des Besitzers sind Gold: Schreib sie wörtlich in `status.md` unter „Wünsche“ – sie gelten
für alle künftigen Runden, nicht nur für das kritisierte Motiv.

## Warum die festen Regeln so sind

- **Kein Text im Motiv**: Texte setzt das Druckskript mit geprüften Schriften und tschechischen Sonderzeichen.
- **Freiflächen exakt**: Dort stehen später Jahr (Archivo Black, ~18,7 mm), Interpret, Titel bzw. QR-Code.
  Unruhe darunter macht sie unlesbar oder unscanbar.
- **Sichere Zone**: Die Druckerei schneidet mit bis zu 1,5 mm Versatz. Alles Wichtige ≥ 7 mm vom Dateirand.
- **Symmetrie in beiden Achsen und gerundete Ecken**: ausdrücklicher Wunsch des Besitzers.
- **Leitfarbe je Jahrzehnt**: Mitspieler erkennen auf dem Tisch das Jahrzehnt einer Karte auf einen Blick.

Alle Einzelheiten: `references/stilbibel.md` (Stil, Farben, Jahrzehnte, Verbote) und
`references/svg-baukasten.md` (Koordinaten, Symmetrie-Technik, Ecken, Freiflächen, Linienstärken).

## Danach

Sind alle 15 Motive freigegeben, frag den Besitzer, ob die Druckdateien neu erzeugt werden sollen. Dann
`tools/druckdateien.js` so erweitern, dass es die Motive als Hintergrund nutzt und Texte in die Freiflächen aus
den Motiv-Attributen setzt (Rückseiten-Variante 1/2 abwechselnd je Karte).
