(this["webpackJsonpcorona-simulation"]=this["webpackJsonpcorona-simulation"]||[]).push([[0],{121:function(t,e,n){"use strict";n.r(e);var a=n(0),l=n.n(a),o=n(14),r=n.n(o),c=(n(92),n(93),n(8)),i=n(126),u=n(127),s=n(35),f=n(30),m=n(16),x=n(17);function b(){var t=Object(m.a)(["\n  height: 23px;\n  width: 23px;\n  border-right: ",";\n  border-top: ",";\n  ","\n\n  ","\n\n  transition: background-color linear 0.25s;\n\n  :hover {\n    ","\n\n    z-index: 1000;\n    position: relative;\n  }\n"]);return b=function(){return t},t}var w=x.a.div(b(),(function(t){return t.right?" solid 3px black":" solid 1px lightskyblue"}),(function(t){return t.top?" solid 3px black":" solid 1px lightskyblue"}),(function(t){return"infected"===t.condition?"background-color: crimson;":"immune"===t.condition?"background-color: green\t;":"normal"===t.condition?"background-color: moccasin\t;":"dead"===t.condition?"background-color: dimgray\t;":"background-color: rgb(245,245,245)\t;"}),(function(t){return t.mask?'background-image: url("mask.webp");\n        background-size: cover;':""}),(function(t){return"quarantine"===t.action?"\n        border-".concat(t.hoverPos,": solid 3px black;"):"mask"===t.action?'background-image: url("mask.webp");\n        background-size: cover;':"transform: scale(1.5, 1.5);\n          border: solid 1px lightskyblue;\n          background-color: crimson;"})),p=[[[[{x:-1,y:-1,wall:"left"},{x:-1,y:-1,wall:"top"}],[{x:0,y:0,wall:"left"},{x:0,y:0,wall:"top"}],[{x:0,y:-1,wall:"top"},{x:0,y:0,wall:"top"}],[{x:0,y:0,wall:"left"},{x:-1,y:0,wall:"left"}],[{x:-1,y:-1,wall:"right"},{x:-1,y:-1,wall:"bottom"}],[{x:-2,y:-2,wall:"right"},{x:-2,y:-2,wall:"bottom"}],[{x:-2,y:-2,wall:"right"},{x:-1,y:-1,wall:"left"}],[{x:-2,y:-2,wall:"bottom"},{x:-1,y:-1,wall:"top"}]],[[{x:-1,y:-1,wall:"top"}],[{x:0,y:0,wall:"top"}],[{x:-1,y:0,wall:"left"}]],[[{x:-1,y:0,wall:"top"}],[{x:0,y:0,wall:"top"}]],[[{x:-1,y:1,wall:"top"}],[{x:0,y:0,wall:"top"}],[{x:-1,y:0,wall:"right"}]],[[{x:-1,y:1,wall:"right"},{x:-1,y:1,wall:"top"}],[{x:0,y:0,wall:"right"},{x:0,y:0,wall:"top"}],[{x:0,y:1,wall:"top"},{x:0,y:0,wall:"top"}],[{x:0,y:0,wall:"right"},{x:-1,y:0,wall:"right"}],[{x:-1,y:1,wall:"left"},{x:-1,y:1,wall:"bottom"}],[{x:-2,y:2,wall:"left"},{x:-2,y:2,wall:"bottom"}],[{x:-2,y:2,wall:"left"},{x:-1,y:1,wall:"right"}],[{x:-2,y:2,wall:"bottom"},{x:-1,y:1,wall:"top"}]]],[[[{x:-1,y:-1,wall:"left"}],[{x:0,y:0,wall:"left"}],[{x:0,y:-1,wall:"top"}]],[[{x:0,y:0,wall:"left"},{x:0,y:0,wall:"top"}],[{x:0,y:-1,wall:"top"},{x:0,y:0,wall:"top"}],[{x:0,y:0,wall:"left"},{x:-1,y:0,wall:"left"}],[{x:-1,y:-1,wall:"right"},{x:-1,y:-1,wall:"bottom"}]],[[{x:0,y:0,wall:"top"}]],[[{x:0,y:0,wall:"right"},{x:0,y:0,wall:"top"}],[{x:0,y:1,wall:"top"},{x:0,y:0,wall:"top"}],[{x:0,y:0,wall:"right"},{x:-1,y:0,wall:"right"}],[{x:-1,y:1,wall:"left"},{x:-1,y:1,wall:"bottom"}]],[[{x:-1,y:1,wall:"right"}],[{x:0,y:0,wall:"right"}],[{x:0,y:1,wall:"top"}]]],[[[{x:0,y:-1,wall:"left"}],[{x:0,y:0,wall:"left"}]],[[{x:0,y:0,wall:"left"}]],[],[[{x:0,y:0,wall:"right"}]],[[{x:0,y:1,wall:"right"}],[{x:0,y:0,wall:"right"}]]],[[[{x:1,y:-1,wall:"left"}],[{x:0,y:0,wall:"left"}],[{x:0,y:-1,wall:"bottom"}]],[[{x:0,y:0,wall:"left"},{x:0,y:0,wall:"bottom"}],[{x:0,y:-1,wall:"bottom"},{x:0,y:0,wall:"bottom"}],[{x:0,y:0,wall:"left"},{x:1,y:0,wall:"left"}],[{x:1,y:-1,wall:"right"},{x:1,y:-1,wall:"top"}]],[[{x:0,y:0,wall:"bottom"}]],[[{x:0,y:0,wall:"right"},{x:0,y:0,wall:"bottom"}],[{x:0,y:1,wall:"bottom"},{x:0,y:0,wall:"bottom"}],[{x:0,y:0,wall:"right"},{x:1,y:0,wall:"right"}],[{x:1,y:1,wall:"left"},{x:1,y:1,wall:"top"}]],[[{x:1,y:1,wall:"right"}],[{x:0,y:0,wall:"right"}],[{x:0,y:1,wall:"bottom"}]]],[[[{x:1,y:-1,wall:"left"},{x:1,y:-1,wall:"bottom"}],[{x:0,y:0,wall:"left"},{x:0,y:0,wall:"bottom"}],[{x:0,y:-1,wall:"bottom"},{x:0,y:0,wall:"bottom"}],[{x:0,y:0,wall:"left"},{x:1,y:0,wall:"left"}],[{x:1,y:-1,wall:"right"},{x:1,y:-1,wall:"top"}],[{x:2,y:-2,wall:"right"},{x:2,y:-2,wall:"top"}],[{x:2,y:-2,wall:"right"},{x:1,y:-1,wall:"left"}],[{x:2,y:-2,wall:"top"},{x:1,y:-1,wall:"bottom"}]],[[{x:1,y:-1,wall:"bottom"}],[{x:0,y:0,wall:"bottom"}],[{x:1,y:0,wall:"left"}]],[[{x:1,y:0,wall:"bottom"}],[{x:0,y:0,wall:"bottom"}]],[[{x:1,y:1,wall:"bottom"}],[{x:0,y:0,wall:"bottom"}],[{x:1,y:0,wall:"right"}]],[[{x:1,y:1,wall:"right"},{x:1,y:1,wall:"bottom"}],[{x:0,y:0,wall:"right"},{x:0,y:0,wall:"bottom"}],[{x:0,y:1,wall:"bottom"},{x:0,y:0,wall:"bottom"}],[{x:0,y:0,wall:"right"},{x:1,y:0,wall:"right"}],[{x:1,y:1,wall:"left"},{x:1,y:1,wall:"top"}],[{x:2,y:2,wall:"left"},{x:2,y:2,wall:"top"}],[{x:2,y:2,wall:"left"},{x:1,y:1,wall:"right"}],[{x:2,y:2,wall:"top"},{x:1,y:1,wall:"bottom"}]]]],y=Object(a.memo)((function(t){var e=Object(a.useState)(),n=Object(c.a)(e,2),o=n[0],r=n[1],i=function(e,n){"virus"===t.action?function(e,n){t.setCells((function(a){var l=Object(f.a)(a),o=Object(f.a)(l[e]),r=Object(s.a)({},o[n]);return r.state="infected",r.timeLeftToRecover=t.infectionDuration,o[n]=r,l[e]=o,l}))}(e,n):"quarantine"===t.action?function(e,n){t.setCells((function(t){var a,l,r=Object(f.a)(t),c=Object(f.a)(r[e]),i=Object(s.a)({},c[n]);return"left"===o&&0!==n?((l=Object(s.a)({},c[n-1])).right=!0,c[n-1]=l):"right"===o&&49!==n?((l=Object(s.a)({},c[n+1])).left=!0,c[n+1]=l):"top"===o&&0!==e?(a=Object(f.a)(r[e-1]),(l=Object(s.a)({},a[n])).bottom=!0,a[n]=l,r[e-1]=a):"bottom"===o&&24!==e&&(a=Object(f.a)(r[e+1]),(l=Object(s.a)({},a[n])).top=!0,a[n]=l,r[e+1]=a),i[o]=!0,c[n]=i,r[e]=c,r}))}(e,n):"mask"===t.action&&function(e,n){t.setCells((function(t){var a=Object(f.a)(t),l=Object(f.a)(a[e]),o=Object(s.a)({},l[n]);return o.mask=!0,l[n]=o,a[e]=l,a}))}(e,n)};return l.a.createElement(w,{condition:t.condition,top:t.top,right:t.right,mask:t.mask?1:0,onClick:function(){return i(t.i,t.j)},onMouseMove:function(e){if("quarantine"===t.action){var n=e.nativeEvent.offsetX,a=e.nativeEvent.offsetY;n<5&&a>n&&a<20-n?r("left"):n>15&&a<n&&a>20-n?r("right"):a<5&&n>a&&a<20-n?r("top"):a>15&&a>n&&a>20-n&&r("bottom")}},onMouseDown:function(){return i(t.i,t.j)},onMouseEnter:function(e){1!==e.buttons&&3!==e.buttons||i(t.i,t.j)},action:t.action,hoverPos:o})})),h=function(t,e,n){for(var a=[],l=0;l<25;l++){a.push([]);for(var o=0;o<50;o++){var r={};0!==n&&(Math.random()<n&&(r.left=!0,0!==o&&(a[l][o-1].right=!0)),Math.random()<n&&(r.top=!0,0!==l&&(a[l-1][o].bottom=!0))),Math.random()<t?r.state="empty":(r.state="normal",Math.random()<e&&(r.mask=!0)),a[l].push(r)}}return a},d=function t(e){var n=[];return e.forEach((function(e){Array.isArray(e)?n.push(t(e)):"object"===typeof e?n.push(g(e)):n.push(e)})),n},g=function t(e){for(var n={},a=0,l=Object.entries(e);a<l.length;a++){var o=Object(c.a)(l[a],2),r=o[0],i=o[1];Array.isArray(i)?n[r]=d(i):n[r]="object"===typeof i?t(i):i}return n},E=n(15),v=n(9),j=n(122),k=n(124),O=n(125),C=n(128),S=function(t){var e=t.onClick,n=Object(a.useState)(!0),o=Object(c.a)(n,2),r=o[0],i=o[1];return l.a.createElement(k.a,{style:{backgroundColor:"cornflowerblue",borderColor:"cornflowerblue",width:"48px",height:"48px",boxShadow:"0 0 4px rgba(0,0,0,0.7)"},onClick:function(){e(r),i((function(t){return!t}))},type:"primary",shape:"circle",icon:l.a.createElement(E.a,{size:"10x",icon:r?v.g:v.e})})},A=function(t){var e=t.onClick,n=t.speedUp;return l.a.createElement(k.a,{style:{backgroundColor:"\tcornflowerblue",borderColor:"\tcornflowerblue",width:"32px",height:"32px",boxShadow:"0 0 3px rgba(0,0,0,0.7)"},onClick:function(){e()},type:"primary",shape:"circle",icon:l.a.createElement(E.a,{size:"10x",icon:n?v.k:v.j})})};function D(){var t=Object(m.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n\n  ","\n\n  @keyframes spin {\n    100% {\n      transform: rotateZ(360deg);\n    }\n  }\n"]);return D=function(){return t},t}function M(){var t=Object(m.a)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n"]);return M=function(){return t},t}function I(){var t=Object(m.a)(["\n  height: 40px;\n  width: 40px;\n  position: relative;\n  margin: 0 8px;\n"]);return I=function(){return t},t}var z=x.a.div(I()),F=x.a.div(M()),N=x.a.div(D(),(function(t){return t.action===t.buttonAction?"border: 3px dashed cornflowerblue;animation: spin 6s linear infinite;":""})),R=function(t){var e=t.action,n=t.setAction,a=t.buttonAction,o=t.color,r=t.icon;return l.a.createElement(z,null,l.a.createElement(N,{action:e,buttonAction:a}),l.a.createElement(F,null,l.a.createElement(k.a,{shape:"circle",icon:l.a.createElement(E.a,{color:o,icon:r}),onClick:function(){return n(a)}})))};function V(){var t=Object(m.a)(["\n  margin: 20px 0;\n  .icon-wrapper {\n    position: relative;\n    padding: 0px 30px;\n  }\n\n  .icon-wrapper .svg-inline--fa {\n    position: absolute;\n    top: -6px;\n    width: 18px;\n    height: 18px;\n    line-height: 1;\n    font-size: 24px;\n  }\n\n  .icon-wrapper .icon-wrapper-active {\n    color: rgba(0, 0, 0, 0.45);\n  }\n\n  .icon-wrapper .svg-inline--fa:first-child {\n    left: 0;\n  }\n\n  .icon-wrapper .svg-inline--fa:last-child {\n    right: 0;\n  }\n"]);return V=function(){return t},t}function q(){var t=Object(m.a)(["\n  ","\n"]);return q=function(){return t},t}function P(){var t=Object(m.a)(["\n  display: flex;\n"]);return P=function(){return t},t}function T(){var t=Object(m.a)(["\n  font-family: Comfortaa;\n  font-size: 24px;\n  font-weight: 900;\n  color: white;\n"]);return T=function(){return t},t}function U(){var t=Object(m.a)(["\n  position: fixed;\n  display: flex;\n  align-items: center;\n  top: 0;\n  width: 100%;\n  height: 50px;\n  z-index: 1000;\n  background-color: midnightblue;\n  border-bottom: solid 1px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n"]);return U=function(){return t},t}var G,L=x.a.div(U()),J=x.a.div(T()),B=x.a.div(P()),Q=x.a.div(q(),(function(t){return t.show?"":"display: none;"})),X=x.a.div(V()),Y=function(t){var e=t.setCells,n=t.action,o=t.setAction,r=t.calcNextState,s=t.setDeathChance,f=t.setDeathsEnabled,m=t.setCloseInfectionChance,x=t.setFarInfectionChance,b=t.setInfectionDuration,w=Object(a.useState)(.5),p=Object(c.a)(w,2),y=p[0],d=p[1],g=Object(a.useState)(0),D=Object(c.a)(g,2),M=D[0],I=D[1],z=Object(a.useState)(0),F=Object(c.a)(z,2),N=F[0],V=F[1],q=Object(a.useState)(0),P=Object(c.a)(q,2),T=P[0],U=P[1],Y=Object(a.useState)(1),Z=Object(c.a)(Y,2),H=Z[0],K=Z[1],W=Object(a.useState)(!1),$=Object(c.a)(W,2),_=$[0],tt=$[1],et=Object(a.useState)(!1),nt=Object(c.a)(et,2),at=nt[0],lt=nt[1],ot=function(){G=setInterval((function(){r(),U((function(t){return t+1}))}),1e3/H)},rt=Object(a.useRef)(!0);Object(a.useEffect)((function(){rt.current?rt.current=!1:_&&(clearInterval(G),ot())}),[H]);var ct=l.a.createElement("div",{style:{width:"300px"}},l.a.createElement("h5",null,"Social Distancing"),l.a.createElement(X,null,l.a.createElement("div",{className:"icon-wrapper"},l.a.createElement(E.a,{icon:v.f}),l.a.createElement(j.a,{defaultValue:50,onChange:function(t){return d(t/100)},max:90,tipFormatter:null}))),l.a.createElement("h5",null,"Quarantine Rate"),l.a.createElement(X,null,l.a.createElement("div",{className:"icon-wrapper"},l.a.createElement(E.a,{icon:v.h}),l.a.createElement(j.a,{onChange:function(t){return V(t/100)},max:60,tipFormatter:null}))),l.a.createElement("h5",null,"Mask Usage"),l.a.createElement(X,null,l.a.createElement("div",{className:"icon-wrapper"},l.a.createElement(E.a,{icon:v.d}),l.a.createElement(j.a,{onChange:function(t){return I(t/100)},tipFormatter:null}))),l.a.createElement(k.a,{onClick:function(){return e((function(){return h(y,M,N)}))}},"Generate Map")),it=l.a.createElement("div",{style:{width:"300px"}},l.a.createElement("h5",null,"Infection Duration"),l.a.createElement(X,null,l.a.createElement("div",{className:"icon-wrapper"},l.a.createElement(E.a,{icon:v.a}),l.a.createElement(j.a,{marks:{48:"48h",144:"154h"},defaultValue:48,min:48,max:144,step:6,onAfterChange:function(t){return b(t)},tipFormatter:function(t){return"".concat(t," hours")}}))),l.a.createElement("h5",null,"Infection Chance (Close)"),l.a.createElement(X,null,l.a.createElement("div",{className:"icon-wrapper"},l.a.createElement(E.a,{icon:v.l}),l.a.createElement(j.a,{marks:{.75:"0.75%",1:"1%",1.25:"1.25%"},defaultValue:1,min:.75,max:1.25,step:.05,onAfterChange:function(t){return m(t/100)},tipFormatter:function(t){return"".concat(t,"%")}}))),l.a.createElement("h5",null,"Infection Chance (Far)"),l.a.createElement(X,null,l.a.createElement("div",{className:"icon-wrapper"},l.a.createElement(E.a,{icon:v.l}),l.a.createElement(j.a,{marks:{.25:"0.25%",.5:"0.5%",.75:"0.75%"},defaultValue:.5,min:.25,max:.75,step:.05,onAfterChange:function(t){return x(t/100)},tipFormatter:function(t){return"".concat(t,"%")}}))),l.a.createElement("h5",null,"Enable Deaths"),l.a.createElement(O.a,{value:at,onChange:function(){lt((function(t){return!t})),f((function(t){return!t}))}}),l.a.createElement(Q,{show:at},l.a.createElement("h5",null,"Death Chance"),l.a.createElement(X,null,l.a.createElement("div",{className:"icon-wrapper"},l.a.createElement(E.a,{icon:v.i}),l.a.createElement(j.a,{marks:{0:"0%",5:"5%"},defaultValue:0,max:5,step:.1,onAfterChange:function(t){return s(t/100)},tipFormatter:function(t){return"".concat(t,"%")}})))));return l.a.createElement(L,null,l.a.createElement(i.a,{align:"middle",style:{width:"100%"}},l.a.createElement(u.a,{offset:1,span:6},l.a.createElement(J,null,"Epidemic Simulation")),l.a.createElement(u.a,{span:8},l.a.createElement(B,null,l.a.createElement(R,{icon:v.l,color:"crimson",buttonAction:"virus",action:n,setAction:o}),l.a.createElement(R,{icon:v.c,color:"black",buttonAction:"quarantine",action:n,setAction:o}),l.a.createElement(R,{icon:v.d,color:"#00DDDD",buttonAction:"mask",action:n,setAction:o}))),l.a.createElement(u.a,{span:1},"Time: ".concat(T)),l.a.createElement(u.a,{span:4},l.a.createElement(C.a,{content:it,title:"Endemic Properties",trigger:"click"},l.a.createElement(k.a,{shape:"round",icon:l.a.createElement(E.a,{style:{fontSize:"16px",marginRight:"8px",verticalAlign:"text-bottom"},icon:v.m}),style:{backgroundColor:"cornflowerblue",borderColor:"cornflowerblue",color:"white"}},"Endemic Properties"))),l.a.createElement(u.a,{span:4},l.a.createElement(C.a,{content:ct,title:"Generate Map",trigger:"click"},l.a.createElement(k.a,{shape:"round",icon:l.a.createElement(E.a,{style:{fontSize:"18px",marginRight:"8px",verticalAlign:"text-bottom"},icon:v.b}),style:{backgroundColor:"cornflowerblue",borderColor:"cornflowerblue",color:"white"}},"Generate Map")))),l.a.createElement("div",{style:{position:"absolute",left:"50%",bottom:"0",transform:"translate(-50%,50%)"}},l.a.createElement(A,{speedUp:!1,onClick:function(){return K((function(t){return t-1}))}}),l.a.createElement(S,{onClick:function(t){t?(ot(),tt(!0)):(clearInterval(G),tt(!1))}}),l.a.createElement(A,{speedUp:!0,onClick:function(){return K((function(t){return t+1}))}})))};function Z(){var t=Object(m.a)(["\n  border-left: solid 1px lightskyblue;\n  border-bottom: solid 1px lightskyblue;\n  display: inline-block;\n"]);return Z=function(){return t},t}function H(){var t=Object(m.a)(["\n  display: flex;\n\n  background-color: lightsteelblue;\n  width: 100%;\n  height: 110vh;\n  justify-content: center;\n  align-items: center;\n"]);return H=function(){return t},t}var K=x.a.div(H()),W=x.a.div(Z()),$=function(){var t=Object(a.useState)((function(){return h(.5,0,0)})),e=Object(c.a)(t,2),n=e[0],o=e[1],r=Object(a.useState)("virus"),s=Object(c.a)(r,2),f=s[0],m=s[1],x=Object(a.useState)(!1),b=Object(c.a)(x,2),w=b[0],g=b[1],E=Object(a.useState)(0),v=Object(c.a)(E,2),j=v[0],k=v[1],O=Object(a.useState)(.01),C=Object(c.a)(O,2),S=C[0],A=C[1],D=Object(a.useState)(.005),M=Object(c.a)(D,2),I=M[0],z=M[1],F=Object(a.useState)(48),N=Object(c.a)(F,2),R=N[0],V=N[1];return l.a.createElement(K,null,l.a.createElement(Y,{action:f,setCells:o,setAction:m,calcNextState:function(){o((function(t){var e=d(t);return e.forEach((function(n,a){return n.forEach((function(n,l){if("infected"===t[a][l].state){if(w&&0!==j&&Math.random()<j/R)return void(e[a][l].state="dead");0===--e[a][l].timeLeftToRecover&&(e[a][l].state="immune");for(var o=a-2;o<=a+2;o++)for(var r=l-2;r<=l+2;r++){if(o!==a||r!==l)if(o>=0&&o<25&&r>=0&&r<50)if("normal"===e[o][r].state)if(!p[o-a+2][r-l+2].reduce((function(t,n){return t||n.reduce((function(t,n){return t&&!0===e[a+n.x][l+n.y][n.wall]}),!0)}),!1)){var c=o===a-2||o===a+2||r===l-2||r===l+2?I:S;c=!0===e[o][r].mask?c/3:c,Math.random()<c&&(e[o][r].state="infected",e[o][r].timeLeftToRecover=R)}}}}))})),e}))},setDeathsEnabled:g,setDeathChance:k,setCloseInfectionChance:A,setFarInfectionChance:z,setInfectionDuration:V}),l.a.createElement(W,null,n.map((function(t,e){return l.a.createElement(i.a,{key:e},t.map((function(t,n){return l.a.createElement(u.a,{key:n},l.a.createElement(y,{condition:t.state,setCells:o,i:e,j:n,action:f,top:t.top,right:t.right,mask:t.mask,infectionDuration:R}))})))}))))};var _=function(){return l.a.createElement($,null)};r.a.render(l.a.createElement(_,null),document.getElementById("root"))},87:function(t,e,n){t.exports=n(121)},92:function(t,e,n){}},[[87,1,2]]]);
//# sourceMappingURL=main.5909c06c.chunk.js.map