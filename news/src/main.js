/*
 * Author: 朱世新
 * Date: 2021-02-28 22:07:41
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-09 23:37:34
 * Description: 
*/
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
