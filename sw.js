const APP_VERSION = "0.2.0"
const CACHE_NAME = `cache-${APP_VERSION}`;
const URLS_TO_CACHE = [
    '/sirrop.github.io/'
];

console.log('eval sw')

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(URLS_TO_CACHE);
            })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request)
            .then(function (response) {
                return response ? response : fetch(e.request)
            })
    );
});
