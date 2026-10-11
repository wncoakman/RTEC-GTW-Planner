/*
 * Arborist Field Inspection — service worker.
 *
 * Precaches the app shell AND the pinned CDN libraries (Tailwind, jsPDF,
 * JSZip) on install, so after one successful load in the office (with
 * wifi), the app opens and runs with zero network forever after — even in
 * airplane mode, even on a property with no signal at all.
 *
 * Cache-first at fetch time, with a network fallback that backfills the
 * cache for same-origin requests. Cross-origin (CDN) requests are served
 * cache-first too, but never backfilled from a fetch failure — if a CDN
 * script was never cached, it only works online, so we only expect to hit
 * that case on the very first office load.
 *
 * Bump CACHE_VERSION whenever any shipped file changes, so returning users
 * pick up the update on next launch instead of running stale cached code.
 */
const CACHE_VERSION = 'rtec-gtw-builder-v6';

const SAME_ORIGIN_URLS = [
  './',
  'index.html',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon-32.png',
];

// jsPDF/JSZip are pinned exact versions. Tailwind's Play CDN has no stable
// versioned path, so it's the one unpinned URL here — bump the others
// deliberately when you upgrade them.
const CDN_URLS = [
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(async (cache) => {
      // Same-origin files: must all succeed, or the shell is broken.
      await cache.addAll(SAME_ORIGIN_URLS);
      // Cross-origin CDN files: best-effort, one failure shouldn't block install.
      await Promise.allSettled(
        CDN_URLS.map((url) =>
          fetch(url, { mode: 'cors' })
            .then((res) => {
              if (res && res.ok) return cache.put(url, res);
            })
            .catch(() => {})
        )
      );
      await self.skipWaiting();
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const isSameOrigin = new URL(req.url).origin === self.location.origin;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;

      return fetch(req)
        .then((res) => {
          if (isSameOrigin && res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => {
          if (isSameOrigin && req.mode === 'navigate') return caches.match('index.html');
          return undefined;
        });
    })
  );
});
