(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70def635"],{"307e":function(t,e,n){"use strict";n("7db0"),n("c975"),n("b0c0"),n("d3b7"),n("498a");var i=[{id:"usd",shorthand:"usd",name:"USD",icon:"IconUsd",validatorName:null},{id:"bitcoin",shorthand:"btc",name:"BTC",icon:"IconBitcoin",validatorName:"bitcoin"},{id:"ethereum",shorthand:"eth",name:"ETH",icon:"IconEthereum",validatorName:"ethereum"},{id:"litecoin",shorthand:"ltc",name:"LTC",icon:"IconLitecoin",validatorName:"litecoin"},{id:"usdt",shorthand:"usdt",name:"USDT",icon:"IconUsdt",validatorName:"ethereum"},{id:"perfectMoney",shorthand:"pm",name:"Perfect Money",icon:"IconPerfectMoney",validatorName:"perfectmoney"},{id:"payeer",shorthand:"pr",name:"Payeer",icon:"IconPayeer",validatorName:"payeer"}],c={addLimitMin:1,disabled:!0,limitMin:1,replenishmentDisable:!0,withdrawalDisable:!0};e["a"]={name:"PaymentMixin",components:{IconUsd:function(){return n.e("chunk-3b83a1c8").then(n.t.bind(null,"f04f",7))},IconBitcoin:function(){return n.e("chunk-513b72bd").then(n.t.bind(null,"f810",7))},IconEthereum:function(){return n.e("chunk-6196c150").then(n.t.bind(null,"0c5f",7))},IconLitecoin:function(){return n.e("chunk-656ada80").then(n.t.bind(null,"fca8",7))},IconPayeer:function(){return n.e("chunk-8c59805e").then(n.t.bind(null,"6407",7))},IconPerfectMoney:function(){return n.e("chunk-d2722bd2").then(n.t.bind(null,"407f",7))},IconUSDT:function(){return n.e("chunk-331729a8").then(n.t.bind(null,"b1d1",7))}},props:{fetchPaymentConfig:Boolean},computed:{WALLETS:function(t){return t.$store.getters["user/WALLETS"]},paymentConfig:function(){return this.$store.getters["payment/PAYMENT_CONFIG"]},financesActionsTabs:function(){return{USD:["bc","et","er","lc","pm"],BTC:["bt"],ETH:["eh"],LTC:["lt"]}},paymentSystems:function(){return[{prefix:"et",label:"Ethereum",desc:this.$t("finances.desc.et"),descWithdraw:this.$t("finances.desc.withdraw.et"),config:this.paymentConfig["et"]||c,wallet:!!this.WALLETS.ethereum,icon:"IconEthereum"},{prefix:"er",label:"USDT",desc:this.$t("finances.desc.er"),descWithdraw:this.$t("finances.desc.withdraw.er"),config:this.paymentConfig["er"]||c,wallet:!!this.WALLETS.tetherErc,icon:"IconUSDT"},{prefix:"eh",label:"Ethereum",desc:this.$t("finances.desc.eh"),descWithdraw:this.$t("finances.desc.withdraw.eh"),config:this.paymentConfig["eh"]||c,wallet:!!this.WALLETS.ethereum,icon:"IconEthereum"},{prefix:"bc",label:"Bitcoin",desc:this.$t("finances.desc.bc"),descWithdraw:this.$t("finances.desc.withdraw.bc"),config:this.paymentConfig["bc"]||c,wallet:!!this.WALLETS.bitcoin,icon:"IconBitcoin"},{prefix:"bt",label:"Bitcoin",desc:this.$t("finances.desc.bt"),descWithdraw:this.$t("finances.desc.withdraw.bt"),config:this.paymentConfig["bt"]||c,wallet:!!this.WALLETS.bitcoin,icon:"IconBitcoin"},{prefix:"lc",label:"Litecoin",desc:this.$t("finances.desc.lc"),descWithdraw:this.$t("finances.desc.withdraw.lc"),config:this.paymentConfig["lc"]||c,wallet:!!this.WALLETS.litecoin,icon:"IconLitecoin"},{prefix:"pr",label:"Payeer",desc:this.$t("finances.desc.pr"),descWithdraw:this.$t("finances.desc.withdraw.pr"),config:this.paymentConfig["pr"]||c,wallet:!!this.WALLETS.payeer,icon:"IconPayeer"},{prefix:"pm",label:"PerfectMoney",desc:this.$t("finances.desc.pm"),descWithdraw:this.$t("finances.desc.withdraw.pm"),config:this.paymentConfig["pm"]||c,wallet:!!this.WALLETS.perfectMoney,icon:"IconPerfectmoney"}]},cryptoTabs:function(){return{USD:[{name:"BTC",prefix:"bc",title:this.$t("crypto.title_USD_BTC"),subtitle:this.$t("crypto.subtitle_USD_BTC"),conversion:["BTC","USD"],calculation:!0,walletVisible:!0},{name:"ETH",prefix:"et",title:this.$t("crypto.title_ETH_USD"),subtitle:this.$t("crypto.subtitle_ETH_USD"),conversion:["ETH","USD"],calculation:!1,walletVisible:!1},{name:"USDT",prefix:"er",title:this.$t("crypto.title_USDT_USD"),subtitle:this.$t("crypto.subtitle_USDT_USD"),conversion:["USDT","USD"],calculation:!1,walletVisible:!1},{name:"LTC",prefix:"lc",title:this.$t("crypto.title_LTC_USD"),subtitle:this.$t("crypto.subtitle_LTC_USD"),conversion:["LTC","USD"],calculation:!0,walletVisible:!0}],BTC:[{name:"BTC",prefix:"bt",title:this.$t("crypto.title_BTC_BTC"),subtitle:this.$t("crypto.subtitle_BTC_BTC"),conversion:["BTC","BTC"],calculation:!1,walletVisible:!0}],ETH:[{name:"ETH",prefix:"eh",title:this.$t("crypto.title_ETH_ETH"),subtitle:this.$t("crypto.subtitle_ETH_ETH"),conversion:["ETH","ETH"],calculation:!1,walletVisible:!1}]}}},mounted:function(){!1!==this.fetchPaymentConfig&&(console.log(this),this.$store.dispatch("payment/fetchPaymentConfig")["catch"]((function(t){return t})),this.$store.dispatch("user/fetchWallets")["catch"]((function(t){return t})))},methods:{getLink:function(t){var e=t.payment,n=t.hash;return n?["bc","bt","lt"].indexOf(e)>=0?{url:"https://www.blockchain.com/en/btc/tx/".concat(n),text:n}:["et","eh","er"].indexOf(e)>=0?{url:"https://etherscan.io/tx/".concat(n),text:n}:{url:"#",text:n}:{url:!1,text:""}},getIcon:function(t){var e=t.toLowerCase().trim();switch(e){case"usd":case"ac":return"IconUsd";case"btc":case"bt":case"bc":return"IconBitcoin";case"eth":case"et":case"eh":return"IconEthereum";case"ltc":case"lc":case"lt":return"IconLitecoin";case"pr":return"IconPayeer";case"pm":return"IconPerfectmoney";case"usdt":case"er":return"IconUSDT";default:return!1}},selectNamePayment:function(t){switch(t){case"bt":case"bc":return"BTC";case"et":case"eh":return"ETH";case"lc":case"lt":return"LTC";case"usdt":case"er":return"USDT";default:return!1}},$getCurrency:function(t){var e=t.id,n=t.shorthand,c=t.name,o=t.icon,r=t.validatorName,a=e||n||c||o||r;return a?i.find((function(t){return t.id===a||t.shorthand===a||t.name===a||t.icon===a||t.validatorName===a}))||!1:i}}}},"498a":function(t,e,n){"use strict";var i=n("23e7"),c=n("58a8").trim,o=n("c8d2");i({target:"String",proto:!0,forced:o("trim")},{trim:function(){return c(this)}})},"6b9c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap-bl flex flex-column justify-center items-center margin-x-auto padding-x-3 padding-x-5--md padding-top-3 padding-bottom-5"},[n("icon-exchange",{staticClass:"icon-main margin-bottom-3"}),n("div",{staticClass:"color-primary-light font-lg font-bold margin-bottom-3",domProps:{textContent:t._s(t.$t("nav.exchange"))}}),n("div",{staticClass:"color-primary-light text-center margin-bottom-3",domProps:{textContent:t._s(t.$t("exchange.text"))}}),n("div",{staticClass:"flex justify-center items-center margin-bottom-3 flex-column flex-row--md"},[n("div",[n("div",{staticClass:"color-primary-light padding-left-2",domProps:{textContent:t._s(t.$t("text.choose_balance")+":")}}),n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeSelectFrom,expression:"closeSelectFrom"}],staticClass:"wrap-select-payment width-custom margin-bottom-2 z-index-1",class:{open:t.isOpenSelectFrom},on:{click:function(e){t.isOpenSelectFrom=!t.isOpenSelectFrom}}},[n("div",{staticClass:"active-select flex items-center padding-x-2 padding-y-1 cursor-pointer relative z-index-1",class:t.from},[n(t.getIcon(t.from),{tag:"component",staticClass:"icon--payment margin-right-1 fill-white"}),n("div",{staticClass:"color-white margin-right-1",domProps:{textContent:t._s(t.from+" "+t.$t("text.balance"))}}),n("icon-arrow-down",{staticClass:"icon-arrow fill-white"})],1),n("div",{staticClass:"wrap-select text-average"},t._l(t.fromDropdown,(function(e,i){return n("div",{key:i,staticClass:"select flex items-center cursor-pointer padding-y-1 padding-x-2",attrs:{value:e,tabindex:"0"},on:{click:function(e){return t.select("from",i)},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.select("from",i)}}},[n(t.getIcon(i),{tag:"component",staticClass:"icon--payment fill-primary-light margin-right-1"}),n("div",{staticClass:"color-primary-light margin-right-1",domProps:{textContent:t._s(i+" "+t.$t("text.balance"))}})],1)})),0)]),n("div",{staticClass:"color-primary-light padding-left-2",domProps:{textContent:t._s(t.$t("text.enter_amount")+":")}}),n("div",{staticClass:"relative width-custom"},[n("base-input",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){return t.toActive=!1},expression:"() => (toActive = false)"}],staticClass:"width-custom field--primary-light-bold bg-radius field--icon-right margin-bottom-2",attrs:{placeholder:"0.00","static-flow-error-message":""},on:{keyup:function(e){t.amount=t.$inputMask(t.amount,t.from)},input:function(e){return t.calculateRate()},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.convert(e)}},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),n("div",{staticClass:"currency-input font-bold",domProps:{textContent:t._s(t.from)}})],1),n("div",{staticClass:"margin-bottom-2 padding-left-2 flex items-center color-primary-light",class:t.from},[n("div",{staticClass:"margin-right-1",domProps:{textContent:t._s(t.from+" "+t.$t("text.balance")+":")}}),n("div",{staticClass:"font-bold",domProps:{textContent:t._s(t.balanceFrom+" "+t.from)}})])]),n("button",{staticClass:"btn btn--alt wrap-icon-excahge flex justify-center items-center margin-3",attrs:{type:"button"},on:{click:t.reversChange}},[n("icon-refresh",{staticClass:"icon-refresh"})],1),n("div",[n("div",{staticClass:"color-primary-light padding-left-2",domProps:{textContent:t._s(t.$t("text.choose_balance")+":")}}),n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeSelectTo,expression:"closeSelectTo"}],staticClass:"wrap-select-payment width-custom margin-bottom-2 z-index-1",class:{open:t.isOpenSelectTo},on:{click:function(e){t.isOpenSelectTo=!t.isOpenSelectTo}}},[n("div",{staticClass:"active-select flex items-center padding-x-2 padding-y-1 cursor-pointer relative z-index-1",class:t.to},[n(t.getIcon(t.to),{tag:"component",staticClass:"icon--payment margin-right-1 fill-white"}),n("div",{staticClass:"color-white margin-right-1",domProps:{textContent:t._s(t.to+" "+t.$t("text.balance"))}}),n("icon-arrow-down",{staticClass:"icon-arrow fill-white"})],1),n("div",{staticClass:"wrap-select"},t._l(t.toDropdown,(function(e,i){return n("div",{key:i,staticClass:"select flex items-center cursor-pointer padding-y-1 padding-x-2",attrs:{value:e,tabindex:"0"},on:{click:function(e){return t.select("to",i)},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.select("to",i)}}},[n(t.getIcon(i),{tag:"component",staticClass:"icon--payment fill-primary-light margin-right-1"}),n("div",{staticClass:"color-primary-light margin-right-1",domProps:{textContent:t._s(i+" "+t.$t("text.balance"))}})],1)})),0)]),n("div",{staticClass:"color-primary-light padding-left-2",domProps:{textContent:t._s(t.$t("text.enter_amount")+":")}}),n("div",{staticClass:"relative width-custom"},[n("div",{staticClass:"width-custom bg-radius margin-bottom-2 color-primary-light font-bold from-bl",domProps:{textContent:t._s(t.result)},on:{click:function(e){e.stopPropagation(),t.toActive=!t.toActive}}}),n("div",{staticClass:"currency-input font-bold",domProps:{textContent:t._s(t.to)}})]),n("div",{staticClass:"margin-bottom-3 flex items-center color-primary-light padding-left-2",class:t.to},[n("div",{staticClass:"margin-right-1",domProps:{textContent:t._s(t.to+" "+t.$t("text.balance")+":")}}),n("div",{staticClass:"font-bold",domProps:{textContent:t._s(t.balanceTo+" "+t.to)}})])])]),n("button",{staticClass:"width-custom btn btn--alt",attrs:{disabled:!t.buttonActive},domProps:{textContent:t._s(t.$t("nav.exchange"))},on:{click:t.convert}})],1)},c=[],o=(n("0d03"),n("d3b7"),n("96cf"),n("1da1")),r=n("5530"),a=n("307e"),s={name:"Exchange",components:{IconArrowDown:function(){return n.e("chunk-92860844").then(n.t.bind(null,"c874",7))},IconRefresh:function(){return n.e("chunk-36248736").then(n.t.bind(null,"53fa",7))},IconExchange:function(){return n.e("chunk-f94c0ec4").then(n.t.bind(null,"3edd",7))}},mixins:[a["a"]],data:function(){return{isOpenSelectFrom:!1,isOpenSelectTo:!1,rateLoading:!1,amount:null,result:null,fromActive:!1,from:"BTC",toActive:!1,to:"USD"}},computed:{buttonActive:function(t){return t.$numeral(t.amount).value()>0&&t.$numeral(t.amount).value()<=t.$numeral(t.$BALANCE[t.from]).value()&&t.from!==t.to},RATE:function(t){return t.$store.getters["payment/RATE"]},RATE_TIME:function(t){return t.$store.getters["payment/RATE_TIME"]},fromDropdown:function(t){var e=Object(r["a"])({},t.$BALANCE);return delete e[t.to],e},toDropdown:function(t){var e=Object(r["a"])({},t.$BALANCE);return delete e[t.from],e},balanceFrom:function(t){var e=t.$numeral(t.$BALANCE[t.from]).value();return t.$nb(e-t.$numeral(t.amount).value(),t.from)},balanceTo:function(t){var e=t.$numeral(t.$BALANCE[t.to]).value();return t.$nb(e+t.$numeral(t.result).value(),t.to)},amountNumber:function(t){return t.$numeral(t.amount).value()}},methods:{select:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"from",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",n=this[t];this[t]=e,this.from===this.to&&(this[t]=n),this.fromActive=!1,this.toActive=!1,this.amount=null,this.result=null,this.calculateRate()},closeSelectFrom:function(){this.isOpenSelectFrom=!1},closeSelectTo:function(){this.isOpenSelectTo=!1},reversChange:function(){var t=this.from,e=this.to;this.from=e,this.to=t,this.amount=null,this.result=null},calculateRate:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,i,c,o,r,a,s,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,n=t.RATE,i=t.from,c=t.to,o=t.amount,r=((new Date).getTime()-t.RATE_TIME)/1e3,c in t.RATE&&!(r>10)){e.next=8;break}return t.rateLoading=!0,e.next=7,t.$store.dispatch("payment/fetchRateHistory");case 7:t.rateLoading=!1;case 8:a=0,s=(n[i]||1)/(n[c]||1),s=t.$nb(s,"btc"),s=t.$numeral(s),a=s.multiply(t.$numeral(o).value()).value(),a=t.$nb(a,c),a=t.$numeral(a).value(),l=n.commission,l=l||0,a*=(100-l)/100,a=t.$nb(a,c),t.result=a,e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](0),e.t0;case 25:case"end":return e.stop()}}),e,null,[[0,22]])})))()},convert:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.from,i=t.to,c=t.$numeral(t.amount).value(),t.amount=null,t.result=null,e.next=7,t.$store.dispatch("payment/exchange",{from:n,amount:c,to:i});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},l=s,u=(n("c88f"),n("2877")),d=Object(u["a"])(l,i,c,!1,null,"75e222e3",null);e["default"]=d.exports},c88f:function(t,e,n){"use strict";var i=n("eb05"),c=n.n(i);c.a},c8d2:function(t,e,n){var i=n("d039"),c=n("5899"),o="​᠎";t.exports=function(t){return i((function(){return!!c[t]()||o[t]()!=o||c[t].name!==t}))}},eb05:function(t,e,n){}}]);