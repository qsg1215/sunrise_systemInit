import Env from './env';

// 项目里面用到的接口地址
export default {
    baseUrl: process.env.APIURL ? process.env.APIURL : Env[process.env.REACT_APP_ENV || 'pre'].baseUrl,
    version: process.env.VERSION ? process.env.VERSION : '开发版本'
}