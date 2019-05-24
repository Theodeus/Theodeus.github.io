import{a as e,b as t,c as r,d as n,e as s,f as a,g as o,h as i,i as c,j as u,k as l,l as f,m as p,n as h,o as m,p as v,q as d,r as g,s as $,t as b,u as y,v as E,w as x,x as k,y as S,z as _,A as w,B as P,C as R,D as A,E as L}from"./chunk.941586a1.js";import{a as N,b as C}from"./chunk.26d04588.js";function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,s=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){s=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(s)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function U(r){var n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,a=[];function o(t){if(e(r,t)){if(r=t,!n)return;a.forEach(function(e){return e[1]()}),a.forEach(function(e){return e[0](r)})}}return{set:o,update:function(e){o(e(r))},subscribe:function(e){var i=[e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:t];return a.push(i),1===a.length&&(n=s(o)||t),e(r),function(){var e=a.indexOf(i);-1!==e&&a.splice(e,1),0===a.length&&n()}}}}var q={},I=function(){return{}};function O(e){var r,n,s,a,o,i,c,$,b,y,E,x,k,S,_,w;return{c:function(){r=u("nav"),n=u("ul"),s=u("li"),a=u("a"),o=l("home"),c=f(),$=u("li"),b=u("a"),y=l("about"),x=f(),k=u("li"),S=u("a"),_=l("portfolio"),this.h()},l:function(e){r=p(e,"NAV",{class:!0},!1);var t=h(r);n=p(t,"UL",{class:!0},!1);var i=h(n);s=p(i,"LI",{class:!0},!1);var u=h(s);a=p(u,"A",{class:!0,href:!0},!1);var l=h(a);o=m(l,"home"),l.forEach(v),u.forEach(v),c=m(i,"\r\n\t\t"),$=p(i,"LI",{class:!0},!1);var f=h($);b=p(f,"A",{class:!0,href:!0},!1);var d=h(b);y=m(d,"about"),d.forEach(v),f.forEach(v),x=m(i,"\r\n\t\t"),k=p(i,"LI",{class:!0},!1);var g=h(k);S=p(g,"A",{class:!0,href:!0},!1);var E=h(S);_=m(E,"portfolio"),E.forEach(v),g.forEach(v),i.forEach(v),t.forEach(v),this.h()},h:function(){a.className=i=(void 0===e.segment?"selected":"")+" svelte-ka2rh2",a.href=".",s.className="svelte-ka2rh2",b.className=E=("about"===e.segment?"selected":"")+" svelte-ka2rh2",b.href="about",$.className="svelte-ka2rh2",S.className=w=("portfolio"===e.segment?"selected":"")+" svelte-ka2rh2",S.href="portfolio",k.className="svelte-ka2rh2",n.className="svelte-ka2rh2",r.className="svelte-ka2rh2"},m:function(e,t){d(e,r,t),g(r,n),g(n,s),g(s,a),g(a,o),g(n,c),g(n,$),g($,b),g(b,y),g(n,x),g(n,k),g(k,S),g(S,_)},p:function(e,t){e.segment&&i!==(i=(void 0===t.segment?"selected":"")+" svelte-ka2rh2")&&(a.className=i),e.segment&&E!==(E=("about"===t.segment?"selected":"")+" svelte-ka2rh2")&&(b.className=E),e.segment&&w!==(w=("portfolio"===t.segment?"selected":"")+" svelte-ka2rh2")&&(S.className=w)},i:t,o:t,d:function(e){e&&v(r)}}}function D(e,t,r){var n=t.segment;return e.$set=function(e){"segment"in e&&r("segment",n=e.segment)},{segment:n}}var H=function(t){function u(t){var r;return n(this,u),r=s(this,a(u).call(this)),o(i(r),t,D,O,e,["segment"]),r}return r(u,c),u}();function B(e){var t,r,n,s=new H({props:{segment:e.segment}}),a=e.$$slots.default,o=$(a,e,null);return{c:function(){s.$$.fragment.c(),t=f(),r=u("main"),o&&o.c(),this.h()},l:function(e){s.$$.fragment.l(e),t=m(e,"\r\n\r\n"),r=p(e,"MAIN",{class:!0},!1);var n=h(r);o&&o.l(n),n.forEach(v),this.h()},h:function(){r.className="svelte-1d956u8"},m:function(e,a){b(s,e,a),d(e,t,a),d(e,r,a),o&&o.m(r,null),n=!0},p:function(e,t){var r={};e.segment&&(r.segment=t.segment),s.$set(r),o&&o.p&&e.$$scope&&o.p(y(a,t,e),E(a,t,null))},i:function(e){n||(s.$$.fragment.i(e),o&&o.i&&o.i(e),n=!0)},o:function(e){s.$$.fragment.o(e),o&&o.o&&o.o(e),n=!1},d:function(e){s.$destroy(e),e&&(v(t),v(r)),o&&o.d(e)}}}function T(e,t,r){var n=t.segment,s=t.$$slots,a=void 0===s?{}:s,o=t.$$scope;return e.$set=function(e){"segment"in e&&r("segment",n=e.segment),"$$scope"in e&&r("$$scope",o=e.$$scope)},{segment:n,$$slots:a,$$scope:o}}var V=function(t){function u(t){var r;return n(this,u),r=s(this,a(u).call(this)),o(i(r),t,T,B,e,["segment"]),r}return r(u,c),u}();function K(e){var t,r,n=e.error.stack;return{c:function(){t=u("pre"),r=l(n)},l:function(e){t=p(e,"PRE",{},!1);var s=h(t);r=m(s,n),s.forEach(v)},m:function(e,n){d(e,t,n),g(t,r)},p:function(e,t){e.error&&n!==(n=t.error.stack)&&x(r,n)},d:function(e){e&&v(t)}}}function z(e){var r,n,s,a,o,i,c,$,b,y=e.error.message;document.title=r=e.status;var E=e.dev&&e.error.stack&&K(e);return{c:function(){n=f(),s=u("h1"),a=l(e.status),o=f(),i=u("p"),c=l(y),$=f(),E&&E.c(),b=k(),this.h()},l:function(t){n=m(t,"\r\n\r\n"),s=p(t,"H1",{class:!0},!1);var r=h(s);a=m(r,e.status),r.forEach(v),o=m(t,"\r\n\r\n"),i=p(t,"P",{class:!0},!1);var u=h(i);c=m(u,y),u.forEach(v),$=m(t,"\r\n\r\n"),E&&E.l(t),b=k(),this.h()},h:function(){s.className="svelte-13vgy2g",i.className="svelte-13vgy2g"},m:function(e,t){d(e,n,t),d(e,s,t),g(s,a),d(e,o,t),d(e,i,t),g(i,c),d(e,$,t),E&&E.m(e,t),d(e,b,t)},p:function(e,t){e.status&&r!==(r=t.status)&&(document.title=r),e.status&&x(a,t.status),e.error&&y!==(y=t.error.message)&&x(c,y),t.dev&&t.error.stack?E?E.p(e,t):((E=K(t)).c(),E.m(b.parentNode,b)):E&&(E.d(1),E=null)},i:t,o:t,d:function(e){e&&(v(n),v(s),v(o),v(i),v($)),E&&E.d(e),e&&v(b)}}}function G(e,t,r){var n=t.status,s=t.error;return e.$set=function(e){"status"in e&&r("status",n=e.status),"error"in e&&r("error",s=e.error)},{status:n,error:s,dev:!1}}var M=function(t){function u(t){var r;return n(this,u),r=s(this,a(u).call(this)),o(i(r),t,G,z,e,["status","error"]),r}return r(u,c),u}();function W(e){var t,r,n=[e.level1.props],s=e.level1.component;function a(e){for(var t={},r=0;r<n.length;r+=1)t=S(t,n[r]);return{props:t}}if(s)var o=new s(a());return{c:function(){o&&o.$$.fragment.c(),t=k()},l:function(e){o&&o.$$.fragment.l(e),t=k()},m:function(e,n){o&&b(o,e,n),d(e,t,n),r=!0},p:function(e,r){var i=e.level1?_(n,[r.level1.props]):{};if(s!==(s=r.level1.component)){if(o){A();var c=o;P(function(){c.$destroy()}),c.$$.fragment.o(1),R()}s?((o=new s(a())).$$.fragment.c(),o.$$.fragment.i(1),b(o,t.parentNode,t)):o=null}else s&&o.$set(i)},i:function(e){r||(o&&o.$$.fragment.i(e),r=!0)},o:function(e){o&&o.$$.fragment.o(e),r=!1},d:function(e){e&&v(t),o&&o.$destroy(e)}}}function X(e){var t,r=new M({props:{error:e.error,status:e.status}});return{c:function(){r.$$.fragment.c()},l:function(e){r.$$.fragment.l(e)},m:function(e,n){b(r,e,n),t=!0},p:function(e,t){var n={};e.error&&(n.error=t.error),e.status&&(n.status=t.status),r.$set(n)},i:function(e){t||(r.$$.fragment.i(e),t=!0)},o:function(e){r.$$.fragment.o(e),t=!1},d:function(e){r.$destroy(e)}}}function Y(e){var t,r,n,s,a=[X,W],o=[];function i(e){return e.error?0:1}return t=i(e),r=o[t]=a[t](e),{c:function(){r.c(),n=k()},l:function(e){r.l(e),n=k()},m:function(e,r){o[t].m(e,r),d(e,n,r),s=!0},p:function(e,s){var c=t;(t=i(s))===c?o[t].p(e,s):(A(),P(function(){o[c].d(1),o[c]=null}),r.o(1),R(),(r=o[t])||(r=o[t]=a[t](s)).c(),r.i(1),r.m(n.parentNode,n))},i:function(e){s||(r&&r.i(),s=!0)},o:function(e){r&&r.o(),s=!1},d:function(e){o[t].d(e),e&&v(n)}}}function F(e){for(var t,r=[{segment:e.segments[0]},e.level0.props],n={$$slots:{default:[Y]},$$scope:{ctx:e}},s=0;s<r.length;s+=1)n=S(n,r[s]);var a=new V({props:n});return{c:function(){a.$$.fragment.c()},l:function(e){a.$$.fragment.l(e)},m:function(e,r){b(a,e,r),t=!0},p:function(e,t){var n=e.segments||e.level0?_(r,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(n.$$scope={changed:e,ctx:t}),a.$set(n)},i:function(e){t||(a.$$.fragment.i(e),t=!0)},o:function(e){a.$$.fragment.o(e),t=!1},d:function(e){a.$destroy(e)}}}function J(e,t,r){var n=t.stores,s=t.error,a=t.status,o=t.segments,i=t.level0,c=t.level1,u=void 0===c?null:c;return w(q,n),e.$set=function(e){"stores"in e&&r("stores",n=e.stores),"error"in e&&r("error",s=e.error),"status"in e&&r("status",a=e.status),"segments"in e&&r("segments",o=e.segments),"level0"in e&&r("level0",i=e.level0),"level1"in e&&r("level1",u=e.level1)},{stores:n,error:s,status:a,segments:o,level0:i,level1:u}}var Q,Z=function(t){function u(t){var r;return n(this,u),r=s(this,a(u).call(this)),o(i(r),t,J,F,e,["stores","error","status","segments","level0","level1"]),r}return r(u,c),u}(),ee=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],te=[{js:function(){return import("./index.7b225a1d.js")},css:["index.7b225a1d.css"]},{js:function(){return import("./portfolio.6614c906.js")},css:["portfolio.6614c906.css"]},{js:function(){return import("./about.9276be41.js")},css:["about.9276be41.css"]},{js:function(){return import("./index.6eb64f81.js")},css:["index.6eb64f81.css"]},{js:function(){return import("./[slug].a10f833f.js")},css:["[slug].a10f833f.css"]}],re=(Q=decodeURIComponent,[{pattern:/^\/?$/,parts:[{i:0}]},{pattern:/^\/portfolio\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:4,params:function(e){return{slug:Q(e[1])}}}]}]);function ne(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=Ee(new URL(e,document.baseURI));return r?($e[t.replaceState?"replaceState":"pushState"]({id:ve},"",e),ke(r,null).then(function(){})):(location.href=e,new Promise(function(e){}))}var se,ae,oe,ie,ce,ue="undefined"!=typeof __SAPPER__&&__SAPPER__,le=!1,fe=[],pe={page:U({}),preloading:U(null),session:U(ue&&ue.session)};pe.session.subscribe(function(){var e=N(C.mark(function e(t){var r,n,s,a,o,i;return C.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(ie=t,le){e.next=3;break}return e.abrupt("return");case 3:return ce=!0,r=Ee(new URL(location.href)),n=ae={},e.next=8,Pe(r);case 8:if(s=e.sent,a=s.redirect,o=s.props,i=s.branch,n===ae){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,_e(a,i,o,r.page);case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());var he,me=null;var ve,de=1;var ge,$e="undefined"!=typeof history?history:{pushState:function(e,t,r){},replaceState:function(e,t,r){},scrollRestoration:""},be={};function ye(e){var t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(function(e){var r=j(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),n=r[1],s=r[2],a=void 0===s?"":s;"string"==typeof t[n]&&(t[n]=[t[n]]),"object"===L(t[n])?t[n].push(a):t[n]=a}),t}function Ee(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ue.baseUrl))return null;var t=e.pathname.slice(ue.baseUrl.length);if(!ee.some(function(e){return e.test(t)}))for(var r=0;r<re.length;r+=1){var n=re[r],s=n.pattern.exec(t);if(s){var a=ye(e.search),o=n.parts[n.parts.length-1],i=o.params?o.params(s):{},c={path:t,query:a,params:i};return{href:e.href,route:n,match:s,page:c}}}}function xe(){return{x:pageXOffset,y:pageYOffset}}function ke(e,t,r,n){return Se.apply(this,arguments)}function Se(){return(Se=N(C.mark(function e(t,r,n,s){var a,o,i,c,u,l,f,p,h;return C.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r?ve=r:(a=xe(),be[ve]=a,r=ve=++de,be[ve]=n?a:{x:0,y:0}),ve=r,se&&pe.preloading.set(!0),o=me&&me.href===t.href?me.promise:Pe(t),me=null,i=ae={},e.next=8,o;case 8:if(c=e.sent,u=c.redirect,l=c.props,f=c.branch,i===ae){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,_e(u,f,l,t.page);case 16:document.activeElement&&document.activeElement.blur(),n||(p=be[r],s&&(h=document.getElementById(s.slice(1)))&&(p={x:0,y:h.getBoundingClientRect().top}),be[ve]=p,p&&scrollTo(p.x,p.y));case 18:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _e(e,t,r,n){return we.apply(this,arguments)}function we(){return(we=N(C.mark(function e(t,r,n,s){var a,o;return C.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",ne(t.location,{replaceState:!0}));case 2:if(pe.page.set(s),pe.preloading.set(!1),!se){e.next=8;break}se.$set(n),e.next=17;break;case 8:return n.stores={page:{subscribe:pe.page.subscribe},preloading:{subscribe:pe.preloading.subscribe},session:pe.session},e.next=11,oe;case 11:if(e.t0=e.sent,n.level0={props:e.t0},a=document.querySelector("#sapper-head-start"),o=document.querySelector("#sapper-head-end"),a&&o){for(;a.nextSibling!==o;)Ne(a.nextSibling);Ne(a),Ne(o)}se=new Z({target:he,props:n,hydrate:!0});case 17:fe=r,le=!0,ce=!1;case 20:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Pe(e){return Re.apply(this,arguments)}function Re(){return(Re=N(C.mark(function e(t){var r,n,s,a,o,i,c,u;return C.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route,n=t.page,s=n.path.split("/").filter(Boolean),a=null,o={error:null,status:200,segments:[s[0]]},i={fetch:function(e){function t(t,r){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){return fetch(e,t)}),redirect:function(e,t){if(a&&(a.statusCode!==e||a.location!==t))throw new Error("Conflicting redirects");a={statusCode:e,location:t}},error:function(e,t){o.error="string"==typeof t?new Error(t):t,o.status=e}},oe||(oe=ue.preloaded[0]||I.call(i,{path:n.path,query:n.query,params:{}},ie)),u=1,e.prev=7,e.next=10,Promise.all(r.parts.map(function(){var e=N(C.mark(function e(r,a){var c,l,f,p,h,m;return C.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o.segments[u]=s[a+1],r){e.next=3;break}return e.abrupt("return",null);case 3:if(c=u++,l=s[a],ce||!fe[a]||fe[a].segment!==l||fe[a].part!==r.i){e.next=7;break}return e.abrupt("return",fe[a]);case 7:return e.next=9,Le(te[r.i]);case 9:if(f=e.sent,p=f.default,h=f.preload,!le&&ue.preloaded[a+1]){e.next=23;break}if(!h){e.next=19;break}return e.next=16,h.call(i,{path:n.path,query:n.query,params:r.params?r.params(t.match):{}},ie);case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0={};case 20:m=e.t0,e.next=24;break;case 23:m=ue.preloaded[a+1];case 24:return e.abrupt("return",o["level".concat(c)]={component:p,props:m,segment:l,part:r.i});case 25:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()));case 10:c=e.sent,e.next=18;break;case 13:e.prev=13,e.t0=e.catch(7),o.error=e.t0,o.status=500,c=[];case 18:return e.abrupt("return",{redirect:a,props:o,branch:c});case 19:case"end":return e.stop()}},e,null,[[7,13]])}))).apply(this,arguments)}function Ae(e){var t="client/".concat(e);if(!document.querySelector('link[href="'.concat(t,'"]')))return new Promise(function(e,r){var n=document.createElement("link");n.rel="stylesheet",n.href=t,n.onload=function(){return e()},n.onerror=r,document.head.appendChild(n)})}function Le(e){var t="string"==typeof e.css?[]:e.css.map(Ae);return t.unshift(e.js()),Promise.all(t).then(function(e){return e[0]})}function Ne(e){e.parentNode.removeChild(e)}function Ce(e){var t=Ee(new URL(e,document.baseURI));if(t)return me&&e===me.href||function(e,t){me={href:e,promise:t}}(e,Pe(t)),me.promise}function je(e){clearTimeout(ge),ge=setTimeout(function(){Ue(e)},20)}function Ue(e){var t=Ie(e.target);t&&"prefetch"===t.rel&&Ce(t.href)}function qe(e){if(1===function(e){return null===e.which?e.button:e.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var t=Ie(e.target);if(t&&t.href){var r="object"===L(t.href)&&"SVGAnimatedString"===t.href.constructor.name,n=String(r?t.href.baseVal:t.href);if(n!==location.href){if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")&&(r?!t.target.baseVal:!t.target)){var s=new URL(n);if(s.pathname!==location.pathname||s.search!==location.search){var a=Ee(s);if(a)ke(a,null,t.hasAttribute("sapper-noscroll"),s.hash),e.preventDefault(),$e.pushState({id:ve},"",s.href)}}}else location.hash||e.preventDefault()}}}function Ie(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Oe(e){if(be[ve]=xe(),e.state){var t=Ee(new URL(location.href));t?ke(t,e.state.id):location.href=location.href}else(function(e){ve=e})(de=de+1),$e.replaceState({id:ve},"",location.href)}!function(e){var t;"scrollRestoration"in $e&&($e.scrollRestoration="manual"),t=e.target,he=t,addEventListener("click",qe),addEventListener("popstate",Oe),addEventListener("touchstart",Ue),addEventListener("mousemove",je),Promise.resolve().then(function(){var e=location,t=e.hash,r=e.href;$e.replaceState({id:de},"",r);var n,s,a,o,i,c,u,l=new URL(location.href);if(ue.error)return n=location,s=n.pathname,a=n.search,o=ue.session,i=ue.preloaded,c=ue.status,u=ue.error,oe||(oe=i&&i[0]),void _e(null,[],{error:u,status:c,session:o,level0:{props:oe},level1:{props:{status:c,error:u},component:M},segments:i},{path:s,query:ye(a),params:{}});var f=Ee(l);return f?ke(f,de,!1,t):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.0e4a7f61.js.map
