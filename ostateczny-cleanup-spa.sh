#!/bin/bash
# ============================================================
# OSTATECZNY CLEANUP: szlak--pamieci-karty -> czyste SPA
# Decyzja architektoniczna: index.html jest jedynym i pelnym
# zrodlem prawdy. CMS/Decap, content/*.md i wszystkie osobne
# podstrony/mapy zostaja usuniete jako niepotrzebne.
#
# Uruchom z katalogu glownego repozytorium.
# ============================================================
set -e

echo "== 1. Struktura Decap CMS =="
git rm -r admin/
git rm config.yml
# schema_coda.json - juz nie istnieje w repo (usuniete wczesniej), pomijamy

echo "== 2. Tresci CMS (content/, paczki .zip) =="
git rm -r "naprawa-cms-i-mapa (2).zip"
git rm -r nowe-punkty-33-34/
# folder content/ nie istnieje w repo - nic do usuniecia

echo "== 3. Osierocone / zduplikowane skrypty JS =="
git rm gemini-code-1787205321346.js
git rm "sw (2).js"
git rm service-worker.js
git rm style.css   # nieuzywany - caly CSS jest inline w index.html

echo "== 4. Osobne, niepodlinkowane podstrony HTML =="
git rm mapa.html
git rm mapa-lite.html
git rm karty.html
git rm powitanie_szlak_pamieci.html
git rm lubartow_memory_trail_clean.html
git rm -r archive/

echo "== 5. Karty biograficzne pos_XXX (dane juz na sztywno w PANTHEON w index.html) =="
git rm pos_001.html pos_002.html pos_003.html pos_004.html pos_005.html \
       pos_006.html pos_007.html pos_008.html pos_009.html pos_010.html \
       pos_011.html pos_012.html pos_013.html pos_014.html pos_015.html \
       pos_016.html pos_017.html pos_018.html pos_019.html

echo "== 6. Nieuzywane zbiory danych =="
git rm -r data/
git rm szlak_pamieci.json
git rm kino_lubartow_szlak.json
git rm "Rozszerzenie .geojson"

echo "== 7. Stary skrypt czyszczacy (zastapiony przez ten) =="
git rm finalny-cleanup.sh

echo "== 8. README =="
git rm README.txt
git add README.md   # nowy, wlasciwy README - patrz osobny plik

echo "== 9. Podmiana sw.js na wersje network-first (naprawa cache) =="
git add sw.js        # nadpisany plik - patrz osobny plik network-first

echo "== Commit =="
git commit -m "Finalny cleanup: repo sprowadzone do czystego SPA (index.html + zasoby); usunieto CMS, martwe podstrony i osierocone dane"

echo ""
echo "GOTOWE. Docelowa struktura repozytorium:"
echo "  index.html        - jedyny i pelny plik strony (PANTHEON, NEKROPOLIA, HOLD, POINTS)"
echo "  manifest.json      - manifest PWA, podpiety w <head>"
echo "  sw.js              - service worker (network-first), rejestrowany w index.html"
echo "  icon-192.png / icon-512.png / icon-maskable-512.png - favicony/PWA ikony"
echo "  images/            - zasoby graficzne (zachowane w calosci jako materialy zrodlowe)"
echo "  .nojekyll          - wymagane dla poprawnego dzialania GitHub Pages"
echo "  README.md          - opis projektu"
