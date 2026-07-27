const CACHE_NAME = 'bonamigo-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
  './manifest.json',
  './service-worker.js'
];

// Instalação - cache dos arquivos
self.addEventListener('install', event => {
  console.log('Service Worker instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cache aberto e arquivos em cache');
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Ativação - limpar caches antigos
self.addEventListener('activate', event => {
  console.log('Service Worker ativando...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch - usar cache, recorrer à rede se necessário
self.addEventListener('fetch', event => {
  // Apenas HTTP/HTTPS
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      // Se tiver em cache, retorna
      if (response) {
        return response;
      }

      // Se não tiver, tenta buscar da rede
      return fetch(event.request)
        .then(response => {
          // Se for sucesso, adiciona ao cache para próxima vez
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(error => {
          console.log('Fetch falhou, usando cache:', error);
          // Se falhar, retorna o que está em cache
          return caches.match(event.request);
        });
    })
  );
});
