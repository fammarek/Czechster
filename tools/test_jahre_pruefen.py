#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Selbsttest ohne Internet: prueft die Entscheidungslogik mit nachgebauten Antworten.
Aufruf: python tools/test_jahre_pruefen.py"""
import json, os, shutil, sys, tempfile
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import jahre_pruefen as J

def mb(*recs): return {"recordings": list(recs)}
def rec(title, artist, first, rels=(), score=100):
    return {"score": score, "title": title, "first-release-date": first, "artist-credit": [{"name": artist}],
            "releases": [{"date": d, "release-group": {"secondary-types": (["Compilation"] if k else [])}} for d, k in rels]}
def dg(*res): return {"results": [{"title": t, "year": y, "format": f} for t, y, f in res]}

FIX = {
 ("Elán", "Stužková"): (mb(rec("Stužková", "Elán", "1985", [("1985", False), ("1999-05", True)])),
                        dg(("Elán - Hodina slovenčiny", "1985", ["Vinyl", "LP"]), ("Elán - Best Of", "1999", ["CD", "Compilation"]))),
 ("Katapult", "Až"): (mb(rec("Až", "Katapult", "1980", [("1980", False)])),
                      dg(("Katapult - Až / Stovky hotelů", "1979", ["Vinyl", "7\""]))),
 ("Naďa Urbánková", "Závidím"): (mb(rec("Závidím", "Naďa Urbánková", "1998", [("1998", True)])),
                                 dg(("Naďa Urbánková - Zlatá kolekce", "1998", ["CD", "Compilation"]))),
 ("Citron", "Radegast"): (mb(), dg(("Citron - Radegast", "1987", ["Vinyl", "LP", "Album"]))),
 ("Niemand", "Nichts"): (mb(), dg()),
 ("Lucie & Wanastowi Vjecy", "Amerika (Live)"): (mb(rec("Amerika", "Lucie", "1994-03-01", [("1994", False)]), rec("Amerika", "Jiná Kapela", "1971", [("1971", False)])),
                                                dg(("Lucie - Černý kočky mokrý žáby", "1994", ["CD", "Album"]), ("Various - Hity 90", "1990", ["CD", "Compilation"]))),
}
def fake(url, headers=None, cache_key=None):
    for (i, t), (m, d) in FIX.items():
        if url == J.mb_url(i, t): return m
        if url == J.dg_url(i, t): return d
    raise AssertionError("unerwartete Anfrage: " + url)
J.http_json = fake

fehler = 0
def check(name, cond, extra=""):
    global fehler
    print(("PASS " if cond else "FAIL ") + name + ("  -> " + str(extra) if extra else ""))
    if not cond: fehler += 1

r = J.pruefe("Elán", "Stužková", "x");            check("beide Quellen gleich -> geprueft 1985", r["ok"] and r["jahr"] == 1985, r)
r = J.pruefe("Katapult", "Až", "x");              check("Abweichung -> aelteres Jahr gilt als geprueft", r["ok"] and r["jahr"] == 1979 and "älteres Jahr" in r["grund"], r)
r = J.pruefe("Naďa Urbánková", "Závidím", "x");   check("nur Kompilationen -> offen", not r["ok"] and "Kompilation" in r["grund"], r)
r = J.pruefe("Citron", "Radegast", "x");          check("nur eine Quelle -> offen", not r["ok"] and r["jahr"] == 1987 and "nur eine Quelle" in r["grund"], r)
r = J.pruefe("Niemand", "Nichts", "x");           check("nichts gefunden -> offen ohne Jahr", not r["ok"] and r["jahr"] == 0, r)
r = J.pruefe("Lucie & Wanastowi Vjecy", "Amerika (Live)", "x")
check("fremder Interpret und Sampler werden ignoriert, Klammerzusatz egal", r["ok"] and r["jahr"] == 1994, r)
r = J.pruefe("Elán", "Stužková", "");             check("ohne Token nie geprueft", not r["ok"] and r["jahr"] == 1985, r)
check("Akzente und Schreibweise", J.norm("Šrouby a matice (Remaster 2010)") == "srouby a matice")
check("Zukunftsjahr und Unsinn verworfen", J.jahr("2999") == 0 and J.jahr("") == 0 and J.jahr("1985-06-01") == 1985)

# Lauf ueber eine songs.json: gepruefte bleiben unberuehrt, Codes und Video-IDs bleiben erhalten
tmp = tempfile.mkdtemp(); J.ROOT = tmp
songs = {"_hinweis": "x",
         "k1": {"v": "AAAAAAAAAAA", "t": 12, "j": 0, "i": "Elán", "n": "Stužková", "ok": False, "q": ""},
         "k2": {"v": "BBBBBBBBBBB", "t": 0, "j": 0, "i": "Katapult", "n": "Až", "ok": False, "q": ""},
         "k3": {"v": "CCCCCCCCCCC", "t": 0, "j": 1966, "i": "Niemand", "n": "Nichts", "ok": True, "q": "Supraphon"},
         "k4": {"v": "", "t": 0, "j": 0, "i": "", "n": "", "ok": False, "q": ""}}
json.dump(songs, open(os.path.join(tmp, "songs.json"), "w", encoding="utf-8"), ensure_ascii=False)
class A: songs = "songs.json"; nur = None; limit = 0; neu = False
J.lauf_songs(A, "x")
out = json.load(open(os.path.join(tmp, "songs.json"), encoding="utf-8"))
check("songs.json: bestaetigt", out["k1"] == {"v": "AAAAAAAAAAA", "t": 12, "j": 1985, "i": "Elán", "n": "Stužková", "ok": True, "q": "MusicBrainz+Discogs"}, out["k1"])
check("songs.json: Abweichung -> aelteres Jahr, geprueft, Quelle nennt beide", out["k2"]["j"] == 1979 and out["k2"]["ok"] is True and "1980" in out["k2"]["q"] and out["k2"]["v"] == "BBBBBBBBBBB", out["k2"])
check("songs.json: bereits geprueftes bleibt unberuehrt", out["k3"] == songs["k3"])
check("songs.json: Reihenfolge und Hinweis erhalten", list(out) == list(songs))
rep = open(os.path.join(tmp, "pruefbericht.md"), encoding="utf-8").read()
check("Bericht nennt offene Faelle", "| k2 |" not in rep and "| k4 |" in rep and "| k1 |" not in rep)
shutil.rmtree(tmp)
print("\n%s" % ("ALLE BESTANDEN" if not fehler else "%d FEHLGESCHLAGEN" % fehler))
sys.exit(1 if fehler else 0)
