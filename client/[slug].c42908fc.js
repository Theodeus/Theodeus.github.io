import{c as t,d as s,b as o,g as a,e,f as n,j as r,h as i,i as p,k as c,l,m as h,r as u,a as m}from"./chunk.e7473d5b.js";function f(t){var s,o,f,d,g,j,v=t.post.title,x=t.post.html;return document.title=s=t.post.title,{c(){o=a(),f=e("h1"),d=n(v),g=a(),j=e("div"),this.h()},l(t){o=r(t,"\n\n"),f=i(t,"H1",{},!1);var s=p(f);d=r(s,v),s.forEach(c),g=r(t,"\n\n"),j=i(t,"DIV",{class:!0},!1),p(j).forEach(c),this.h()},h(){j.className="content svelte-gnxal1"},m(t,s){l(t,o,s),l(t,f,s),h(f,d),l(t,g,s),l(t,j,s),j.innerHTML=x},p(t,o){t.post&&s!==(s=o.post.title)&&(document.title=s),t.post&&v!==(v=o.post.title)&&u(d,v),t.post&&x!==(x=o.post.html)&&(j.innerHTML=x)},i:m,o:m,d(t){t&&(c(o),c(f),c(g),c(j))}}}async function d({params:t,query:s}){const o=await this.fetch(`blog/${t.slug}.json`),a=await o.json();if(200===o.status)return{post:a};this.error(o.status,a.message)}function g(t,s,o){let{post:a}=s;return t.$set=(t=>{"post"in t&&o("post",a=t.post)}),{post:a}}export default class extends t{constructor(t){super(),s(this,t,g,f,o,["post"])}}export{d as preload};
//# sourceMappingURL=[slug].c42908fc.js.map
