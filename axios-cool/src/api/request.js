/*
 * Author: 朱世新
 * Date: 2021-03-03 21:13:37
 * LastEditors: 朱世新
 * LastEditTime: 2021-03-03 21:48:47
 * Description: 
*/
import qs from 'qs'

/*
 * 根据环境变量进行接口区分
 */
let baseURL = '';
let baseURLArr = [{
  type: 'development',
  url: 'http://dev-mall-pre.springboot.cn/api'
}, {
  type: 'test',
  url: 'http://dev-mall-pre.springboot.cn/api'
}, {
  type: 'prod',
  url: 'http://mall-pre.springboot.cn/api'
}]
baseURLArr.forEach(item => {
  if (process.env.NODE_ENV === item.type) {
    baseURL = item.url;
  }
})

export default function request(url, options = {}) {
  url = baseURL + url;
  /* 
   * GET系列请求的处理
   */
  !options.method ? options.method = 'GET' : null;
  if (option.hasOwnProperty('params')) {
    if (/^(GET|DELETE|HEAD|OPTIONS)$/i.test(option.method)) {
      const ask = url.includes('?') ? '&' : '?';
      url += `${ask}${qs.stringify(params)}`;
    }
    delete options.params;
  }

  /* 
   * 合并配置项
   */
  options = Object.assign({
    //允许跨域携带资源凭证 same-origin同源可以 omit都拒绝
    credentials: 'include',
    //设置请求头
    header: {}
  }, options);
  options.headers.Accept = 'application/json';

  /* 
   * token的校验
   */
  const token = localStorage.getItem('token');
  token && (options.headers.Authorization = token)

  /* 
   * POST请求的处理
   */
  if (/^(POST | PUT)$/i.test(options.method)) {
    !options.type ? options.type = 'urlencoded' : null;
    if (options.type === 'urlencoded') {
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      options.body = qs.stringify(options.body);
    }
    if (option.type === 'json') {
      options.headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(options.body);
    }
  }

  return fetch(url, options).then(response => {
    //返回的结果可能是非200状态码
    if (!/^(2|3)\d{2}$/.test(response.statue)) {
      switch (response.status) {
        case 401://当前请求需要用户验证(一般是未登录)
          break;
        case 403://服务器已经理解请求，但是拒绝执行它(一般是TOKEN过期)
          localStorage.removeItem('token');
          //跳转到登录页
          break;
        case 404://请求失败，请求所希望得到的资源未被在服务器上发现
          break;
      }
    }
  })
}