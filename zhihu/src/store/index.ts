/*
 * @Author: 朱世新
 * @Date: 2021-05-05 16:44:44
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-05-05 16:45:54
 * @Description: 
 */
import {createStore} from 'vuex'

interface State{
  username:string
}

export default createStore({
  state:{
    userName:'4xi'
  }
})