/*
 * @Author: 朱世新
 * @Date: 2021-05-05 16:53:20
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-05-11 08:11:48
 * @Description: 
 */
import type {UserConfig} from 'vite'

const viteConfig:UserConfig = {
  /* 端口号 */
  port:3555,
  /* hostname */
  hostname:'localhost',
  /* proxy */
  proxy:{
    '/api':{
      target:'https://uni937d4b0-6cc760.service.tcloudbase.com',
      changeOrigin:true,
      ws:true,
      rewrite:path => path.replace(/^\/api/,'')
    }
  }
}

export default viteConfig