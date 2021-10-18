// 封装axios
import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// 拦截器 在之前进行一些操作，请求拦截器 发起http请求之前进行一些操作
/* 
1.发送请求之前，加载一些组件
2.某一些请求需要携带token，如果没有携带，直接跳转到登录界面
*/

instance.interceptors.request.use(config=>{
  /* 
  1.发送请求之前，加载一些组件
  2.某一些请求需要携带token，如果没有携带，直接跳转到登录界面
  */
  console.log('被拦截做一些操作');
  return config
},err=>{
  return err;
})

// 响应拦截器
instance.interceptors.response.use(res=>{
  return res;
},err=>{
  if(err && err.response) {
    switch(err.response.status) {
      case 400:
        console.log('请求错误');
        break;
      case 401:
        console.log('未经授权');
        break;
      default:
        console.log('其他信息错误')
    }
  }
})

export default instance;