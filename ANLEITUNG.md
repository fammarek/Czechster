# Czechster mit Claude Code aufsetzen

Am Ende dieser Anleitung liegt das Projekt auf deinem Rechner, Claude Code kennt die Regeln,
und die Jahresprüfung läuft automatisch gegen zwei Musikdatenbanken.

Zeitbedarf für die Einrichtung: etwa 30 Minuten. Die Befehle sind für **Windows (PowerShell)** und
**Mac** angegeben.

---

## Was du brauchst

| | Wofür | Woher |
|---|---|---|
| Claude-Abo (Pro, Max, Team oder Enterprise) | Anmeldung in Claude Code | hast du vermutlich schon |
| Git | Repository holen und veröffentlichen | https://git-scm.com/downloads |
| Python 3 | Prüfskript ausführen | https://www.python.org/downloads/ |
| Discogs-Konto (kostenlos) | zweite Quelle für die Jahre | https://www.discogs.com |
| Dieses Paket | App, Skript, Daten | `czechster-paket.zip` |

Unter Windows bei der Python-Installation das Häkchen **„Add python.exe to PATH“** setzen.

---

## Schritt 1 — Claude Code installieren

**Windows**, in PowerShell:

```powershell
irm https://claude.ai/install.ps1 | iex
```

**Mac**, im Terminal:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Danach ein **neues** Terminalfenster öffnen und prüfen:

```
claude --version
```

Es erscheint eine Versionsnummer. Wenn `claude` nicht gefunden wird, hilft die Seite
https://code.claude.com/docs/en/troubleshoot-install weiter.

## Schritt 2 — Repository auf den Rechner holen

```
cd Documents
git clone https://github.com/fammarek/Czechster.git
cd Czechster
```

Es entsteht der Ordner `Documents/Czechster` mit den vier Dateien, die du schon hochgeladen hast.

## Schritt 3 — Paket einspielen

`czechster-paket.zip` entpacken und **den Inhalt** des Ordners `czechster-paket` in `Documents/Czechster`
kopieren. Vorhandene Dateien überschreiben. Danach sieht der Ordner so aus:

```
Czechster/
  ANLEITUNG.md   CLAUDE.md   README.md   .gitignore
  index.html   redaktion.html   check.html   karten.html   songs.json
  tools/   jahre_pruefen.py   test_jahre_pruefen.py
  daten/   interpretenliste.md   kandidaten.csv   jahre_startwerte.csv   zlaty_slavik_1962-1991.csv
```

## Schritt 4 — Discogs-Token besorgen

1. Auf discogs.com anmelden.
2. Oben rechts auf dein Profilbild → **Settings** → **Developers**.
3. **Generate new token** anklicken und die Zeichenfolge kopieren.

Das Token für das aktuelle Terminalfenster setzen (gilt, bis du das Fenster schließt):

**Windows:**
```powershell
$env:DISCOGS_TOKEN = "HIER_DEIN_TOKEN"
```

**Mac:**
```bash
export DISCOGS_TOKEN="HIER_DEIN_TOKEN"
```

Das Token gehört in keine Datei und nicht ins Repository — das ist öffentlich.

## Schritt 5 — Claude Code starten

Im selben Terminalfenster, im Ordner `Czechster`:

```
claude
```

Beim ersten Start fragt Claude Code nach der Anmeldung; dem Dialog im Browser folgen.
Claude Code liest `CLAUDE.md` von selbst — darin stehen Aufbau und Regeln des Projekts.

## Schritt 6 — Einrichtung prüfen lassen

Diesen Auftrag in Claude Code einfügen:

```
Lies CLAUDE.md und ANLEITUNG.md. Prüfe, ob Python 3 und git funktionieren, und führe den
Selbsttest tools/test_jahre_pruefen.py aus. Prüfe dann mit
"jahre_pruefen.py --roh" drei Lieder aus daten/jahre_startwerte.csv gegen die echten
Schnittstellen und vergleiche das Ergebnis mit dem dort eingetragenen Jahr. Wenn die
Antwortstruktur von MusicBrainz oder Discogs nicht zum Skript passt, korrigiere das Skript
und den Selbsttest. Berichte mir kurz, was funktioniert und was nicht.
```

**Dieser Schritt ist wichtig:** Das Prüfskript ist bisher nur gegen nachgebaute Antworten getestet,
nicht gegen die echten Datenbanken. Hier zeigt sich, ob es auf Anhieb stimmt.

Wenn alles läuft:

```
Committe alle neuen Dateien und pushe sie auf main.
```

Beim ersten Push fragt Git nach deiner GitHub-Anmeldung (es öffnet sich ein Browserfenster).
Nach ein bis zwei Minuten ist die neue App online.

## Schritt 7 — Kandidaten vorab datieren (empfohlen)

Bevor du die Playlist baust, kann Claude Code für alle 405 Kandidaten das Jahr ermitteln.
Dann weißt du schon bei der Auswahl, welche Jahrzehnte dünn besetzt sind.

