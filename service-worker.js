!function(){"use strict";const e=["client/chunk.dc4c6187.js","client/index.de72c251.js","client/chunk.e7473d5b.js","client/portfolio.dd0877d1.js","client/index.b6a3320f.js","client/about.8a07b309.js","client/[slug].36332b24.js","client/client.4f61de94.js"].concat(["service-worker-index.html","basebuilder.png","battlefield.jpg","battlefield.png","dejaview.png","favicon.ico","global.css","got.png","grant.jpg","jam.png","manifest.json","plink.png","rage2.png","slasher.png","tuna.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1558717844163").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1558717844163"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1558717844163").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
