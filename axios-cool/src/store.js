/*
 * Author: 朱世新
 * Date: 2021-03-11 16:35:51
 * LastEditors: 朱世新
 * LastEditTime: 2021-03-12 10:31:34
 * Description: 
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)//默认会执行当前插件的install方法

//通过Vue中的一个属性Store创建一个store的实例
export default new Vuex.Store({
  state:{// 单一数据源
    age:10
  },
  strict:true,
  getters:{
    myAge(state){//以前用vue中的计算属性
      return state.age +20
    }
  },
  //更新状态的唯一方式就是通过mutation
  mutations:{//mutation更改状态只能采用同步(严格模式下)
    //payload 载荷
    syncChange(state,payload){//修改状态的方法 同步的修改
      /* setTimeout(()=>{
        
        state.age += payload
      },1000); */
      state.age += payload
    }
  },
  actions:{
    asyncChange({commit},payload){
      setTimeout(()=>{
        commit('syncChange',payload)
      },1000)
    }
  }
})