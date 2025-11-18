// Minimal service worker to satisfy browser requests during local testing.
// This keeps the server from logging 404 for /service-worker.js.

self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    // No caching or interception; respond normally.
});
