const K='somodoro-1',F=['./','index.html','manifest.webmanifest','icon.svg'];
addEventListener('install',e=>e.waitUntil(caches.open(K).then(c=>c.addAll(F))));
addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==K).map(k=>caches.delete(k))))));
addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
