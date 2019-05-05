import{c as t,d as n,e,f as a,g as i,h as r,a as o,i as s,F as c,l as d,j as u,k as h,o as l,m as v,n as f,p as m,G as g,q as y,r as p,b,H as x,I as k,J as w}from"./chunk.941586a1.js";function E(t,n){var e=n.delay,a=void 0===e?0:e,i=n.duration,r=void 0===i?400:i,o=+getComputedStyle(t).opacity;return{delay:a,duration:r,css:function(t){return"opacity: ".concat(t*o)}}}function _(t){var n,e,a,i,r,o,s,x,_,L,M,A,H,N,I,W,P,z,T,C,D,G;return c(t.onwindowresize),document.body.addEventListener("mousemove",t.update),document.body.addEventListener("touchstart",t.update),document.body.addEventListener("touchmove",t.update),{c:function(){n=d(),e=d(),a=u("canvas"),i=d(),r=u("header"),o=u("p"),s=u("a"),x=h("Mail"),L=d(),M=u("a"),A=h("Github"),N=d(),I=u("a"),W=h("Twitter"),z=d(),T=u("a"),C=h("LinkedIn"),this.h()},l:function(t){n=l(t,"\n\n"),e=l(t,"\n        \n"),a=v(t,"CANVAS",{class:!0},!1),f(a).forEach(m),i=l(t,"\n        \n"),r=v(t,"HEADER",{},!1);var c=f(r);o=v(c,"P",{class:!0},!1);var d=f(o);s=v(d,"A",{href:!0,target:!0,class:!0},!1);var u=f(s);x=l(u,"Mail"),u.forEach(m),L=l(d,"\n\t\t"),M=v(d,"A",{href:!0,target:!0,class:!0},!1);var h=f(M);A=l(h,"Github"),h.forEach(m),N=l(d,"\n\t\t"),I=v(d,"A",{href:!0,target:!0,class:!0},!1);var g=f(I);W=l(g,"Twitter"),g.forEach(m),z=l(d,"\n\t\t"),T=v(d,"A",{href:!0,target:!0,class:!0},!1);var y=f(T);C=l(y,"LinkedIn"),y.forEach(m),d.forEach(m),c.forEach(m),this.h()},h:function(){document.title="Oskar Eriksson | Interactive Developer & Technical Director",a.className="svelte-tdig86",s.href="mailto:oskar@oskareriksson.se",s.target="_blank",s.className="svelte-tdig86",M.href="https://github.com/theodeus",M.target="_blank",M.className="svelte-tdig86",I.href="https://twitter.com/_oskareriksson",I.target="_blank",I.className="svelte-tdig86",T.href="https://www.linkedin.com/in/oskar-eriksson-00422446/",T.target="_blank",T.className="svelte-tdig86",o.className="svelte-tdig86",G=g(window,"resize",t.onwindowresize)},m:function(c,d){y(c,n,d),y(c,e,d),y(c,a,d),k(function(){return t.canvas_1_binding(a,null)}),y(c,i,d),y(c,r,d),p(r,o),p(o,s),p(s,x),p(o,L),p(o,M),p(M,A),p(o,N),p(o,I),p(I,W),p(o,z),p(o,T),p(T,C)},p:function(t,n){t.items&&(n.canvas_1_binding(null,a),n.canvas_1_binding(a,null))},i:function(t){_||c(function(){(_=w(s,E,{duration:2e3})).start()}),H||c(function(){(H=w(M,E,{duration:2e3})).start()}),P||c(function(){(P=w(I,E,{duration:2e3})).start()}),D||c(function(){(D=w(T,E,{duration:2e3})).start()})},o:b,d:function(o){document.body.removeEventListener("mousemove",t.update),document.body.removeEventListener("touchstart",t.update),document.body.removeEventListener("touchmove",t.update),o&&(m(n),m(e),m(a)),t.canvas_1_binding(null,a),o&&(m(i),m(r)),G()}}}function L(t,n,e){var a,i,r,o,s,c,d,u,h,l=!1;return x(function(){e("mounted",l=!0)}),t.$$.update=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{innerWidth:1,mounted:1,innerHeight:1,canvas:1};(t.innerWidth||t.mounted||t.innerHeight||t.canvas)&&c&&l&&(e("strokes",h=10),a.width=c,e("canvas",a),a.height=d,e("canvas",a),e("current",u=[{x:c/2,y:d/2},{x:c/2,y:d/2},{x:c/2,y:d/2},{x:c/2,y:d/2},{x:c/2,y:d/2}]),e("ctx",i=a.getContext("2d")))},{canvas:a,innerWidth:c,innerHeight:d,update:function(){u.forEach(function(t){for(r=0;r<h;r++)i.lineWidth=70*Math.random()+10,e("i",r),e("ctx",i),i.beginPath(),e("prevX",o=t.x),e("prevY",s=t.y),t.x=t.x+(30*Math.random()-15),t.y=t.y+(30*Math.random()-15),t.x<0?(t.x=c,e("prevX",o=t.x)):t.x>c&&(t.x=0,e("prevX",o=t.x)),t.y<0?(t.y=d,e("prevY",s=t.y)):t.y>d&&(t.y=0,e("prevY",s=t.y)),i.moveTo(o,s),i.fillStyle="rgba(".concat(~~(t.x/c*255),", ").concat(~~(t.y/d*255),", 150, 0.2)"),e("ctx",i),i.ellipse(t.x,t.y,50,40,6*Math.random()/Math.PI,0,2*Math.PI),i.fill(),i.closePath()})},onwindowresize:function(){c=window.innerWidth,e("innerWidth",c),d=window.innerHeight,e("innerHeight",d)},canvas_1_binding:function(t,n){e("canvas",a=t)}}}export default(function(c){function d(t){var s;return n(this,d),s=e(this,a(d).call(this)),i(r(s),t,L,_,o,[]),s}return t(d,s),d}());
//# sourceMappingURL=index.5a15212c.js.map
