!function(){"use strict";const e=["client/chunk.3e634f4b.js","client/[slug].bba26c9b.js","client/index.bff1e507.js","client/index.1562038c.js","client/chunk.4aa87d6d.js","client/about.f5496d26.js","client/portfolio.b98784a8.js","client/client.f9429ee9.js"].concat(["service-worker-index.html","basebuilder.jpg","battlefield.jpg","bf2042.jpg","bfv.jpg","dejaview.jpg","favicon.ico","gitarrkompet.mp3","gitarrkompet.ogg","global.css","got.jpg","grant.jpg","jam.jpg","manifest.json","plink.png","rage2.jpg","slasher.jpg","tuna.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1628171088037").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1628171088037"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1628171088037").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
