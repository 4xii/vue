/*
 * Author: 朱世新
 * Date: 2021-03-26 17:58:33
 * LastEditors: 朱世新
 * LastEditTime: 2021-03-26 18:02:04
 * Description: 
*/
const {ref,effect} = require('@vue/reactivity')
let count = ref(1)

effect(()=>{
  console.log('count是',count.value);
})

setInterval(()=>{
  count.value++
},1000)