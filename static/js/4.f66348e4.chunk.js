(this.webpackJsonpsharkvenger=this.webpackJsonpsharkvenger||[]).push([[4],{517:function(e,t,n){"use strict";n.r(t),n.d(t,"HomePage",(function(){return H}));var a,i,r=n(500),o=n(0),c=n.n(o),l=n(153),u=n(499),s=n(224);!function(e){e[e.MommyShark=0]="MommyShark",e[e.Suica=1]="Suica"}(i||(i={}));var d=(a={},Object(s.a)(a,i.MommyShark,"Mommy Shark"),Object(s.a)(a,i.Suica,"Pen Pen"),a),p={initialSetting:[{character:i.MommyShark},{character:i.Suica,position:"right"}],lines:[[{character:i.MommyShark,movements:["!shake"],text:"Somebody kidnapped my baby while I was doing home schooling. Would you help me find him?"},{character:i.Suica,movements:["!shake"]}],[{character:i.Suica,text:"Of course!",movements:["shake"]}],[{character:i.MommyShark,movements:["shake"],text:"Thank you!!!"},{character:i.Suica,movements:["active","shake"]}]]},f=n(68),h=n(504),v=n(236),m=n(152),b=new l.Loader;function O(){var e=Object(m.c)("BBB.jpg"),t=Object(o.useState)(-1),n=Object(r.a)(t,2),a=n[0],i=n[1],l=Object(o.useState)(0),s=Object(r.a)(l,2),d=s[0],p=s[1];Object(o.useEffect)((function(){f()}),[]),Object(u.useTick)((function(e){a<0||p((Date.now()-a)/300)}));var f=function(){try{b.add(e).load((function(){return i(Date.now())}))}catch(t){i(Date.now())}},h=Object(u.useApp)().screen,v=h.width,O=h.height,j=v/O>.75?v/600:O/800,S={x:v/2,y:O/2};return c.a.createElement(u.Sprite,{image:e,anchor:.5,position:S,scale:j,alpha:d})}var j=n(154),S=new l.TextStyle({fill:16777215,fontFamily:"'Roboto Mono', monospace",dropShadow:!0,dropShadowColor:0,dropShadowAngle:0,dropShadowBlur:4,dropShadowAlpha:.8,dropShadowDistance:0,fontSize:16,letterSpacing:1});function g(e){var t=e.onClick,n=e.name,a=e.text,i=e.namePosition,l=void 0===i?"left":i,s=Object(o.useState)(!1),d=Object(r.a)(s,2),p=d[0],f=d[1],h=Object(o.useState)(""),v=Object(r.a)(h,2),m=v[0],b=v[1],O=Object(u.useApp)().screen,g=O.width,w=O.height;Object(o.useEffect)((function(){y()}),[]),Object(o.useEffect)((function(){f(!1),y()}),[a]);var y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";a&&(b(t),t.length<a.length?setTimeout((function(){return e(t+a.charAt(t.length))}),15):f(!0))},x=Math.min(400,g-16),k=(g-x)/2,E=function(e){p&&t&&t(e)};return c.a.createElement(u.Container,{position:[k,w-12-120-24],click:E,tap:E,interactive:!0},c.a.createElement(u.Graphics,{draw:function(e){0===e.getBounds().width&&(e.lineStyle(2,16777215,.8),e.beginFill(2368810,.5),e.drawRoundedRect(0,0,x,120,8),e.endFill())},position:[0,24]}),p&&c.a.createElement(u.Graphics,{draw:function(e){if(0===e.getBounds().width){e.lineStyle(2,16777215,.8),e.beginFill(16763394,1),e.moveTo(0,0),e.lineTo(18,8),e.lineTo(0,16),e.lineTo(0,0),e.closePath(),e.endFill();var t=x-30;e.position.set(t,116),j.a.to(e.position,{x:t+2,y:116,repeat:-1,duration:.25,yoyo:!0})}}}),function(){if(n)switch(l){case"left":case"middle":return c.a.createElement(u.Text,{text:n,anchor:[0,0],x:0,style:S});case"right":return c.a.createElement(u.Text,{text:n,anchor:[1,0],x:x,style:S})}}(),c.a.createElement(u.BitmapText,{text:m,position:[8,32],letterSpacing:.5,style:{fontName:"Lato",fontSize:16,maxWidth:x-16}}))}function w(){var e=Object(u.useApp)(),t=e.view.width/e.renderer.resolution,n=1;return t<=375&&(n=.85),t<=320&&(n=.75),c.a.createElement(u.Container,{position:[14,16],scale:n},c.a.createElement(u.Sprite,{image:Object(m.c)("CAPS.png"),position:[2,0],scale:.6}),c.a.createElement(u.Sprite,{image:Object(m.c)("TBP.png"),position:[0,44],scale:.45}))}var y=n(505),x=n.n(y),k={padding:"8px",fontSize:"16px",color:"#26272E"},E={fill:15264243,rounded:8,stroke:{color:13356768,width:4}},A={fill:14803950,rounded:8,stroke:{color:11251654,width:4}},T={fill:14408667,rounded:16},P=function(e,t,n){var a;if(n.position){var i=Object(m.a)(n.position);e.position.set(i.x,i.y)}void 0!==n.x&&void 0!==n.y&&e.position.set(n.x,n.y),n.onInput&&(e.removeListener("input"),e.on("input",n.onInput)),e.placeholder=null!==(a=n.placeholder)&&void 0!==a?a:""},C=Object(u.PixiComponent)("Input",{create:function(e){var t=Object(f.a)(Object(f.a)({},k),e.input),n=e.box,a=e.box,i=e.box&&Object.keys(e.box).includes("default")?{default:Object(f.a)(Object(f.a)({},E),n.default),focused:Object(f.a)(Object(f.a)({},A),n.focused),disabled:Object(f.a)(Object(f.a)({},T),n.disabled)}:Object(f.a)(Object(f.a)({},E),a),r=new x.a({input:t,box:i});return P(r,0,e),setTimeout((function(){return r.focus()})),r},applyProps:P});function M(){return c.a.createElement(C,{x:16,y:120,onInput:function(e){return console.log(e)},placeholder:"Enter your UM ID"})}var D=n(502),B=function(e){return[e.initialPosition,e.initialAngle,e.initialScale,e.movements]},R=function(e,t){var n,a;if(t){var i={};t.initialPosition!==e.initialPosition&&(i.initialPosition=e.initialPosition),t.initialAngle!==e.initialAngle&&(i.initialAngle=e.initialAngle),t.initialScale!==e.initialScale&&(i.initialScale=e.initialScale);var r=new Set;return(null!==(n=e.movements)&&void 0!==n?n:[]).forEach((function(e){return r.add(e)})),(null!==(a=t.movements)&&void 0!==a?a:[]).forEach((function(e){return r.delete(e)})),i.movements=Array.from(r),i}},F=n(115),I=n.n(F),z=n(155),_=function(){var e=Object(z.a)(I.a.mark((function e(t,n){var a,i,r=arguments;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>2&&void 0!==r[2]&&r[2],i=j.a.to(t.position,{y:a?n.y:n.y-40,duration:.5,ease:"power2.inOut",immediateRender:!1}),j.a.to(t,{pixi:{tint:a?10066329:16777215},duration:.5,ease:"power2.inOut"}),e.next=5,i.play();case 5:i.kill();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(z.a)(I.a.mark((function e(t){var n,a,i,r=arguments;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r.length>1&&void 0!==r[1]?r[1]:.5,a=r.length>2&&void 0!==r[2]?r[2]:0;try{(i=j.a.timeline({immediateRender:!1})).to(t.transform,{rotation:l.DEG_TO_RAD*(-10+a),duration:n/2,ease:"power2.inOut"}),i.to(t.transform,{rotation:l.DEG_TO_RAD*(10+a),duration:n,ease:"power2.inOut",repeat:-1,yoyo:!0,onRepeat:function(){this._targets[0]||this.kill()},onInterrupt:function(){t&&j.a.to(t.transform,{rotation:l.DEG_TO_RAD*a,duration:.25,ease:"power2.inOut"})}}),i.play()}catch(o){console.error(o)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e,t){var n,a,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(e&&t){if(r||void 0!==t.initialScale){var o,c=Object(m.a)(null!==(o=i.initialScale)&&void 0!==o?o:{x:1,y:1});if(t.initialScale){var l=t.initialScale.valueOf();c=Object(m.d)(c,l)}e.scale.set(c.x,c.y)}var u,s;if(r||void 0!==t.initialAngle)e.angle=(null!==(u=i.initialAngle)&&void 0!==u?u:0)+(null!==(s=t.initialAngle)&&void 0!==s?s:0);var d=Object(m.a)(null!==(n=i.initialPosition)&&void 0!==n?n:{x:0,y:0});(r||void 0!==t.initialPosition)&&e.position.set(d.x,d.y),r&&e.anchor.set(.5,.5);var p=null!==(a=t.movements)&&void 0!==a?a:[];p.includes("active")?_(e,d):p.includes("!active")&&_(e,d,!0),p.includes("shake")?G(e,.5,i.initialAngle):p.includes("!shake")&&j.a.killTweensOf(e.transform,"rotation")}};function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(o.useState)(),n=Object(r.a)(t,2),a=n[0],i=n[1],l=Object(D.a)(e),s=Object(u.useApp)(),d=Object(m.a)([-Math.min(1.5,s.screen.width/500),Math.min(1.5,s.screen.width/500)]),p=-45,f={initialScale:d,initialAngle:p,initialPosition:e.initialPosition};return Object(o.useEffect)((function(){if(a){var t=R(e,l);L(a,t,f,!1)}}),B(e)),c.a.createElement(u.Sprite,{ref:function(t){t&&!a&&(i(t),L(t,e,f,!0))},image:Object(m.c)("shark.png")})}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(o.useState)(),n=Object(r.a)(t,2),a=n[0],i=n[1],l=Object(D.a)(e),s=Object(u.useApp)(),d=Object(m.a)([-Math.min(1.25,s.screen.width/600),Math.min(1.25,s.screen.width/600)]),p={initialScale:d,initialPosition:e.initialPosition};return Object(o.useEffect)((function(){if(a){var t=R(e,l);L(a,t,p,!1)}}),B(e)),c.a.createElement(u.Sprite,{ref:function(t){t&&!a&&(i(t),L(t,e,p,!0))},image:Object(m.c)("suica.png")})}function N(e){var t,n,a,l,s=e.script,p=Object(o.useState)(+(null!==(t=localStorage.getItem("line"))&&void 0!==t?t:0)),m=Object(r.a)(p,2),b=m[0],j=m[1],S=Object(o.useState)(!1),y=Object(r.a)(S,2),x=y[0],k=y[1],E=Object(o.useState)([]),A=Object(r.a)(E,2),T=A[0],P=A[1],C=Object(u.useApp)().screen,D=C.width,B=C.height;Object(o.useEffect)((function(){_()}),[b]);var R=function(e){switch(e){case i.MommyShark:return W;case i.Suica:return J;default:throw new Error("Unknown character:"+e)}},F=function(e){var t;if(s.lines[b][0].character===e)return"active";var n=s.lines[b].find((function(t){return t.character===e}));return n&&(null===(t=n.movements)||void 0===t?void 0:t.includes("active"))?"active":"!active"},I=function(e){return T.find((function(t){return t.character===e}))},z=function(e,t){var n={};if(void 0===e.character)return n;var a=B-130;return void 0===t&&(n.initialPosition=[48,a],n.initialScale=[1,1],"right"===e.position&&(n.initialPosition[0]=D-90,n.initialScale[0]=-1)),n.movements=[F(e.character)],n},_=function(){var e=Object(v.a)(T);if(!x){var t,n=Object(h.a)(s.initialSetting);try{for(n.s();!(t=n.n()).done;){var a,i=t.value;if(void 0===I(i.character)){var r=R(i.character);e.push({position:null!==(a=i.position)&&void 0!==a?a:"left",character:i.character,sprite:r,props:z(i)})}}}catch(d){n.e(d)}finally{n.f()}k(!0)}var o,c=s.lines[b],l=Object(h.a)(e);try{var u=function(){var e,t=o.value,n=c.find((function(e){return e.character===t.character}));t.props=Object(f.a)(Object(f.a)({},t.props),{},{movements:[].concat(Object(v.a)(null!==(e=null===n||void 0===n?void 0:n.movements)&&void 0!==e?e:[]),[F(t.character)])})};for(l.s();!(o=l.n()).done;)u()}catch(d){l.e(d)}finally{l.f()}P(e)},G=d[null!==(n=s.lines[b][0].character)&&void 0!==n?n:-1],L=I(null!==(a=s.lines[b][0].character)&&void 0!==a?a:-1);return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,null),c.a.createElement(w,null),c.a.createElement(u.Container,null,T.sort((function(e,t){var n,a;return(null!==(n=e.props.movements)&&void 0!==n?n:[]).includes("active")?(null!==(a=t.props.movements)&&void 0!==a?a:[]).includes("active")?s.lines[b][0].character===e.character?1:-1:1:-1})).map((function(e){return c.a.createElement(e.sprite,Object.assign({},e.props,{key:e.character}))}))),c.a.createElement(g,{name:G,namePosition:null!==(l=null===L||void 0===L?void 0:L.position)&&void 0!==l?l:"left",text:s.lines[b][0].text,onClick:function(){var e=s.lines.length===b+1?0:b+1;localStorage.setItem("line",""+e),j(e)}}),c.a.createElement(M,null))}function U(){var e=Object(u.useApp)(),t=e.screen,n=t.width,a=t.height,i={x:50,y:50},s={x:n-80-16,y:50},d={x:n/2-85,y:a/2-85-40},p=Object(o.useState)(),h=Object(r.a)(p,2),v=h[0],b=h[1],O=Object(o.useState)(),S=Object(r.a)(O,2),g=S[0],w=S[1],y=Object(o.useState)(!1),x=Object(r.a)(y,2),k=x[0],E=x[1],A=Object(o.useState)(),T=Object(r.a)(A,2),P=T[0],C=T[1],M=Object(o.useState)(),D=Object(r.a)(M,2),B=D[0],R=D[1],F=Object(o.useCallback)((function(e){e.clear(),e.beginFill(5419993),e.lineStyle(7,3970242),e.drawCircle(0,0,50),e.endFill()}),[]),_=Object(o.useCallback)(function(){var e=Object(z.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!P){e.next=2;break}return e.abrupt("return");case 2:(n=j.a.timeline()).pause(),n.fromTo(t.position,s,Object(f.a)(Object(f.a)({},d),{},{ease:"power2.inOut"}),0),n.fromTo(t.scale,Object(m.a)(.8),Object(f.a)(Object(f.a)({},Object(m.a)(1.7)),{},{ease:"power2.inOut"}),0),C(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[P]),G=Object(o.useCallback)(Object(z.a)(I.a.mark((function e(){var t,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P){e.next=2;break}return e.abrupt("return");case 2:t=P,n=k,E(!k),j.a.to(t.pause(),{duration:n?t.time():1,time:n?0:1});case 6:case"end":return e.stop()}}),e)}))),[k,P]),L=Object(o.useCallback)(Object(z.a)(I.a.mark((function e(){var t,n,a,i,r,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=2;break}return e.abrupt("return");case 2:t=Math.max(.6,Math.random()+.5),n={ease:"power2.inOut"},a=Object(f.a)({duration:1,repeat:-1,yoyo:!0},n),i=j.a.getTweensOf(g.scale);try{r=function(){var e=j.a.to(g.scale,Object(f.a)({x:1.5*t*.125,y:1.5*t*.125},a));e.eventCallback("onRepeat",(function(){var t;e.vars.repeatTime=(null!==(t=e.vars.repeatTime)&&void 0!==t?t:0)+1}))},i.filter((function(e){return!e.isActive()})).forEach((function(e){return e.pause()})),(o=i.filter((function(e){return e.isActive()}))).length>0?(o.slice(1).forEach((function(e){return e.pause()})),o[0].eventCallback("onRepeat",(function(){var e;o[0].vars.repeatTime=(null!==(e=o[0].vars.repeatTime)&&void 0!==e?e:0)+1,o[0].vars.repeatTime%2===0&&(o[0].pause(),r())}))):r()}catch(c){console.error(c)}case 7:case"end":return e.stop()}}),e)}))),[g]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.Container,{ref:function(e){e&&!v&&(e.position.set(s.x,s.y),e.scale.set(.8,.8),b(e),_(e))},tap:G,click:G,interactive:!0},c.a.createElement(u.Graphics,{draw:F,anchor:[.5,.5],position:[i.x,i.y-5]}),c.a.createElement(u.Sprite,{ref:function(e){e&&(e.scale.set(.125,.125),w(e),Object(m.e)((function(e){R(e),L()})))},angle:15,image:Object(m.c)("heart.svg"),anchor:[.5,.55],position:i})),c.a.createElement(u.Text,{text:B?JSON.stringify({latitude:B.coords.latitude,longitude:B.coords.longitude,accuracy:"".concat(B.coords.accuracy," meters"),altitude:B.coords.altitude,altitudeAccuracy:B.coords.altitudeAccuracy},void 0,1):"",position:[16,160],style:new l.TextStyle({wordWrap:!0,wordWrapWidth:e.screen.width-32,fontSize:14,align:"left",letterSpacing:2,fill:16777215,dropShadow:!0,dropShadowColor:0,dropShadowAngle:0,dropShadowBlur:4,dropShadowAlpha:.8,dropShadowDistance:0})}))}function H(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(o.useState)(!1),s=Object(r.a)(i,2),d=s[0],f=s[1],h=Object(o.useState)(),v=Object(r.a)(h,2),b=v[0],O=v[1],j=Object(o.useState)(0),S=Object(r.a)(j,2),g=S[0],w=S[1];Object(o.useEffect)((function(){return y()}),[]);var y=function(){(new l.Loader).add("Lato",Object(m.c)("/Lato.fnt"),new l.TextStyle({dropShadowColor:819,dropShadowAngle:0,dropShadowBlur:2,dropShadowAlpha:.5,dropShadowDistance:2,letterSpacing:.5})).load((function(){f(!0)}))};return window.onresize=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;e&&(a(!1),e.resize(),a(!0))}()},c.a.createElement("div",{id:"canvas",style:{opacity:g}},c.a.createElement(u.Stage,{width:400,onMount:function(e){O(e),e.resizeTo=document.getElementById("canvas"),setTimeout((function(){e.resize(),a(!0),w(1)}))},options:{forceCanvas:!1,antialias:!0,backgroundColor:5419993,autoDensity:!0,autoStart:!0}},n&&d&&c.a.createElement(c.a.Fragment,null,c.a.createElement(N,{script:p}),c.a.createElement(U,null))))}}}]);