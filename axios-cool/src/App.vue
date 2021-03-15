<!--
 * @Author: 朱世新
 * @Date: 2021-03-02 15:56:21
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-03-12 10:32:19
 * @Description: 
-->
<template>
  <div id="app">
    {{$store.state.age}}<br>
    myAge{{$store.getters.myAge}}
    <button @click="syncChange()">button</button>
    <button @click="asyncChange()">异步更改</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    // add(){
    //   this.$api.vote.voteAdd();
    // }
    syncChange(){
      this.$store.commit('syncChange',10)
    },
    asyncChange(){
      this.$store.dispatch('asyncChange',5)
    }
  }
}
</script>

<style>

</style>
