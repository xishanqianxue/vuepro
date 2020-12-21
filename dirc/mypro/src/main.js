import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'vue-axios'

Vue.config.productionTip = false
axios.defaults.baseURL="http://192.168.2.125:7001"
axios.defaults.withCredentials=true;
Vue.prototype.$axios=axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
