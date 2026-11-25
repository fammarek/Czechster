# Briefing Runde 3 – `hinten_70_2`

`data-motiv="hinten_70_2"`, Leitfarbe Blau `#56B4E9`. Variante 1 (`hinten_70_1`) ist Platte/Regenbogen –
hier also keine Schallplatte, keine konzentrischen Regenbogenbögen, kein Mikrofon.

## Bildidee
Die 70er als Diskothek: Ein Licht-Leitobjekt auf der Achse wirft gerade Lichtstrahlen in die Ecken, der Rand
ist ein Facettenraster wie eine zerlegte Spiegelkugel. Kantiger und funkelnder als 70_1, aber ausschließlich
mit geraden Strahlen, Quadraten und Kreisen – Funkeln nur als flache vierstrahlige Sterne.

## Familie – aus den freigegebenen Rückseiten übernehmen (Pflicht)
Maßstab: `design/motive/hinten_80_1.svg`, `hinten_80_2.svg`, `hinten_60_1.svg`, `hinten_60_2.svg`
(Vorschau `design/studio/runde-2/vorlage.png`, `vorlage-80er.png`).
- `data-frei="8,19,49,59"` **exakt** (lichte Fläche x 8–57, y 19–78), glatt `#DAEEFA`. Nichts hineinzeichnen.
- Freiflächenrahmen: eine Linie 0,5 `#1A1A1A`, `rect x 7.4 y 18.4 w 50.2 h 60.2 rx 1.4`.
- Außenrahmen d 5,5 (0,6, rx 5,5) und d 6,3 (0,3, rx 4,7) `#1A1A1A`; Fläche dazwischen und innen Leitfarbe.
- Beschnitt und Streifen außerhalb des Außenrahmens: ruhig, `#56B4E9` mit Punktraster `#2A7DB0` r 0,25,
  Teilung 1,4 (Blau-auf-Blau) – bis zum Dateirand 0–65 / 0–97.
- Kopffeld y 6,5–18,1, Fußfeld gespiegelt y 78,9–90,5. Leitobjekt Kopf ca. y 7,2–17,8, mittig x 32,5,
  Breite höchstens x 19–46, damit links/rechts Platz für Rosette und Zwickelornamente bleibt.
- Eckrosette um (11 / 11), Viertelbögen r 3,6 / 4,5 parallel zur Stanzrundung (Mittelpunkt 8 / 8).
- Nur linkes oberes Viertel zeichnen, dreimal spiegeln; Leitobjekt selbst symmetrisch zur Achse x 32,5,
  für den Fuß an y 48,5 gespiegelt.
- Seitenbänder x 3,6–5,4 (rechts 59,6–61,4), y 20–77: **durchlaufende Kette ohne Einzelformen**, Abstand zur
  Schnittkante (x 3 / 62) ≥ 0,6 mm. Keine Raute, kein Medaillon im Band (in Runde 2 zweimal nachgebessert).
- Flimmer-Regel: Wiederholmuster am Rand Periode ≥ 2 mm oder Ton-in-Ton; Punkte Ø ≥ 0,4, Teilung ≥ 1,0;
  Linien ≥ 0,3; `stroke-linejoin="round"`.
- Rot-Grün / Graubild: Leitobjekt mit hellen Flächen (`#A6D8F4` / `#DAEEFA`) auf kräftigem Grund und
  schwarzer Kontur – muss im Graubild als Objekt erkennbar bleiben. Blau ist für Rot-Grün-Schwache stabil
  und hebt sich gut vom Ocker der Vorderseite ab; trotzdem Hell-Dunkel-Kontrast im Objekt halten.

## Verboten (Besitzer, absolut)
Keine gezackten Linien, keine eckigen Knickformen in Strichen, keine Ziffern, Buchstaben, Symbole, Figuren.
Alle Wellen, Bögen und Strahlen sind **rund oder gerade**. Zwickel mit Dreiecken füllen, nicht mit Knicklinien.
Nach dem Zeichnen jede kleine Form einzeln prüfen: Liest sie sich als Buchstabe, Zeichen oder Symbol → ersetzen
durch Punkt, Kreis, Raute oder gefülltes Dreieck.

## Farben (Zwischentöne)
`#56B4E9` Leitfarbe, `#2A7DB0` dunkles Blau, `#A6D8F4` helles Blau, `#DAEEFA` Freifläche/Licht, `#1A1A1A`.

## Bausteine und Lagen (für beide Ansätze)
- **Leitobjekt** auf der Achse im Kopffeld (y 7,2–17,8, x 21–44), Fuß gespiegelt – siehe Ansatz A / B.
- **Lichtstrahlen** vom Leitobjekt in Richtung Ecken: gerade Keile (Öffnung 3–5°) im Wechsel `#A6D8F4` und
  `#2A7DB0`, getrennt durch Linien 0,3 `#1A1A1A`, auf das Kopffeld geclippt. Strahlen enden an der Eckrosette.
