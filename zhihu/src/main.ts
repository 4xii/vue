/*
 * @Author: 朱世新
 * @Date: 2021-05-05 16:28:32
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-05-05 16:47:21
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import vuex from './store/index'

const app = createApp(App)

app.use(router)
app.use(vuex)
app.mount('#app')
