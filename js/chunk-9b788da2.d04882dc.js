(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b788da2"],{"4ec9":function(t,e,n){"use strict";var r=n("6d61"),c=n("6566");t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),c)},c058:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img-spot-gray6",{staticClass:"absolute top-0 right-0 header-spot__gray"}),n("div",{staticClass:"padding-y-4 relative help-container"},[t.FAQS&&t.PRIVACY&&t.RULES?n("div",{staticClass:"grid grid-gap-3"},[t._l(t.categoryFAQ,(function(e){return n("div",{key:e.key,staticClass:"flex grid-column-12 grid-column-6--md margin-bottom-5"},[n("icon-"+e[1],{tag:"component",staticClass:"margin-right-3 icon"}),n("div",[n("div",{staticClass:"title font-lg font-bold margin-bottom-2",domProps:{textContent:t._s(e[0])}}),t._l(t.categoryListFAQ(e[0]),(function(r){return n("router-link",{key:e.key,staticClass:"block color-primary-light font-medium cursor-pointer margin-bottom-2",attrs:{to:{name:"guestFaq",params:{faq_index:r.slug}}},domProps:{textContent:t._s(r.question)}})}))],2)],1)})),n("div",{staticClass:"flex grid-column-12 grid-column-6--md margin-bottom-5"},[n("icon-Help5",{staticClass:"margin-right-3 icon"}),n("div",[n("div",{staticClass:"title font-lg font-bold margin-bottom-2",domProps:{textContent:t._s(t.$t("text.title20"))}}),n("router-link",{staticClass:"block color-primary-light font-medium cursor-pointer margin-bottom-2",attrs:{to:{name:"guestTerms",params:{privacy:"terms"}}},domProps:{textContent:t._s(t.RULES.title)}})],1)],1)],2):n("div",{staticClass:"flex justify-center items-center"},[n("no-data")],1)])],1)},c=[],i=(n("4de4"),n("d81d"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),a={name:"GuestHelp",components:{ImgSpotGray6:function(){return n.e("chunk-aa40c89a").then(n.t.bind(null,"a8a1",7))},IconBasic:function(){return n.e("chunk-d1246b4a").then(n.t.bind(null,"126d",7))},IconTechnical:function(){return n.e("chunk-d7f3d75c").then(n.t.bind(null,"3f2e",7))},IconFinancial:function(){return n.e("chunk-60547dc6").then(n.t.bind(null,"9b4e",7))},IconDeposits:function(){return n.e("chunk-e92d664a").then(n.t.bind(null,"b8c4b",7))},IconPartnership:function(){return n.e("chunk-57c9e394").then(n.t.bind(null,"7eea",7))},IconHelp5:function(){return n.e("chunk-2ec46ec8").then(n.t.bind(null,"4264",7))},NoData:function(){return n.e("chunk-0e310c66").then(n.bind(null,"1419"))}},computed:{PRIVACY:function(t){return t.$store.getters["guest/PRIVACY"]},RULES:function(t){return t.$store.getters["guest/RULES"]},FAQS:function(t){return t.$store.getters["guest/FAQS"]},categoryFAQ:function(t){var e=new Map;return t.FAQS.map((function(t){e.set(t.category,t.key)})),e}},watch:{$LOCALE:{handler:function(){this.fetchPrivacy(),this.fetchRules(),this.fetchFAQ()},immediate:!0}},methods:{categoryListFAQ:function(t){var e=this.FAQS.filter((function(e){return e.category===t}));return e},fetchPrivacy:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("guest/fetchPrivacy");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},fetchRules:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("guest/fetchRules");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},fetchFAQ:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("guest/fetchFAQ");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}},o=a,s=(n("db31"),n("2877")),u=Object(s["a"])(o,r,c,!1,null,"252652d8",null);e["default"]=u.exports},db31:function(t,e,n){"use strict";var r=n("f585"),c=n.n(r);c.a},f585:function(t,e,n){}}]);