(function(e){function t(t){for(var n,a,s=t[0],u=t[1],l=t[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);i&&i(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},c=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var i=u;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4222:function(e,t,r){e.exports=r.p+"img/htlwels.c5874af1.png"},"4ba2":function(e,t,r){},"55ad":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function o(e,t,r,o,c,a){var s=Object(n["z"])("Header"),u=Object(n["z"])("Stundenplan"),l=Object(n["z"])("Login");return Object(n["s"])(),Object(n["e"])("div",null,[Object(n["h"])(s,{name:"Refr",errorMessage:o.errorMess},null,8,["errorMessage"]),o.loginState?(Object(n["s"])(),Object(n["c"])(u,{key:0})):(Object(n["s"])(),Object(n["c"])(l,{key:1,onLogin:o.loginEnabled},null,8,["onLogin"]))])}var c=function(e){return Object(n["v"])("data-v-79d7bba4"),e=e(),Object(n["t"])(),e},a=c((function(){return Object(n["f"])("h1",null,"Template ",-1)})),s=[a];function u(e,t,r,o,c,a){return Object(n["s"])(),Object(n["e"])("div",null,s)}var l={name:"Foo",setup:function(){return{}}},i=(r("e066"),r("6b0d")),d=r.n(i);const f=d()(l,[["render",u],["__scopeId","data-v-79d7bba4"]]);var b=f,p=(r("b0c0"),r("4222")),O=r.n(p),j=function(e){return Object(n["v"])("data-v-5447295c"),e=e(),Object(n["t"])(),e},v={id:"header"},g=j((function(){return Object(n["f"])("img",{src:O.a},null,-1)})),m=j((function(){return Object(n["f"])("h2",null,"Stundenplan für: ",-1)})),h={key:0,id:"error"},y=j((function(){return Object(n["f"])("h3",null,"!! Hinweis !!",-1)}));function w(e,t,r,o,c,a){return Object(n["s"])(),Object(n["e"])("div",null,[Object(n["f"])("div",v,[g,m,Object(n["f"])("h3",null,Object(n["B"])(r.name),1)]),""!=r.errorMessage?(Object(n["s"])(),Object(n["e"])("div",h,[y,Object(n["g"])(" "+Object(n["B"])(r.errorMessage),1)])):Object(n["d"])("",!0)])}var M={props:{name:{type:String,required:!0},errorMessage:{type:String,required:!1,default:""}}};r("d5cd");const S=d()(M,[["render",w],["__scopeId","data-v-5447295c"]]);var x=S,P=(r("2ca0"),function(e){return Object(n["v"])("data-v-38f49570"),e=e(),Object(n["t"])(),e}),_={class:"flexContainer"},k=P((function(){return Object(n["f"])("div",{class:"flexItem"},[Object(n["f"])("h1",{class:"headerFormer"},"HTL Wels/AHIT 5")],-1)})),I={class:"flexItem"},L={key:0,role:"alert"},q={class:"flexItem"},z={key:1,role:"alert"},F=P((function(){return Object(n["f"])("div",{class:"flexItem"},[Object(n["f"])("a",{href:""}," Passwort vergessen?")],-1)})),T=P((function(){return Object(n["f"])("div",{class:"flexItem"},[Object(n["f"])("input",{type:"submit",value:"Submit"})],-1)}));function V(e,t,r,o,c,a){var s=Object(n["z"])("font-awesome-icon"),u=Object(n["z"])("Field"),l=Object(n["z"])("ErrorMessage"),i=Object(n["z"])("Form");return Object(n["s"])(),Object(n["e"])("div",_,[Object(n["h"])(i,{class:"formWrapper",onSubmit:o.processLogin},{default:Object(n["G"])((function(){return[k,Object(n["f"])("div",I,[Object(n["h"])(s,{icon:["fas","user"],color:"gray",class:"fa-1x as-icon"}),Object(n["h"])(u,{type:"text",name:"user",placeholder:"User",required:"",modelValue:o.user,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.user=e})},null,8,["modelValue"])]),Object(n["h"])(l,{name:"email"}),o.errorMessage.startsWith("User")?(Object(n["s"])(),Object(n["e"])("span",L,Object(n["B"])(o.errorMessage),1)):Object(n["d"])("",!0),Object(n["f"])("div",q,[Object(n["h"])(s,{icon:["fas","lock"],color:"gray",class:"fa-1x as-icon"}),Object(n["h"])(u,{type:"password",name:"password",placeholder:"Password",required:"",modelValue:o.password,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e}),rules:o.validatePassword},null,8,["modelValue","rules"])]),Object(n["h"])(l,{name:"password"}),o.errorMessage.startsWith("Password")?(Object(n["s"])(),Object(n["e"])("span",z,Object(n["B"])(o.errorMessage),1)):Object(n["d"])("",!0),F,T]})),_:1},8,["onSubmit"])])}var E=r("7bb1"),H=r("bc3a"),A=r.n(H),B={props:{uriPath:{type:String,required:!0}},components:{Form:E["c"],Field:E["b"],ErrorMessage:E["a"]},setup:function(e,t){var r=Object(n["y"])(""),o=Object(n["y"])(""),c=Object(n["y"])("");function a(){console.log("Process Login mit Parameter values:"),A.a.post("/login",{user:r.value,password:o.value}).then((function(e){console.log(e.data);var r=e.data;console.log("Response: "+r+", "+r.error+", "+r.userKnown+", "+r.passwordOK),r.passwordOK?t.emit("login",!0):r.userKnown&&t.emit("login",!1)})).catch((function(e){console.log("Error in log on "+e)}))}function s(e){return console.log("validate Password..."),e?!(e.length<4)||"At least 4 characters are required":"This field is required"}return{user:r,password:o,processLogin:a,validatePassword:s,errorMessage:c}}};r("d13c");const K=d()(B,[["render",V],["__scopeId","data-v-38f49570"]]);var U=K,W={name:"App",components:{Stundenplan:b,Header:x,Login:U},setup:function(){var e=Object(n["y"])(""),t=Object(n["y"])(!1);function r(e){t.value=e,console.log("App: loginState: "+e)}return{errorMess:e,loginState:t,loginEnabled:r}}};r("f785");const J=d()(W,[["render",o]]);var R=J,C=r("ecee"),G=r("c074"),D=r("ad3d");C["c"].add(G["b"]),C["c"].add(G["a"]),Object(n["b"])(R).component("font-awesome-icon",D["a"]).mount("#app")},"67ac":function(e,t,r){},a65a:function(e,t,r){},d13c:function(e,t,r){"use strict";r("55ad")},d5cd:function(e,t,r){"use strict";r("67ac")},e066:function(e,t,r){"use strict";r("a65a")},f785:function(e,t,r){"use strict";r("4ba2")}});
//# sourceMappingURL=app.9fe35921.js.map