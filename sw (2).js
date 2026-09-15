// ============================================================
// Service Worker — Lubartowski Szlak Pamięci
// Zapewnia dzialanie strony offline po pierwszym wejsciu.
// ============================================================

// UWAGA: zmien ten numer przy kazdej aktualizacji tresci strony
// (index.html, dane Panteonu/mapy), zeby wymusic pobranie nowej wersji.
const CACHE_VERSION = 'szlak-pamieci-v1';

// Pliki "powloki" aplikacji - zawsze dostepne offline po pierwszym wejsciu
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png',
];

// ------------------------------------------------------------
// INSTALACJA — pobierz i zapisz powloke aplikacji w cache
// ------------------------------------------------------------
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return cache.addAll(APP_SHELL);
    }).then(() => self.skipWaiting())
  );
});

// ------------------------------------------------------------
// AKTYWACJA — usun stare wersje cache przy aktualizacji
// ------------------------------------------------------------
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// ------------------------------------------------------------
// FETCH — strategia obslugi zapytan sieciowych
// ------------------------------------------------------------
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Tylko zapytania GET nadaja sie do cache'owania
  if (event.request.method !== 'GET') return;

  // 1) Powloka aplikacji (nasze wlasne pliki) -> Cache First
  //    Szybko dziala offline, bo to najwazniejsze pliki strony.
  const isOwnOrigin = url.origin === self.location.origin;

  if (isOwnOrigin) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
          return response;
        }).catch(() => {
          // Brak sieci i brak w cache - pokaz strone glowna jako fallback
          return caches.match('./index.html');
        });
      })
    );
    return;
  }

  // 2) Zasoby zewnetrzne (kafelki mapy OpenStreetMap, czcionki Google,
  //    biblioteka Leaflet z CDN) -> Network First z zapisem do cache.
  //    Dzieki temu raz zaladowany fragment mapy dziala tez offline,
  //    ale zawsze probujemy najpierw pobrac swiezy kafelek z sieci.
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
