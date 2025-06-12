// Service Worker for GAMERS TAG - Advanced Caching Strategy
const CACHE_NAME = 'gamers-tag-v1.0.0';
const STATIC_CACHE = 'gamers-tag-static-v1';
const DYNAMIC_CACHE = 'gamers-tag-dynamic-v1';
const IMAGE_CACHE = 'gamers-tag-images-v1';

// Critical resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/logo.png',
  '/og-image.webp'
];

// Network-first strategies for dynamic content
const DYNAMIC_ROUTES = [
  '/api/',
  '/news/',
  '/testimonials'
];

// Cache-first strategies for static assets
const STATIC_ROUTES = [
  '/features/',
  '/team/',
  '/about',
  '/journey',
  '/gallery'
];

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== IMAGE_CACHE) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle different types of requests with optimized caching strategies
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request));
  } else if (isDynamicRoute(url.pathname)) {
    event.respondWith(handleDynamicRequest(request));
  } else if (isStaticRoute(url.pathname)) {
    event.respondWith(handleStaticRequest(request));
  } else if (request.destination === 'document') {
    event.respondWith(handleDocumentRequest(request));
  }
});

// Image caching with WebP optimization
async function handleImageRequest(request) {
  const cache = await caches.open(IMAGE_CACHE);
  
  try {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Image fetch failed', error);
    return new Response('', { status: 200, statusText: 'OK' });
  }
}

// Dynamic content with network-first strategy
async function handleDynamicRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Network failed, serving from cache', error);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    return new Response(JSON.stringify({
      error: 'Offline',
      message: 'This content is not available offline'
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 503
    });
  }
}

// Static content with cache-first strategy
async function handleStaticRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  
  try {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      fetch(request).then(response => {
        if (response.ok) {
          cache.put(request, response);
        }
      });
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Static request failed', error);
    const cachedResponse = await cache.match(request);
    return cachedResponse || new Response('Offline', { status: 503 });
  }
}

// Document requests with navigation fallback
async function handleDocumentRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Document request failed', error);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const homepage = await cache.match('/');
    return homepage || new Response('Offline', { status: 503 });
  }
}

// Utility functions
function isDynamicRoute(pathname) {
  return DYNAMIC_ROUTES.some(route => pathname.startsWith(route));
}

function isStaticRoute(pathname) {
  return STATIC_ROUTES.some(route => pathname.startsWith(route));
}