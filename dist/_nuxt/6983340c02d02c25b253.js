(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(t,e,n){"use strict";n.d(e,"i",function(){return h}),n.d(e,"j",function(){return d}),n.d(e,"a",function(){return m}),n.d(e,"o",function(){return v}),n.d(e,"e",function(){return x}),n.d(e,"f",function(){return w}),n.d(e,"c",function(){return y}),n.d(e,"n",function(){return _}),n.d(e,"h",function(){return C}),n.d(e,"p",function(){return k}),n.d(e,"k",function(){return O}),n.d(e,"m",function(){return R}),n.d(e,"d",function(){return E}),n.d(e,"b",function(){return S}),n.d(e,"g",function(){return T}),n.d(e,"l",function(){return N});var r=n(41),o=(n(115),n(162),n(163),n(35)),c=(n(165),n(167),n(168),n(171),n(75),n(48),n(5)),f=(n(93),n(53),n(25),n(110),n(54),n(19)),l=n(0);function h(t){l.a.config.errorHandler&&l.a.config.errorHandler(t)}function d(t){return t.then(function(t){return t.default||t})}function m(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),Object(f.a)({},data,e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function v(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=l.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function x(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}function y(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function _(t){return Promise.all(y(t,function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=v(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function C(t){return $.apply(this,arguments)}function $(){return($=Object(c.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,_(e);case 4:return t.abrupt("return",Object(f.a)({},e,{meta:x(e).map(function(t,n){return Object(f.a)({},t.options.meta,(e.matched[n]||{}).meta)})}));case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function k(t,e){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(regeneratorRuntime.mark(function t(e,n){var c,f,l,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:"/blog/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},path=t,r=Object(o.a)(path),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=U(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([C(n.route),C(n.from)]);case 3:c=t.sent,f=Object(r.a)(c,2),l=f[0],h=f[1],n.route&&(e.context.route=l),n.from&&(e.context.from=h),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=Boolean(n.isHMR),e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}function O(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():R(t[0],e).then(function(){return O(t.slice(1),e)})}function R(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function E(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function S(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=r||{},c=o.pretty?A:encodeURIComponent,f=0;f<t.length;f++){var l=t[f];if("string"!=typeof l){var h=data[l.name||"pathMatch"],d=void 0;if(null==h){if(l.optional){l.partial&&(path+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(h)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var m=0;m<h.length;m++){if(d=c(h[m]),!e[f].test(d))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(d)+"`");path+=(0===m?l.prefix:l.delimiter)+d}}else{if(d=l.asterisk?encodeURI(h).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):c(h),!e[f].test(d))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+d+'"');path+=l.prefix+d}}else path+=l}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",f=e&&e.delimiter||"/";for(;null!=(n=D.exec(t));){var l=n[0],h=n[1],d=n.index;if(path+=t.slice(c,d),c=d+l.length,h)path+=h[1];else{var m=t[c],v=n[2],x=n[3],w=n[4],y=n[5],_=n[6],C=n[7];path&&(r.push(path),path="");var $=null!=v&&null!=m&&m!==v,k="+"===_||"*"===_,j="?"===_||"*"===_,O=n[2]||f,pattern=w||y;r.push({name:x||o++,prefix:v||"",delimiter:O,optional:j,repeat:k,partial:$,asterisk:Boolean(C),pattern:pattern?L(pattern):C?".*":"[^"+P(O)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function T(t,e){var n={},r=Object(f.a)({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function N(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return Object(f.a)({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var D=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function A(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function P(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function L(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function U(t,e){var n,o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));var c,f=t.split("/"),l=(n?n+"://":"//")+f.shift(),path=f.filter(Boolean).join("/");if(2===(f=path.split("#")).length){var h=f,d=Object(r.a)(h,2);path=d[0],c=d[1]}return l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),l+=c?"#"+c:""}},133:function(t,e,n){t.exports=n(134)},134:function(t,e,n){"use strict";n.r(e),function(t){n(93),n(66),n(67);var e=n(35),r=(n(48),n(143),n(5)),o=(n(72),n(106),n(53),n(25),n(110),n(54),n(109),n(147),n(159),n(161),n(0)),c=n(127),f=n(88),l=n(1),h=n(26),d=n(60);o.a.component(d.a.name,d.a),o.a.component("NLink",d.a),t.fetch||(t.fetch=c.a);var m,v,x=[],w=window.__NUXT__||{};Object.assign(o.a.config,{silent:!0,performance:!1});var y=o.a.config.errorHandler||console.error;function _(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function C(t,e,n){return $.apply(this,arguments)}function $(){return($=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,f,h,d=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=Boolean(m.nuxt.err)||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?Object(l.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,Object(l.n)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return d._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},f=c.statusCode||c.status||c.response&&c.response.status||500,h=c.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(h)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:f,message:h}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function k(t,e){return w.serverRendered&&e&&Object(l.a)(t,e),t._Ctor=t,t}function j(t){var path=Object(l.d)(t.options.base,t.options.mode);return Object(l.c)(t.match(path),function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r,o,c){var f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return f=k(Object(l.o)(e),w.data?w.data[c]:null),r.components[o]=f,t.abrupt("return",f);case 7:case"end":return t.stop()}},t)}));return function(e,n,r,o,c){return t.apply(this,arguments)}}())}function O(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=Object(l.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof f.a[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),f.a[t])}),!c)return Object(l.k)(o,e)}function R(t,e,n){return E.apply(this,arguments)}function E(){return(E=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,f,d,v,w,y,C,$,k,j,R,E,S,T,N,D=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return e===n?x=[]:(o=[],x=Object(l.e)(n,o).map(function(t,i){return Object(l.b)(n.matched[o[i]].path)(n.params)})),c=!1,f=function(path){n.path===path.path&&D.$loading.finish&&D.$loading.finish(),n.path!==path.path&&D.$loading.pause&&D.$loading.pause(),c||(c=!0,r(path))},t.next=7,Object(l.p)(m,{route:e,from:n,next:f.bind(this)});case 7:if(this._dateLastError=m.nuxt.dateErr,this._hadError=Boolean(m.nuxt.err),d=[],(v=Object(l.e)(e,d)).length){t.next=25;break}return t.next=14,O.call(this,v,m.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof h.a.layout?h.a.layout(m.context):h.a.layout);case 18:return w=t.sent,t.next=21,O.call(this,v,m.context,w);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return m.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return v.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(_(v,e,n)),t.prev=27,t.next=30,O.call(this,v,m.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!m.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(y=v[0].options.layout)&&(y=y(m.context)),t.next=38,this.loadLayout(y);case 38:return y=t.sent,t.next=41,O.call(this,v,m.context,y);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!m.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:C=!0,t.prev=46,$=!0,k=!1,j=void 0,t.prev=50,R=v[Symbol.iterator]();case 52:if($=(E=R.next()).done){t.next=64;break}if("function"==typeof(S=E.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,S.options.validate(m.context);case 58:if(C=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:$=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),k=!0,j=t.t0;case 70:t.prev=70,t.prev=71,$||null==R.return||R.return();case 73:if(t.prev=73,!k){t.next=76;break}throw j;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(C){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(v.map(function(t,i){if(t._path=Object(l.b)(e.matched[d[i]].path)(e.params),t._dataRefresh=!1,D._pathChanged&&D._queryChanged||t._path!==x[i])t._dataRefresh=!0;else if(!D._pathChanged&&D._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return D._diffQuery[t]}))}if(!D._hadError&&D._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=Boolean(t.options.fetch),f=o&&c?30:45;if(o){var h=Object(l.m)(t.options.asyncData,m.context).then(function(e){Object(l.a)(t,e),D.$loading.increase&&D.$loading.increase(f)});r.push(h)}if(D.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(m.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){D.$loading.increase&&D.$loading.increase(f)}),r.push(p)}return Promise.all(r)}));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(T=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,T));case 97:return x=[],Object(l.i)(T),"function"==typeof(N=h.a.layout)&&(N=N(m.context)),t.next=103,this.loadLayout(N);case 103:this.error(T),this.$nuxt.$emit("routeChanged",e,n,T),r();case 106:case"end":return t.stop()}},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function S(t,n){Object(l.c)(t,function(t,n,r,c){return"object"!==Object(e.a)(t)||t.options||((t=o.a.extend(t))._Ctor=t,r.components[c]=t),t})}function T(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?h.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(m.context)),this.setLayout(e)}function N(t,e){var n=this;if(!1!==this._pathChanged||!1!==this._queryChanged){var r=[],c=Object(l.f)(t,r),f=Object(l.e)(t,r);o.a.nextTick(function(){c.forEach(function(t,i){if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&f[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)o.a.set(t.$data,n,e[n]);window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}),T.call(n,t)})}}function D(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),v.afterEach(function(e,n){o.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function A(){return(A=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,c,f,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return m=e.app,v=e.router,e.store,t.next=5,Promise.all(j(v));case 5:return n=t.sent,r=new o.a(m),c=w.layout||"default",t.next=10,r.loadLayout(c);case 10:if(r.setLayout(c),f=function(){r.$mount("#__nuxt"),v.afterEach(S),v.afterEach(N.bind(r)),o.a.nextTick(function(){D(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(_(n,v.currentRoute)),x=v.currentRoute.matched.map(function(t){return Object(l.b)(t.path)(v.currentRoute.params)})),r.$loading={},w.error&&r.error(w.error),v.beforeEach(C.bind(r)),v.beforeEach(R.bind(r)),!w.serverRendered){t.next=21;break}return f(),t.abrupt("return");case 21:h=function(){S(v.currentRoute,v.currentRoute),T.call(r,v.currentRoute),f()},R.call(r,v.currentRoute,v.currentRoute,function(path){if(path){var t=v.afterEach(function(e,n){t(),h()});v.push(path,void 0,function(t){t&&y(t)})}else h()});case 23:case"end":return t.stop()}},t)}))).apply(this,arguments)}Object(h.b)().then(function(t){return A.apply(this,arguments)}).catch(y)}.call(this,n(20))},174:function(t,e,n){"use strict";var r=n(55);n.n(r).a},175:function(t,e,n){"use strict";var r=n(56);n.n(r).a},176:function(t,e,n){},184:function(t,e,n){"use strict";n.r(e),n.d(e,"state",function(){return o}),n.d(e,"mutations",function(){return c}),n.d(e,"actions",function(){return f});n(48);var r=n(5),o=function(){return{sidebar:!1,authUser:null}},c={toggleSidebar:function(t){t.sidebar=!t.sidebar},LOGIN:function(t,e){t.authUser=e},LOGOUT:function(){o.authUser=null},SET_USER:function(t,e){t.authUser=e},SET_MENU:function(t,data){t.topMenu=data.topMenu,t.aside=data.aside}},f={nuxtServerInit:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.commit,n.req;case 2:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),login:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.commit,n.id,n.pw;case 2:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),logout:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.commit;case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},26:function(t,e,n){"use strict";n(25);var r=n(19),o=(n(48),n(5)),c=(n(54),n(0)),f=n(128),l=n.n(f),h=n(89),d=n(1),m=function(){return Object(d.j)(Promise.all([n.e(5),n.e(2)]).then(n.bind(null,234)))};c.a.use(h.a),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",function(){window.history.scrollRestoration="auto"}),window.addEventListener("load",function(){window.history.scrollRestoration="manual"}));var v=function(t,e,n){var r=!1;return t.matched.length<2&&t.matched.every(function(t){return!1!==t.components.default.options.scrollToTop})?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var x=n(129),w=n.n(x),y=Object(r.a)({},w.a,{name:"NoSsr"}),_={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,f=n.$nuxt.nuxt.defaultTransition,l=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&l++,n=n.$parent;data.nuxtChildDepth=l;var h=c[l]||f,d={};C.forEach(function(t){void 0!==h[t]&&(d[t]=h[t])});var m={};$.forEach(function(t){"function"==typeof h[t]&&(m[t]=h[t].bind(o))});var v=m.beforeEnter;m.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),v)return v.call(o,t)};var x=[t("router-view",data)];return r.keepAlive&&(x=[t("keep-alive",{props:r.keepAliveProps},x)]),t("transition",{props:d,on:m},x)}},C=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],$=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],k={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},j=(n(174),n(23)),O=Object(j.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,R=(n(75),n(41)),E={name:"Nuxt",components:{NuxtChild:_,NuxtError:O},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(d.b)(this.$route.matched[0].path)(this.$route.params);var t=Object(R.a)(this.$route.matched,1)[0];if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var n=e.options;if(n.key)return"function"==typeof n.key?n.key(this.$route):n.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},S={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},T=(n(175),Object(j.a)(S,void 0,void 0,!1,null,null,null).exports),N=(n(176),{props:["appName","drawer","rightDrawer","login"],data:function(){return{drawerChild:null,rightDrawerChild:null}},methods:{goDark:function(){this.theme=!0!==this.theme,this.$emit("isTheme",this.theme)},fnDrawer:function(){this.drawerChild=!0!==this.drawerChild,this.$emit("isDrawer",this.drawerChild)},fnRightDrawer:function(){this.rightDrawerChild=!0!==this.rightDrawerChild,this.$emit("isRightDrawer",this.rightDrawerChild)},fnLogout:function(){this.$store.dispatch("logout"),this.$emit("isLogin",!1)}},watch:{drawer:function(t){this.drawerChild=t},rightDrawer:function(t){this.rightDrawerChild=t}}}),D=n(57),A=n.n(D),P=n(84),L=n(86),U=n(214),I=n(87),M=n(85),B=n(215),V=Object(j.a)(N,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-toolbar",{attrs:{"clipped-right":t.$vuetify.breakpoint.lgAndUp,app:"",fixed:""}},[n("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[n("v-toolbar-side-icon",{on:{click:function(e){return e.stopPropagation(),t.fnDrawer(e)}}}),t._v(" "),n("span",{staticClass:"hidden-sm-and-down",domProps:{textContent:t._s(t.appName)}})],1),t._v(" "),n("v-spacer"),t._v(" "),n("span",[t._v("\r\n      "+t._s(t.$store.state.authUser)+"\r\n    ")]),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("apps")])],1),t._v(" "),t.login?n("v-btn",{attrs:{icon:""},on:{click:function(e){return e.preventDefault(),t.fnLogout(e)}}},[n("v-icon",[t._v("account_circle")])],1):n("v-btn",{attrs:{icon:""},on:{click:function(e){return e.preventDefault(),t.fnLogIn(e)}}},[n("v-icon",[t._v("logout")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.fnRightDrawer(e)}}},[n("v-icon",{attrs:{light:""}},[t._v("compare_arrows")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.goDark(e)}}},[n("v-icon",[t._v("apps")])],1)],1)],1)},[],!1,null,null,null),H=V.exports;A()(V,{VBtn:P.a,VIcon:L.a,VSpacer:U.a,VToolbar:I.a,VToolbarSideIcon:M.a,VToolbarTitle:B.a});var F={data:function(){return{}},props:{source:String},created:function(){},methods:{},components:{Header:H}},J=n(217),K=n(79),z=n(80),Q=n(216),X=Object(j.a)(F,function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{dark:"",id:"inspire"}},[e("Header"),this._v(" "),e("v-content",[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("nuxt")],1)],1),this._v(" "),e("v-footer",{attrs:{fixed:"",app:""}},[e("span",[this._v("© "+this._s((new Date).getFullYear()))])])],1)},[],!1,null,null,null),W=X.exports;A()(X,{VApp:J.a,VContainer:K.a,VContent:z.a,VFooter:Q.a});var G={_default:W},Y={head:{title:"devjeonghun",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"blog"},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"nuxt-template"},{hid:"author",name:"author",content:"devjeonghun"},{hid:"theme-color",name:"theme-color",content:"#3B8070"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"nuxt-template"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"nuxt-template"},{hid:"og:description",name:"og:description",property:"og:description",content:"nuxt+vuetify"}],script:[{type:"text/javascript",src:""}],link:[{rel:"icon",type:"image/x-icon",href:"/blog/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"},{rel:"manifest",href:"/blog/_nuxt/manifest.137fbd2f.json"}],style:[],htmlAttrs:{lang:"en"}},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.a.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&G["_"+t]||(t="default"),this.layoutName=t,this.layout=G["_"+t],this.layout},loadLayout:function(t){return t&&G["_"+t]||(t="default"),Promise.resolve(G["_"+t])}},components:{NuxtLoading:T}},Z=(n(72),n(115),n(90));c.a.use(Z.a);var tt={};(tt=function(t,e){if((t=t.default||t).commit)throw new Error("[nuxt] ".concat(e," should export a method that returns a Vuex instance."));return"function"!=typeof t&&(t=Object.assign({},t)),nt(t,e)}(n(184),"store/index.js")).modules=tt.modules||{};var et=tt instanceof Function?tt:function(){return new Z.a.Store(Object.assign({strict:!1},tt))};function nt(t,e){if(t.state&&"function"!=typeof t.state){console.warn("'state' should be a method that returns an object in ".concat(e));var n=Object.assign({},t.state);t=Object.assign({},t,{state:function(){return n}})}return t}for(var ot=n(91),it=n.n(ot),at=(n(66),n(67),n(53),n(130)),st=n.n(at),ut={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,c=void 0;try{for(var f,l=(Array.isArray(n)?n:[n])[Symbol.iterator]();!(r=(f=l.next()).done);r=!0){var h=f.value;if(!e)return void delete this.defaults.headers[h][t];this.defaults.headers[h][t]=e}}catch(t){o=!0,c=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw c}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use(function(e){return t(e)||e})},onResponse:function(t){this.interceptors.response.use(function(e){return t(e)||e})},onRequestError:function(t){this.interceptors.request.use(void 0,function(e){return t(e)||Promise.reject(e)})},onResponseError:function(t){this.interceptors.response.use(void 0,function(e){return t(e)||Promise.reject(e)})},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},ct=function(){var t=pt[ft];ut["$"+t]=function(){return this[t].apply(this,arguments).then(function(t){return t&&t.data})}},ft=0,pt=["request","delete","get","head","options","post","put","patch"];ft<pt.length;ft++)ct();var lt=function(t,e){var n={baseURL:"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"];var r=st.a.create(n);!function(t){for(var e in ut)t[e]=ut[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest(function(t){t&&!1===t.progress||o++}),t.onResponse(function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())}),t.onError(function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())});var c=function(t){if(o){var progress=100*t.loaded/(t.total*o);r().set(Math.min(100,progress))}};t.defaults.onUploadProgress=c,t.defaults.onDownloadProgress=c}(r),t.$axios=r,e("axios",r)},ht=n(8),mt=n(218),vt=n(118);c.a.use(ht.a,{components:{VApp:J.a,VNavigationDrawer:mt.a,VFooter:Q.a,VToolbar:I.a},directives:{Ripple:vt.a}});var gt=n(83);n.d(e,"b",function(){return bt}),n.d(e,"a",function(){return O}),c.a.component(y.name,y),c.a.component(_.name,_),c.a.component("NChild",_),c.a.component(E.name,E),c.a.use(l.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var xt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function bt(t){return wt.apply(this,arguments)}function wt(){return(wt=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,o,f,l,x,w,path,y;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new h.a({mode:"history",base:decodeURI("/blog/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:v,routes:[{path:"/",component:m,name:"index"}],fallback:!1});case 2:return n=t.sent,(o=et(e)).$router=n,f=o.registerModule,o.registerModule=function(path,t,e){return f.call(o,path,t,Object.assign({preserveState:!0},e))},l=Object(r.a)({router:n,store:o,nuxt:{defaultTransition:xt,transitions:[xt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},xt,{name:t}):Object.assign({},xt,t):xt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,l.context._errored=Boolean(t),t=t?Object(d.l)(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},Y),o.app=l,x=e?e.next:function(t){return l.router.push(t)},e?w=n.resolve(e.url).route:(path=Object(d.d)(n.options.base),w=n.resolve(path).route),t.next=13,Object(d.p)(l,{route:w,next:x,error:l.nuxt.error.bind(l),store:o,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});case 13:if(y=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");l[t="$"+t]=e,o[t]=l[t];var n="__nuxt_"+t+"_installed__";c.a[n]||(c.a[n]=!0,c.a.use(function(){c.a.prototype.hasOwnProperty(t)||Object.defineProperty(c.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&o.replaceState(window.__NUXT__.state),"function"!=typeof it.a){t.next=18;break}return t.next=18,it()(l.context,y);case 18:if("function"!=typeof lt){t.next=21;break}return t.next=21,lt(l.context,y);case 21:t.next=24;break;case 24:if("function"!=typeof gt.default){t.next=27;break}return t.next=27,Object(gt.default)(l.context,y);case 27:t.next=30;break;case 30:return t.abrupt("return",{app:l,store:o,router:n});case 31:case"end":return t.stop()}},t)}))).apply(this,arguments)}},55:function(t,e,n){},56:function(t,e,n){},60:function(t,e,n){"use strict";n(25),n(66),n(67),n(53),n(72),n(106);var r=n(0),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},c=window.IntersectionObserver&&new window.IntersectionObserver(function(t){t.forEach(function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()})});e.a={name:"NuxtLink",extends:r.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||o(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(c.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){c&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),c.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(function(t){return t.components.default}).filter(function(t){return"function"==typeof t&&!t.options&&!t.__prefetched})},prefetch:function(){if(this.canPrefetch()){c.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,f=t[Symbol.iterator]();!(e=(o=f.next()).done);e=!0){var l=o.value,h=l();h instanceof Promise&&h.catch(function(){}),l.__prefetched=!0}}catch(t){n=!0,r=t}finally{try{e||null==f.return||f.return()}finally{if(n)throw r}}}}}}},83:function(t,e,n){"use strict";n.d(e,"b",function(){return c});var r=n(42),o=n.n(r);n(209);if(!o.a.apps.length){o.a.initializeApp({authDomain:"githubblog-397f2.firebaseapp.com",databaseURL:"https://githubblog-397f2.firebaseio.com",projectId:"githubblog-397f2",storageBucket:"githubblog-397f2.appspot.com",messagingSenderId:"688719989122",appId:"1:688719989122:web:27a88a8f9fd0fe4e"}),o.a.firestore().settings({timestampsInSnapshots:!0})}var c=o.a.firestore()},88:function(t,e,n){"use strict";e.a={}},91:function(t,e){"serviceWorker"in navigator?navigator.serviceWorker.register("/blog/sw.js",{scope:"/blog/"}).then(function(t){window.$sw=t}).catch(function(t){console.error("Service worker registration failed:",t)}):console.warn("Service workers are not supported.")}},[[133,3,1,4]]]);