(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85323952"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(r(t))}},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),c=n("9112");for(var a in o){var s=r[a],f=s&&s.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(u){f.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),i=n("ae40"),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"3adc":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mine"},[n("div",{staticClass:"top",on:{click:t.touch}},[t.isLogin?n("div",[n("div",{staticClass:"login"},[t._v(t._s(t.userInfo.username))]),n("div",{staticClass:"tip"},[t._v("再忙，也要记得吃饭哟~")])]):n("div",[n("div",{staticClass:"login"},[n("span",{on:{click:function(e){return t.$router.push("/login")}}},[t._v("立即登录")]),n("van-icon",{attrs:{name:"arrow",size:"18px",color:"#ccc"}})],1),n("div",{staticClass:"tip"},[t._v("未注册过的用户自动注册")])]),n("div",{staticClass:"avatar"},[n("van-icon",{attrs:{name:"smile",size:"100px",color:"skyblue"}})],1)]),n("div",[t.isLogin?n("van-cell",{attrs:{title:"我的地址",icon:"location-o","is-link":"",to:"/addressList"}}):t._e(),n("van-cell",{attrs:{title:"规则中心",icon:"description","is-link":""}})],1),n("van-action-sheet",{attrs:{actions:[{name:"退出登录"}],"cancel-text":"取消","close-on-click-action":""},on:{select:t.logout,cancel:function(e){t.showLogout=!1}},model:{value:t.showLogout,callback:function(e){t.showLogout=e},expression:"showLogout"}})],1)},o=[],i=n("5530"),c=n("5880"),a={data:function(){return{showLogout:!1}},computed:Object(i["a"])({},Object(c["mapState"])({isLogin:function(t){return t.isLogin},userInfo:function(t){return t.userInfo}})),methods:{touch:function(){this.isLogin&&(this.showLogout=!0)},logout:function(){sessionStorage.removeItem("token"),this.$store.commit("changeLoginState",{msg:!1,clear:!0}),this.$store.commit("saveUserInfo",{msg:{},clear:!0}),this.$store.commit("saveDeliveryPoi",{msg:"",clear:!0})}}},s=a,f=(n("4fbf"),n("2877")),u=Object(f["a"])(s,r,o,!1,null,"4de4b29d",null);e["default"]=u.exports},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4fbf":function(t,e,n){"use strict";var r=n("54f8"),o=n.n(r);o.a},"54f8":function(t,e,n){},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),i=n("e538"),c=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),c=n("c430"),a=n("83ab"),s=n("4930"),f=n("fdbf"),u=n("d039"),l=n("5135"),b=n("e8b5"),d=n("861d"),p=n("825a"),v=n("7b0b"),g=n("fc6a"),h=n("c04e"),m=n("5c6c"),y=n("7c73"),O=n("df75"),w=n("241c"),S=n("057f"),L=n("7418"),j=n("06cf"),P=n("9bf2"),k=n("d1e7"),E=n("9112"),C=n("6eeb"),T=n("5692"),x=n("f772"),D=n("d012"),M=n("90e3"),N=n("b622"),_=n("e538"),I=n("746f"),V=n("d44e"),G=n("69f3"),$=n("b727").forEach,A=x("hidden"),F="Symbol",H="prototype",J=N("toPrimitive"),R=G.set,z=G.getterFor(F),q=Object[H],B=o.Symbol,Q=i("JSON","stringify"),U=j.f,W=P.f,K=S.f,X=k.f,Y=T("symbols"),Z=T("op-symbols"),tt=T("string-to-symbol-registry"),et=T("symbol-to-string-registry"),nt=T("wks"),rt=o.QObject,ot=!rt||!rt[H]||!rt[H].findChild,it=a&&u((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=U(q,e);r&&delete q[e],W(t,e,n),r&&t!==q&&W(q,e,r)}:W,ct=function(t,e){var n=Y[t]=y(B[H]);return R(n,{type:F,tag:t,description:e}),a||(n.description=e),n},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},st=function(t,e,n){t===q&&st(Z,e,n),p(t);var r=h(e,!0);return p(n),l(Y,r)?(n.enumerable?(l(t,A)&&t[A][r]&&(t[A][r]=!1),n=y(n,{enumerable:m(0,!1)})):(l(t,A)||W(t,A,m(1,{})),t[A][r]=!0),it(t,r,n)):W(t,r,n)},ft=function(t,e){p(t);var n=g(e),r=O(n).concat(pt(n));return $(r,(function(e){a&&!lt.call(n,e)||st(t,e,n[e])})),t},ut=function(t,e){return void 0===e?y(t):ft(y(t),e)},lt=function(t){var e=h(t,!0),n=X.call(this,e);return!(this===q&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,A)&&this[A][e])||n)},bt=function(t,e){var n=g(t),r=h(e,!0);if(n!==q||!l(Y,r)||l(Z,r)){var o=U(n,r);return!o||!l(Y,r)||l(n,A)&&n[A][r]||(o.enumerable=!0),o}},dt=function(t){var e=K(g(t)),n=[];return $(e,(function(t){l(Y,t)||l(D,t)||n.push(t)})),n},pt=function(t){var e=t===q,n=K(e?Z:g(t)),r=[];return $(n,(function(t){!l(Y,t)||e&&!l(q,t)||r.push(Y[t])})),r};if(s||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=M(t),n=function(t){this===q&&n.call(Z,t),l(this,A)&&l(this[A],e)&&(this[A][e]=!1),it(this,e,m(1,t))};return a&&ot&&it(q,e,{configurable:!0,set:n}),ct(e,t)},C(B[H],"toString",(function(){return z(this).tag})),C(B,"withoutSetter",(function(t){return ct(M(t),t)})),k.f=lt,P.f=st,j.f=bt,w.f=S.f=dt,L.f=pt,_.f=function(t){return ct(N(t),t)},a&&(W(B[H],"description",{configurable:!0,get:function(){return z(this).description}}),c||C(q,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:B}),$(O(nt),(function(t){I(t)})),r({target:F,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=B(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!a},{create:ut,defineProperty:st,defineProperties:ft,getOwnPropertyDescriptor:bt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:u((function(){L.f(1)}))},{getOwnPropertySymbols:function(t){return L.f(v(t))}}),Q){var vt=!s||u((function(){var t=B();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(d(e)||void 0!==t)&&!at(t))return b(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),o[1]=e,Q.apply(null,o)}})}B[H][J]||E(B[H],J,B[H].valueOf),V(B,F),D[A]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),i=n("df75"),c=n("d039"),a=c((function(){i(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return i(o(t))}})},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),i=n("56ef"),c=n("fc6a"),a=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=c(t),o=a.f,f=i(r),u={},l=0;while(f.length>l)n=o(r,e=f[l++]),void 0!==n&&s(u,e,n);return u}})},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("fc6a"),c=n("06cf").f,a=n("83ab"),s=o((function(){c(1)})),f=!a||s;r({target:"Object",stat:!0,forced:f,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-85323952.92716491.js.map