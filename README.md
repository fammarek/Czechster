# Hitster CZ/SK — Jukebox

Drei Dateien, kein Build, kein Server. Läuft auf GitHub Pages.

```
index.html     Scanner + Player  (das Jukebox-Handy)
karten.html    Kartendruck       (QR vorne, Jahr hinten)
songs.json     die Daten
```

## In fünf Minuten online

1. Auf github.com → **New repository** → Name `hitster-cz` → **Public** (Pages ist bei privaten Repos kostenpflichtig).
2. **Add file → Upload files** → die drei Dateien hochladen → Commit.
3. **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, Ordner `/ (root)` → Save.
4. Nach ein bis zwei Minuten liegt die Seite auf
   `https://BENUTZERNAME.github.io/hitster-cz/`
5. Diese URL in `karten.html` oben eintragen, Bögen erzeugen, drucken.

HTTPS liefert GitHub automatisch — das ist der Grund für GitHub Pages und nicht
irgendeinen Webspace: ohne HTTPS gibt iOS keinen Kamerazugriff frei.

## Songs eintragen

In `songs.json` pro Karte eine Zeile:

```json
"a2": { "v": "dQw4w9WgXcQ", "t": 18, "j": 1985, "i": "Elán", "n": "Stužková" }
```

| Feld | Bedeutung |
|---|---|
| Schlüssel | Kurzcode, steht im QR. 2–3 Zeichen halten. |
| `v` | YouTube-Video-ID — der Teil hinter `watch?v=`. YouTube Music benutzt dieselben IDs. |
| `t` | Startsekunde. Nützlich bei langen Intros: direkt in den Refrain springen. |
| `j` `i` `n` | Jahr, Interpret, Titel. Nur für Kartenrückseite und „Auflösen". |

Jahreszahl ändern heißt neue Karte drucken — deshalb erst die Jahre prüfen,
dann drucken.

## Wie es gespielt wird

Ein Handy ist die Jukebox und wandert reihum. Das ist kein Kompromiss, sondern
Absicht:

- Nur dieses eine Gerät braucht Internet.
- Hast du YouTube Premium und bist in Safari bei Google angemeldet, sind die
  Embeds auf diesem Gerät werbefrei. Auf fremden Handys nicht.
- Der Player sitzt hinter dem Plattenteller-Kreis und ist nicht lesbar. Es gibt
  keinen Moment, in dem Interpret oder Titel aufblitzen.

Ablauf: **Karte scannen** antippen → QR vor die Kamera → Musik läuft sofort.
Nach dem Raten **Auflösen** antippen, oder einfach die Karte umdrehen.

## Was schiefgehen kann

**„Dieses Video erlaubt kein Einbetten."** Manche Labels sperren Embeds,
bei tschechischem Katalogmaterial schätzungsweise jeder fünfte bis zehnte
Titel. Die App zeigt dann einen Notfall-Link in YouTube Music (mit sichtbarem
Titel). Die richtige Lösung: eine andere Aufnahme desselben Songs suchen und
deren ID eintragen. **Teste jede ID einmal, bevor du die Karte druckst** —
einfach `…github.io/hitster-cz/#a2` im Handy aufrufen.

**Die Musik startet nicht von selbst.** iOS blockiert Ton ohne Nutzergeste. Die
App schaltet den Player beim ersten Tap auf „Karte scannen" frei, danach läuft
es meist ohne weiteres Antippen. Klappt es nicht, steht „antippen" auf dem
Plattenteller — einmal drauf, dann spielt es.

**Kein Kamerazugriff.** Safari fragt beim ersten Mal. Abgelehnt? aA-Symbol in
der Adresszeile → Website-Einstellungen → Kamera → Erlauben. Alternativ mit der
normalen iOS-Kamera-App scannen: der Link öffnet dieselbe Seite, der Kurzcode
verrät nichts.

**Offline geht nicht.** Die Seite selbst ließe sich cachen, der Ton kommt von
YouTube. Ohne Netz keine Musik.

## Zwei Hinweise zum Schluss

Das Repository ist öffentlich, also auch `songs.json`. Darin stehen nur
Video-IDs und Jahreszahlen, nichts Urheberrechtliches — aber wer die URL kennt,
kann die Lösungen nachlesen. Für den Küchentisch irrelevant.

Der verdeckte Player bewegt sich formal am Rand dessen, was die
YouTube-Einbettungsbedingungen vorsehen (der Player soll sichtbar sein). Für
ein privates Spiel ohne Reichweite ist das unkritisch, für etwas
Veröffentlichtes wäre es das nicht.
