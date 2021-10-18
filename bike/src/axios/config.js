// axios的配置文件 分为开发环境和生产环境
const devBaseURL = 'https://v0.yiketianqi.com/api?version=v61';
const proBaseURL = 'http://xxx.com';

// 如何去区分 process.env 返回的是一个包含用户的环境信息，它可以去区分开发环境还是生产环境
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
  
export const TIMEOUT = 5000;
