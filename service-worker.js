const CACHE_NAME = 'testingg';
const urlsToCache = [
  '/women/',
  '/women/index.html',
  '/women/style.css',
  '/women/script.js',
  '/women/icon.png',
  '/women/manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
