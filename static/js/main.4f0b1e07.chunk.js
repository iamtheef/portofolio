(this.webpackJsonpportofolio=this.webpackJsonpportofolio||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var a,o=n(11),c=n(0),r=n.n(c);!function(e){e.english="EN",e.greek="GR"}(a||(a={}));var i=Object(c.createContext)({language:a.english});function l(e){var t=e.children,n=Object(c.useState)(JSON.parse(window.localStorage.getItem("lang"))||a.english),l=Object(o.a)(n,2),s=l[0],u=l[1];return Object(c.useEffect)((function(){window.localStorage.setItem("lang",JSON.stringify(s))})),r.a.createElement(i.Provider,{value:{language:s,setLanguage:u,isGreek:function(){return"GR"===s}}},t)}},19:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(18),r=n.n(c),i=(n(24),n(7)),l=n(2),s=n(10),u=n(11),d=function(e){return window.location.hash===e},m=function(){var e=Object(a.useContext)(s.a),t=e.language,n=e.setLanguage,c=e.isGreek,r=Object(a.useState)(!1),l=Object(u.a)(r,2),m=l[0],f=l[1];return o.a.createElement("div",{className:"mt-4"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row navbar"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"row"},o.a.createElement(i.b,{to:"/",className:"col-lg navbar-button ".concat(d("#/")&&"active")},c()?"\u0391\u03c1\u03c7\u03b9\u03ba\u03ae":"Home"),o.a.createElement(i.b,{className:"col-lg navbar-button ".concat(d("#/projects")&&"active"),to:"/projects"},"Projects"),o.a.createElement(i.b,{className:"col-lg navbar-button ".concat(d("#/about")&&"active"),to:"/about"},c()?"\u03a3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03bc\u03b5 \u03b5\u03bc\u03ad\u03bd\u03b1":"About Me"),o.a.createElement(i.b,{className:"col-lg navbar-button ".concat(d("#/contact")&&"active"),to:"/contact"},c()?"\u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03ae\u03c3\u03c4\u03b5":"Contact"))),o.a.createElement("div",{className:"dropdown",onClick:function(){return f(!m)}},o.a.createElement("button",{className:"btn dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown"},t),o.a.createElement("div",{style:{marginLeft:"-170%"},className:"dropdown-menu ".concat(m&&"expanded"),"aria-labelledby":"dropdownMenuButton"},o.a.createElement("div",{className:"dropdown-item",onClick:function(){return n("EN")}},"EN"),o.a.createElement("div",{className:"dropdown-item",onClick:function(){return n("GR")}},"GR"))))))},f=n(8),b=Object(f.a)((function(){return n.e(9).then(n.bind(null,72))})),g=Object(f.a)((function(){return n.e(10).then(n.bind(null,68))})),v=Object(f.a)((function(){return n.e(6).then(n.bind(null,69))})),p=Object(f.a)((function(){return Promise.all([n.e(2),n.e(5)]).then(n.bind(null,73))})),h=Object(f.a)((function(){return n.e(4).then(n.bind(null,74))}));var w=function(){return o.a.createElement(i.a,null,o.a.createElement(l.c,null,o.a.createElement(s.b,null,o.a.createElement(m,null),o.a.createElement(b,null),o.a.createElement(l.a,{exact:!0,path:"/",component:g}),o.a.createElement(l.a,{exact:!0,path:"/projects",component:p}),o.a.createElement(l.a,{exact:!0,path:"/about",component:v}),o.a.createElement(l.a,{exact:!0,path:"/contact",component:h}))))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portofolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/portofolio","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()}},[[19,1,3]]]);
//# sourceMappingURL=main.4f0b1e07.chunk.js.map