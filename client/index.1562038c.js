import{c as e,d as t,b as n,z as a,g as s,e as r,f as i,j as o,h as c,i as d,k as l,A as h,l as u,m,a as f,B as v,C as g}from"./chunk.4aa87d6d.js";import"./chunk.3e634f4b.js";function b(e){var t,n,v,b,w,k,p,x,E,y,_,C,N,j,A,L,M,I;return a(e.onwindowresize),document.body.addEventListener("mousemove",e.update),document.body.addEventListener("touchstart",e.update),document.body.addEventListener("touchmove",e.update),{c(){t=s(),n=s(),v=r("canvas"),b=s(),w=r("header"),k=r("div"),p=r("a"),x=i("Mail"),E=s(),y=r("a"),_=i("Github"),C=s(),N=r("a"),j=i("Twitter"),A=s(),L=r("a"),M=i("LinkedIn"),this.h()},l(e){t=o(e,"\n\n"),n=o(e,"\n\n"),v=c(e,"CANVAS",{class:!0},!1),d(v).forEach(l),b=o(e,"\n\n"),w=c(e,"HEADER",{},!1);var a=d(w);k=c(a,"DIV",{class:!0},!1);var s=d(k);p=c(s,"A",{href:!0,target:!0,class:!0},!1);var r=d(p);x=o(r,"Mail"),r.forEach(l),E=o(s,"\n    "),y=c(s,"A",{href:!0,target:!0,class:!0},!1);var i=d(y);_=o(i,"Github"),i.forEach(l),C=o(s,"\n    "),N=c(s,"A",{href:!0,target:!0,class:!0},!1);var h=d(N);j=o(h,"Twitter"),h.forEach(l),A=o(s,"\n    "),L=c(s,"A",{href:!0,target:!0,class:!0},!1);var u=d(L);M=o(u,"LinkedIn"),u.forEach(l),s.forEach(l),a.forEach(l),this.h()},h(){document.title="Oskar Eriksson | Interactive Developer & Technical Director",v.className="svelte-1j00dwm",p.href="mailto:oskar@oskareriksson.se",p.target="_blank",p.className="svelte-1j00dwm",y.href="https://github.com/theodeus",y.target="_blank",y.className="svelte-1j00dwm",N.href="https://twitter.com/_oskareriksson",N.target="_blank",N.className="svelte-1j00dwm",L.href="https://www.linkedin.com/in/oskar-eriksson-00422446/",L.target="_blank",L.className="svelte-1j00dwm",k.className="svelte-1j00dwm",I=h(window,"resize",e.onwindowresize)},m(a,s){u(a,t,s),u(a,n,s),u(a,v,s),g(()=>e.canvas_1_binding(v,null)),u(a,b,s),u(a,w,s),m(w,k),m(k,p),m(p,x),m(k,E),m(k,y),m(y,_),m(k,C),m(k,N),m(N,j),m(k,A),m(k,L),m(L,M)},p(e,t){e.items&&(t.canvas_1_binding(null,v),t.canvas_1_binding(v,null))},i:f,o:f,d(a){document.body.removeEventListener("mousemove",e.update),document.body.removeEventListener("touchstart",e.update),document.body.removeEventListener("touchmove",e.update),a&&(l(t),l(n),l(v)),e.canvas_1_binding(null,v),a&&(l(b),l(w)),I()}}}function w(e,t,n){let a,s,r,i,o,c,d,l,h,u,m,f,g,b=!1,w=e=>{if(n("clientX",f=e.clientX),n("clientY",g=e.clientY),isNaN(f)||isNaN(g)){if(!e.touches)return;if(e.touches[0]&&e.touches[0].clientX&&e.touches[0].clientY)return requestAnimationFrame(k.bind(null,e.touches[0].clientX,e.touches[0].clientY))}l.forEach(e=>{for(o=0;o<h;o++)i.lineWidth=70*Math.random()+10,n("i",o),n("offscreenCtx",i),i.beginPath(),e.x=f+(100*Math.random()-50),e.y=g+(100*Math.random()-50),i.fillStyle=`rgba(${~~(e.x/c*255)}, ${~~(e.y/d*255)}, 150, 0.2)`,n("offscreenCtx",i),i.ellipse(e.x,e.y,u,m,6*Math.random()/Math.PI,0,2*Math.PI),i.fill(),i.closePath()}),r.save(),r.filter="blur(250px)",n("ctx",r),r.drawImage(s,0,0),r.restore(),r.fillStyle="rgba(30, 30, 30, 0.3",n("ctx",r),r.fillRect(0,0,c,d)},k=(e,t)=>{for(let n=0;n<25;n++)setTimeout(w({clientX:e+10*n,clientY:t+10*n}),16*n)};return v(()=>{n("mounted",b=!0)}),e.$$.update=((e={innerWidth:1,mounted:1,innerHeight:1,canvas:1,offscreenCanvas:1})=>{(e.innerWidth||e.mounted||e.innerHeight||e.canvas||e.offscreenCanvas)&&c&&b&&(n("strokes",h=10),n("offscreenCanvas",s=document.createElement("canvas")),a.width=c,n("canvas",a),s.width=c+100,n("offscreenCanvas",s),a.height=d,n("canvas",a),s.height=d+100,n("offscreenCanvas",s),n("brushRadiusX",u=c/35),n("brushRadiusY",m=d/35),n("current",l=[{x:c/2,y:d/2},{x:c/2,y:d/2},{x:c/2,y:d/2},{x:c/2,y:d/2},{x:c/2,y:d/2}]),n("ctx",r=a.getContext("2d")),n("offscreenCtx",i=s.getContext("2d")))}),{canvas:a,innerWidth:c,innerHeight:d,update:w,onwindowresize:function(){c=window.innerWidth,n("innerWidth",c),d=window.innerHeight,n("innerHeight",d)},canvas_1_binding:function(e,t){n("canvas",a=e)}}}export default class extends e{constructor(e){super(),t(this,e,w,b,n,[])}}
//# sourceMappingURL=index.1562038c.js.map
