# Lubartowski Szlak Pamięci

Projekt upamiętniający bohaterów Armii Krajowej, 27. Wołyńskiej Dywizji Piechoty AK oraz powojennego podziemia niepodległościowego z rejonu Lubartowa (1863–2025).

🔗 **Strona:** https://bbandura091-lab.github.io/szlak--pamieci-karty/

## Architektura

To w pełni samodzielna aplikacja jednostronicowa (SPA) — cała treść i logika znajdują się w jednym pliku `index.html`:

- **Panteon** — 29 biogramów bohaterów, w grupach chronologiczno-tematycznych
- **Mapa Szlaku** — 44 punkty pamięci naniesione na interaktywną mapę (Leaflet + OpenStreetMap), z filtrowaniem wg epoki
- **Nekropolia** — groby i kwatery na Cmentarzu Parafialnym w Lubartowie
- **Księga Hołdu** — wpisy osób i instytucji składających hołd bohaterom

Dane są wpisane bezpośrednio w kodzie `index.html` (stałe `PANTHEON`, `POINTS`, `NEKROPOLIA`, `HOLD`) — nie ma zewnętrznego CMS-a ani plików treści do edycji osobno. Aby dodać lub zmienić wpis, edytuj bezpośrednio odpowiednią tablicę w `index.html`.

## Struktura repozytorium

```
index.html              — cała strona (HTML + CSS + JS w jednym pliku)
manifest.json           — manifest PWA
sw.js                   — service worker (network-first, wsparcie offline)
icon-*.png              — ikony aplikacji / favicony
images/                 — materiały graficzne źródłowe
```

## Źródła

Dane zweryfikowane źródłowo: IPN, archiwa muzealne, relacje rodzin. Projekt żywy i wciąż rozwijany.
