!function(){"use strict";const e=["client/chunk.dc4c6187.js","client/index.de72c251.js","client/chunk.e7473d5b.js","client/portfolio.38557484.js","client/index.b6a3320f.js","client/about.8a07b309.js","client/[slug].36332b24.js","client/client.938a19ec.js"].concat(["service-worker-index.html","basebuilder.jpg","basebuilder.png","battlefield.jpg","battlefield.png","dejaview.jpg","dejaview.png","favicon.ico","gitarrkompet.mp3","gitarrkompet.ogg","global.css","got.jpg","got.png","grant.jpg","jam.jpg","jam.png","manifest.json","plink.png","rage2.jpg","rage2.png","slasher.jpg","slasher.png","tuna.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1558771701969").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1558771701969"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1558771701969").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
