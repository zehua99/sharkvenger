(this.webpackJsonpsharkvenger=this.webpackJsonpsharkvenger||[]).push([[4],{503:function(e,t,a){"use strict";a.r(t),a.d(t,"HomePage",(function(){return z}));var n=a(484),i=a(0),r=a.n(i),c=a(485),o=a(483),l=a(147);function s(){var e=Object(o.useApp)(),t=e.view.width/e.renderer.resolution,a=1;return t<=375&&(a=.85),t<=320&&(a=.75),r.a.createElement(o.Container,{position:[14,16],scale:a},r.a.createElement(o.Sprite,{image:Object(l.c)("CAPS.png"),position:[2,0],scale:.6}),r.a.createElement(o.Sprite,{image:Object(l.c)("TBP.png"),position:[0,44],scale:.45}))}var u=a(112),f=a.n(u),d=a(66),h=a(148),p=a(486);function m(){var e=Object(o.useApp)(),t=e.screen,a=t.width,s=t.height,u={x:50,y:50},m={x:a-80-16,y:50},v={x:a/2-75,y:s/2-75-40},b=Object(i.useState)(),O=Object(n.a)(b,2),j=O[0],S=O[1],g=Object(i.useState)(),w=Object(n.a)(g,2),y=w[0],k=w[1],x=Object(i.useState)(!1),E=Object(n.a)(x,2),A=E[0],T=E[1],P=Object(i.useState)(),M=Object(n.a)(P,2),C=M[0],F=M[1],z=Object(i.useState)(),R=Object(n.a)(z,2),B=R[0],I=R[1],W=Object(i.useCallback)((function(e){e.clear(),e.lineStyle(7,2454697,.5),e.drawCircle(0,0,50),e.endFill()}),[]),D=Object(i.useCallback)(function(){var e=Object(h.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=2;break}return e.abrupt("return");case 2:(a=p.a.timeline()).pause(),a.fromTo(t.position,m,Object(d.a)(Object(d.a)({},v),{},{ease:"power2.inOut"}),0),a.fromTo(t.scale,Object(l.a)(.8),Object(d.a)(Object(d.a)({},Object(l.a)(1.5)),{},{ease:"power2.inOut"}),0),F(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[C]),G=Object(i.useCallback)(Object(h.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C){e.next=2;break}return e.abrupt("return");case 2:t=C,a=A,T(!A),p.a.to(t.pause(),{duration:a?t.time():1,time:a?0:1});case 6:case"end":return e.stop()}}),e)}))),[A,C]),J=Object(i.useCallback)(Object(h.a)(f.a.mark((function e(){var t,a,n,i,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=2;break}return e.abrupt("return");case 2:t=Math.max(.6,Math.random()+.5),a={ease:"power2.inOut"},n=Object(d.a)({duration:1,repeat:-1,yoyo:!0},a),i=p.a.getTweensOf(y.scale);try{r=function(){var e=p.a.to(y.scale,Object(d.a)({x:1.5*t*.125,y:1.5*t*.125},n));e.eventCallback("onRepeat",(function(){var t;e.vars.repeatTime=(null!==(t=e.vars.repeatTime)&&void 0!==t?t:0)+1}))},i.filter((function(e){return!e.isActive()})).forEach((function(e){return e.pause()})),(c=i.filter((function(e){return e.isActive()}))).length>0?(c.slice(1).forEach((function(e){return e.pause()})),c[0].eventCallback("onRepeat",(function(){var e;c[0].vars.repeatTime=(null!==(e=c[0].vars.repeatTime)&&void 0!==e?e:0)+1,c[0].vars.repeatTime%2===0&&(c[0].pause(),r())}))):r()}catch(o){console.error(o)}case 7:case"end":return e.stop()}}),e)}))),[y]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Container,{ref:function(e){e&&!j&&(e.position.set(m.x,m.y),e.scale.set(.8,.8),S(e),D(e))},tap:G,click:G,interactive:!0},r.a.createElement(o.Graphics,{draw:W,anchor:[.5,.5],position:[u.x,u.y-5]}),r.a.createElement(o.Sprite,{ref:function(e){e&&(e.scale.set(.125,.125),k(e),Object(l.e)((function(e){I(e),J()})))},angle:15,image:Object(l.c)("heart.svg"),anchor:[.5,.55],position:u})),r.a.createElement(o.Text,{text:B?JSON.stringify({latitude:B.coords.latitude,longitude:B.coords.longitude,accuracy:"".concat(B.coords.accuracy," meters"),altitude:B.coords.altitude,altitudeAccuracy:B.coords.altitudeAccuracy},void 0,1):"",position:[16,120],style:new c.s({wordWrap:!0,wordWrapWidth:e.screen.width-32,fontSize:14,align:"left",letterSpacing:2})}))}var v,b,O=a(215);!function(e){e[e.MommyShark=0]="MommyShark",e[e.Suica=1]="Suica"}(b||(b={}));var j=(v={},Object(O.a)(v,b.MommyShark,"Mommy Shark"),Object(O.a)(v,b.Suica,"Pen Pen"),v),S={initialSetting:[{character:b.MommyShark},{character:b.Suica,position:"right"}],lines:[[{character:b.MommyShark,movements:["!shake"],text:"Somebody kidnapped my baby while I was doing home schooling. Would you help me find him?"},{character:b.Suica,movements:["!shake"]}],[{character:b.Suica,text:"Of course!",movements:["shake"]}],[{character:b.MommyShark,movements:["shake"],text:"Thank you!!!"},{character:b.Suica,movements:["active","shake"]}]]},g=a(502),w=a(227);function y(e){var t=e.onClick,a=e.name,l=e.text,s=Object(i.useState)(!1),u=Object(n.a)(s,2),f=u[0],d=u[1],h=Object(i.useState)(""),m=Object(n.a)(h,2),v=m[0],b=m[1],O=Object(o.useApp)().screen,j=O.width,S=O.height;Object(i.useEffect)((function(){b(""),d(!1)}),[l]),Object(o.useTick)((function(e){if(l&&v.length<l.length){v.length===l.length-1&&d(!0);var t=v+l.charAt(v.length);t.length!==l.length&&Math.random()>.5&&(t+=l.charAt(l.length)),b(t)}}));var g=Math.min(400,j-16),w=(j-g)/2,y=function(e){f&&t&&t(e)};return r.a.createElement(o.Container,{position:[w,S-16-120-24],click:y,tap:y,interactive:!0},r.a.createElement(o.Graphics,{draw:function(e){0===e.getBounds().width&&(e.lineStyle(2,16777215,.8),e.beginFill(2368810,.5),e.drawRoundedRect(0,0,g,120,8),e.endFill())},position:[0,24]}),f&&r.a.createElement(o.Graphics,{draw:function(e){if(0===e.getBounds().width){e.lineStyle(2,16777215,.8),e.beginFill(16763394,1),e.moveTo(0,0),e.lineTo(18,8),e.lineTo(0,16),e.lineTo(0,0),e.closePath(),e.endFill();var t=g-30;e.position.set(t,116),p.a.to(e.position,{x:t+2,y:116,repeat:-1,duration:.25,yoyo:!0})}}}),a&&r.a.createElement(o.Text,{text:a,style:new c.s({fill:16777215,fontFamily:"'Roboto Mono', monospace",dropShadow:!0,dropShadowColor:819,dropShadowAngle:0,dropShadowBlur:4,dropShadowAlpha:.5,dropShadowDistance:4,fontSize:16,letterSpacing:1}),click:function(){return console.log(3232)}}),r.a.createElement(o.BitmapText,{text:v,position:[8,32],letterSpacing:.5,style:{fontName:"Lato",fontSize:16,maxWidth:g-16}}))}var k=a(490),x=function(e){return[e.initialPosition,e.initialAngle,e.initialScale,e.movements]},E=function(e,t){var a,n;if(t){var i={};t.initialPosition!==e.initialPosition&&(i.initialPosition=e.initialPosition),t.initialAngle!==e.initialAngle&&(i.initialAngle=e.initialAngle),t.initialScale!==e.initialScale&&(i.initialScale=e.initialScale);var r=new Set;return(null!==(a=e.movements)&&void 0!==a?a:[]).forEach((function(e){return r.add(e)})),(null!==(n=t.movements)&&void 0!==n?n:[]).forEach((function(e){["active","!active"].includes(e)||r.delete(e)})),i.movements=Array.from(r),i}},A=function(){var e=Object(h.a)(f.a.mark((function e(t,a){var n,i,r=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>2&&void 0!==r[2]&&r[2],i=p.a.to(t.position,{y:n?a.y:a.y-40,duration:.5,ease:"power2.inOut",immediateRender:!1}),t.tint=n?10066329:16777215,t.zIndex=n?1:1e3,e.next=6,i.play();case 6:i.kill();case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),T=function(){var e=Object(h.a)(f.a.mark((function e(t){var a,n,i,r=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=r.length>1&&void 0!==r[1]?r[1]:.5,n=r.length>2&&void 0!==r[2]?r[2]:0;try{(i=p.a.timeline({immediateRender:!1})).to(t.transform,{rotation:c.e*(-10+n),duration:a/2,ease:"power2.inOut"}),i.to(t.transform,{rotation:c.e*(10+n),duration:a,ease:"power2.inOut",repeat:-1,yoyo:!0,onRepeat:function(){this._targets[0]||this.kill()},onInterrupt:function(){t&&p.a.to(t.transform,{rotation:c.e*n,duration:.25,ease:"power2.inOut"})}}),i.play()}catch(o){console.error(o)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(e,t){var a,n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(e&&t){if(r||void 0!==t.initialScale){var c,o=Object(l.a)(null!==(c=i.initialScale)&&void 0!==c?c:{x:1,y:1});if(t.initialScale){var s=t.initialScale.valueOf();o=Object(l.d)(o,s)}e.scale.set(o.x,o.y)}var u,f;if(r||void 0!==t.initialAngle)e.angle=(null!==(u=i.initialAngle)&&void 0!==u?u:0)+(null!==(f=t.initialAngle)&&void 0!==f?f:0);var d=Object(l.a)(null!==(a=i.initialPosition)&&void 0!==a?a:{x:0,y:0});(r||void 0!==t.initialPosition)&&e.position.set(d.x,d.y),r&&e.anchor.set(.5,.5);var h=null!==(n=t.movements)&&void 0!==n?n:[];h.includes("active")?A(e,d):h.includes("!active")&&A(e,d,!0),h.includes("shake")?T(e,.5,i.initialAngle):h.includes("!shake")&&p.a.killTweensOf(e.transform,"rotation")}};function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(i.useState)(),a=Object(n.a)(t,2),c=a[0],s=a[1],u=Object(k.a)(e),f=Object(o.useApp)(),d=Object(l.a)([-Math.min(1.5,f.screen.width/500),Math.min(1.5,f.screen.width/500)]),h=-45,p={initialScale:d,initialAngle:h,initialPosition:e.initialPosition};return Object(i.useEffect)((function(){if(c){var t=E(e,u);P(c,t,p,!1)}}),x(e)),r.a.createElement(o.Sprite,{ref:function(t){t&&!c&&(s(t),P(t,e,p,!0))},image:Object(l.c)("shark.png")})}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(i.useState)(),a=Object(n.a)(t,2),c=a[0],s=a[1],u=Object(k.a)(e),f=Object(o.useApp)(),d=Object(l.a)([-Math.min(1.25,f.screen.width/600),Math.min(1.25,f.screen.width/600)]),h={initialScale:d,initialPosition:e.initialPosition};return Object(i.useEffect)((function(){if(c){var t=E(e,u);P(c,t,h,!1)}}),x(e)),r.a.createElement(o.Sprite,{ref:function(t){t&&!c&&(s(t),P(t,e,h,!0))},image:Object(l.c)("suica.png")})}function F(e){var t,a,c=e.script,l=Object(i.useState)(+(null!==(t=localStorage.getItem("line"))&&void 0!==t?t:0)),s=Object(n.a)(l,2),u=s[0],f=s[1],h=Object(i.useState)(!1),p=Object(n.a)(h,2),m=p[0],v=p[1],O=Object(i.useState)([]),S=Object(n.a)(O,2),k=S[0],x=S[1],E=Object(o.useApp)().screen,A=E.width,T=E.height;Object(i.useEffect)((function(){B()}),[u]);var P=function(e){switch(e){case b.MommyShark:return M;case b.Suica:return C;default:throw new Error("Unknown character:"+e)}},F=function(e){return c.lines[u][0].character===e?"active":"!active"},z=function(e){return k.find((function(t){return t.character===e}))},R=function(e,t){var a={};if(void 0===e.character)return a;var n=T-130;return void 0===t&&(a.initialPosition=[48,n],a.initialScale=[1,1],"right"===e.position&&(a.initialPosition[0]=A-90,a.initialScale[0]=-1)),a.movements=[F(e.character)],a},B=function(){var e=Object(w.a)(k);if(!m){var t,a=Object(g.a)(c.initialSetting);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(void 0===z(n.character)){var i=P(n.character);e.push({character:n.character,sprite:i,props:R(n)})}}}catch(f){a.e(f)}finally{a.f()}v(!0)}var r,o=c.lines[u],l=Object(g.a)(e);try{var s=function(){var e,t=r.value,a=o.find((function(e){return e.character===t.character}));t.props=Object(d.a)(Object(d.a)({},t.props),{},{movements:[].concat(Object(w.a)(null!==(e=null===a||void 0===a?void 0:a.movements)&&void 0!==e?e:[]),[F(t.character)])})};for(l.s();!(r=l.n()).done;)s()}catch(f){l.e(f)}finally{l.f()}x(e)};return r.a.createElement(r.a.Fragment,null,k.map((function(e){return r.a.createElement(e.sprite,Object.assign({},e.props,{key:e.character}))})),r.a.createElement(y,{name:j[null!==(a=c.lines[u][0].character)&&void 0!==a?a:-1],text:c.lines[u][0].text,onClick:function(){var e=c.lines.length===u+1?0:u+1;localStorage.setItem("line",""+e),f(e)}}))}function z(){var e=Object(i.useState)(!1),t=Object(n.a)(e,2),a=t[0],u=t[1],f=Object(i.useState)(!1),d=Object(n.a)(f,2),h=d[0],p=d[1],v=Object(i.useState)(),b=Object(n.a)(v,2),O=b[0],j=b[1],g=Object(i.useState)(0),w=Object(n.a)(g,2),y=w[0],k=w[1];Object(i.useEffect)((function(){return x()}),[]);var x=function(){(new c.j).add("Lato",Object(l.c)("/Lato.fnt"),new c.s({dropShadowColor:819,dropShadowAngle:0,dropShadowBlur:2,dropShadowAlpha:.5,dropShadowDistance:2,letterSpacing:.5})).load((function(){p(!0)}))};return window.onresize=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;e&&(u(!1),e.resize(),u(!0))}()},r.a.createElement("div",{id:"canvas",style:{opacity:y}},r.a.createElement(o.Stage,{width:400,onMount:function(e){j(e),e.resizeTo=document.getElementById("canvas"),setTimeout((function(){e.resize(),u(!0),k(1)}))},options:{forceCanvas:!1,antialias:!0,backgroundColor:5419993,autoDensity:!0,autoStart:!0}},a&&h&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(m,null),r.a.createElement(F,{script:S}))))}}}]);