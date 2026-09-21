// ============================================================
// Service Worker — Lubartowski Szlak Pamięci
// Zapewnia działanie strony offline PO PIERWSZYM wejściu,
// ale ZAWSZE próbuje najpierw pobrać świeżą wersję z sieci
// (network-first), żeby aktualizacje strony docierały od razu
// do zwracających się użytkowników — bez potrzeby ręcznego
// podbijania CACHE_VERSION przy każdym wdrożeniu.
// ============================================================

const CACHE_VERSION = 'szlak-pamieci-v4';

// Pliki powłoki aplikacji (fallback, gdy sieć niedostępna)
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

// AKTYWACJA — czyszczenie WSZYSTKICH starych cache (niezależnie od nazwy)
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

// FETCH — NETWORK-FIRST: zawsze próbuj sieci, cache tylko jako fallback offline
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isOwnOrigin = url.origin === self.location.origin;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // sukces sieciowy -> zaktualizuj cache świeżą kopią
        const clone = response.clone();
        if (isOwnOrigin) {
          caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // brak sieci -> uzyj cache, a dla nawigacji fallback do index.html
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
