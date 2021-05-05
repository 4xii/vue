/*
 * @Author: 朱世新
 * @Date: 2021-05-05 17:27:14
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-05-05 22:46:50
 * @Description: 
 */
/* 转换日期格式 */
function formatTime(time:any){
  let arr:any[] = []
  time = time.toLocaleDateString()

  time.replace(/\d+/g,(val:any)=>{
    val = val < 2 ? `0${val}` :val;
    arr.push(val)
  })
  return arr
}

export default{
  formatTime
}