# Czechster

Musik-Ratespiel mit tschechischen und slowakischen Liedern. Kein Build, kein Server — läuft auf GitHub Pages.

| Datei | Zweck |
|---|---|
| `index.html` | Spielseite: scannt die Karte und spielt das Lied, ohne den Titel zu zeigen |
| `redaktion.html` | Liest die YouTube-Music-Playlist ein, hier werden Jahr und Schreibweise gepflegt |
| `check.html` | Testet, ob jedes Video wirklich anläuft |
| `karten.html` | Erzeugt die Druckbögen |
| `songs.json` | Die Daten — wird von `redaktion.html` erzeugt, nicht von Hand geschrieben |

## Ablauf

1. **Playlist anlegen** in YouTube Music. Sie muss „öffentlich“ oder „nicht gelistet“ sein.
2. **`redaktion.html` öffnen**, Playlist-Link einfügen, „Einlesen“. Jedes Lied bekommt einen Code.
3. **Jahr eintragen und prüfen.** Gemeint ist das Jahr der Erstveröffentlichung. Das Jahr, das YouTube Music
   anzeigt, ist das Jahr des *Albums* — bei Best-of-Platten und Remasters also oft Jahrzehnte daneben.
   Verlässlich sind der Supraphon-Katalog („Rok prvního vydání“), Discogs und die Wikipedia-Diskografien.
   Erst dann „geprüft“ ankreuzen.
4. **`songs.json` herunterladen** und im Repository ersetzen (Add file → Upload files).
5. **`check.html` laufen lassen.** Gesperrte Videos in der Playlist durch eine andere Aufnahme ersetzen, zurück zu 2.
6. **`karten.html`**: druckt nur Karten mit Video, Jahr und Häkchen.

Die Jahrzehnt-Balken in der Redaktion zeigen, wo das Deck Lücken hat. Faustregel: kein Jahrzehnt unter 15 Karten,
kein einzelnes Jahr mit mehr als vier.

## Spielen

Ein Handy ist die Jukebox und wandert reihum. Auf diesem Gerät in Safari bei Google angemeldet sein — mit
YouTube Premium läuft dann keine Werbung. „Karte scannen“ antippen, Code vor die Kamera, Musik läuft.
Startet sie nicht von selbst, den Plattenteller antippen.

## Grenzen

- **Ohne Internet keine Musik.**
- **Codes nie ändern**, sobald Karten gedruckt sind. Die Redaktion behält vergebene Codes von sich aus bei.
- **Playlists über 200 Titel** liefert YouTube nicht vollständig — aufteilen und nacheinander einlesen.
- Auf dem Sperrbildschirm kann iOS den Videotitel anzeigen. Handy während der Runde entsperrt lassen oder umdrehen.
- Das Repository ist öffentlich, also auch die Lösungen in `songs.json`.
- Der Player ist verdeckt eingebettet. Für ein privates Spiel unkritisch, zum Veröffentlichen nicht gedacht.
