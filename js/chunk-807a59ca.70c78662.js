(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-807a59ca"],{"1dde":function(t,e,n){var s=n("d039"),r=n("b622"),i=n("2d00"),o=r("species");t.exports=function(t){return i>=51||!s((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3b35":function(t,e,n){"use strict";e["a"]={props:{datos:{type:Array,default:function(){return[]}}},data:function(){return{mainId:Math.floor(Math.random()*Math.pow(10,10)),selected:"0"}},methods:{getId:function(t){return t<0?null:"sl-"+this.mainId+t+1}}}},"4ab4":function(t,e,n){},"65f0":function(t,e,n){var s=n("861d"),r=n("e8b5"),i=n("b622"),o=i("species");t.exports=function(t,e){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?s(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"7db0":function(t,e,n){"use strict";var s=n("23e7"),r=n("b727").find,i=n("44d2"),o="find",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),s({target:"Array",proto:!0,forced:a},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},a965:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[n("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":t.itemFullWidth},{row:t.row}],style:[{transform:"translate("+t.scrollVal+"px,0px)"}]},[t._t("default")],2)])},r=[],i=(n("7db0"),n("d3b7"),n("b64b"),n("d81d"),{name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data:function(){return{scrollVal:0,ids:[]}},watch:{selectedId:function(t){t.length&&this.scroll()}},mounted:function(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated:function(){this.getCords()},beforeDestroy:function(){window.removeEventListener("resize",this.scroll)},methods:{scroll:function(){var t,e=this,n=null===(t=this.ids.find((function(t){return t.id===e.selectedId})))||void 0===t?void 0:t.id,s=document.getElementById(n);if(Object.keys(this.$slots.default).length&&this.selectedId.length&&null!==s){var r=this.$refs.hContainer,i=s.offsetWidth*this.ids.length,o=s.offsetLeft,a=r.offsetWidth/s.offsetWidth;a>1&&i-o<r.offsetWidth&&(o=i-r.offsetWidth),this.scrollVal=1===this.ids.length?0:-o}},getCords:function(){this.$slots.default&&(this.ids=this.$slots.default.map((function(t){return{id:t.elm.id,key:t.key}})))}}}),o=i,a=(n("a99e"),n("2877")),l=Object(a["a"])(o,s,r,!1,null,"b934bcc2",null);e["a"]=l.exports},a99e:function(t,e,n){"use strict";n("4ab4")},aae4:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slyder-b"},[t.datos.length?n("ScrollHorizontal",{attrs:{selectedId:t.selected,"item-full-width":""}},t._l(t.datos,(function(e,s){return n("div",{key:"key-"+t.getId(s),staticClass:"slyder-b__slyde",attrs:{id:t.getId(s)}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 order-lg-2 mb-4 mb-lg-0"},[n("figure",{staticClass:"slyder-b__img"},[n("img",{attrs:{src:e.imagen,alt:e.leyendaImagen}}),e.leyendaImagen?n("figcaption",{domProps:{innerHTML:t._s(e.leyendaImagen)}}):t._e()])]),n("div",{staticClass:"col-lg-4 order-lg-1"},[e.hasOwnProperty("titulo")?n("h3",{domProps:{innerHTML:t._s(e.titulo)}}):t._e(),n("p",{staticClass:"mb-3",domProps:{innerHTML:t._s(e.texto)}}),n("div",{staticClass:"slyder__action"},[n("div",{staticClass:"slyder__pagination"},[t._v(t._s(s+1)+"/"+t._s(t.datos.length))]),s-1>=0?n("a",{staticClass:"slyder__btn",on:{click:function(e){t.selected=t.getId(s-1)}}},[n("i",{staticClass:"fas fa-angle-left"})]):t._e(),s!=t.datos.length-1?n("a",{staticClass:"slyder__btn",on:{click:function(e){t.selected=t.getId(s+1)},mouseover:function(e){t.mostrarIndicador=!1}}},[n("i",{staticClass:"fas fa-angle-right"}),t.mostrarIndicador&&0===s?n("div",{staticClass:"indicador__container"},[n("div",{staticClass:"indicador--click indicador--sm"})]):t._e()]):t._e()])])])])})),0):t._e()],1)},r=[],i=n("3b35"),o=n("a965"),a={name:"SlyderB",components:{ScrollHorizontal:o["a"]},mixins:[i["a"]],data:function(){return{mostrarIndicador:!0}},mounted:function(){this.selected=this.getId(0)}},l=a,d=n("2877"),c=Object(d["a"])(l,s,r,!1,null,null,null);e["default"]=c.exports},b64b:function(t,e,n){var s=n("23e7"),r=n("7b0b"),i=n("df75"),o=n("d039"),a=o((function(){i(1)}));s({target:"Object",stat:!0,forced:a},{keys:function(t){return i(r(t))}})},b727:function(t,e,n){var s=n("0366"),r=n("44ad"),i=n("7b0b"),o=n("50c4"),a=n("65f0"),l=[].push,d=function(t){var e=1==t,n=2==t,d=3==t,c=4==t,u=6==t,f=7==t,h=5==t||u;return function(p,m,g,v){for(var b,y,_=i(p),w=r(_),C=s(m,g,3),I=o(w.length),k=0,x=v||a,A=e?x(p,I):n||f?x(p,0):void 0;I>k;k++)if((h||k in w)&&(b=w[k],y=C(b,k,_),t))if(e)A[k]=y;else if(y)switch(t){case 3:return!0;case 5:return b;case 6:return k;case 2:l.call(A,b)}else switch(t){case 4:return!1;case 7:l.call(A,b)}return u?-1:d||c?c:A}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6),filterOut:d(7)}},d81d:function(t,e,n){"use strict";var s=n("23e7"),r=n("b727").map,i=n("1dde"),o=i("map");s({target:"Array",proto:!0,forced:!o},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,n){var s=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}}}]);
//# sourceMappingURL=chunk-807a59ca.70c78662.js.map