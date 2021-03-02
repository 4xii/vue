/*
 * Author: 朱世新
 * Date: 2021-03-02 15:59:01
 * LastEditors: 朱世新
 * LastEditTime: 2021-03-02 23:40:51
 * Description: 
*/
import axios from 'axios';
import qs from 'qs'

/*
 * 根据环境变量区分接口的默认地址
 */
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api';
    break;
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api';
    break;
  case 'prod':
    baseURL = 'http://mall-pre.springboot.cn/api'
    break;
  default:
    baseURL = 'http://mall-pre.springboot.cn/api'
    break;
}

/* 
 * 设置超时时间和跨域是否允许携带凭证
 */
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

/* 
 * 设置请求传递数据的格式(看服务器要求什么格式)
 * x-www-form-urlencoded
 */
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = data => qs.stringify(data);

/* 
 * 设置请求拦截器
 * 客户端发送请求 -> [请求拦截器] -> 服务器
 * TOKEN校验(JWT) : 接收服务器返回的token，存储到vuex/本地存储中，每一次向服务器发请求，我们应该把token带上
 * 
 */
axios.interceptors.request.use(config => {
  //携带上token
  let token = localStorage.getItem('token');
  token && (config.headers.Authorization = token);
  return conifg
}, error => {
  return Promise.reject(error);
});

/*
 * 响应拦截器
 * 服务器返回信息 -> [拦截的统一处理] -> 客户端JS获取到信息 
 */
/* axios.defaults.validateStatus = status => {
  //自定义响应成功的HTTP状态码
  return /^(2|3)\d{2}$/.test(status);
} */
axios.interceptors.response.use(response => {
  //只返回响应主体中的信息(部分公司更具需求会进一步完善，例如指定服务器返回的CODE值来指定成功还是失败)
  return response.data;
}, error => {
  let { response } = error;
  if (response) {
    //服务器有结果返回
    switch(response.status){
      case 401://当前请求需要用户验证(一般是未登录)
        break;
      case 403://服务器已经理解请求，但是拒绝执行它(一般是TOKEN过期)
        localStorage.removeItem('token');
        //跳转到登录页
        break;
      case 404://请求失败，请求所希望得到的资源未被在服务器上发现
        break;
    }
  } else {
    //服务器没有结果返回
    if(!window.navigator.onLine) {
      //断网处理：跳转到断网页面
      return ;
    }
    return Promise.reject(error);
  }
});