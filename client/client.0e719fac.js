import{a as e,b as t,c as r,d as s,e as n,f as a,g as o,h as l,i as c,j as i,k as u,l as p,m as f,n as m,o as h,p as d,q as g,r as v,s as $,t as b,u as y,v as E,w as _,x as S,y as w}from"./chunk.e7473d5b.js";function P(r,s=e){let n;const a=[];function o(e){if(t(r,e)){if(r=e,!n)return;a.forEach(e=>e[1]()),a.forEach(e=>e[0](r))}}return{set:o,update:function(e){o(e(r))},subscribe:function(t,l=e){const c=[t,l];return a.push(c),1===a.length&&(n=s(o)||e),t(r),()=>{const e=a.indexOf(c);-1!==e&&a.splice(e,1),0===a.length&&n()}}}}const R={},L=()=>({});function A(t){var r,s,m,h,d,g,v,$,b,y,E,_,S,w,P,R;return{c(){r=n("nav"),s=n("ul"),m=n("li"),h=n("a"),d=a("home"),v=o(),$=n("li"),b=n("a"),y=a("about"),_=o(),S=n("li"),w=n("a"),P=a("portfolio"),this.h()},l(e){r=l(e,"NAV",{class:!0},!1);var t=c(r);s=l(t,"UL",{class:!0},!1);var n=c(s);m=l(n,"LI",{class:!0},!1);var a=c(m);h=l(a,"A",{class:!0,href:!0},!1);var o=c(h);d=i(o,"home"),o.forEach(u),a.forEach(u),v=i(n,"\r\n\t\t"),$=l(n,"LI",{class:!0},!1);var p=c($);b=l(p,"A",{class:!0,href:!0},!1);var f=c(b);y=i(f,"about"),f.forEach(u),p.forEach(u),_=i(n,"\r\n\t\t"),S=l(n,"LI",{class:!0},!1);var g=c(S);w=l(g,"A",{class:!0,href:!0},!1);var E=c(w);P=i(E,"portfolio"),E.forEach(u),g.forEach(u),n.forEach(u),t.forEach(u),this.h()},h(){h.className=g=(void 0===t.segment?"selected":"")+" svelte-ka2rh2",h.href=".",m.className="svelte-ka2rh2",b.className=E=("about"===t.segment?"selected":"")+" svelte-ka2rh2",b.href="about",$.className="svelte-ka2rh2",w.className=R=("portfolio"===t.segment?"selected":"")+" svelte-ka2rh2",w.href="portfolio",S.className="svelte-ka2rh2",s.className="svelte-ka2rh2",r.className="svelte-ka2rh2"},m(e,t){p(e,r,t),f(r,s),f(s,m),f(m,h),f(h,d),f(s,v),f(s,$),f($,b),f(b,y),f(s,_),f(s,S),f(S,w),f(w,P)},p(e,t){e.segment&&g!==(g=(void 0===t.segment?"selected":"")+" svelte-ka2rh2")&&(h.className=g),e.segment&&E!==(E=("about"===t.segment?"selected":"")+" svelte-ka2rh2")&&(b.className=E),e.segment&&R!==(R=("portfolio"===t.segment?"selected":"")+" svelte-ka2rh2")&&(w.className=R)},i:e,o:e,d(e){e&&u(r)}}}function N(e,t,r){let{segment:s}=t;return e.$set=(e=>{"segment"in e&&r("segment",s=e.segment)}),{segment:s}}class x extends r{constructor(e){super(),s(this,e,N,A,t,["segment"])}}function k(e){var t,r,s,a=new x({props:{segment:e.segment}});const f=e.$$slots.default,v=m(f,e,null);return{c(){a.$$.fragment.c(),t=o(),r=n("main"),v&&v.c(),this.h()},l(e){a.$$.fragment.l(e),t=i(e,"\r\n\r\n"),r=l(e,"MAIN",{class:!0},!1);var s=c(r);v&&v.l(s),s.forEach(u),this.h()},h(){r.className="svelte-1d956u8"},m(e,n){h(a,e,n),p(e,t,n),p(e,r,n),v&&v.m(r,null),s=!0},p(e,t){var r={};e.segment&&(r.segment=t.segment),a.$set(r),v&&v.p&&e.$$scope&&v.p(d(f,t,e),g(f,t,null))},i(e){s||(a.$$.fragment.i(e),v&&v.i&&v.i(e),s=!0)},o(e){a.$$.fragment.o(e),v&&v.o&&v.o(e),s=!1},d(e){a.$destroy(e),e&&(u(t),u(r)),v&&v.d(e)}}}function C(e,t,r){let{segment:s}=t,{$$slots:n={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&r("segment",s=e.segment),"$$scope"in e&&r("$$scope",a=e.$$scope)}),{segment:s,$$slots:n,$$scope:a}}class j extends r{constructor(e){super(),s(this,e,C,k,t,["segment"])}}function U(e){var t,r,s=e.error.stack;return{c(){t=n("pre"),r=a(s)},l(e){t=l(e,"PRE",{},!1);var n=c(t);r=i(n,s),n.forEach(u)},m(e,s){p(e,t,s),f(t,r)},p(e,t){e.error&&s!==(s=t.error.stack)&&v(r,s)},d(e){e&&u(t)}}}function q(t){var r,s,m,h,d,g,b,y,E,_=t.error.message;document.title=r=t.status;var S=t.dev&&t.error.stack&&U(t);return{c(){s=o(),m=n("h1"),h=a(t.status),d=o(),g=n("p"),b=a(_),y=o(),S&&S.c(),E=$(),this.h()},l(e){s=i(e,"\r\n\r\n"),m=l(e,"H1",{class:!0},!1);var r=c(m);h=i(r,t.status),r.forEach(u),d=i(e,"\r\n\r\n"),g=l(e,"P",{class:!0},!1);var n=c(g);b=i(n,_),n.forEach(u),y=i(e,"\r\n\r\n"),S&&S.l(e),E=$(),this.h()},h(){m.className="svelte-13vgy2g",g.className="svelte-13vgy2g"},m(e,t){p(e,s,t),p(e,m,t),f(m,h),p(e,d,t),p(e,g,t),f(g,b),p(e,y,t),S&&S.m(e,t),p(e,E,t)},p(e,t){e.status&&r!==(r=t.status)&&(document.title=r),e.status&&v(h,t.status),e.error&&_!==(_=t.error.message)&&v(b,_),t.dev&&t.error.stack?S?S.p(e,t):((S=U(t)).c(),S.m(E.parentNode,E)):S&&(S.d(1),S=null)},i:e,o:e,d(e){e&&(u(s),u(m),u(d),u(g),u(y)),S&&S.d(e),e&&u(E)}}}function I(e,t,r){let{status:s,error:n}=t;return e.$set=(e=>{"status"in e&&r("status",s=e.status),"error"in e&&r("error",n=e.error)}),{status:s,error:n,dev:!1}}class O extends r{constructor(e){super(),s(this,e,I,q,t,["status","error"])}}function D(e){var t,r,s=[e.level1.props],n=e.level1.component;function a(e){let t={};for(var r=0;r<s.length;r+=1)t=b(t,s[r]);return{props:t}}if(n)var o=new n(a());return{c(){o&&o.$$.fragment.c(),t=$()},l(e){o&&o.$$.fragment.l(e),t=$()},m(e,s){o&&h(o,e,s),p(e,t,s),r=!0},p(e,r){var l=e.level1?y(s,[r.level1.props]):{};if(n!==(n=r.level1.component)){if(o){w();const e=o;_(()=>{e.$destroy()}),e.$$.fragment.o(1),S()}n?((o=new n(a())).$$.fragment.c(),o.$$.fragment.i(1),h(o,t.parentNode,t)):o=null}else n&&o.$set(l)},i(e){r||(o&&o.$$.fragment.i(e),r=!0)},o(e){o&&o.$$.fragment.o(e),r=!1},d(e){e&&u(t),o&&o.$destroy(e)}}}function H(e){var t,r=new O({props:{error:e.error,status:e.status}});return{c(){r.$$.fragment.c()},l(e){r.$$.fragment.l(e)},m(e,s){h(r,e,s),t=!0},p(e,t){var s={};e.error&&(s.error=t.error),e.status&&(s.status=t.status),r.$set(s)},i(e){t||(r.$$.fragment.i(e),t=!0)},o(e){r.$$.fragment.o(e),t=!1},d(e){r.$destroy(e)}}}function V(e){var t,r,s,n,a=[H,D],o=[];function l(e){return e.error?0:1}return t=l(e),r=o[t]=a[t](e),{c(){r.c(),s=$()},l(e){r.l(e),s=$()},m(e,r){o[t].m(e,r),p(e,s,r),n=!0},p(e,n){var c=t;(t=l(n))===c?o[t].p(e,n):(w(),_(()=>{o[c].d(1),o[c]=null}),r.o(1),S(),(r=o[t])||(r=o[t]=a[t](n)).c(),r.i(1),r.m(s.parentNode,s))},i(e){n||(r&&r.i(),n=!0)},o(e){r&&r.o(),n=!1},d(e){o[t].d(e),e&&u(s)}}}function B(e){var t,r=[{segment:e.segments[0]},e.level0.props];let s={$$slots:{default:[V]},$$scope:{ctx:e}};for(var n=0;n<r.length;n+=1)s=b(s,r[n]);var a=new j({props:s});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,r){h(a,e,r),t=!0},p(e,t){var s=e.segments||e.level0?y(r,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(s.$$scope={changed:e,ctx:t}),a.$set(s)},i(e){t||(a.$$.fragment.i(e),t=!0)},o(e){a.$$.fragment.o(e),t=!1},d(e){a.$destroy(e)}}}function K(e,t,r){let{stores:s,error:n,status:a,segments:o,level0:l,level1:c=null}=t;return E(R,s),e.$set=(e=>{"stores"in e&&r("stores",s=e.stores),"error"in e&&r("error",n=e.error),"status"in e&&r("status",a=e.status),"segments"in e&&r("segments",o=e.segments),"level0"in e&&r("level0",l=e.level0),"level1"in e&&r("level1",c=e.level1)}),{stores:s,error:n,status:a,segments:o,level0:l,level1:c}}class T extends r{constructor(e){super(),s(this,e,K,B,t,["stores","error","status","segments","level0","level1"])}}const G=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],M=[{js:()=>import("./index.de72c251.js"),css:["index.de72c251.css"]},{js:()=>import("./portfolio.fea57e58.js"),css:["portfolio.fea57e58.css"]},{js:()=>import("./about.b0e7744e.js"),css:["about.b0e7744e.css"]},{js:()=>import("./index.b6a3320f.js"),css:["index.b6a3320f.css"]},{js:()=>import("./[slug].36332b24.js"),css:["[slug].36332b24.css"]}],W=(e=>[{pattern:/^\/?$/,parts:[{i:0}]},{pattern:/^\/portfolio\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:4,params:t=>({slug:e(t[1])})}]}])(decodeURIComponent);const X="undefined"!=typeof __SAPPER__&&__SAPPER__;let Y,z,F,J=!1,Q=[];const Z={page:P({}),preloading:P(null),session:P(X&&X.session)};let ee,te;Z.session.subscribe(async e=>{if(ee=e,!J)return;te=!0;const t=ie(new URL(location.href)),r=z={},{redirect:s,props:n,branch:a}=await me(t);r===z&&await fe(s,a,n,t.page)});let re,se=null;let ne,ae=1;const oe="undefined"!=typeof history?history:{pushState:(e,t,r)=>{},replaceState:(e,t,r)=>{},scrollRestoration:""},le={};function ce(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,r,s=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[r]&&(t[r]=[t[r]]),"object"==typeof t[r]?t[r].push(s):t[r]=s}),t}function ie(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(X.baseUrl))return null;const t=e.pathname.slice(X.baseUrl.length);if(!G.some(e=>e.test(t)))for(let r=0;r<W.length;r+=1){const s=W[r],n=s.pattern.exec(t);if(n){const r=ce(e.search),a=s.parts[s.parts.length-1],o=a.params?a.params(n):{},l={path:t,query:r,params:o};return{href:e.href,route:s,match:n,page:l}}}}function ue(){return{x:pageXOffset,y:pageYOffset}}async function pe(e,t,r,s){if(t)ne=t;else{const e=ue();le[ne]=e,t=ne=++ae,le[ne]=r?e:{x:0,y:0}}ne=t,Y&&Z.preloading.set(!0);const n=se&&se.href===e.href?se.promise:me(e);se=null;const a=z={},{redirect:o,props:l,branch:c}=await n;if(a===z&&(await fe(o,c,l,e.page),document.activeElement&&document.activeElement.blur(),!r)){let e=le[t];if(s){const t=document.getElementById(s.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}le[ne]=e,e&&scrollTo(e.x,e.y)}}async function fe(e,t,r,s){if(e)return function(e,t={replaceState:!1}){const r=ie(new URL(e,document.baseURI));return r?(oe[t.replaceState?"replaceState":"pushState"]({id:ne},"",e),pe(r,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(Z.page.set(s),Z.preloading.set(!1),Y)Y.$set(r);else{r.stores={page:{subscribe:Z.page.subscribe},preloading:{subscribe:Z.preloading.subscribe},session:Z.session},r.level0={props:await F};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)de(e.nextSibling);de(e),de(t)}Y=new T({target:re,props:r,hydrate:!0})}Q=t,J=!0,te=!1}async function me(e){const{route:t,page:r}=e,s=r.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[s[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let l;F||(F=X.preloaded[0]||L.call(o,{path:r.path,query:r.query,params:{}},ee));let c=1;try{l=await Promise.all(t.parts.map(async(t,n)=>{if(a.segments[c]=s[n+1],!t)return null;const l=c++,i=s[n];if(!te&&Q[n]&&Q[n].segment===i&&Q[n].part===t.i)return Q[n];const{default:u,preload:p}=await function(e){const t="string"==typeof e.css?[]:e.css.map(he);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(M[t.i]);let f;return f=J||!X.preloaded[n+1]?p?await p.call(o,{path:r.path,query:r.query,params:t.params?t.params(e.match):{}},ee):{}:X.preloaded[n+1],a[`level${l}`]={component:u,props:f,segment:i,part:t.i}}))}catch(e){a.error=e,a.status=500,l=[]}return{redirect:n,props:a,branch:l}}function he(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,r)=>{const s=document.createElement("link");s.rel="stylesheet",s.href=t,s.onload=(()=>e()),s.onerror=r,document.head.appendChild(s)})}function de(e){e.parentNode.removeChild(e)}function ge(e){const t=ie(new URL(e,document.baseURI));if(t)return se&&e===se.href||function(e,t){se={href:e,promise:t}}(e,me(t)),se.promise}let ve;function $e(e){clearTimeout(ve),ve=setTimeout(()=>{be(e)},20)}function be(e){const t=Ee(e.target);t&&"prefetch"===t.rel&&ge(t.href)}function ye(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Ee(e.target);if(!t)return;if(!t.href)return;const r="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(r?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(r?t.target.baseVal:t.target)return;const n=new URL(s);if(n.pathname===location.pathname&&n.search===location.search)return;const a=ie(n);if(a){pe(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),oe.pushState({id:ne},"",n.href)}}function Ee(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function _e(e){if(le[ne]=ue(),e.state){const t=ie(new URL(location.href));t?pe(t,e.state.id):location.href=location.href}else(function(e){ne=e})(ae=ae+1),oe.replaceState({id:ne},"",location.href)}!function(e){var t;"scrollRestoration"in oe&&(oe.scrollRestoration="manual"),t=e.target,re=t,addEventListener("click",ye),addEventListener("popstate",_e),addEventListener("touchstart",be),addEventListener("mousemove",$e),Promise.resolve().then(()=>{const{hash:e,href:t}=location;oe.replaceState({id:ae},"",t);const r=new URL(location.href);if(X.error)return function(e){const{pathname:t,search:r}=location,{session:s,preloaded:n,status:a,error:o}=X;F||(F=n&&n[0]),fe(null,[],{error:o,status:a,session:s,level0:{props:F},level1:{props:{status:a,error:o},component:O},segments:n},{path:t,query:ce(r),params:{}})}();const s=ie(r);return s?pe(s,ae,!1,e):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.0e719fac.js.map
