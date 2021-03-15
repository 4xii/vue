/*
 * Author: 朱世新
 * Date: 2021-03-02 15:56:21
 * LastEditors: 朱世新
 * LastEditTime: 2021-03-11 16:54:04
 * Description: 
*/
import Vue from 'vue'
import App from './App.vue'
// import api from './api/api'
import store from './store'//引入一个store文件

Vue.config.productionTip = false;
// Vue.prototype.$api = api;

new Vue({
  store,//在vue初始化的过程中，注入一个store属性，内部会将这个属性收到每个组件$store上
  render: h => h(App),
}).$mount('#app')
