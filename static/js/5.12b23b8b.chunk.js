(this.webpackJsonpsharkvenger=this.webpackJsonpsharkvenger||[]).push([[5],{499:function(e,t,a){"use strict";a.r(t),a.d(t,"HomePage",(function(){return O}));var n=a(483),r=a(0),c=a.n(r),o=a(478);function i(){var e=Object(o.useApp)(),t=e.view.width/e.renderer.resolution,a=1;return t<=375&&(a=.85),t<=320&&(a=.75),c.a.createElement(c.a.Fragment,null,c.a.createElement(o.Sprite,{image:"CAPS.png",position:[16,16],scale:.6*a}),c.a.createElement(o.Sprite,{image:"TBP.png",position:[14,65*a],scale:.45*a}))}var s=a(495),u=a.n(s),l=a(219),m=a(496),p=a(497),d=a(482),b=a(498),f=function(e){return new Promise((function(t,a){window.navigator.geolocation.getCurrentPosition(t,(function(){a("no position access")}),e)}))};function g(){var e=Object(r.useState)(),t=Object(n.a)(e,2),a=t[0],i=t[1],s=Object(r.useState)(),g=Object(n.a)(s,2),O=g[0],h=g[1],j=Object(r.useState)(),v=Object(n.a)(j,2),w=v[0],y=v[1],S=Object(o.useApp)(),x={x:S.screen.width/2,y:S.screen.height/2+40},E=Object(p.useInterval)((function(){T()}),5e3,{autoStart:!1,immediate:!0}).start,k=c.a.useCallback((function(e){e.clear(),e.lineStyle(6,2454697,.5),e.drawCircle(0,0,50),e.endFill(),h(e),setTimeout(E,0)}),[]),T=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n,r,c,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f({enableHighAccuracy:!0});case 2:if(t=e.sent,i(t),w&&O){e.next=6;break}return e.abrupt("return");case 6:return a=Math.random()+.5,n={yoyo:!0,ease:"power2.inOut"},r=Object(l.a)({duration:1,repeat:-1},n),c={x:.125,y:.125},o={x:1,y:1},e.next=13,Promise.all([b.a.to(w.scale,Object(l.a)(Object(l.a)({},c),n)),b.a.to(O.scale,Object(l.a)(Object(l.a)({},o),n))]);case 13:b.a.fromTo(w.scale,{x:.125,y:.125},Object(l.a)({x:1.5*a*.125,y:1.5*a*.125},r)),s=Math.max(1,.8*a),b.a.fromTo(O.scale,o,Object(l.a)({x:s,y:s},r));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.Graphics,{draw:k,anchor:[.5,.5],position:[x.x,x.y-5]}),c.a.createElement(o.Sprite,{ref:function(e){e&&y(e)},image:"heart.svg",anchor:[.5,.55],position:x,scale:.125}),c.a.createElement(o.Text,{text:a?JSON.stringify({latitude:a.coords.latitude,longitude:a.coords.longitude,accuracy:"".concat(a.coords.accuracy," meters")},void 0,1):"",position:[16,150],style:new d.q({wordWrap:!0,wordWrapWidth:S.screen.width-32,fontSize:14,align:"left",letterSpacing:2})}))}function O(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],s=t[1],u=Object(r.useState)(),l=Object(n.a)(u,2),m=l[0],p=l[1];return window.onresize=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;e&&(s(!1),e.resize(),s(!0))}()},c.a.createElement("div",{id:"canvas"},c.a.createElement(o.Stage,{onMount:function(e){p(e),e.resizeTo=document.getElementById("canvas"),setTimeout((function(){e.resize(),s(!0)}))},options:{forceCanvas:!1,antialias:!0,backgroundColor:5419993,autoDensity:!0,autoStart:!0}},a&&c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement(g,null))))}}}]);