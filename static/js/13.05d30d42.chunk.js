(this.webpackJsonpportofolio=this.webpackJsonpportofolio||[]).push([[13],{82:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),c=n.n(r),l=n(44),o=n.n(l),i=n(8),m=n(6),s={EN:{years:function(e){return e>1?"years":"year"},months:function(e){return e>0?e>1?"months":"month":""},and:" and "},GR:{years:function(e){return e>1?"\u03c7\u03c1\u03cc\u03bd\u03b9\u03b1":"\u03c7\u03c1\u03cc\u03bd\u03bf\u03c2"},months:function(e){return e>0?e>1?"\u03bc\u03ae\u03bd\u03b5\u03c2":"\u03bc\u03ae\u03bd\u03b1":""},and:" \u03ba\u03b1\u03b9 "}},u=Object(m.a)((function(){return n.e(8).then(n.bind(null,78))})),p=Object(m.a)((function(){return n.e(14).then(n.bind(null,83))})),d=Object(m.a)((function(){return n.e(7).then(n.bind(null,79))}));t.default=function(){var e=Object(r.useContext)(i.a).getContent,t=Object(r.useState)(!1),n=Object(a.a)(t,2),l=n[0],m=n[1],f=Object(r.useState)(),h=Object(a.a)(f,2),b=h[0],E=h[1],g=Object(r.useContext)(i.a),N=g.getTags,y=g.language,v=e().WORK_EXP,O=N().aboutMe;return Object(r.useEffect)((function(){o.a.get("https://api.github.com/users/iamtheef/repos?sort=created").then((function(e){E(e.data),m(!0)})).catch((function(e){console.error(e.message)}))}),[]),l?c.a.createElement("div",{className:"container marginTop"},c.a.createElement("div",null,c.a.createElement("h3",{className:"intro"},N().experience.pinned),c.a.createElement("div",{className:"row",style:{marginTop:"-2%"}},c.a.createElement(d,null))),c.a.createElement("div",{className:"row",style:{marginTop:"5rem",marginLeft:"0.3rem"}},c.a.createElement("h1",{className:"intro"},O.experience),c.a.createElement("div",{className:"col-12"},c.a.createElement("ul",null,v.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("b",{style:{fontFamily:"Nanum Gothic",fontSize:"20px"}},e.title," "),c.a.createElement("span",null,c.a.createElement("i",{style:{color:"#60c8d6",marginLeft:"5px"}},e.period.text," ",function(e,t){var n,a=e.start.split("/"),r=e.end.split("/"),c=0,l=Number(a[1]),o=Number(r[1]),i=Number(a[0]),m=Number(r[0]);m<i&&(o-=1,m+=12);var u=new Date(l,i-1),p=new Date(o,m-1).getTime()-u.getTime();return c=Math.ceil(p/2592e6),n=Math.floor(c/12),c%=12,n>0||c>0?"(".concat(n," ").concat(s[t].years(n)).concat(n>0&&c>0?s[t].and:"").concat(c>0?" ".concat(c," ").concat(s[t].months(c)):"",")"):"(".concat(c," ").concat(s[t].months(c),")")}(e.period.date,y)),c.a.createElement("p",null,e.description)))}))))),c.a.createElement("h3",{className:"intro mt-5"},N().experience.recent),b.map((function(e,t){return c.a.createElement("div",{className:"row mb-4",key:e.html_url},c.a.createElement("div",{className:"col-md"},c.a.createElement(p,{title:e.name,description:e.description,url:e.html_url,language:e.language})))}))):c.a.createElement(u,null)}}}]);
//# sourceMappingURL=13.05d30d42.chunk.js.map