import{c as e,d as n,e as t,f as a,g as r,h as i,a as s,i as o,F as c,l as u,j as d,k as h,o as l,m as f,n as v,p as m,G as g,q as b,r as w,b as k,H as p,I as x,J as E}from"./chunk.941586a1.js";import{a as y}from"./chunk.f44d252c.js";function _(e){var n,t,a,r,i,s,o,p,_,C,N,j,A,L,M,H,I,W,X,Y,P,z;return c(e.onwindowresize),document.body.addEventListener("mousemove",e.update),document.body.addEventListener("touchstart",e.update),document.body.addEventListener("touchmove",e.update),{c:function(){n=u(),t=u(),a=d("canvas"),r=u(),i=d("header"),s=d("p"),o=d("a"),p=h("Mail"),C=u(),N=d("a"),j=h("Github"),L=u(),M=d("a"),H=h("Twitter"),W=u(),X=d("a"),Y=h("LinkedIn"),this.h()},l:function(e){n=l(e,"\r\n\r\n"),t=l(e,"\r\n\r\n"),a=f(e,"CANVAS",{class:!0},!1),v(a).forEach(m),r=l(e,"\r\n\r\n"),i=f(e,"HEADER",{},!1);var c=v(i);s=f(c,"P",{class:!0},!1);var u=v(s);o=f(u,"A",{href:!0,target:!0,class:!0},!1);var d=v(o);p=l(d,"Mail"),d.forEach(m),C=l(u,"\r\n    "),N=f(u,"A",{href:!0,target:!0,class:!0},!1);var h=v(N);j=l(h,"Github"),h.forEach(m),L=l(u,"\r\n    "),M=f(u,"A",{href:!0,target:!0,class:!0},!1);var g=v(M);H=l(g,"Twitter"),g.forEach(m),W=l(u,"\r\n    "),X=f(u,"A",{href:!0,target:!0,class:!0},!1);var b=v(X);Y=l(b,"LinkedIn"),b.forEach(m),u.forEach(m),c.forEach(m),this.h()},h:function(){document.title="Oskar Eriksson | Interactive Developer & Technical Director",a.className="svelte-ju0irr",o.href="mailto:oskar@oskareriksson.se",o.target="_blank",o.className="svelte-ju0irr",N.href="https://github.com/theodeus",N.target="_blank",N.className="svelte-ju0irr",M.href="https://twitter.com/_oskareriksson",M.target="_blank",M.className="svelte-ju0irr",X.href="https://www.linkedin.com/in/oskar-eriksson-00422446/",X.target="_blank",X.className="svelte-ju0irr",s.className="svelte-ju0irr",z=g(window,"resize",e.onwindowresize)},m:function(c,u){b(c,n,u),b(c,t,u),b(c,a,u),x(function(){return e.canvas_1_binding(a,null)}),b(c,r,u),b(c,i,u),w(i,s),w(s,o),w(o,p),w(s,C),w(s,N),w(N,j),w(s,L),w(s,M),w(M,H),w(s,W),w(s,X),w(X,Y)},p:function(e,n){e.items&&(n.canvas_1_binding(null,a),n.canvas_1_binding(a,null))},i:function(e){_||c(function(){(_=E(o,y,{duration:2e3})).start()}),A||c(function(){(A=E(N,y,{duration:2e3})).start()}),I||c(function(){(I=E(M,y,{duration:2e3})).start()}),P||c(function(){(P=E(X,y,{duration:2e3})).start()})},o:k,d:function(s){document.body.removeEventListener("mousemove",e.update),document.body.removeEventListener("touchstart",e.update),document.body.removeEventListener("touchmove",e.update),s&&(m(n),m(t),m(a)),e.canvas_1_binding(null,a),s&&(m(r),m(i)),z()}}}function C(e,n,t){var a,r,i,s,o,c,u,d,h,l,f,v,m,g=!1,b=function(e){if(t("clientX",v=e.clientX),t("clientY",m=e.clientY),isNaN(v)||isNaN(m)){if(!e.touches)return;if(e.touches[0]&&e.touches[0].clientX&&e.touches[0].clientY)return requestAnimationFrame(w.bind(null,e.touches[0].clientX,e.touches[0].clientY))}d.forEach(function(e){for(o=0;o<h;o++)s.lineWidth=70*Math.random()+10,t("i",o),t("offscreenCtx",s),s.beginPath(),e.x=v+(100*Math.random()-50),e.y=m+(100*Math.random()-50),s.fillStyle="rgba(".concat(~~(e.x/c*255),", ").concat(~~(e.y/u*255),", 150, 0.2)"),t("offscreenCtx",s),s.ellipse(e.x,e.y,l,f,6*Math.random()/Math.PI,0,2*Math.PI),s.fill(),s.closePath()}),i.save(),i.filter="blur(250px)",t("ctx",i),i.drawImage(r,0,0),i.restore(),i.fillStyle="rgba(30, 30, 30, 0.3",t("ctx",i),i.fillRect(0,0,c,u)},w=function(e,n){for(var t=0;t<25;t++)setTimeout(b({clientX:e+10*t,clientY:n+10*t}),16*t)};return p(function(){t("mounted",g=!0)}),e.$$.update=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{innerWidth:1,mounted:1,innerHeight:1,canvas:1,offscreenCanvas:1};(e.innerWidth||e.mounted||e.innerHeight||e.canvas||e.offscreenCanvas)&&c&&g&&(t("strokes",h=10),t("offscreenCanvas",r=document.createElement("canvas")),a.width=c,t("canvas",a),r.width=c+100,t("offscreenCanvas",r),a.height=u,t("canvas",a),r.height=u+100,t("offscreenCanvas",r),t("brushRadiusX",l=c/35),t("brushRadiusY",f=u/35),t("current",d=[{x:c/2,y:u/2},{x:c/2,y:u/2},{x:c/2,y:u/2},{x:c/2,y:u/2},{x:c/2,y:u/2}]),t("ctx",i=a.getContext("2d")),t("offscreenCtx",s=r.getContext("2d")))},{canvas:a,innerWidth:c,innerHeight:u,update:b,onwindowresize:function(){c=window.innerWidth,t("innerWidth",c),u=window.innerHeight,t("innerHeight",u)},canvas_1_binding:function(e,n){t("canvas",a=e)}}}export default(function(c){function u(e){var o;return n(this,u),o=t(this,a(u).call(this)),r(i(o),e,C,_,s,[]),o}return e(u,o),u}());
//# sourceMappingURL=index.2ac48679.js.map
