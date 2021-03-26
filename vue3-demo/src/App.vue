<!--
 * @Author: 朱世新
 * @Date: 2021-03-26 07:59:48
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-03-26 08:49:42
 * @Description: 
-->
<template>
  <div>
    <h1>x:{{x}},y:{{y}}</h1>
    <input type="text" v-model="state.val" @keyup.enter="addTodo"/>
    <ul>
      <li v-for="todo in state.todos" :key="todo.name">{{ todo.name }}</li>
    </ul>
    <div>totoal:{{ total }}</div>
  </div>
</template>

<script>
//reactive 复杂的数据结构编程响应式
//ref是简单数据结构
//删除，标记已完成
import useAddTodo from './useAddTodo';
import useMouse from './useMouse'
//mixin不清晰，会有命名冲突的问题
export default {
  setup() {
    //逻辑清晰
    let { state, total,addTodo } = useAddTodo();
    let {x,y} = useMouse();
    // let state = reactive({
    //   todos: [
    //     { name: "学习", done: false },
    //     { name: "打游戏", done: false },
    //   ],
    //   val: "",
    // });
    // let total = computed(() => state.todos.length);
    // function addTodo(){
    //   state.todos.push({
    //     done:false,
    //     name:state.val
    //   })
    //   state.val = '';
    // }
    // function remove(){
      
    // }
    // function clear(){
      
    // }
    return { 
      state, total,addTodo,
      x,y
    };
  },
};
//相较于mixin，数据来源清晰

</script>
