#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Prueft das Jahr der Erstveroeffentlichung gegen zwei unabhaengige Quellen:
MusicBrainz (frei) und Discogs (Token in der Umgebungsvariable DISCOGS_TOKEN).

Ein Jahr gilt nur als geprueft (ok = true), wenn BEIDE Quellen dasselbe Jahr liefern
und dieses Jahr nicht in beiden Quellen ausschliesslich von einer Kompilation stammt.
Alles andere bleibt ok = false und landet mit beiden Kandidaten in pruefbericht.md.

Aufruf (im Projektordner):
    python tools/jahre_pruefen.py                    songs.json pruefen
    python tools/jahre_pruefen.py --limit 5          nur die ersten 5 offenen Eintraege (Probelauf)
    python tools/jahre_pruefen.py --nur k1,k7        nur diese Codes
    python tools/jahre_pruefen.py --neu              auch bereits gepruefte Eintraege neu pruefen
    python tools/jahre_pruefen.py --kandidaten daten/kandidaten.csv
                                                     Kandidatenliste datieren -> daten/kandidaten_jahre.csv
    python tools/jahre_pruefen.py --roh "Elán" "Stužková"
                                                     Rohantwort beider Quellen fuer ein Lied zeigen (Fehlersuche)

Nur Standardbibliothek, keine Installation noetig. Antworten werden in tools/.cache
zwischengespeichert; ein abgebrochener Lauf kann einfach neu gestartet werden.
"""
import argparse, csv, hashlib, json, os, re, sys, time, unicodedata
import urllib.error, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(ROOT, "tools", ".cache")
UA = "Czechster/1.0 (privates Kartenspiel; https://github.com/fammarek/Czechster)"
PAUSE = {"musicbrainz.org": 1.1, "api.discogs.com": 1.1}   # Sekunden zwischen zwei Anfragen
_last = {}


# ---------- Hilfen ----------
def norm(s):
    """Kleinschreibung, ohne Akzente, ohne Klammerzusaetze und Satzzeichen."""
    s = unicodedata.normalize("NFKD", s or "")
    s = "".join(c for c in s if not unicodedata.combining(c)).lower()
    s = re.sub(r"[\(\[].*?[\)\]]", " ", s)
    s = re.sub(r"[^a-z0-9 ]", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def hauptinterpret(a):
    return re.split(r"\s*&\s*|\s+feat\.?\s+|\s+ft\.?\s+|\s*,\s*|\s*/\s*", a or "")[0].strip()


def jahr(s):
    m = re.match(r"(\d{4})", str(s or ""))
    y = int(m.group(1)) if m else 0
    return y if 1900 < y <= time.gmtime().tm_year else 0


def http_json(url, headers=None, cache_key=None):
    """GET mit Zwischenspeicher, Taktung pro Host und Wiederholung bei 429/503."""
    os.makedirs(CACHE, exist_ok=True)
    key = hashlib.sha1((cache_key or url).encode("utf-8")).hexdigest()
    path = os.path.join(CACHE, key + ".json")
    if os.path.exists(path):
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    host = urllib.parse.urlparse(url).netloc
    for versuch in range(5):
        warte = PAUSE.get(host, 1.0) - (time.time() - _last.get(host, 0))
        if warte > 0:
            time.sleep(warte)
        _last[host] = time.time()
        req = urllib.request.Request(url, headers=dict({"User-Agent": UA, "Accept": "application/json"}, **(headers or {})))
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                data = json.loads(r.read().decode("utf-8"))
            with open(path, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False)
            return data
        except urllib.error.HTTPError as e:
            if e.code in (429, 503):
                time.sleep(5 * (versuch + 1))
                continue
            if e.code == 401:
                raise SystemExit("Discogs lehnt das Token ab (401). DISCOGS_TOKEN pruefen.")
            raise
        except (urllib.error.URLError, TimeoutError):
            time.sleep(3 * (versuch + 1))
    raise SystemExit("Keine Antwort von " + host + " nach 5 Versuchen. Internetverbindung pruefen und neu starten.")


# ---------- MusicBrainz ----------
def mb_url(interpret, titel):
    q = 'recording:"%s" AND artist:"%s"' % (titel.replace('"', ""), hauptinterpret(interpret).replace('"', ""))
    return "https://musicbrainz.org/ws/2/recording?" + urllib.parse.urlencode({"query": q, "fmt": "json", "limit": 50})


def mb_lookup(interpret, titel):
    """-> {"jahr": int, "nur_kompilation": bool, "treffer": int}"""
    data = http_json(mb_url(interpret, titel))
    na, nt = norm(hauptinterpret(interpret)), norm(titel)
    funde = []                                   # (jahr, ist_kompilation)
    treffer = 0
    for rec in data.get("recordings", []):
        if int(rec.get("score", 0)) < 80 or norm(rec.get("title")) != nt:
            continue
        namen = " ".join(norm(c.get("name") or (c.get("artist") or {}).get("name")) for c in rec.get("artist-credit", []))
        if na not in namen:
            continue
        treffer += 1
        rels = rec.get("releases") or []
        for rel in rels:
            y = jahr(rel.get("date"))
            if not y:
                continue
            rg = rel.get("release-group") or {}
            komp = "Compilation" in (rg.get("secondary-types") or [])
            funde.append((y, komp))
        y = jahr(rec.get("first-release-date"))
        if y and not any(f[0] == y for f in funde):
            funde.append((y, False))
    if not funde:
        return {"jahr": 0, "nur_kompilation": False, "treffer": treffer}
    y = min(f[0] for f in funde)
    return {"jahr": y, "nur_kompilation": all(k for (j, k) in funde if j == y), "treffer": treffer}


# ---------- Discogs ----------
def dg_url(interpret, titel):
    return "https://api.discogs.com/database/search?" + urllib.parse.urlencode(
        {"type": "release", "artist": hauptinterpret(interpret), "track": titel, "per_page": 100})


def dg_lookup(interpret, titel, token):
    """-> {"jahr": int, "nur_kompilation": bool, "treffer": int}"""
    url = dg_url(interpret, titel)
    data = http_json(url, headers={"Authorization": "Discogs token=" + token}, cache_key=url)
    na = norm(hauptinterpret(interpret))
    funde = []
    for r in data.get("results", []):
        kopf = norm((r.get("title") or "").split(" - ")[0])       # "Interpret - Veroeffentlichung"
        if na not in kopf:
            continue
        y = jahr(r.get("year"))
        if not y:
            continue
        funde.append((y, "Compilation" in (r.get("format") or [])))
    if not funde:
        return {"jahr": 0, "nur_kompilation": False, "treffer": 0}
    y = min(f[0] for f in funde)
    return {"jahr": y, "nur_kompilation": all(k for (j, k) in funde if j == y), "treffer": len(funde)}


# ---------- Urteil ----------
def urteil(mb, dg):
    """-> (ok, jahr, begruendung). jahr ist der frueheste Kandidat, auch wenn ok False ist."""
    a, b = mb["jahr"], (dg or {}).get("jahr", 0)
    kand = min([y for y in (a, b) if y] or [0])
    if dg is None:
        return False, kand, "nur MusicBrainz abgefragt (kein DISCOGS_TOKEN)" if a else "MusicBrainz: nichts gefunden"
    if not a and not b:
        return False, 0, "in keiner Quelle gefunden"
    if not a or not b:
        return False, kand, "nur eine Quelle: MusicBrainz %s / Discogs %s" % (a or "–", b or "–")
    if a != b:
        return False, kand, "Quellen weichen ab: MusicBrainz %d / Discogs %d" % (a, b)
    if mb["nur_kompilation"] and dg["nur_kompilation"]:
        return False, kand, "beide Quellen kennen %d nur von einer Kompilation" % a
    return True, a, "MusicBrainz+Discogs"


def pruefe(interpret, titel, token):
    mb = mb_lookup(interpret, titel)
    dg = dg_lookup(interpret, titel, token) if token else None
    ok, y, grund = urteil(mb, dg)
    return {"ok": ok, "jahr": y, "grund": grund, "mb": mb["jahr"], "dg": (dg or {}).get("jahr", 0)}


def links(interpret, titel):
    q = urllib.parse.quote(hauptinterpret(interpret) + " " + titel)
    return "[Discogs](https://www.discogs.com/search/?q=%s&type=release&sort=year%%2Casc) · [MusicBrainz](https://musicbrainz.org/search?query=%s&type=recording)" % (q, q)


# ---------- Laeufe ----------
def lauf_songs(args, token):
    pfad = os.path.join(ROOT, args.songs)
    with open(pfad, encoding="utf-8") as f:
        songs = json.load(f)
    nur = [c.strip() for c in args.nur.split(",")] if args.nur else None
    offen, bestaetigt, n = [], [], 0
    codes = [c for c in songs if not c.startswith("_")]
    for c in codes:
        s = songs[c]
        if nur and c not in nur:
            continue
        if s.get("ok") and not args.neu:
            continue
        if not s.get("i") or not s.get("n"):
            offen.append((c, s.get("i", ""), s.get("n", ""), 0, "Interpret oder Titel fehlt"))
            continue
        if args.limit and n >= args.limit:
            break
        n += 1
        r = pruefe(s["i"], s["n"], token)
        print("%-5s %-28s %-34s %s  %s" % (c, s["i"][:28], s["n"][:34], r["jahr"] or "----", "OK" if r["ok"] else r["grund"]))
        if r["ok"]:
            s["j"], s["ok"], s["q"] = r["jahr"], True, r["grund"]
            bestaetigt.append(c)
        else:
            if r["jahr"] and not s.get("j"):
                s["j"] = r["jahr"]                 # Vorschlag, bleibt ungeprueft
            s["ok"] = False
            s["q"] = "ungeprüft – " + r["grund"]
            offen.append((c, s["i"], s["n"], r["jahr"], r["grund"]))
        with open(pfad, "w", encoding="utf-8") as f:   # nach jedem Lied sichern
            json.dump(songs, f, ensure_ascii=False, indent=1)
            f.write("\n")
    gepr = sum(1 for c in codes if songs[c].get("ok"))
    with open(os.path.join(ROOT, "pruefbericht.md"), "w", encoding="utf-8") as f:
        f.write("# Prüfbericht Jahre\n\n")
        f.write("Stand %s · %d Karten · %d geprüft · in diesem Lauf %d bestätigt, %d offen\n\n" % (
            time.strftime("%d.%m.%Y %H:%M"), len(codes), gepr, len(bestaetigt), len(offen)))
        if offen:
            f.write("## Offene Fälle\n\nJahr in `redaktion.html` von Hand klären. Verlässlich: Supraphonline „Rok prvního vydání“, Discogs (früheste Pressung), Wikipedia-Diskografie.\n\n")
            f.write("| Code | Interpret | Titel | Vorschlag | Grund | Nachschlagen |\n|---|---|---|---|---|---|\n")
            for c, i, t, y, g in offen:
                f.write("| %s | %s | %s | %s | %s | %s |\n" % (c, i, t, y or "–", g, links(i, t) if i and t else ""))
    print("\n%d bestätigt, %d offen. Bericht: pruefbericht.md" % (len(bestaetigt), len(offen)))


def lauf_kandidaten(args, token):
    quelle = os.path.join(ROOT, args.kandidaten)
    ziel = os.path.splitext(quelle)[0] + "_jahre.csv"
    with open(quelle, encoding="utf-8", newline="") as f:
        zeilen = list(csv.DictReader(f, delimiter=";"))
    fertig = {}
    if os.path.exists(ziel):
        with open(ziel, encoding="utf-8", newline="") as f:
            for z in csv.DictReader(f, delimiter=";"):
                fertig[(z["interpret"], z["titel"])] = z
    felder = list(zeilen[0].keys()) + ["jahr", "status", "musicbrainz", "discogs"]
    n = 0
    with open(ziel, "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=felder, delimiter=";")
        w.writeheader()
        for z in zeilen:
            alt = fertig.get((z["interpret"], z["titel"]))
            if alt and not args.neu and alt.get("status") != "noch nicht geprüft":
                w.writerow({k: alt.get(k, "") for k in felder}); continue
            if args.limit and n >= args.limit:
                w.writerow(dict(z, jahr="", status="noch nicht geprüft", musicbrainz="", discogs="")); continue
            n += 1
            r = pruefe(z["interpret"], z["titel"], token)
            print("%-28s %-34s %s  %s" % (z["interpret"][:28], z["titel"][:34], r["jahr"] or "----", "OK" if r["ok"] else r["grund"]))
            w.writerow(dict(z, jahr=r["jahr"] or "", status="geprüft" if r["ok"] else r["grund"], musicbrainz=r["mb"] or "", discogs=r["dg"] or ""))
            f.flush()
    print("\nGeschrieben:", os.path.relpath(ziel, ROOT))


def main():
    p = argparse.ArgumentParser(description="Jahr der Erstveröffentlichung gegen MusicBrainz und Discogs prüfen")
    p.add_argument("--songs", default="songs.json")
    p.add_argument("--kandidaten")
    p.add_argument("--nur")
    p.add_argument("--limit", type=int, default=0)
    p.add_argument("--neu", action="store_true")
    p.add_argument("--roh", nargs=2, metavar=("INTERPRET", "TITEL"))
    args = p.parse_args()
    token = os.environ.get("DISCOGS_TOKEN", "").strip()
    if not token:
        print("HINWEIS: DISCOGS_TOKEN ist nicht gesetzt. Es wird nur MusicBrainz abgefragt,\n"
              "         damit kann kein Jahr als geprüft gelten.\n", file=sys.stderr)
    if args.roh:
        i, t = args.roh
        print("MusicBrainz:", mb_url(i, t)); print(json.dumps(mb_lookup(i, t), ensure_ascii=False))
        if token:
            print("Discogs:", dg_url(i, t)); print(json.dumps(dg_lookup(i, t, token), ensure_ascii=False))
        print("Urteil:", pruefe(i, t, token))
        return
    if args.kandidaten:
        lauf_kandidaten(args, token)
    else:
        lauf_songs(args, token)


if __name__ == "__main__":
    main()
