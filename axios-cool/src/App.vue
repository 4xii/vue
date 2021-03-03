<!--
 * @Author: 朱世新
 * @Date: 2021-03-02 15:56:21
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-03-03 22:39:32
 * @Description: 
-->
<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    add(){
      this.$api.vote.voteAdd();
    }
  }
}
</script>

<style>

</style>
