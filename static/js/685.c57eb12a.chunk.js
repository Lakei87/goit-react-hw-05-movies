"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[685],{685:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(861),a=e(885),c=e(757),u=e.n(c),o=e(791),s=e(739),i=e(195),p=e(565),f=function(n){return n.map((function(n){return n.name})).join(", ")},v=e(184);function l(){var n,t,e=(0,o.useState)(null),c=(0,a.Z)(e,2),l=c[0],d=c[1],h=(0,o.useState)([]),g=(0,a.Z)(h,2),x=g[0],w=g[1],m=(0,s.UO)().id,y=(0,s.TH)();return console.log(l),(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.vq)(m);case 3:t=n.sent,d(t),w(f(t.genres)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[m]),(0,v.jsxs)(i.xu,{as:"main",p:4,children:[(0,v.jsx)(i.II,{}),l&&(0,v.jsx)(i.Zx,{genres:x,poster:l.poster_path,title:l.title,date:l.release_date.slice(0,4),vote:l.vote_average,overview:l.overview}),(0,v.jsx)(i.j0,{location:null!==(n=null===(t=y.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/"}),(0,v.jsx)(o.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading.."}),children:(0,v.jsx)(s.j3,{})})]})}},565:function(n,t,e){e.d(t,{Hg:function(){return f},Jh:function(){return h},XT:function(){return i},_r:function(){return x},vq:function(){return l}});var r=e(861),a=e(757),c=e.n(a),u=e(44),o="https://api.themoviedb.org/3",s="api_key=5f364d2fc6b25c805674b50a1c63d59e";function i(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/search/movie?").concat(s,"&query=").concat(t,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"/trending/movie/day?").concat(s),n.next=3,u.Z.get(t);case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/movie/").concat(t,"?").concat(s,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/movie/").concat(t,"/credits?").concat(s,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/movie/").concat(t,"/reviews?").concat(s,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=685.c57eb12a.chunk.js.map