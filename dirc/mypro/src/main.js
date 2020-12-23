import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(ElementUI);

var store = new Vuex.Store({
  state:{
    arr:[{username:"",email:"",tel:"",text:"",img:"",sex:""}]
  },
  mutations:{
    logindown(state,obj){
      state.arr[0]=obj;
      state.arr=JSON.parse(JSON.stringify(state.arr))
    }
  }
})

Vue.config.productionTip = false
axios.defaults.baseURL="http://192.168.2.125:7001"
axios.defaults.withCredentials=true;
Vue.prototype.$axios=axios;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
