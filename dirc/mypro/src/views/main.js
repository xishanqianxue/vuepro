import Vue from 'vue'
import App from './Teacher.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import axios from 'axios'
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$axios=axios
// axios.baseURL="192.168.2.70:7001"//配置默认服务器
// Vue.prototype.$axios=axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
