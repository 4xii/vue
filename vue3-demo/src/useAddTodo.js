/*
 * Author: 朱世新
 * Date: 2021-03-26 08:37:32
 * LastEditors: 朱世新
 * LastEditTime: 2021-03-26 08:38:14
 * Description: 
*/
import { reactive, computed } from "vue";
function useAddTodo(){
  let state = reactive({
      todos: [
        { name: "学习", done: false },
        { name: "打游戏", done: false },
      ],
      val: "",
    });
    let total = computed(() => state.todos.length);
    function addTodo(){
      state.todos.push({
        done:false,
        name:state.val
      })
      state.val = '';
    }
    return { state, total,addTodo };
}
export default useAddTodo