const CACHE_NAME = 'aih-v2';
// 운영 규칙: index.html 수정 배포 시 CACHE_NAME 버전 올리기

const STATIC_ASSETS = [
  './',
  './index.html',
  './images/chatgpt-icon-filled-256.webp',
  './images/google-bard-icon-filled-256.webp',
  './images/grok-icon-filled-256.webp',
  './images/deepseek-icon-filled-256.webp',
  './images/meta-ai-icon-filled-256.webp',
  './images/openai-sora-icon-filled-256.webp',
  './images/google-notebooklm-icon-filled-128.webp',
];

const CDN_ORIGINS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'cdnjs.cloudflare.com',
];

const SKIP_CACHE_ORIGINS = [
  'allorigins.win',
  'codetabs.com',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Network-only: RSS/CORS 프록시 (실패 시 기존 fetchFeed 에러 처리에 위임)
  if (SKIP_CACHE_ORIGINS.some(origin => url.hostname.includes(origin))) {
    return;
  }

  // Cache-first + opaque 허용: CDN (Google Fonts, Font Awesome)
  if (CDN_ORIGINS.some(origin => url.hostname.includes(origin))) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response.status === 0 || response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // Cache-first: 이미지 (.webp)
  if (event.request.url.match(/\.webp$/)) {
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request))
    );
    return;
  }

  // Stale-While-Revalidate: same-origin (index.html 등)
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(event.request).then(cached => {
          const fetchPromise = fetch(event.request).then(response => {
            if (response.ok) cache.put(event.request, response.clone());
            return response;
          }).catch(() => cached);
          return cached || fetchPromise;
        })
      )
    );
  }
});
