(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fd5c338"],{"2e10":function(t,i,e){"use strict";var s=e("a016"),a=e.n(s);a.a},a016:function(t,i,e){},c9f7:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"wrap-bl margin-bottom-2"},[e("div",{staticClass:"wrap-main-info flex justify-between items-center padding-2",on:{click:function(i){t.isOpen=!t.isOpen}}},[e("div",{staticClass:"flex items-center"},[t.item.avatar?e("div",{staticClass:"wrap-img margin-right-2"},[e("img",{attrs:{src:t.item.avatar}})]):e("div",{staticClass:"wrap-img margin-right-2"},[e("icon-no-avatar")],1),e("div",[e("div",{staticClass:"font-medium",domProps:{textContent:t._s(t.item.login)}}),e("div",{staticClass:"font-sm color-primary-light",domProps:{textContent:t._s(t.item.date_create)}})])]),e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"text-right"},[e("div",{staticClass:"font-bold color-primary",domProps:{textContent:t._s(t.item.commission+" "+t.item.currency)}}),e("div",{staticClass:"color-primary",domProps:{textContent:t._s(t.$t("partners.line")+" - "+t.item.level)}})]),e("div",{staticClass:"margin-x-2 font-bold color-primary arrow-anim",class:{open:t.isOpen},domProps:{textContent:t._s("▾")}})])]),e("div",{staticClass:"wrap-info padding-y-3 padding-x-4",class:{open:t.isOpen}},t._l(t.itemPars,(function(i,s){return e("div",{key:i.id,staticClass:"relative margin-bottom-2 animate-slide-in-down",style:"animation-delay: 0."+(s+1)+"s"},[e("div",{staticClass:"flex justify-between items-center relative z-index-2"},[e("div",{staticClass:"bl-bg font-medium color-primary-light padding-right-1",domProps:{textContent:t._s(i.title)}}),e("div",{staticClass:"bl-bg font-medium color-primary-light padding-left-1",domProps:{textContent:t._s(i.value)}})])])})),0)])},a=[],n=(e("99af"),e("d3b7"),{name:"LastAccrualsItem",components:{IconNoAvatar:function(){return e.e("chunk-5ba5c464").then(e.t.bind(null,"d8e3",7))}},props:{item:{type:Object,default:function(){return{}}}},data:function(){return{isOpen:!1}},computed:{itemPars:function(){return[{title:this.$t("text.deposit"),value:"".concat(this.item.depositValue," ").concat(this.item.currency)},{title:this.$t("text.upliner"),value:this.item.uplinerName},{title:"%",value:this.item.percents}]}}}),r=n,o=(e("2e10"),e("2877")),c=Object(o["a"])(r,s,a,!1,null,"69212ea0",null);i["default"]=c.exports}}]);