```
Führe tools/jahre_pruefen.py --kandidaten daten/kandidaten.csv aus (dauert etwa 15 Minuten).
Werte danach daten/kandidaten_jahre.csv aus: Wie viele Lieder sind geprüft, wie verteilen sie
sich auf die Jahrzehnte, und welche Jahrzehnte liegen unter der Zielverteilung aus
daten/interpretenliste.md? Schlage für dünne Jahrzehnte Lieder aus der Kandidatenliste vor.
```

## Schritt 8 — Playlist bauen und einlesen

1. In YouTube Music eine Playlist anlegen, Sichtbarkeit **„nicht gelistet“** oder „öffentlich“.
2. `daten/interpretenliste.md` durchgehen: Interpret suchen, Lieder in die Playlist legen.
   Ziel sind 120 bis 150 Lieder. Bei mehr als 200 eine zweite Playlist anlegen.
3. `https://fammarek.github.io/Czechster/redaktion.html` öffnen, Playlist-Link einfügen, **Einlesen**.
4. **songs.json herunterladen** und in den Ordner `Documents/Czechster` legen (alte Datei ersetzen).

## Schritt 9 — Jahre prüfen lassen

```
Die songs.json ist neu. Bereinige zuerst Interpret und Titel, wo YouTube sie unsauber
geliefert hat (z. B. "Official Video" im Titel, Kanalname statt Interpret) — ohne Codes
oder Video-IDs anzufassen. Führe dann tools/jahre_pruefen.py mit --limit 5 als Probelauf
aus, zeig mir das Ergebnis, und lass danach den vollen Lauf folgen. Fasse am Ende
pruefbericht.md zusammen: wie viele geprüft, wie viele offen, Verteilung nach Jahrzehnt.
```

## Schritt 10 — Offene Fälle klären

Was die beiden Datenbanken nicht übereinstimmend liefern, steht in `pruefbericht.md`.
Zwei Wege, auch kombinierbar:

**Claude Code recherchiert:**

```
Kläre die offenen Fälle aus pruefbericht.md einzeln per Websuche. Zulässige Quellen:
Supraphonline ("Rok prvního vydání"), Discogs-Seite der frühesten Pressung, tschechische
oder slowakische Wikipedia-Diskografie, offizielle Bandseite. Setze ok nur auf true, wenn
du die Quelle im Feld q mit Adresse nennst. Was sich nicht belegen lässt, bleibt offen —
liste es mir am Ende auf.
```

**Du selbst:** in `redaktion.html` das Jahr eintragen, Quelle notieren, „geprüft“ ankreuzen.

## Schritt 11 — Veröffentlichen, testen, drucken

```
Committe songs.json und pushe auf main.
```

Dann im Browser:

1. `…/Czechster/check.html` → **Test starten**. Gesperrte Videos in der Playlist durch eine andere
   Aufnahme ersetzen und Schritt 8 wiederholen (vorhandene Karten bleiben erhalten).
2. `…/Czechster/karten.html` → **Bögen erzeugen**. Erst ein Blatt zur Probe drucken.

---

## Wenn etwas hakt

| Meldung | Ursache und Lösung |
|---|---|
| `claude` wird nicht gefunden | Neues Terminalfenster öffnen; sonst siehe Link in Schritt 1 |
| `python` wird nicht gefunden | `python3` oder `py` versuchen; sonst Python neu installieren, mit PATH-Häkchen |
| „DISCOGS_TOKEN ist nicht gesetzt“ | Schritt 4 im selben Terminalfenster wiederholen, dann `claude` neu starten |
| „Discogs lehnt das Token ab (401)“ | Token falsch kopiert oder widerrufen — neu erzeugen |
| Fast alles landet im Prüfbericht | Schritt 6 wiederholen; wahrscheinlich passt die Antwortstruktur einer Quelle nicht |
| Push wird abgelehnt | In Claude Code: „Hole zuerst die Änderungen von GitHub (pull) und pushe dann erneut“ |
| „Playlist nicht lesbar“ in der Redaktion | Playlist ist privat — auf „nicht gelistet“ stellen |

Bei allem anderen: die Fehlermeldung in Claude Code einfügen und fragen, was zu tun ist.

## Womit du rechnen solltest

- **Ein Teil bleibt Handarbeit.** Bei älterem tschechischem und slowakischem Material fehlt in den
  Datenbanken oft die Originalsingle. Wie groß der Rest ist, zeigt erst der echte Lauf.
- **Neuaufnahmen sind die häufigste Falle.** Viele Interpreten haben ihre Hits später neu eingespielt,
  und YouTube Music führt oft diese Fassung. Für die Karte zählt das Jahr des Originals — das ist das,
  was die Mitspieler im Kopf haben.
- **Die Kandidatenliste zeigt, was heute im Radio läuft.** Große Lieder von früher, die aus der Rotation
  gefallen sind, fehlen. Dein eigenes Urteil ergänzt die Liste.
