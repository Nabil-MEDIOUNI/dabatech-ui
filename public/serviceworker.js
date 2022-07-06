const localhosturlsToCache = ['index.html', '/'];

const netlifyurlsToCache = ['index.html', '/'];

const CACHE_NAME = 'dabatech-ui';

const self = this;

// Install SW
self.addEventListener('install', (event) => {
  const { origin } = event.target.location;
  if (origin.includes('localhost')) {
    event.waitUntil(
      caches
        .open(CACHE_NAME)
        .then((cache) => cache.addAll(localhosturlsToCache)),
    );
  } else {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => cache.addAll(netlifyurlsToCache)),
    );
  }
});

// Listen for requests
self.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }

        return resp;
      }),
    );
  }
});

self.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    if (event.request.url === 'http://localhost:3000/static/js/main.chunk.js') {
      event.waitUntil(
        this.registration.showNotification('Internet', {
          body: 'internet not working',
        }),
      );
    }
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
        const REQUEST_URL = event.request.clone();
        fetch(REQUEST_URL);

        return REQUEST_URL;
      }),
    );
  }
});

// Activate the SW
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }

          return cacheName;
        }),
      ),
    ),
  );
});
