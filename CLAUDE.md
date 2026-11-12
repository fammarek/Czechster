# Czechster

Privates Musik-Ratespiel (Hitster-Prinzip) mit tschechischer und slowakischer Musik.
Karte scannen → Lied läuft ohne sichtbaren Titel → Mitspieler ordnen es nach Jahr ein.
Gehostet auf GitHub Pages: https://fammarek.github.io/Czechster/

Der Besitzer spricht Deutsch. Antworte auf Deutsch, knapp, und stelle Rückfragen einzeln.

## Aufbau

| Pfad | Zweck |
|---|---|
| `index.html` | Spielseite (Scanner + verdeckter YouTube-Player) |
| `redaktion.html` | Liest die YouTube-Music-Playlist ein, pflegt Jahr/Schreibweise, erzeugt `songs.json` |
| `check.html` | Testet, ob jedes Video wirklich anläuft |
| `karten.html` | Druckbögen; druckt nur Karten mit `ok: true` |
| `songs.json` | Die Karten. Schlüssel = Code im QR. Felder: `v` Video-ID, `t` Startsekunde, `j` Jahr, `i` Interpret, `n` Titel, `ok` Jahr geprüft, `q` Quelle |
| `tools/jahre_pruefen.py` | Prüft Jahre gegen MusicBrainz + Discogs |
| `tools/test_jahre_pruefen.py` | Selbsttest ohne Internet |
| `daten/kandidaten.csv` | 405 Liedkandidaten aus Radio-Airplay (8 Sender, 21 Sendertage, Nov. 2026) plus Klassiker |
| `daten/interpretenliste.md` | Dieselben Kandidaten als Abhakliste für den Menschen |
| `daten/jahre_startwerte.csv` | 29 Jahre, die bereits von Hand gegen Quellen geprüft wurden |
| `daten/zlaty_slavik_1962-1991.csv` | Sieger der Publikumswahl, als Maß für historische Bedeutung |

Kein Build, keine Abhängigkeiten. HTML-Seiten sind eigenständig; Python nutzt nur die Standardbibliothek.

## Regeln, die nicht verhandelbar sind

1. **Kein Jahr aus dem Gedächtnis.** Ein früherer Versuch, Jahre aus dem Modellwissen einzutragen, lag bei
   5 von 6 Stichproben falsch, teils um ein Jahrzehnt. Jedes Jahr braucht eine nachlesbare Quelle im Feld `q`.
2. **`ok: true` nur, wenn zwei Quellen ein Jahr liefern** (oder eine Primärquelle wie der Supraphon-Katalog,
   „Rok prvního vydání“). Stimmen sie überein, gilt dieses Jahr. Weichen sie ab, gilt automatisch das
   **ältere** (Entscheidung des Besitzers, Nov. 2026; bei den Startwerten in 4 von 5 Fällen richtig, sonst
   ein Jahr daneben); `q` nennt dann beide Jahre. Nur eine oder keine Quelle: `ok: false` lassen und in
   `pruefbericht.md` aufführen.
3. **Gemeint ist das Jahr der Erstveröffentlichung dieser Aufnahme** — nicht das Album-, Best-of- oder
   Remaster-Jahr, und bei Coverversionen nicht das Jahr des Originals.
4. **Codes und Video-IDs in `songs.json` nie ändern oder neu vergeben.** Gedruckte Karten hängen daran.
5. **Einträge mit `ok: true` nicht überschreiben**, außer der Besitzer verlangt es ausdrücklich.
6. **`DISCOGS_TOKEN` nie in eine Datei schreiben oder committen.** Es kommt nur aus der Umgebungsvariable.
7. Titel und Interpret in `daten/kandidaten.csv` stehen teils ohne Akzente (aus Sendeprotokollen abgetippt).
   Die korrekte Schreibweise kommt später aus YouTube bzw. den Datenbanken — nicht raten.

## Befehle

```
python tools/test_jahre_pruefen.py                     Selbsttest, muss „ALLE BESTANDEN“ melden
python tools/jahre_pruefen.py --roh "Elán" "Stužková"  Rohantwort beider Quellen für ein Lied
python tools/jahre_pruefen.py --limit 5                Probelauf über songs.json
python tools/jahre_pruefen.py                          alle offenen Karten prüfen
python tools/jahre_pruefen.py --kandidaten daten/kandidaten.csv   Kandidaten datieren
```

Auf manchen Systemen heißt der Befehl `python3` oder `py`.

## Bekannte Unsicherheit

`tools/jahre_pruefen.py` wurde nur gegen nachgebaute Antworten getestet, nie gegen die echten Schnittstellen.
Beim ersten echten Lauf deshalb mit `--roh` und `--limit 5` beginnen und die Ergebnisse gegen
`daten/jahre_startwerte.csv` halten. Passt die Antwortstruktur von MusicBrainz oder Discogs nicht zum Code,
das Skript korrigieren und den Selbsttest anpassen — nicht die Regeln oben aufweichen.

Zu erwarten: Bei älterem Supraphon- und Opus-Material fehlt in MusicBrainz oft die Originalsingle. Dann liefert
es ein zu spätes Jahr, und der Fall landet zu Recht im Prüfbericht.

## Veröffentlichen

`git add`, `git commit`, `git push` auf `main` — GitHub Pages aktualisiert sich nach ein bis zwei Minuten.
`tools/.cache/` und `pruefbericht.md` werden nicht eingecheckt.
