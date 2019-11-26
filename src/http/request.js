
import Vue from 'vue';
import { AjaxPlugin } from 'vux'
import store from '../store'

// 响应拦截器
AjaxPlugin.$http.interceptors.response.use(
    response => {
        Vue.$vux.loading.hide()
        return response.data
    }, 
    error => {
        Vue.$vux.loading.hide()
        return Promise.reject(error)
    }
)
  
// 请求拦截器
AjaxPlugin.$http.interceptors.request.use(
    config => {
        Vue.$vux.loading.show({text: '加载中...'})
        let token = store.state.token || sessionStorage.getItem('token')
        config.headers.Authorization = token
        return config
    }, 
    error => {
        Vue.$vux.loading.hide()
        return Promise.reject(error)
    }
)
export default AjaxPlugin
  