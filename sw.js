const CACHE_NAME = "kitchen-master-v1";

// Files you want to store for offline use
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// INSTALL → runs once when app is installed
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );

  self.skipWaiting();
});

// ACTIVATE → cleans old cache versions
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// FETCH → serves cached version first (offline support)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // If found in cache → use it
      if (response) return response;

      // Otherwise → fetch from internet
      return fetch(event.request);
    })
  );
});