(this.webpackJsonpsharkvenger=this.webpackJsonpsharkvenger||[]).push([[4],{501:function(e,t,a){"use strict";a.r(t),a.d(t,"HomePage",(function(){return O}));var n=a(487),r=a(0),o=a.n(r),c=a(482),i=a(148);function l(){var e=Object(c.useApp)(),t=e.view.width/e.renderer.resolution,a=1;return t<=375&&(a=.85),t<=320&&(a=.75),o.a.createElement(c.Container,{position:[14,16],scale:a},o.a.createElement(c.Sprite,{image:Object(i.c)("CAPS.png"),position:[2,0],scale:.6}),o.a.createElement(c.Sprite,{image:Object(i.c)("TBP.png"),position:[0,44],scale:.45}))}var s=a(142),u=a.n(s),d=a(68),p=a(224),h=a(499),m=a(484),b=a(500);function f(){var e=Object(r.useState)(),t=Object(n.a)(e,2),a=t[0],l=t[1],s=Object(r.useState)(),f=Object(n.a)(s,2),w=f[0],g=f[1],O=Object(r.useState)(),S=Object(n.a)(O,2),j=S[0],y=S[1],v=Object(c.useApp)(),x={x:v.screen.width/2,y:v.screen.height/2-40},E=Object(h.useInterval)((function(){A()}),5e3,{autoStart:!1,immediate:!0}).start,k=Object(r.useCallback)((function(e){e.clear(),e.lineStyle(7,2454697,.5),e.drawCircle(0,0,108),e.endFill(),g(e),setTimeout(E,0)}),[]),A=function(){var e=Object(p.a)(u.a.mark((function e(){var t,a,n,r,o,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.b)({enableHighAccuracy:!0});case 2:if(t=e.sent,l(t),j&&w){e.next=6;break}return e.abrupt("return");case 6:return a=Math.max(1/1.5,Math.random()+.5),n={ease:"power2.inOut"},r=Object(d.a)({duration:1,repeat:-1,yoyo:!0},n),o={x:108/512,y:108/512},c={x:1,y:1},e.prev=11,e.next=14,Promise.all([b.a.to(j.scale,Object(d.a)(Object(d.a)(Object(d.a)({},o),n),{},{repeat:0})),b.a.to(w.scale,Object(d.a)(Object(d.a)(Object(d.a)({},c),n),{},{repeat:0}))]);case 14:b.a.fromTo(j.scale,o,Object(d.a)({x:1.5*a*(108/512),y:1.5*a*(108/512)},r)),s=Math.max(1,.8*a),b.a.fromTo(w.scale,c,Object(d.a)({x:s,y:s},r)),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(11),console.error(e.t0);case 22:case"end":return e.stop()}}),e,null,[[11,19]])})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.Graphics,{draw:k,anchor:[.5,.5],position:[x.x,x.y-5]}),o.a.createElement(c.Text,{text:a?JSON.stringify({latitude:a.coords.latitude,longitude:a.coords.longitude,accuracy:"".concat(a.coords.accuracy," meters")},void 0,1):"",position:[16,120],style:new m.q({wordWrap:!0,wordWrapWidth:v.screen.width-32,fontSize:14,align:"left",letterSpacing:2})}),o.a.createElement(c.Sprite,{ref:function(e){e&&y(e)},image:Object(i.c)("heart.svg"),anchor:[.5,.55],position:x,scale:.125,angle:15}))}function w(){var e=Object(c.useApp)().screen,t=e.width,a=e.height,n=Math.min(400,t-16),r=(t-n)/2;return o.a.createElement(c.Container,{position:[r,a-16-120-24]},o.a.createElement(c.Graphics,{draw:function(e){e.lineStyle(2,16777215,.8),e.beginFill(2368810,.5),e.drawRoundedRect(0,0,n,120,8),e.endFill()},position:[0,24]}),o.a.createElement(c.Text,{text:"Mommy Shark",style:new m.q({fill:16777215,fontFamily:"'Roboto Mono', monospace",dropShadow:!0,dropShadowColor:819,dropShadowAngle:0,dropShadowBlur:4,dropShadowAlpha:.5,dropShadowDistance:4,fontSize:16,letterSpacing:1})}),o.a.createElement(c.Text,{text:"Somebody stole my kid while I was doing home schooling. Would you help me find him?",position:[8,32],style:new m.q({fill:16777215,fontSize:16,fontFamily:"'Lato', sans-serif",wordWrap:!0,wordWrapWidth:n-16,dropShadowColor:819,dropShadowAngle:0,dropShadowBlur:2,dropShadowAlpha:.5,dropShadowDistance:2,letterSpacing:.5})}))}function g(e){var t=Object(c.useApp)(),a=Math.min(.5,t.screen.width/1500);if(e&&e.scale){var n=e.scale.valueOf();"number"===typeof n?a*=n:a=Array.isArray(n)?[n[0]*a,n[1]*a]:{x:a*n.x,y:a*n.y}}return o.a.createElement(c.Sprite,Object.assign({image:Object(i.c)("shark.png"),anchor:.5},e,{scale:a}))}function O(){var e,t=Object(r.useState)(!1),a=Object(n.a)(t,2),i=a[0],s=a[1],u=Object(r.useState)(),d=Object(n.a)(u,2),p=d[0],h=d[1],m=Object(r.useState)(0),b=Object(n.a)(m,2),O=b[0],S=b[1],j=(null!==(e=null===p||void 0===p?void 0:p.screen)&&void 0!==e?e:{width:0,height:0}).height;return window.onresize=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;e&&(s(!1),e.resize(),s(!0))}()},o.a.createElement("div",{id:"canvas",style:{opacity:O}},o.a.createElement(c.Stage,{width:400,onMount:function(e){h(e),e.resizeTo=document.getElementById("canvas"),setTimeout((function(){S(1),e.resize(),s(!0)}))},options:{forceCanvas:!1,antialias:!0,backgroundColor:5419993,autoDensity:!0,autoStart:!0}},i&&o.a.createElement(o.a.Fragment,null,o.a.createElement(l,null),o.a.createElement(f,null),o.a.createElement(g,{position:[48,j-130],angle:-45,scale:[-3,3]}),o.a.createElement(w,null))))}}}]);