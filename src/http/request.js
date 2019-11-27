
import Vue from 'vue';
import { AjaxPlugin } from 'vux'
import store from '../store'

// 响应拦截器
AjaxPlugin.$http.interceptors.response.use(
    response => {
        return response.data
    }, 
    error => {
        return Promise.reject(error)
    }
)
  
// 请求拦截器
AjaxPlugin.$http.interceptors.request.use(
    config => {
        let token = store.state.token || sessionStorage.getItem('token')
        config.headers.Authorization = token
        return config
    }, 
    error => {
        return Promise.reject(error)
    }
)
export default AjaxPlugin
  