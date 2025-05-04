self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('machining-calc-v1').then(cache => {
      return cache.addAll([
        '加工計算.html',
        'manifest.json'
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
