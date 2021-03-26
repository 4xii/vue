<!--
 * @Author: 朱世新
 * @Date: 2021-03-26 07:59:48
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-03-26 08:15:56
 * @Description: 
-->
<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="add">click</button>
  </div>
</template>

<script>
// option api
import {ref} from 'vue'
// composition api
// 最简单的
export default {
  
  setup(){
    let count = ref(1)
    function add(){
      count.value++
    }
    return {count,add}
  }
  // data(){
  //   return {
  //     title:'world'
  //   }
  // },
  // methods:{
  //   fn1(){},
  //   fn2(){
  //     this.xx = 'xxx'
  //   }
  // }
};
</script>
