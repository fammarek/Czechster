# Briefing Runde 1 – `hinten_80_1`

## Bildidee
Das Art-déco-Portal der Vorderseite, gebaut aus der Technik der 80er: Die Strahlen werden zu
Synthesizertasten und Zickzack-Blitzen, das Rauten-Medaillon zur Kassettenspule, das Punktraster zu
Memphis-Konfetti – in kräftigem Grün `#009E73`, das man aus zwei Metern als „80er“ erkennt.
Gleiche Rahmenlogik, gleiche Eckrosetten, gleiche Dichte wie vorne; neu ist die Formensprache.
(Für `hinten_80_2` bleiben Lautsprechermembran und Perspektivgitter reserviert – hier nicht verwenden.)

## Freifläche (Attribut am `<svg>`)
- `data-frei="9,22,47,53"` – x 9–56, y 22–75, glatt in `#C7EAE0`. Hier stehen später Jahr (~18,7 mm),
  Interpret und Titel – nichts hineinzeichnen.
- Kartencode: Das heutige Druckskript setzt ihn 7,5 mm vom Dateirand in eine Ecke, also mitten ins Fußornament.
  Vorschlag (für die Produktmanagerin, gleiche Frage wie vorne): Code unten mittig *in* der Freifläche
  (ca. y 70–73). Das Motiv braucht dafür nichts zu tun.
- Rahmen um die Freifläche außerhalb des Rechtecks: Doppellinie im Abstand 0,8 mm (0,5, Fast-Schwarz,
  rx 2,5) und 1,6 mm (0,3, Leitfarbe, rx 3,3). Größere Radien würden die Rechteckecken anschneiden.
- Exakt symmetrisch in beiden Achsen (kein Titel): nur das linke obere Viertel zeichnen und dreimal spiegeln.
  Die Rückseite wird beim Druck um 180° gedreht – bei voller Symmetrie egal.

## Raumaufteilung
- **Kopffeld** y 3–21,2 (sicher ab y 7) und **Fußfeld** y 75,8–94 (sicher bis y 90): hier sitzt die Masse der
  Ornamente und das Achsenmedaillon.
- **Seitenbänder** x 3–7,4 bzw. 57,6–62: schmal (nur ca. 2 mm innerhalb der sicheren Zone) – hier nur
  durchlaufende Muster und Linien, keine Medaillons.
- Kein Schnittopfer: keine Rahmenlinie näher als 5,5 mm am Dateirand; außerhalb des Außenrahmens nur
  durchlaufendes Muster bis in den Beschnitt (Zickzack-Schraffur oder Konfetti-Raster in Leitfarbe), damit
  ein Schnittversatz nicht auffällt. Keine einzelnen Formen in 0–7 mm.

## Familienbausteine von der Vorderseite (Pflicht, für Wiedererkennung)
- Außenrahmen als Doppellinie d 5,5 (0,6) / d 6,3 (0,3), rx 5,5 / 4,7 – identisch zur Vorderseite.
- **Eckrosette** um (11, 11) und gespiegelt: zwei Viertelbögen r 3,5 / 4,5 parallel zur Stanzrundung, dazwischen
  ein Viertelfächer – hier als **gestufter Zickzack-Fächer** (7 Segmente, Leitfarbe/Fast-Schwarz im Wechsel),
  Kern gefüllter Kreis r 0,8.
- **Achsenmedaillon** oben und unten auf x 32,5 (Kopf ca. y 8–20, Fuß gespiegelt), Strahlen zu beiden Seiten
  in die Ecken – wie vorne, aber in 80er-Formen (siehe Ansätze).
- Punktraster (Ø 0,4–0,5, Abstand ≥ 0,9) als Füllung kleiner Dreiecksfelder.

## 80er-Bausteine
- Synthesizer-Klaviatur: Blöcke 1,6–2,2 mm breit, weiß/schwarz-Rhythmus als Leitfarbe/Fast-Schwarz
- Zickzack und Blitze als harte Doppellinien (stroke-linejoin round), Memphis-Konfetti: kleine Dreiecke,
  Halbkreise, Kreisringe, kurze Zickzack-Stücke – streng geordnet und spiegelgleich, nicht zufällig gestreut
- Kassette abstrahiert: abgerundetes Rechteck mit zwei Spulen (Kreisringe mit Zahnkranz) und Fensterschlitz
- Quadratraster 2–2,5 mm als Grundstruktur

## Farbanteile (Fläche außerhalb der Freifläche)
- Leitfarbe `#009E73`: 45–55 % (Pflichtwert der Prüfung ≥ 35 %)
- Fast-Schwarz `#1A1A1A`: 20–25 % (Konturen, Doppellinien, Kerne, Tasten)
- Zwischenton dunkles Grün `#006B4E`: ca. 10 % (Schatten-Keile, Stufen der Medaillons)
- Hell `#C7EAE0` (Freiflächenton) bzw. Lichtgrün `#7FCFB5`: 10–15 % als Lichter zwischen den Ornamenten
Keine weiteren Farben, keine Neon-Töne, keine Transparenz unter 15 %.

## Ansatz A – „Tastenfächer“ (radial, nah an der Vorderseite)
Der Strahlenfächer der Vorderseite wird zur Klaviatur: Von beiden Achsenmedaillons laufen je 10–14
keilförmige Tasten in die Ecken, abwechselnd Leitfarbe und Fast-Schwarz, die schwarzen kürzer (wie
Halbtöne), dazwischen feine Linien und Punktraster in den Keilspitzen. Das Medaillon ist eine Kassettenspule
als Rosette: Kreisring mit 6 Zahnkerben in Raute gefasst (Raute 14 × 12 mm, Mitte 32,5 / 14 bzw. 83),
Kern Fast-Schwarz mit hellem Ring. Die Seitenbänder tragen eine senkrechte Zickzack-Doppellinie in Leitfarbe
auf dunklem Grund; Grund des Kopf- und Fußfelds ist Leitfarbe, die Ornamente liegen in Fast-Schwarz und
Lichtgrün darauf – flächig wie Siebdruck.

## Ansatz B – „Memphis-Raster“ (orthogonal, Kassette als Kartusche)
Kopf- und Fußfeld werden auf ein Quadratraster (2,5 mm) gesetzt, dessen Zellen streng spiegelgleich mit
Memphis-Konfetti gefüllt sind – Dreiecke, Halbkreise, Ringe, Zickzackstücke, teils voll Leitfarbe, teils
Punktraster, auf hellem Grund `#C7EAE0`. Auf der Achse liegt eine abstrahierte Kassette als Kartusche
(ca. 24 × 12 mm, rx 1,5, Kopf y 8–20, Fuß gespiegelt), deren zwei Spulen als Mini-Rosetten mit kurzen
Strahlen gezeichnet sind; von ihr laufen gestufte Blitzlinien (Doppellinie) zu den Eckrosetten. Der Rahmen
um die Freifläche wird zur Zickzack-Doppellinie, die Seitenbänder zeigen ein dichtes Diagonalraster wie
vorne, nur in Grün. Gleiche Familie, aber kantig-modern statt radial.
