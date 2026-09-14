// ============================================================
// Service Worker — Lubartowski Szlak Pamięci
// Zapewnia działanie strony offline po pierwszym wejściu.
// ============================================================

const CACHE_VERSION = 'szlak-pamieci-v3';

// Pliki powłoki aplikacji
const APP_SHELL = [
  './',
  './index.html',
  './mapa-lite.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// INSTALACJA
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return cache.addAll(APP_SHELL);
    }).then(() => self.skipWaiting())
  );
});

// AKTYWACJA — czyszczenie starego cache
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

// FETCH — obsługa zapytań i tryb offline
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (event.request.method !== 'GET') return;

  const isOwnOrigin = url.origin === self.location.origin;

  if (isOwnOrigin) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
          return response;
        }).catch(() => caches.match('./index.html'));
      })
    );
    return;
  }

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
