<!--
 * @Author: 朱世新
 * @Date: 2021-05-05 16:58:08
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-05-05 22:49:12
 * @Description: 
-->
<template>
<div class="Home">
  <zhihuHeader :month="month" :day="day" />
</div>
</template>

<script>
import zhihuHeader from '../components/Header.vue'
import {reactive,toRefs,computed} from 'vue'
import utils from '../utils'
export default{
  components:{
    zhihuHeader
  },
  setup(){
    const state = reactive({
      date:new Date
    })
    let day = computed(()=> utils.formatTime(state.date)[2])
    let month = computed(()=> utils.formatTime(state.date)[1])

    return {
      ...toRefs(state),
      day,
      month
    }
  }
}
</script>

<style lang="scss" scoped>
.Home{
  width: 100%;
  height: 100%;
}
</style>