(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a60537e"],{"60a1":function(t,e,r){"use strict";r("a334")},a334:function(t,e,r){},c5cb:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"register"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.arr[0].email,expression:"arr[0].email"}],staticClass:"inp",attrs:{placeholder:"请输入邮箱",type:"text"},domProps:{value:t.arr[0].email},on:{input:function(e){e.target.composing||t.$set(t.arr[0],"email",e.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.arr[0].pwd,expression:"arr[0].pwd"}],staticClass:"inp",attrs:{placeholder:"请输入密码",type:"text"},domProps:{value:t.arr[0].pwd},on:{input:function(e){e.target.composing||t.$set(t.arr[0],"pwd",e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.arr[0].verif,expression:"arr[0].verif"}],staticClass:"inpver",attrs:{type:"text"},domProps:{value:t.arr[0].verif},on:{input:function(e){e.target.composing||t.$set(t.arr[0],"verif",e.target.value)}}}),r("span",{staticClass:"verif",domProps:{innerHTML:t._s(t.verif)},on:{click:function(e){return t.toverif()}}}),r("br"),r("button",{staticClass:"btn",on:{click:function(e){return t.register()}}},[t._v("注册")])])},i=[],n={data:function(){return{verif:"",arr:[{email:"",pwd:"",verif:""}]}},methods:{toverif:function(){var t=this;this.$axios("/verif").then((function(e){t.verif=e.data.data}))},register:function(){var t=this,e=/^([a-z,A-Z]|[0-9])+\w+@[a-z,A-Z,0-9]+\.([a-z,A-Z]{2,4})$/;e.test(this.arr[0].email)?this.$axios.post("/Register",{email:this.arr[0].email,pwd:this.arr[0].pwd,verif:this.arr[0].verif}).then((function(e){console.log(e),4001===e.data.code?alert("验证码错误!"):2001===e.data.code?(alert("注册成功"),t.$router.push("/Login/login")):4003===e.data.code&&alert("该邮箱已经注册过!")})):alert("请输入正确的邮箱地址！")}},mounted:function(){var t=this;this.$axios("/verif").then((function(e){t.verif=e.data.data}))}},s=n,o=(r("60a1"),r("2877")),l=Object(o["a"])(s,a,i,!1,null,"1bb40d5f",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-4a60537e.53fe4bfc.js.map