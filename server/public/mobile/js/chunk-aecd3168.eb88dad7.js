(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aecd3168"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),c=r("9112");for(var a in o){var u=n[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(f){s.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void r(s)}a.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)}))}}},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var n=r("ade3");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},6558:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"address-list"},[n("van-sticky",[n("van-nav-bar",{attrs:{title:"地址列表","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}})],1),t.empty?n("div",{staticClass:"list-empty"},[n("img",{attrs:{src:r("e56e")}}),n("p",[t._v("还没有添加收货地址")])]):n("div",{staticClass:"list-body"},t._l(t.addressList,(function(e){return n("van-cell",{key:e._id,attrs:{title:e.address+" "+e.address_detail,center:""},on:{click:function(r){return t.select(e)}},scopedSlots:t._u([{key:"label",fn:function(){return[n("span",[t._v(t._s(e.name))]),e.sex?n("span",[t._v("先生")]):n("span",[t._v("女士")]),n("span",{staticClass:"mobile"},[t._v(t._s(e.mobile))])]},proxy:!0},{key:"right-icon",fn:function(){return[n("van-icon",{attrs:{name:"edit",size:"20"},on:{click:function(r){return t.$router.push("/addressEdit/"+e._id)}}})]},proxy:!0}],null,!0)})})),1),n("div",{staticClass:"list-btn"},[n("van-button",{attrs:{type:"danger",round:"",block:""},on:{click:function(e){return t.$router.push("/addressEdit")}}},[t._v("新增地址")])],1)],1)},o=[],i=(r("96cf"),r("1da1")),c=r("5530"),a=r("c1fb"),u=r("5880"),s={props:{shopId:{type:String}},data:function(){return{addressList:[],empty:!1}},computed:Object(c["a"])({},Object(u["mapState"])({userInfo:function(t){return t.userInfo}})),created:function(){this.getAddressList()},methods:{getAddressList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["d"])(t.userInfo._id);case 2:r=e.sent,n=r.data,200===n.meta.status&&(t.addressList=n.data,0===n.data.length&&(t.empty=!0));case 5:case"end":return e.stop()}}),e)})))()},select:function(t){this.shopId&&(this.$store.commit("saveDeliveryPoi",{msg:t}),this.$router.go(-1))}}},f=s,l=(r("9de4"),r("2877")),d=Object(l["a"])(f,n,o,!1,null,"0e4da42f",null);e["default"]=d.exports},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,i(0,r)):t[c]=r}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),c=new _(n||[]);return i._invoke=E(t,r,c),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",d="executing",h="completed",p={};function y(){}function v(){}function g(){}var b={};b[i]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(k([])));w&&w!==r&&n.call(w,i)&&(b=w);var O=g.prototype=y.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function S(t,e){function r(o,i,c,a){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,a)}))}a(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return T()}r.method=o,r.arg=i;while(1){var c=r.delegate;if(c){var a=j(c,r);if(a){if(a===p)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?h:l,u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:T}}function T(){return{value:e,done:!0}}return v.prototype=O.constructor=g,g.constructor=v,g[a]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},L(S.prototype),S.prototype[c]=function(){return this},t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new S(u(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},L(O),O[a]="Generator",O[i]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"9de4":function(t,e,r){"use strict";var n=r("edf0"),o=r.n(n);o.a},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),c=r("c430"),a=r("83ab"),u=r("4930"),s=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),h=r("861d"),p=r("825a"),y=r("7b0b"),v=r("fc6a"),g=r("c04e"),b=r("5c6c"),m=r("7c73"),w=r("df75"),O=r("241c"),L=r("057f"),S=r("7418"),E=r("06cf"),j=r("9bf2"),x=r("d1e7"),P=r("9112"),_=r("6eeb"),k=r("5692"),T=r("f772"),N=r("d012"),D=r("90e3"),C=r("b622"),G=r("e538"),I=r("746f"),A=r("d44e"),F=r("69f3"),M=r("b727").forEach,R=T("hidden"),V="Symbol",$="prototype",H=C("toPrimitive"),J=F.set,B=F.getterFor(V),U=Object[$],q=o.Symbol,z=i("JSON","stringify"),Y=E.f,Q=j.f,W=L.f,K=x.f,X=k("symbols"),Z=k("op-symbols"),tt=k("string-to-symbol-registry"),et=k("symbol-to-string-registry"),rt=k("wks"),nt=o.QObject,ot=!nt||!nt[$]||!nt[$].findChild,it=a&&f((function(){return 7!=m(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Y(U,e);n&&delete U[e],Q(t,e,r),n&&t!==U&&Q(U,e,n)}:Q,ct=function(t,e){var r=X[t]=m(q[$]);return J(r,{type:V,tag:t,description:e}),a||(r.description=e),r},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ut=function(t,e,r){t===U&&ut(Z,e,r),p(t);var n=g(e,!0);return p(r),l(X,n)?(r.enumerable?(l(t,R)&&t[R][n]&&(t[R][n]=!1),r=m(r,{enumerable:b(0,!1)})):(l(t,R)||Q(t,R,b(1,{})),t[R][n]=!0),it(t,n,r)):Q(t,n,r)},st=function(t,e){p(t);var r=v(e),n=w(r).concat(pt(r));return M(n,(function(e){a&&!lt.call(r,e)||ut(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):st(m(t),e)},lt=function(t){var e=g(t,!0),r=K.call(this,e);return!(this===U&&l(X,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(X,e)||l(this,R)&&this[R][e])||r)},dt=function(t,e){var r=v(t),n=g(e,!0);if(r!==U||!l(X,n)||l(Z,n)){var o=Y(r,n);return!o||!l(X,n)||l(r,R)&&r[R][n]||(o.enumerable=!0),o}},ht=function(t){var e=W(v(t)),r=[];return M(e,(function(t){l(X,t)||l(N,t)||r.push(t)})),r},pt=function(t){var e=t===U,r=W(e?Z:v(t)),n=[];return M(r,(function(t){!l(X,t)||e&&!l(U,t)||n.push(X[t])})),n};if(u||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),r=function(t){this===U&&r.call(Z,t),l(this,R)&&l(this[R],e)&&(this[R][e]=!1),it(this,e,b(1,t))};return a&&ot&&it(U,e,{configurable:!0,set:r}),ct(e,t)},_(q[$],"toString",(function(){return B(this).tag})),_(q,"withoutSetter",(function(t){return ct(D(t),t)})),x.f=lt,j.f=ut,E.f=dt,O.f=L.f=ht,S.f=pt,G.f=function(t){return ct(C(t),t)},a&&(Q(q[$],"description",{configurable:!0,get:function(){return B(this).description}}),c||_(U,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:q}),M(w(rt),(function(t){I(t)})),n({target:V,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!a},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ht,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(y(t))}}),z){var yt=!u||f((function(){var t=q();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));n({target:"JSON",stat:!0,forced:yt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(h(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,z.apply(null,o)}})}q[$][H]||P(q[$],H,q[$].valueOf),A(q,V),N[R]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ade3:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),c=r("d039"),a=c((function(){i(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return i(o(t))}})},c1fb:function(t,e,r){"use strict";r.d(e,"h",(function(){return s})),r.d(e,"k",(function(){return f})),r.d(e,"j",(function(){return l})),r.d(e,"i",(function(){return d})),r.d(e,"e",(function(){return h})),r.d(e,"n",(function(){return p})),r.d(e,"g",(function(){return y})),r.d(e,"b",(function(){return v})),r.d(e,"f",(function(){return g})),r.d(e,"m",(function(){return b})),r.d(e,"d",(function(){return m})),r.d(e,"c",(function(){return w})),r.d(e,"l",(function(){return O})),r.d(e,"o",(function(){return L})),r.d(e,"a",(function(){return S}));r("d3b7");var n=r("8bbf"),o=r.n(n),i=r("cebe"),c=r.n(i),a=c.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEV_API||"/api/mobile/"});a.interceptors.request.use((function(t){return sessionStorage.getItem("token")&&(t.headers.Authorization="Bearer "+sessionStorage.getItem("token")),t}),(function(t){return Promise.reject(t)})),a.interceptors.response.use((function(t){return t}),(function(t){return t.response||o.a.prototype.$toast.fail("无法连接服务器"),t.response.data.meta&&o.a.prototype.$toast.fail(t.response.data.meta.message),Promise.reject(t)}));var u=a;function s(){return u.get("shops/category")}function f(t){return u.get("shops/subCategory",{params:{id:t}})}function l(t){return u.get("shops",{params:t})}function d(t){return u.get("shops/".concat(t))}function h(t){return u.get("goods/category/".concat(t))}function p(t){return u.post("orders",t)}function y(t){return u.get("orders/list",{params:t})}function v(t){return u.delete("/orders/".concat(t))}function g(t){return u.get("/orders/".concat(t))}function b(t){return u.post("login",t)}function m(t){return u.get("/address/list/".concat(t))}function w(t){return u.get("/address/".concat(t))}function O(t){return u.post("/address",t)}function L(t,e){return u.put("/address/".concat(t),e)}function S(t){return u.delete("/address/".concat(t))}},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),c=r("fc6a"),a=r("06cf"),u=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),o=a.f,s=i(n),f={},l=0;while(s.length>l)r=o(n,e=s[l++]),void 0!==r&&u(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),c=r("06cf").f,a=r("83ab"),u=o((function(){c(1)})),s=!a||u;n({target:"Object",stat:!0,forced:s,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e56e:function(t,e,r){t.exports=r.p+"img/empty_address.82838764.png"},edf0:function(t,e,r){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-aecd3168.eb88dad7.js.map