- **Funkelsterne:** flacher vierstrahliger Stern (Rautenstern, Spannweite 1,6–2,2, Strahlen als schmale
  gefüllte Rauten, `#DAEEFA` mit Kontur 0,3), höchstens drei je Viertel, auf Strahlenenden. Keine Glanzeffekte,
  keine Verläufe.
- **Eckrosette Facette** um (11 / 11): Viertelbögen r 3,6 / 4,5 (0,4 `#1A1A1A`), dazwischen Ring aus kleinen
  Quadraten (Facetten 0,8, Ton in Ton `#2A7DB0` / `#56B4E9`), Kern r 1,3 als Mini-Spiegelkugel (Gitter aus zwei
  Breiten- und zwei Längslinien, Zellen `#DAEEFA` / `#A6D8F4`).
- **Zwickel** (x 14–20, y 8–17): Schachbrett-Dreiecke aus Facetten 0,9 mm, Ton in Ton, ein Funkelstern.
- **Abschlussband** zur Freifläche, y 16,4–18,0: Reihe aus Quadraten 1,0 über Eck (Rauten, Teilung 2,0),
  abwechselnd `#DAEEFA` gefüllt und Fast-Schwarz – wie Lampen einer Lichtleiste.
- **Seitenbänder** x 3,6–5,4, y 20–77: Facettenband, zwei Spalten Quadrate 0,9 im Schachbrett `#2A7DB0` /
  `#56B4E9` (Ton in Ton, flimmerfrei), innen begleitet von einer durchlaufenden Linie 0,35 `#1A1A1A`.
  Keine Einzelform.

## Farbanteile (außerhalb der Freifläche)
- Leitfarbe `#56B4E9`: 45–55 %
- Fast-Schwarz `#1A1A1A`: 18–22 % (Konturen, Strahltrenner)
- Zwischentöne `#2A7DB0` 12–15 %, Lichter `#A6D8F4`/`#DAEEFA` 12–18 % (Strahlen, Leitobjekt)

## Freiflächen-Rechteck
`data-frei="8,19,49,59"` (x 8–57, y 19–78), glatt `#DAEEFA`.

## Ansatz A – „Spiegelkugel“ (radial, Strahlenkranz)
Leitobjekt: **Discokugel** r 5,0 um (32,5 / 13,0), an kurzer Aufhängung (Linie 0,4 von y 7,2 bis 8,0, Öse
r 0,4). Facettenraster als Kugelgitter: Breitenlinien als flache Ellipsenbögen, Längslinien als Ellipsen
(0,3 `#1A1A1A`); Zellen im Wechsel `#DAEEFA` / `#A6D8F4` / `#56B4E9`, oben links und rechts symmetrisch je
eine `#DAEEFA`-Zellgruppe als Licht (flach, kein Glanzpunkt). Kontur 0,6. Ringsum ein voller Strahlenkranz
(12–16 Strahlen je Seite, Fluchtpunkt Kugelmitte) – Nähe zur Strahlenarchitektur der Vorderseite, festlich.

## Ansatz B – „Bühnenscheinwerfer“ (Kegel, gebündeltes Licht)
Leitobjekt: **Stufenlinsen-Scheinwerfer frontal mit Torklappen.** Gehäuse x 27–38, y 8,0–17,0, rx 1,2,
`#2A7DB0`, Kontur 0,6. Linse r 3,8 um (32,5 / 12,5) als Stufenlinse: konzentrische Stufen im Wechsel
`#DAEEFA` / `#A6D8F4` (hell, damit es leuchtet, nicht als dunkle Membran – Abgrenzung zu den 80er-Boxen).
Vier Torklappen als Trapeze: links/rechts x 23,5–27 bzw. 38–41,5 (nach außen breiter), oben/unten flach
(0,8 hoch), `#56B4E9` mit Kontur 0,4 und je zwei Scharnierpunkten. Dahinter Haltebügel als U-Bogen
(Doppellinie). Statt Strahlenkranz zwei breite Lichtkegel nach links und rechts, aufgeteilt in 4–5 Lamellen
`#A6D8F4` / `#DAEEFA`, dazwischen dunkle Kegel mit Punktraster. Wirkung: Bühne, Konzert, klar anders als A.

## Prüfung
`node .claude/skills/kartendesign-studio/scripts/render.js <datei.svg> --pruefen --text "1978|Helena Beispielová & Orchestr Ukázka|Dlouhý ukázkový název písně"`
– Freifläche glatt, Leitfarbe ≥ 45 %, Symmetrie ≤ 0,2, keine Linie < 0,3. Vorschau neben
`design/studio/runde-2/vorlage.png` legen: Familie erkennbar? Leitobjekt im Graubild erkennbar? Jede kleine Form
auf Buchstaben-/Zeichen-Anmutung prüfen.
