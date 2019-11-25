
import service from './request'
const api = {};
import config from '../config';

// 删除商品
api.deleteProduct = function (params) {
    return service({url: config.baseUrl + '/product/delete', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        } 
    }).catch(error =>{
        console.log(error)
    })
}
// 查询产品详情
api.queryProductDetail = function (params) {
    return service({url: config.baseUrl + '/product/detail', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        } 
    }).catch(error =>{
        console.log(error)
    })
}
// 用户看到的商品列表
api.productGoodsList = function (params) {
    return service({url: config.baseUrl + '/product/goodsList', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        } 
    }).catch(error =>{
        console.log(error)
    })
}
// 查询某学校下的列表
api.productQueryList = function (params) {
    return service({url: config.baseUrl + '/product/queryList', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        } 
    }).catch(error =>{
        console.log(error)
    })
}

export default api