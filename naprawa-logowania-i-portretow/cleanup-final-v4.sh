#!/bin/bash
# ============================================================
# CLEANUP v4 - zweryfikowany na AKTUALNYM stanie repo (21.09.2026)
# Naprawia: zlamane portrety w Panteonie + zombie service-worker.js
# powodujacy 404 przy logowaniu do panelu.
#
# WYKONAJ W TEJ KOLEJNOSCI:
# ============================================================
set -e

echo "== 0. NAJPIERW dodaj brakujace obrazy (bez tego 16 portretow w Panteonie jest zlamanych!) =="
echo "   Skopiuj z paczki PRZED commitem: images/panteon/, images/notion-import-review/,"
echo "   images/gregorowicz-czeslaw-portret.png, images/zwz-ak-obwod-lubartowski-okladka-ksiazki.png"
git add images/panteon/ images/notion-import-review/ \
        images/gregorowicz-czeslaw-portret.png \
        images/zwz-ak-obwod-lubartowski-okladka-ksiazki.png

echo "== 0b. Podmiana index.html i admin/index.html (dodany skrypt samoleczacy Service Worker) =="
echo "   Skopiuj z paczki, NADPISUJAC istniejace"
git add index.html admin/index.html

echo "== 1. Zombie service-worker.js - PRZYCZYNA bledu 404 przy logowaniu =="
git rm service-worker.js

echo "== 2. Nieuzywany plik stylow (caly CSS jest inline w index.html) =="
git rm style.css

echo "== 3. Karty biograficzne pos_XXX (portrety juz bezpiecznie w images/panteon/) =="
git rm pos_001.html pos_002.html pos_003.html pos_004.html pos_005.html \
       pos_006.html pos_007.html pos_008.html pos_009.html pos_010.html \
       pos_011.html pos_012.html pos_013.html pos_014.html pos_015.html \
       pos_016.html pos_017.html pos_018.html pos_019.html

echo "== 4. Nieuzywane, niepodlinkowane podstrony i dane =="
git rm powitanie_szlak_pamieci.html
git rm "szlak-pamieci-lubartow-scrollytelling (2).html"
git rm szlak_pamieci.json
git rm kino_lubartow_szlak.json

echo "== 5. Luzne obrazki z eksportu Notion (przeniesione do images/, patrz krok 0) =="
git rm images7ae259d5-9aba-4cd1-899e-1f0632d9153f-*.jpg

echo "== Commit =="
git commit -m "Fix: dodano brakujace portrety Panteonu, usunieto zombie service-worker.js (przyczyna 404 przy logowaniu), dokonczono porzadki"

echo ""
echo "GOTOWE."
echo ""
echo "WAZNE - jedna reczna czynnosc w PRZEGLADARCE, ktora pokazywala 404:"
echo "  DevTools (F12) -> Application -> Service Workers -> Unregister (wszystkie)"
echo "  -> Application -> Storage -> Clear site data -> twardy refresh (Ctrl+Shift+R)"
echo "  Nowy skrypt samoleczacy w index.html/admin naprawi to automatycznie dla"
echo "  WSZYSTKICH PRZYSZLYCH odwiedzajacych, ale TA JUZ ZAINFEKOWANA przegladarka"
echo "  potrzebuje jednorazowego recznego czyszczenia, zeby przelamac blokade."
