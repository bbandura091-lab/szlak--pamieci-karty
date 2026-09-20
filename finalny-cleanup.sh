#!/bin/bash
# ============================================================
# Finalny cleanup repo: szlak--pamieci-karty
# Uruchom z katalogu głównego repozytorium PO wgraniu:
#   - poprawionego config.yml
#   - nowego mapa.html
#   - content/nekropolia/*.md  (19 kart, z naprawa-cms-i-mapa.zip)
#   - content/miejsca/*.md     (32 punkty + 33, 34 — z zip-ów)
#   - images/nekropolia/*.png
#   - images/miejsca/*.png
# ============================================================
set -e

echo "== 1. Stare/zduplikowane prototypy map i skryptów =="
git rm "mapa .html"
git rm points.js
git rm "app .js"

echo "== 2. Karty biograficzne (przeniesione do content/nekropolia/) =="
git rm pos_001.html pos_002.html pos_003.html pos_004.html pos_005.html \
       pos_006.html pos_007.html pos_008.html pos_009.html pos_010.html \
       pos_011.html pos_012.html pos_013.html pos_014.html pos_015.html \
       pos_016.html pos_017.html pos_018.html pos_019.html

echo "== 3. Szczątkowe manifesty punktów (nikt się do nich nie odwołuje) =="
git rm point_01_rynek_miejski.txt point_03_palac_sanguszkow.txt \
       point_04_klasztor_kapucynow.txt point_05_dom_kultury.txt \
       point_06_stary_cmentarz.txt "point_07_synagoga_(nieistniejaca).txt" \
       point_08_gimnazjum_im._11_listopada.txt \
       point_09_dom_boleslawa_mucharskiego.txt point_10_pomnik_wolnosci.txt \
       point_11_dworzec_pkp.txt point_12_browar.txt point_13_szpital_sw._marii.txt \
       point_14_park_miejski.txt point_15_ulica_lubelska_12.txt point_16_siedziba_ak.txt \
       point_17_mlyn_parowy.txt point_18_szkola_powszechna_nr_1.txt point_19_plac_targowy.txt \
       point_20_wiezienie.txt point_21_pomnik_niepodleglosci.txt \
       point_22_biblioteka_publiczna.txt point_23_ratusz.txt point_24_gmina_zydowska.txt \
       point_25_apteka_pod_orlem.txt point_26_poczta_polowa.txt point_27_most_na_wieprzu.txt \
       point_28_pomnik_jozefa_pilsudskiego.txt

echo "== 4. Prawdziwe duplikaty (mają identyczny odpowiednik bez '(1)') =="
git rm "icon-192 (1).png" "icon-512 (1).png" \
       "kino_lubartow_szlak (1).json" "manifest (1).json"

echo "== 5. Szkice/prototypy HTML bez odpowiednika, niepodpięte do index.html/karty.html =="
git rm "lubartow_memory_trail_finalna (1).html" \
       "lubartow_memory_trail_finalna_lekka (1).html" \
       "lubartowski-szlak-pamieci-strona (1).html"

echo "== 6. Treść przeniesiona do content/miejsca/33 i 34 =="
git rm "miej_001_kino_lubartow (1).html" "miej_001_kino_lubartow (3).html"
git rm "galeria_odznaczen_museum (1).html"

echo "== 7. Schemat/przykladowy plik testowy (dane juz w content/) =="
git rm schema_coda.json

echo "== Commit =="
git add content/ images/
git commit -m "Cleanup: usunięcie martwych prototypów map/kart, migracja treści do content/ (CMS)"

echo ""
echo "GOTOWE. Pozostała, docelowa struktura repo:"
echo "  mapa.html          — jedyna, aktualna mapa (Mapbox, 32 pkt z Coda)"
echo "  admin/config.yml   — konfiguracja Decap CMS"
echo "  index.html         — strona główna"
echo "  karty.html         — sprawdź ręcznie: czy nadal aktualna wersja kart, czy ma zostać zastąpiona"
echo "  content/nekropolia/*.md — 19 postaci"
echo "  content/miejsca/*.md    — 34 punkty (32 z Coda + kino + galeria odznaczeń)"
echo "  images/                 — portrety i zdjęcia dla powyższych"
