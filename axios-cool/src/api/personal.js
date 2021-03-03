/*
 * Author: 朱世新
 * Date: 2021-03-03 21:52:59
 * LastEditors: 朱世新
 * LastEditTime: 2021-03-03 21:54:37
 * Description: 
*/

import axios from './http';

function login(){
  return axios.post('/login');
}
export default {
  login
}