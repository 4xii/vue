/*
 * Author: 朱世新
 * Date: 2021-03-03 21:55:19
 * LastEditors: 朱世新
 * LastEditTime: 2021-03-03 21:55:55
 * Description: 
*/

import axios from './http';

function voteAdd(){
  return axios.post('/insertVote',{
    xxx:'xxx'
  });
}
export default {
  voteAdd
}