webpackJsonp([1],{"4+1F":function(t,e){},KJ4v:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar"},[e("nav",{staticClass:"nav-extended teal"},[e("div",{staticClass:"nav-content"},[e("router-link",{attrs:{to:{name:"Index"}}},[e("span",{staticClass:"nav-title"},[this._v("Ninja Smoothies ")])]),this._v(" "),e("a",{staticClass:"btn-floating btn-large halfway-fab pink",attrs:{href:""}},[e("router-link",{attrs:{to:{name:"AddSmoothie"}}},[e("i",{staticClass:"material-icons"},[this._v("add")])])],1)],1)])])},staticRenderFns:[]};var s={name:"App",components:{Navbar:n("VU/8")({name:"Navbar",data:function(){return{}}},i,!1,function(t){n("hQ7K")},null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")(s,o,!1,function(t){n("KJ4v")},null,null).exports,c=n("/ocq"),l=n("kxiW"),d=n.n(l),u=(n("881v"),d.a.initializeApp({apiKey:"AIzaSyDv7koS_pHn_ylXm3Ivb9tY9vg552z8t5k",authDomain:"ninja-smoothies-76f74.firebaseapp.com",databaseURL:"https://ninja-smoothies-76f74.firebaseio.com",projectId:"ninja-smoothies-76f74",storageBucket:"ninja-smoothies-76f74.appspot.com",messagingSenderId:"358319472662",appId:"1:358319472662:web:434c4a3455d6dff3"}),d.a.firestore()),h={name:"Index",data:function(){return{smoothies:[]}},created:function(){var t=this;u.collection("smoothies").get().then(function(e){e.forEach(function(e){var n=e.data();n.id=e.id,t.smoothies.push(n)})})},methods:{deleteSmoothie:function(t){var e=this;u.collection("smoothies").doc(t).delete().then(function(){e.smoothies=e.smoothies.filter(function(e){return e.id!=t})})}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index container"},t._l(t.smoothies,function(e){return n("div",{key:e.id,staticClass:"card"},[n("div",{staticClass:"card-content"},[n("i",{staticClass:"material-icons delete",on:{click:function(n){return t.deleteSmoothie(e.id)}}},[t._v("delete")]),t._v(" "),n("h2",{staticClass:"indigo-text"},[t._v(t._s(e.title))]),t._v(" "),n("ul",{staticClass:"ingrad"},t._l(e.ingrad,function(e,a){return n("li",{key:a},[n("span",{staticClass:"chip"},[t._v(t._s(e))])])}),0)])])}),0)},staticRenderFns:[]};var m=n("VU/8")(h,f,!1,function(t){n("4+1F")},null,null).exports,v={render:function(){var t=this.$createElement;return(this._self._c||t)("h2",[this._v("Add smoothie")])},staticRenderFns:[]};var p=n("VU/8")({name:"AddSmoothie",data:function(){return{}}},v,!1,function(t){n("StjB")},null,null).exports;a.a.use(c.a);var _=new c.a({routes:[{path:"/",name:"Index",component:m},{path:"/add-smoothie",name:"AddSmoothie",component:p}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:_,components:{App:r},template:"<App/>"})},StjB:function(t,e){},hQ7K:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.90edd624ea5e0c96190d.js.map