
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('amigo-cache-v1').then(cache => {
      return cache.addAll([
        '/amigo-pwa/index.html',
        '/amigo-pwa/defense.html',
        '/amigo-pwa/batting.html',
        '/amigo-pwa/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
