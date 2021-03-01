/*
 * Author: 朱世新
 * Date: 2021-02-28 22:38:17
 * LastEditors: 朱世新
 * LastEditTime: 2021-03-01 16:57:41
 * Description: 
*/
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import List from './pages/list'
import Detail from './pages/detail'

Vue.use(Router);

export default new Router({
  routes:[
    { 
      path:'/',
			name:'home',
			component:Home,
			redirect:'/list',
      
      children:[
        {
          path:'/list',
          name:'list',
          component:List,
        },
        {
          path:'/detail',
          name:'detail',
          component:Detail
        }
      ]
    }
  ]
});
