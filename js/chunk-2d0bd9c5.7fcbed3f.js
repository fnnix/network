(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd9c5"],{"2d74":function(s,e,r){"use strict";r.r(e);var t=function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("div",{staticClass:"padding-y-5 color-primary-light"},[r("base-input",{staticClass:"hidden",attrs:{readonly:s.isLoading,type:"password"}}),r("div",{staticClass:"padding-y-4 border-primary-light border-rounded-4"},[r("div",{staticClass:"padding-x-4 padding-x-6--lg"},[r("div",{staticClass:"padding-x-6--lg"},[r("h3",{staticClass:"margin-top-0 margin-bottom-4 text-center font-bold",domProps:{textContent:s._s(s.$t("text.password_change"))}}),r("div",{staticClass:"grid grid-row-gap-4"},[r("div",{staticClass:"grid-column-12 grid-column-6--md grid-column-start-4--md"},[r("base-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,min:6},expression:"{ required: true, min: 6 }"}],attrs:{label:s.$t("ui.password"),disabled:s.isLoading,error:s.errors.first("password","form"),type:s.isPasswordVisible?"text":"password",dataName:"password","autocomplete-native":"off","data-vv-scope":"form"},on:{keypress:function(e){return!e.type.indexOf("key")&&s._k(e.keyCode,"enter",13,e.key,"Enter")?null:s.updateUserPassword(e)},"suffix-clicked":function(e){s.isPasswordVisible=!s.isPasswordVisible}},model:{value:s.form.password,callback:function(e){s.$set(s.form,"password",e)},expression:"form.password"}},[s.isPasswordVisible?r("icon-eye-crossed",{staticClass:"block width-1 fill-primary-light",attrs:{slot:"suffix"},slot:"suffix"}):r("icon-eye",{staticClass:"block width-1 fill-primary-light",attrs:{slot:"suffix"},slot:"suffix"})],1)],1),r("div",{staticClass:"grid-column-12 grid-column-6--md grid-column-start-4--md"},[r("base-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,min:6,is_not:s.form.password},expression:"{ required: true, min: 6, is_not: form.password }"}],ref:"passwordNew",attrs:{label:s.$t("ui.password_new"),disabled:s.isLoading,error:s.errors.first("passwordNew","form"),type:s.isPasswordNewVisible?"text":"password",dataName:"passwordNew","autocomplete-native":"off","data-vv-scope":"form"},on:{keypress:function(e){return!e.type.indexOf("key")&&s._k(e.keyCode,"enter",13,e.key,"Enter")?null:s.updateUserPassword(e)},"suffix-clicked":function(e){s.isPasswordNewVisible=!s.isPasswordNewVisible}},model:{value:s.form.passwordNew,callback:function(e){s.$set(s.form,"passwordNew",e)},expression:"form.passwordNew"}},[s.isPasswordNewVisible?r("icon-eye-crossed",{staticClass:"block width-1 fill-primary-light",attrs:{slot:"suffix"},slot:"suffix"}):r("icon-eye",{staticClass:"block width-1 fill-primary-light",attrs:{slot:"suffix"},slot:"suffix"})],1)],1),r("div",{staticClass:"grid-column-12 grid-column-6--md grid-column-start-4--md"},[r("base-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:passwordNew",expression:"'required|confirmed:passwordNew'"}],attrs:{label:s.$t("ui.password_new_confirm"),disabled:s.isLoading,error:s.errors.first("passwordNewConfirm","form"),type:s.isPasswordNewConfirmVisible?"text":"password",dataName:"passwordNewConfirm","autocomplete-native":"off","data-vv-scope":"form"},on:{keypress:function(e){return!e.type.indexOf("key")&&s._k(e.keyCode,"enter",13,e.key,"Enter")?null:s.updateUserPassword(e)},"suffix-clicked":function(e){s.isPasswordNewConfirmVisible=!s.isPasswordNewConfirmVisible}},model:{value:s.form.passwordNewConfirm,callback:function(e){s.$set(s.form,"passwordNewConfirm",e)},expression:"form.passwordNewConfirm"}},[s.isPasswordNewConfirmVisible?r("icon-eye-crossed",{staticClass:"block width-1 fill-primary-light",attrs:{slot:"suffix"},slot:"suffix"}):r("icon-eye",{staticClass:"block width-1 fill-primary-light",attrs:{slot:"suffix"},slot:"suffix"})],1)],1),r("div",{staticClass:"grid-column-12 grid-column-6--md grid-column-start-4--md padding-top-3"},[r("button",{staticClass:"btn btn--alt width-full",attrs:{type:"button",disabled:s.isLoading||!s.isFormValid,"data-progress":s.isLoading},domProps:{textContent:s._s(s.$t("ui.save"))},on:{click:s.updateUserPassword}})])])])]),r("hr",{staticClass:"hr margin-top-5 margin-bottom-4"}),r("two-step-authentication")],1)],1)},i=[],a=(r("99af"),r("d3b7"),r("96cf"),r("1da1")),o=r("e453"),n={name:"SettingsSecurity",components:{IconEye:function(){return r.e("chunk-6cfab4a6").then(r.t.bind(null,"7364",7))},IconEyeCrossed:function(){return r.e("chunk-626cc72e").then(r.t.bind(null,"4457",7))},TwoStepAuthentication:function(){return r.e("chunk-204fb795").then(r.bind(null,"aabd"))}},data:function(){return{validation:o["a"],isPasswordVisible:!1,isPasswordNewVisible:!1,isPasswordNewConfirmVisible:!1,form:{password:"",passwordNew:"",passwordNewConfirm:""},isLoading:!1}},computed:{isFormValid:function(s){return!s.errors.any("form")&&s.form.password&&s.form.passwordNew&&s.form.passwordNewConfirm}},methods:{reset:function(){this.isLoading=!1,this.form.password="",this.form.passwordNew="",this.form.passwordNewConfirm=""},updateUserPassword:function(){var s=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return!1,e.prev=1,e.next=4,s.$validator.validateAll("payments");case 4:if(r=e.sent,r){e.next=7;break}return e.abrupt("return");case 7:return s.isLoading=!0,e.next=10,s.$store.dispatch("user/updateUserPassword",s.form);case 10:s.$toasted.show("".concat(s.$t("ui.password")," ").concat(s.$t("text.updated_successfully")),{type:"success"}),!0,e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](1),e.t0;case 17:return e.prev=17,s.reset(),s.$validator.reset(),e.finish(17);case 21:case"end":return e.stop()}}),e,null,[[1,14,17,21]])})))()}}},d=n,l=r("2877"),c=Object(l["a"])(d,t,i,!1,null,"7de7bfe6",null);e["default"]=c.exports}}]);