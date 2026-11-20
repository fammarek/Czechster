#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Sucht zu jedem datierten Kandidaten das YouTube-Video (offizielle YouTube Data API v3).

Der API-Schluessel kommt aus der Umgebungsvariable YT_API_KEY und wird als Header
X-Goog-Api-Key gesendet. Er gehoert in keine Datei.

Google erlaubt pro Tag 10.000 Einheiten, eine Suche kostet 100 -> rund 100 Lieder pro Tag.
Das Skript arbeitet die wichtigsten Lieder zuerst ab und setzt am naechsten Tag dort fort,
wo es aufgehoert hat. Ergebnis: daten/kandidaten_videos.csv

Aufruf (im Projektordner):
    python tools/videos_suchen.py                 weitersuchen, bis das Tageskontingent aufgebraucht ist
    python tools/videos_suchen.py --limit 3       nur 3 Suchen (Probelauf)
    python tools/videos_suchen.py --zusatz "Jiří Schelinger;Jsem prý blázen jen"
                                                  Lied, das nicht in der Kandidatenliste steht, mit aufnehmen

Auswahl des Treffers: bevorzugt die automatisch erzeugten "Interpret - Topic"-Kanaele
(das sind die Studiofassungen aus YouTube Music), sonst einen Treffer, dessen Titel den
Liedtitel und dessen Titel oder Kanal den Interpreten enthaelt. Live-, Cover- und
Karaoke-Fassungen werden abgewertet. Jeder Treffer muss trotzdem angehoert werden.
"""
import argparse, csv, json, os, re, sys, unicodedata
import urllib.error, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QUELLE = os.path.join(ROOT, "daten", "kandidaten_jahre.csv")
ZIEL = os.path.join(ROOT, "daten", "kandidaten_videos.csv")
FELDER = ["interpret", "titel", "jahr", "status", "tage_titel", "video", "video_titel", "kanal", "bewertung"]
SCHLECHT = ["live", "koncert", "concert", "cover", "karaoke", "remix", "instrumental", "lyrics", "text", "reakce", "reaction"]


def norm(s):
    s = unicodedata.normalize("NFKD", s or "")
    s = "".join(c for c in s if not unicodedata.combining(c)).lower()
    s = re.sub(r"[\(\[].*?[\)\]]", " ", s)
    s = re.sub(r"[^a-z0-9 ]", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def hauptinterpret(a):
    return re.split(r"\s*&\s*|\s+feat\.?\s+|\s+ft\.?\s+|\s*,\s*|\s*/\s*", a or "")[0].strip()


def suche(interpret, titel, key):
    url = "https://www.googleapis.com/youtube/v3/search?" + urllib.parse.urlencode({
        "part": "snippet", "type": "video", "maxResults": 10, "regionCode": "CZ",
        "q": "%s %s" % (hauptinterpret(interpret), titel)})
    req = urllib.request.Request(url, headers={"X-Goog-Api-Key": key, "Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return json.loads(r.read().decode("utf-8")).get("items", [])
    except urllib.error.HTTPError as e:
        text = e.read().decode("utf-8", "replace")
        if e.code == 403 and "quota" in text.lower():
            return None                                      # Tageskontingent aufgebraucht
        if e.code in (400, 403):
            raise SystemExit("YouTube lehnt den Schluessel ab (%d). YT_API_KEY und Freischaltung der "
                             "YouTube Data API v3 pruefen.\n%s" % (e.code, text[:300]))
        raise


def bewerte(item, interpret, titel):
    sn = item.get("snippet", {})
    vt, kanal = norm(sn.get("title")), norm(sn.get("channelTitle"))
    na, nt = norm(hauptinterpret(interpret)), norm(titel)
    p = 0
    if nt and nt in vt:
        p += 4
    if na and (na in vt or na in kanal):
        p += 3
    if kanal.endswith(" topic"):
        p += 3
    if any(w in vt.split() for w in SCHLECHT) and not any(w in nt.split() for w in SCHLECHT):
        p -= 5
    return p


def waehle(items, interpret, titel):
    besten = sorted(((bewerte(it, interpret, titel), n, it) for n, it in enumerate(items)), key=lambda x: (-x[0], x[1]))
    if not besten:
        return None, 0
    p, _, it = besten[0]
    return it, p


def main():
    ap = argparse.ArgumentParser(description="YouTube-Videos zu den datierten Kandidaten suchen")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--zusatz", action="append", default=[], metavar="INTERPRET;TITEL")
    args = ap.parse_args()
    key = os.environ.get("YT_API_KEY", "").strip()
    if not key:
        raise SystemExit("YT_API_KEY ist nicht gesetzt.")

    with open(QUELLE, encoding="utf-8", newline="") as f:
        kand = [z for z in csv.DictReader(f, delimiter=";") if z["status"] == "geprüft"]
    # wichtigste zuerst: oft gespielt, dann aelter (aeltere Jahrzehnte sind knapper)
    kand.sort(key=lambda z: (-int(z["tage_titel"] or 0), int(z["jahr"] or 9999)))
    zusatz = []
    for s in args.zusatz:
        i, t = (s.split(";", 1) + [""])[:2]
        zusatz.append({"interpret": i.strip(), "titel": t.strip(), "jahr": "", "status": "Zusatz – Jahr noch prüfen", "tage_titel": ""})

    fertig = {}
    if os.path.exists(ZIEL):
        with open(ZIEL, encoding="utf-8", newline="") as f:
            for z in csv.DictReader(f, delimiter=";"):
                fertig[(z["interpret"], z["titel"])] = z
    for z in zusatz:                                          # Zusaetze bleiben erhalten
        fertig.setdefault((z["interpret"], z["titel"]), dict(z, video="", video_titel="", kanal="", bewertung=""))
    reihe = zusatz + kand + [z for k, z in fertig.items() if z.get("status", "").startswith("Zusatz")]
    gesehen, liste = set(), []
    for z in reihe:
        k = (z["interpret"], z["titel"])
        if k not in gesehen:
            gesehen.add(k); liste.append(z)

    n, voll = 0, False
    zeilen = []
    for z in liste:
        alt = fertig.get((z["interpret"], z["titel"]))
        if alt and alt.get("video"):
            zeilen.append({k: alt.get(k, "") for k in FELDER}); continue
        if voll or (args.limit and n >= args.limit):
            zeilen.append({k: z.get(k, "") for k in FELDER}); continue
        items = suche(z["interpret"], z["titel"], key)
        if items is None:
            print("Tageskontingent aufgebraucht – morgen erneut starten.")
            voll = True
            zeilen.append({k: z.get(k, "") for k in FELDER}); continue
        n += 1
        it, p = waehle(items, z["interpret"], z["titel"])
        row = {k: z.get(k, "") for k in FELDER}
        if it:
            sn = it["snippet"]
            row.update(video=it["id"]["videoId"], video_titel=sn.get("title", ""), kanal=sn.get("channelTitle", ""),
                       bewertung="gut" if p >= 7 else "unsicher")
        else:
            row.update(bewertung="nichts gefunden")
        print("%-26s %-30s %-11s %-8s %s" % (z["interpret"][:26], z["titel"][:30], row["video"] or "-", row["bewertung"], row["kanal"][:30]))
        zeilen.append(row)

    with open(ZIEL, "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=FELDER, delimiter=";")
        w.writeheader(); w.writerows(zeilen)
    mit = sum(1 for z in zeilen if z.get("video"))
    print("\n%d gesucht in diesem Lauf · %d von %d mit Video · %s" % (n, mit, len(zeilen), os.path.relpath(ZIEL, ROOT)))


if __name__ == "__main__":
    main()
