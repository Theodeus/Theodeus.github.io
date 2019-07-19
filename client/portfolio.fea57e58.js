import{c as e,d as a,b as t,e as s,g as n,f as r,h as i,i as c,j as o,k as l,E as h,l as g,m as p,r as u,z as m,D as d,a as f,o as $}from"./chunk.e7473d5b.js";import{a as b}from"./chunk.dc4c6187.js";function v(e){var a,t;return{c(){a=s("span"),t=r("No link available"),this.h()},l(e){a=i(e,"SPAN",{class:!0},!1);var s=c(a);t=o(s,"No link available"),s.forEach(l),this.h()},h(){a.className="nolink svelte-6l9039"},m(e,s){g(e,a,s),p(a,t)},p:f,d(e){e&&l(a)}}}function T(e){var a,t;return{c(){a=s("a"),t=r("Link"),this.h()},l(e){a=i(e,"A",{href:!0,target:!0,class:!0},!1);var s=c(a);t=o(s,"Link"),s.forEach(l),this.h()},h(){a.href=e.caseLink,a.target="_blank",a.className="svelte-6l9039"},m(e,s){g(e,a,s),p(a,t)},p(e,t){e.caseLink&&(a.href=t.caseLink)},d(e){e&&l(a)}}}function y(e){var a,t,$,y,k,w,I,E,D,x,R,j,L,S,C,M,A,P,N,W,J,H,V,B,G,F,O,X,_;function q(e){return e.caseLink?T:v}var z=q(e),K=z(e);return{c(){a=s("article"),K.c(),t=n(),$=s("h2"),y=r(e.caseTitle),k=n(),w=s("h3"),I=r(e.caseRole),E=n(),D=s("img"),R=n(),j=s("h4"),L=r("Describe it!"),S=n(),C=s("p"),M=r(e.caseDescription),A=n(),P=s("h4"),N=r("What did you do?"),W=n(),J=s("p"),H=r(e.caseExecution),V=n(),B=s("h4"),G=r("Tech?"),F=n(),O=s("p"),X=r(e.caseTech),this.h()},l(s){a=i(s,"ARTICLE",{class:!0},!1);var n=c(a);K.l(n),t=o(n,"\r\n    "),$=i(n,"H2",{},!1);var r=c($);y=o(r,e.caseTitle),r.forEach(l),k=o(n,"\r\n    "),w=i(n,"H3",{},!1);var h=c(w);I=o(h,e.caseRole),h.forEach(l),E=o(n,"\r\n    "),D=i(n,"IMG",{src:!0,alt:!0,class:!0},!1),c(D).forEach(l),R=o(n,"\r\n    "),j=i(n,"H4",{class:!0},!1);var g=c(j);L=o(g,"Describe it!"),g.forEach(l),S=o(n,"\r\n    "),C=i(n,"P",{},!1);var p=c(C);M=o(p,e.caseDescription),p.forEach(l),A=o(n,"\r\n    "),P=i(n,"H4",{class:!0},!1);var u=c(P);N=o(u,"What did you do?"),u.forEach(l),W=o(n,"\r\n    "),J=i(n,"P",{},!1);var m=c(J);H=o(m,e.caseExecution),m.forEach(l),V=o(n,"\r\n    "),B=i(n,"H4",{class:!0},!1);var d=c(B);G=o(d,"Tech?"),d.forEach(l),F=o(n,"\r\n    "),O=i(n,"P",{},!1);var f=c(O);X=o(f,e.caseTech),f.forEach(l),n.forEach(l),this.h()},h(){D.src=e.caseImage,D.alt=x=e.caseTitle+" case image",D.className="svelte-6l9039",j.className="svelte-6l9039",P.className="svelte-6l9039",B.className="svelte-6l9039",a.className="svelte-6l9039",h(a,"red",e.red),h(a,"blue",e.blue),h(a,"green",e.green),h(a,"orange",e.orange),h(a,"purple",e.purple)},m(e,s){g(e,a,s),K.m(a,null),p(a,t),p(a,$),p($,y),p(a,k),p(a,w),p(w,I),p(a,E),p(a,D),p(a,R),p(a,j),p(j,L),p(a,S),p(a,C),p(C,M),p(a,A),p(a,P),p(P,N),p(a,W),p(a,J),p(J,H),p(a,V),p(a,B),p(B,G),p(a,F),p(a,O),p(O,X)},p(e,s){z===(z=q(s))&&K?K.p(e,s):(K.d(1),(K=z(s))&&(K.c(),K.m(a,t))),e.caseTitle&&u(y,s.caseTitle),e.caseRole&&u(I,s.caseRole),e.caseImage&&(D.src=s.caseImage),e.caseTitle&&x!==(x=s.caseTitle+" case image")&&(D.alt=x),e.caseDescription&&u(M,s.caseDescription),e.caseExecution&&u(H,s.caseExecution),e.caseTech&&u(X,s.caseTech),e.red&&h(a,"red",s.red),e.blue&&h(a,"blue",s.blue),e.green&&h(a,"green",s.green),e.orange&&h(a,"orange",s.orange),e.purple&&h(a,"purple",s.purple)},i(e){_||m(()=>{(_=d(a,b,{})).start()})},o:f,d(e){e&&l(a),K.d()}}}function k(e,a,t){let{caseTitle:s,caseRole:n,caseDescription:r,caseExecution:i,caseLink:c,caseImage:o,caseTech:l,orange:h,blue:g,red:p,green:u,purple:m}=a;return e.$set=(e=>{"caseTitle"in e&&t("caseTitle",s=e.caseTitle),"caseRole"in e&&t("caseRole",n=e.caseRole),"caseDescription"in e&&t("caseDescription",r=e.caseDescription),"caseExecution"in e&&t("caseExecution",i=e.caseExecution),"caseLink"in e&&t("caseLink",c=e.caseLink),"caseImage"in e&&t("caseImage",o=e.caseImage),"caseTech"in e&&t("caseTech",l=e.caseTech),"orange"in e&&t("orange",h=e.orange),"blue"in e&&t("blue",g=e.blue),"red"in e&&t("red",p=e.red),"green"in e&&t("green",u=e.green),"purple"in e&&t("purple",m=e.purple)}),{caseTitle:s,caseRole:n,caseDescription:r,caseExecution:i,caseLink:c,caseImage:o,caseTech:l,orange:h,blue:g,red:p,green:u,purple:m}}class w extends e{constructor(e){super(),a(this,e,k,y,t,["caseTitle","caseRole","caseDescription","caseExecution","caseLink","caseImage","caseTech","orange","blue","red","green","purple"])}}function I(e){var a,t,r,h,u,m,d,b,v,T,y,k,I=new w({props:{caseTitle:"Battlefield V",caseRole:"UI Engineer & Motion Capture TD",caseDescription:"One of EA's most prominent titles takes on the second world war.",caseExecution:"I worked on The Company, where the player equips their characters, via visual scripting in the Frostbite engine. I also worked on the Armory and End of Round screens with a React based web stack. In addition, I was the Motion Capture TD for the project during my time at Goodbye Kansas. Double credits!",caseLink:"https://www.ea.com/en-gb/games/battlefield/battlefield-5",caseImage:"battlefield.jpg",caseTech:"TypeScript, React, MobX, Frostbite Engine, Python, Motionbuilder, Motion Analysis",blue:!0}}),E=new w({props:{caseTitle:"Overkill's The Walking Dead - Trailers",caseRole:"Motion Capture TD",caseDescription:"Jawdroppingly (it's a word) gorgeous trailers that won a bunch of awards.",caseExecution:"Not only did we make these trailers for the game - we did VFX for the original TV-series too! My role was to streamline the pipeline, from pre-shoot to delivery.",caseLink:"https://vimeo.com/308388026",caseImage:"grant.jpg",caseTech:"Python, ffmpeg, Electron, Motionbuilder, Motion Analysis",red:!0}}),D=new w({props:{caseTitle:"Rage 2",caseRole:"Motion Capture TD",caseDescription:"Post apocalyptic mayhem.",caseExecution:"I acted as a counter weight for one of the actors - one of my most technically challenging tasks yet. Also, pipeline.",caseLink:"https://bethesda.net/en/game/rage2",caseImage:"rage2.jpg",caseTech:"Python, ffmpeg, Electron, Motionbuilder, Motion Analysis",orange:!0}}),x=new w({props:{caseTitle:"Blackguard Base Builder",caseRole:"Interactive Developer",caseDescription:"Build NPC bases for SuperCell's enormously popular game Boombeach, in your browser.",caseExecution:"I built the isometric building tool, where some of the challenges were converting large amounts of assets, detailed animation work and gesture recognition on mobile devices.",caseLink:"https://basebuilder.boombeach.com",caseImage:"basebuilder.jpg",caseTech:"JavaScript, Pixi.js",blue:!0}}),R=new w({props:{caseTitle:"Slasher",caseRole:"Interactive Developer",caseDescription:"Confront a killer, try to figure out who he/she is and dig deeper into the lore of the TV-series from Chiller TV.",caseExecution:"I built the entire interactive experience, including non-linear video, voice recognition, dialogue engine, CMS and binaural audio.",caseImage:"slasher.jpg",caseTech:"JavaScript, HTML, CSS, Vue.js",red:!0}}),j=new w({props:{caseTitle:"Deja View",caseRole:"Technical Director",caseDescription:"Non-linear video experience where you talk to the characters on your phone.",caseExecution:"This was a massive project where I was involved from concept to launch. I designed the architecture including an automated telephone system, voice recognition, a CMS for scriptwriting. I also implemented a non-linear video player, a dialogue engine and the static site.",caseLink:"https://vimeo.com/185792417",caseImage:"dejaview.jpg",caseTech:"JavaScript, HTML, CSS, PHP, Python, Asterisk",purple:!0}}),L=new w({props:{caseTitle:"My Watch Begins",caseRole:"Technical Director, Producer",caseDescription:"Record your oath with Jon Snow and take the black in this minisite, building up for GoT S2 on Blu-ray and DVD.",caseExecution:"Taking on the role as Technical Producer, I managed everything from the dev team to budget and planning. I also designed the architecture and implemented a flash based recording module, karaoke style.",caseImage:"got.jpg",caseTech:"Flash, JavaScript, HTML, CSS, C++",blue:!0}}),S=new w({props:{caseTitle:"Jam With Chrome",caseRole:"Technical Director",caseDescription:"Online jamming in your browser, in perfect sync, across the globe.",caseExecution:"I lead the dev team, designed the architecture, built the interactive audio engine and music logic including bespoke samplers and effects and directed the visual behaviours of the instruments.",caseLink:"https://vimeo.com/185792419",caseImage:"jam.jpg",caseTech:"JavaScript, Go, Web Audio, Websockets, SVG",green:!0}}),C=new w({props:{caseTitle:"Plink",caseRole:"Interactive Developer",caseDescription:"One of the very first Web Audio applications, with over 10 million visits to date.",caseExecution:"I built the site back in 2011, when the Web Audio API only was available in Canary Chrome. It was also the first time I used Node.js and Websockets.",caseLink:"http://dinahmoelabs.com/_plink/",caseImage:"plink.png",caseTech:"JavaScript, Canvas, Websockets, Node.js",purple:!0}}),M=new w({props:{caseTitle:"Tuna.js",caseRole:"Creator & Maintainer",caseDescription:"A popular Web Audio effects library.",caseExecution:"What started out as a hobby project of mine was integrated into many of the projects above and released as open source.",caseLink:"https://github.com/Theodeus/tuna",caseImage:"tuna.png",caseTech:"JavaScript, Web Audio",blue:!0}});return{c(){a=n(),t=s("main"),I.$$.fragment.c(),r=n(),E.$$.fragment.c(),h=n(),D.$$.fragment.c(),u=n(),x.$$.fragment.c(),m=n(),R.$$.fragment.c(),d=n(),j.$$.fragment.c(),b=n(),L.$$.fragment.c(),v=n(),S.$$.fragment.c(),T=n(),C.$$.fragment.c(),y=n(),M.$$.fragment.c(),this.h()},l(e){a=o(e,"\r\n\r\n\r\n\r\n\r\n\r\n"),t=i(e,"MAIN",{},!1);var s=c(t);I.$$.fragment.l(s),r=o(s,"\r\n\t"),E.$$.fragment.l(s),h=o(s,"\r\n\t"),D.$$.fragment.l(s),u=o(s,"\r\n\t"),x.$$.fragment.l(s),m=o(s,"\r\n\t"),R.$$.fragment.l(s),d=o(s,"\r\n\t"),j.$$.fragment.l(s),b=o(s,"\r\n\t"),L.$$.fragment.l(s),v=o(s,"\r\n\t"),S.$$.fragment.l(s),T=o(s,"\r\n\t"),C.$$.fragment.l(s),y=o(s,"\r\n\t"),M.$$.fragment.l(s),s.forEach(l),this.h()},h(){document.title="Portfolio"},m(e,s){g(e,a,s),g(e,t,s),$(I,t,null),p(t,r),$(E,t,null),p(t,h),$(D,t,null),p(t,u),$(x,t,null),p(t,m),$(R,t,null),p(t,d),$(j,t,null),p(t,b),$(L,t,null),p(t,v),$(S,t,null),p(t,T),$(C,t,null),p(t,y),$(M,t,null),k=!0},p:f,i(e){k||(I.$$.fragment.i(e),E.$$.fragment.i(e),D.$$.fragment.i(e),x.$$.fragment.i(e),R.$$.fragment.i(e),j.$$.fragment.i(e),L.$$.fragment.i(e),S.$$.fragment.i(e),C.$$.fragment.i(e),M.$$.fragment.i(e),k=!0)},o(e){I.$$.fragment.o(e),E.$$.fragment.o(e),D.$$.fragment.o(e),x.$$.fragment.o(e),R.$$.fragment.o(e),j.$$.fragment.o(e),L.$$.fragment.o(e),S.$$.fragment.o(e),C.$$.fragment.o(e),M.$$.fragment.o(e),k=!1},d(e){e&&(l(a),l(t)),I.$destroy(),E.$destroy(),D.$destroy(),x.$destroy(),R.$destroy(),j.$destroy(),L.$destroy(),S.$destroy(),C.$destroy(),M.$destroy()}}}export default class extends e{constructor(e){super(),a(this,e,null,I,t,[])}}
//# sourceMappingURL=portfolio.fea57e58.js.map
