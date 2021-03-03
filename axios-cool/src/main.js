/*
 * Author: 朱世新
 * Date: 2021-03-02 15:56:21
 * LastEditors: 朱世新
 * LastEditTime: 2021-03-03 22:38:30
 * Description: 
*/
import Vue from 'vue'
import App from './App.vue'
import api from './api/api'

Vue.config.productionTip = false;
Vue.prototype.$api = api;

new Vue({
  render: h => h(App),
}).$mount('#app')
