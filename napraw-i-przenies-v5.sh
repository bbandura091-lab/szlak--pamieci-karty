#!/bin/bash
# ============================================================
# NAPRAWA v5 - pliki z "naprawa-logowania-i-portretow.zip" wyladowaly
# w podfolderze zamiast w katalogu glownym repo. Ten skrypt:
#   1) przenosi je na wlasciwe miejsce (nadpisujac stare wersje),
#   2) usuwa zbedny, pusty juz folder,
#   3) konczy pozostale porzadki (zombie service-worker.js, pos_XXX itd.)
#
# Uruchom z katalogu glownego repozytorium (tam gdzie jest folder
# "naprawa-logowania-i-portretow").
# ============================================================
set -e

SRC="naprawa-logowania-i-portretow"

echo "== 1. Przeniesienie index.html i admin/index.html (wersje z samoleczeniem SW) =="
git mv -f "$SRC/index.html" index.html
git mv -f "$SRC/admin/index.html" admin/index.html
# admin/config.yml jest identyczny z juz istniejacym - usuwamy zagniezdzona kopie

echo "== 2. Przeniesienie brakujacych portretow Panteonu =="
mkdir -p images/panteon
for f in "$SRC"/images/panteon/*.png; do
  git mv -f "$f" "images/panteon/$(basename "$f")"
done

echo "== 3. Przeniesienie zdjec do przegladu (galeria/kino) =="
git mv -f "$SRC/images/gregorowicz-czeslaw-portret.png" images/gregorowicz-czeslaw-portret.png
git mv -f "$SRC/images/zwz-ak-obwod-lubartowski-okladka-ksiazki.png" images/zwz-ak-obwod-lubartowski-okladka-ksiazki.png
mkdir -p images/notion-import-review
for f in "$SRC"/images/notion-import-review/*.jpg; do
  git mv -f "$f" "images/notion-import-review/$(basename "$f")"
done

echo "== 4. Usuniecie juz pustego folderu-pomylki =="
git rm -r "$SRC"

echo "== 5. Zombie service-worker.js - PRZYCZYNA bledu 404 przy logowaniu =="
git rm service-worker.js

echo "== 6. Nieuzywany plik stylow =="
git rm style.css

echo "== 7. Karty biograficzne pos_XXX (portrety juz bezpiecznie w images/panteon/) =="
git rm pos_001.html pos_002.html pos_003.html pos_004.html pos_005.html \
       pos_006.html pos_007.html pos_008.html pos_009.html pos_010.html \
       pos_011.html pos_012.html pos_013.html pos_014.html pos_015.html \
       pos_016.html pos_017.html pos_018.html pos_019.html

echo "== 8. Nieuzywane, niepodlinkowane podstrony i dane =="
git rm powitanie_szlak_pamieci.html
git rm "szlak-pamieci-lubartow-scrollytelling (2).html"
git rm szlak_pamieci.json
git rm kino_lubartow_szlak.json

echo "== 9. Luzne obrazki z eksportu Notion (root) - zostaly juz przeniesione w kroku 3 =="
git rm images7ae259d5-9aba-4cd1-899e-1f0632d9153f-*.jpg 2>/dev/null || true

echo "== 10. Sam skrypt naprawczy (juz niepotrzebny po wykonaniu) =="
git rm cleanup-final-v4.sh 2>/dev/null || true

echo "== Commit =="
git commit -m "Naprawa: przeniesiono pliki z bledngo zagniezdzonego folderu, usunieto zombie service-worker.js, dokonczono porzadki"

echo ""
echo "GOTOWE. git push, a nastepnie w przegladarce z bledem 404:"
echo "  DevTools (F12) -> Application -> Service Workers -> Unregister wszystkie"
echo "  -> Application -> Storage -> Clear site data -> twardy refresh (Ctrl+Shift+R)"
