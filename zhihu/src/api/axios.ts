/*
 * @Author: 朱世新
 * @Date: 2021-05-11 08:09:59
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-05-11 08:12:30
 * @Description: 
 */
import axios from 'axios'

let instance = axios.create({
  baseURL:'http://localhost:3555/api'
})

export default instance