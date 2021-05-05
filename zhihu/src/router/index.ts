/*
 * @Author: 朱世新
 * @Date: 2021-05-05 16:41:26
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-05-05 17:00:12
 * @Description: 
 */
import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../views/index.vue'

//在vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  //指定路由模式，此处使用的是hash模式
  history:createWebHashHistory(),
  //路由地址
  routes:[{
    path:'/',
    name:"Home",
    component:Home
  }]
})