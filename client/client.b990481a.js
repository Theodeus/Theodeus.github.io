import{a as e,b as t,c as s,d as r,e as n,f as o,g as a,h as l,i as c,j as i,k as u,l as p,m as f,n as m,o as d,p as h,q as g,r as v,s as $,t as b,u as E,v as y,w as _,x as S,y as w}from"./chunk.e7473d5b.js";function P(s,r=e){let n;const o=[];function a(e){if(t(s,e)){if(s=e,!n)return;o.forEach(e=>e[1]()),o.forEach(e=>e[0](s))}}return{set:a,update:function(e){a(e(s))},subscribe:function(t,l=e){const c=[t,l];return o.push(c),1===o.length&&(n=r(a)||e),t(s),()=>{const e=o.indexOf(c);-1!==e&&o.splice(e,1),0===o.length&&n()}}}}const R={},L=()=>({});function A(t){var s,r,m,d,h,g,v,$,b,E,y,_,S,w,P,R;return{c(){s=n("nav"),r=n("ul"),m=n("li"),d=n("a"),h=o("home"),v=a(),$=n("li"),b=n("a"),E=o("about"),_=a(),S=n("li"),w=n("a"),P=o("portfolio"),this.h()},l(e){s=l(e,"NAV",{class:!0},!1);var t=c(s);r=l(t,"UL",{class:!0},!1);var n=c(r);m=l(n,"LI",{class:!0},!1);var o=c(m);d=l(o,"A",{class:!0,href:!0},!1);var a=c(d);h=i(a,"home"),a.forEach(u),o.forEach(u),v=i(n,"\n\t\t"),$=l(n,"LI",{class:!0},!1);var p=c($);b=l(p,"A",{class:!0,href:!0},!1);var f=c(b);E=i(f,"about"),f.forEach(u),p.forEach(u),_=i(n,"\n\t\t"),S=l(n,"LI",{class:!0},!1);var g=c(S);w=l(g,"A",{class:!0,href:!0},!1);var y=c(w);P=i(y,"portfolio"),y.forEach(u),g.forEach(u),n.forEach(u),t.forEach(u),this.h()},h(){d.className=g=(void 0===t.segment?"selected":"")+" svelte-rgz5kd",d.href=".",m.className="svelte-rgz5kd",b.className=y=("about"===t.segment?"selected":"")+" svelte-rgz5kd",b.href="about",$.className="svelte-rgz5kd",w.className=R=("portfolio"===t.segment?"selected":"")+" svelte-rgz5kd",w.href="portfolio",S.className="svelte-rgz5kd",r.className="svelte-rgz5kd",s.className="svelte-rgz5kd"},m(e,t){p(e,s,t),f(s,r),f(r,m),f(m,d),f(d,h),f(r,v),f(r,$),f($,b),f(b,E),f(r,_),f(r,S),f(S,w),f(w,P)},p(e,t){e.segment&&g!==(g=(void 0===t.segment?"selected":"")+" svelte-rgz5kd")&&(d.className=g),e.segment&&y!==(y=("about"===t.segment?"selected":"")+" svelte-rgz5kd")&&(b.className=y),e.segment&&R!==(R=("portfolio"===t.segment?"selected":"")+" svelte-rgz5kd")&&(w.className=R)},i:e,o:e,d(e){e&&u(s)}}}function N(e,t,s){let{segment:r}=t;return e.$set=(e=>{"segment"in e&&s("segment",r=e.segment)}),{segment:r}}class x extends s{constructor(e){super(),r(this,e,N,A,t,["segment"])}}function k(e){var t,s,r,o=new x({props:{segment:e.segment}});const f=e.$$slots.default,v=m(f,e,null);return{c(){o.$$.fragment.c(),t=a(),s=n("main"),v&&v.c(),this.h()},l(e){o.$$.fragment.l(e),t=i(e,"\n\n"),s=l(e,"MAIN",{class:!0},!1);var r=c(s);v&&v.l(r),r.forEach(u),this.h()},h(){s.className="svelte-dbnmo6"},m(e,n){d(o,e,n),p(e,t,n),p(e,s,n),v&&v.m(s,null),r=!0},p(e,t){var s={};e.segment&&(s.segment=t.segment),o.$set(s),v&&v.p&&e.$$scope&&v.p(h(f,t,e),g(f,t,null))},i(e){r||(o.$$.fragment.i(e),v&&v.i&&v.i(e),r=!0)},o(e){o.$$.fragment.o(e),v&&v.o&&v.o(e),r=!1},d(e){o.$destroy(e),e&&(u(t),u(s)),v&&v.d(e)}}}function C(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:o}=t;return e.$set=(e=>{"segment"in e&&s("segment",r=e.segment),"$$scope"in e&&s("$$scope",o=e.$$scope)}),{segment:r,$$slots:n,$$scope:o}}class j extends s{constructor(e){super(),r(this,e,C,k,t,["segment"])}}function U(e){var t,s,r=e.error.stack;return{c(){t=n("pre"),s=o(r)},l(e){t=l(e,"PRE",{},!1);var n=c(t);s=i(n,r),n.forEach(u)},m(e,r){p(e,t,r),f(t,s)},p(e,t){e.error&&r!==(r=t.error.stack)&&v(s,r)},d(e){e&&u(t)}}}function q(t){var s,r,m,d,h,g,b,E,y,_=t.error.message;document.title=s=t.status;var S=t.dev&&t.error.stack&&U(t);return{c(){r=a(),m=n("h1"),d=o(t.status),h=a(),g=n("p"),b=o(_),E=a(),S&&S.c(),y=$(),this.h()},l(e){r=i(e,"\n\n"),m=l(e,"H1",{class:!0},!1);var s=c(m);d=i(s,t.status),s.forEach(u),h=i(e,"\n\n"),g=l(e,"P",{class:!0},!1);var n=c(g);b=i(n,_),n.forEach(u),E=i(e,"\n\n"),S&&S.l(e),y=$(),this.h()},h(){m.className="svelte-8od9u6",g.className="svelte-8od9u6"},m(e,t){p(e,r,t),p(e,m,t),f(m,d),p(e,h,t),p(e,g,t),f(g,b),p(e,E,t),S&&S.m(e,t),p(e,y,t)},p(e,t){e.status&&s!==(s=t.status)&&(document.title=s),e.status&&v(d,t.status),e.error&&_!==(_=t.error.message)&&v(b,_),t.dev&&t.error.stack?S?S.p(e,t):((S=U(t)).c(),S.m(y.parentNode,y)):S&&(S.d(1),S=null)},i:e,o:e,d(e){e&&(u(r),u(m),u(h),u(g),u(E)),S&&S.d(e),e&&u(y)}}}function z(e,t,s){let{status:r,error:n}=t;return e.$set=(e=>{"status"in e&&s("status",r=e.status),"error"in e&&s("error",n=e.error)}),{status:r,error:n,dev:!1}}class I extends s{constructor(e){super(),r(this,e,z,q,t,["status","error"])}}function O(e){var t,s,r=[e.level1.props],n=e.level1.component;function o(e){let t={};for(var s=0;s<r.length;s+=1)t=b(t,r[s]);return{props:t}}if(n)var a=new n(o());return{c(){a&&a.$$.fragment.c(),t=$()},l(e){a&&a.$$.fragment.l(e),t=$()},m(e,r){a&&d(a,e,r),p(e,t,r),s=!0},p(e,s){var l=e.level1?E(r,[s.level1.props]):{};if(n!==(n=s.level1.component)){if(a){w();const e=a;_(()=>{e.$destroy()}),e.$$.fragment.o(1),S()}n?((a=new n(o())).$$.fragment.c(),a.$$.fragment.i(1),d(a,t.parentNode,t)):a=null}else n&&a.$set(l)},i(e){s||(a&&a.$$.fragment.i(e),s=!0)},o(e){a&&a.$$.fragment.o(e),s=!1},d(e){e&&u(t),a&&a.$destroy(e)}}}function D(e){var t,s=new I({props:{error:e.error,status:e.status}});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,r){d(s,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),s.$set(r)},i(e){t||(s.$$.fragment.i(e),t=!0)},o(e){s.$$.fragment.o(e),t=!1},d(e){s.$destroy(e)}}}function H(e){var t,s,r,n,o=[D,O],a=[];function l(e){return e.error?0:1}return t=l(e),s=a[t]=o[t](e),{c(){s.c(),r=$()},l(e){s.l(e),r=$()},m(e,s){a[t].m(e,s),p(e,r,s),n=!0},p(e,n){var c=t;(t=l(n))===c?a[t].p(e,n):(w(),_(()=>{a[c].d(1),a[c]=null}),s.o(1),S(),(s=a[t])||(s=a[t]=o[t](n)).c(),s.i(1),s.m(r.parentNode,r))},i(e){n||(s&&s.i(),n=!0)},o(e){s&&s.o(),n=!1},d(e){a[t].d(e),e&&u(r)}}}function V(e){var t,s=[{segment:e.segments[0]},e.level0.props];let r={$$slots:{default:[H]},$$scope:{ctx:e}};for(var n=0;n<s.length;n+=1)r=b(r,s[n]);var o=new j({props:r});return{c(){o.$$.fragment.c()},l(e){o.$$.fragment.l(e)},m(e,s){d(o,e,s),t=!0},p(e,t){var r=e.segments||e.level0?E(s,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),o.$set(r)},i(e){t||(o.$$.fragment.i(e),t=!0)},o(e){o.$$.fragment.o(e),t=!1},d(e){o.$destroy(e)}}}function B(e,t,s){let{stores:r,error:n,status:o,segments:a,level0:l,level1:c=null}=t;return y(R,r),e.$set=(e=>{"stores"in e&&s("stores",r=e.stores),"error"in e&&s("error",n=e.error),"status"in e&&s("status",o=e.status),"segments"in e&&s("segments",a=e.segments),"level0"in e&&s("level0",l=e.level0),"level1"in e&&s("level1",c=e.level1)}),{stores:r,error:n,status:o,segments:a,level0:l,level1:c}}class K extends s{constructor(e){super(),r(this,e,B,V,t,["stores","error","status","segments","level0","level1"])}}const T=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],G=[{js:()=>import("./index.a7b071d7.js"),css:["index.a7b071d7.css"]},{js:()=>import("./portfolio.526aae40.js"),css:["portfolio.526aae40.css"]},{js:()=>import("./about.2e549872.js"),css:["about.2e549872.css"]},{js:()=>import("./index.d488ad62.js"),css:["index.d488ad62.css"]},{js:()=>import("./[slug].c42908fc.js"),css:["[slug].c42908fc.css"]}],M=(e=>[{pattern:/^\/?$/,parts:[{i:0}]},{pattern:/^\/portfolio\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:4,params:t=>({slug:e(t[1])})}]}])(decodeURIComponent);const W="undefined"!=typeof __SAPPER__&&__SAPPER__;let X,Y,F,J=!1,Q=[];const Z={page:P({}),preloading:P(null),session:P(W&&W.session)};let ee,te;Z.session.subscribe(async e=>{if(ee=e,!J)return;te=!0;const t=ie(new URL(location.href)),s=Y={},{redirect:r,props:n,branch:o}=await me(t);s===Y&&await fe(r,o,n,t.page)});let se,re=null;let ne,oe=1;const ae="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},le={};function ce(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function ie(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(W.baseUrl))return null;const t=e.pathname.slice(W.baseUrl.length);if(!T.some(e=>e.test(t)))for(let s=0;s<M.length;s+=1){const r=M[s],n=r.pattern.exec(t);if(n){const s=ce(e.search),o=r.parts[r.parts.length-1],a=o.params?o.params(n):{},l={path:t,query:s,params:a};return{href:e.href,route:r,match:n,page:l}}}}function ue(){return{x:pageXOffset,y:pageYOffset}}async function pe(e,t,s,r){if(t)ne=t;else{const e=ue();le[ne]=e,t=ne=++oe,le[ne]=s?e:{x:0,y:0}}ne=t,X&&Z.preloading.set(!0);const n=re&&re.href===e.href?re.promise:me(e);re=null;const o=Y={},{redirect:a,props:l,branch:c}=await n;if(o===Y&&(await fe(a,c,l,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=le[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}le[ne]=e,e&&scrollTo(e.x,e.y)}}async function fe(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=ie(new URL(e,document.baseURI));return s?(ae[t.replaceState?"replaceState":"pushState"]({id:ne},"",e),pe(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(Z.page.set(r),Z.preloading.set(!1),X)X.$set(s);else{s.stores={page:{subscribe:Z.page.subscribe},preloading:{subscribe:Z.preloading.subscribe},session:Z.session},s.level0={props:await F};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)he(e.nextSibling);he(e),he(t)}X=new K({target:se,props:s,hydrate:!0})}Q=t,J=!0,te=!1}async function me(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let l;F||(F=W.preloaded[0]||L.call(a,{path:s.path,query:s.query,params:{}},ee));let c=1;try{l=await Promise.all(t.parts.map(async(t,n)=>{if(o.segments[c]=r[n+1],!t)return null;const l=c++,i=r[n];if(!te&&Q[n]&&Q[n].segment===i&&Q[n].part===t.i)return Q[n];const{default:u,preload:p}=await function(e){const t="string"==typeof e.css?[]:e.css.map(de);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(G[t.i]);let f;return f=J||!W.preloaded[n+1]?p?await p.call(a,{path:s.path,query:s.query,params:t.params?t.params(e.match):{}},ee):{}:W.preloaded[n+1],o[`level${l}`]={component:u,props:f,segment:i,part:t.i}}))}catch(e){o.error=e,o.status=500,l=[]}return{redirect:n,props:o,branch:l}}function de(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=(()=>e()),r.onerror=s,document.head.appendChild(r)})}function he(e){e.parentNode.removeChild(e)}function ge(e){const t=ie(new URL(e,document.baseURI));if(t)return re&&e===re.href||function(e,t){re={href:e,promise:t}}(e,me(t)),re.promise}let ve;function $e(e){clearTimeout(ve),ve=setTimeout(()=>{be(e)},20)}function be(e){const t=ye(e.target);t&&"prefetch"===t.rel&&ge(t.href)}function Ee(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=ye(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const o=ie(n);if(o){pe(o,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),ae.pushState({id:ne},"",n.href)}}function ye(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function _e(e){if(le[ne]=ue(),e.state){const t=ie(new URL(location.href));t?pe(t,e.state.id):location.href=location.href}else(function(e){ne=e})(oe=oe+1),ae.replaceState({id:ne},"",location.href)}!function(e){var t;"scrollRestoration"in ae&&(ae.scrollRestoration="manual"),t=e.target,se=t,addEventListener("click",Ee),addEventListener("popstate",_e),addEventListener("touchstart",be),addEventListener("mousemove",$e),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ae.replaceState({id:oe},"",t);const s=new URL(location.href);if(W.error)return function(e){const{pathname:t,search:s}=location,{session:r,preloaded:n,status:o,error:a}=W;F||(F=n&&n[0]),fe(null,[],{error:a,status:o,session:r,level0:{props:F},level1:{props:{status:o,error:a},component:I},segments:n},{path:t,query:ce(s),params:{}})}();const r=ie(s);return r?pe(r,oe,!1,e):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.b990481a.js.map
