
import service from './request'
const api = {};
import config from '../config';


/***************运营账户管理***************/
/*------运营账号查询------*/

/*  
 * 获取运营账号可使用权限
 * getCallerForHouse
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.queryPermission = function (params) {
    return service({url: config.baseUrl + '/adminUser/queryPermission', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        } 
    }).catch(error =>{
        console.log(error)
    })
}

/*  
 * 获取运营账号列表
 * getOperaionList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.getOperaionList = function (params) {
    return service({url: config.baseUrl + "/adminUser/query", method: 'get', params: params}).then(res => {
        if (res.status == 200) {
            return res.data
        }
    })
}
/*  
 * 添加修改运营账号信息
 * checkUsername
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.checkUsername = function (params) {
    return service({url: config.baseUrl + "/users/query", method: 'GET', params: params}).then(res => {
        if (res.status == 200) {
            return res.data
        }
    })
}
/*  
 * 校验账号是否使用
 * alterOperation
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.alterOperation = function (data) {
    return service({url: config.baseUrl + "/adminUser/add", method: 'POST', data: data}).then(res => {
        if (res.status == 200) {
            return res.data
        }
    })
}
/* 
 * 删除运营账号
 * deleteOperation
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.deleteOperation = function(params) {
    return service({url: config.baseUrl + "/adminUser/delete", method: 'get', params: params}).then(res => {
        if (res.status == 200) {
            return res.data
        }
    })
}

/***************更多功能管理***************/
/*------更多功能------*/

/*
 * 请求功能icon列表
 * queryIconList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.queryIconList = function(params) {
    return service({url: config.baseUrl + "/function/queryFunction", method: 'get', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}

/*
 * 根据id删除icon功能
 * iconDelete
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.iconDelete = function(params) {
    return service({url: config.baseUrl + "/function/deleteFunction", method: 'get', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}

/*
 * 添加icon功能
 * iconAdd
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.iconAdd = function(params) {
    return service({url: config.baseUrl + "/function/addFunction", method: 'post', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}

/*------首页链接------*/
/*
 * 请求 功能模块名称 下拉框组
 * queryHomeIconList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.queryHomeIconList = function(params) {
    return service({ url:config.baseUrl + "/functionUrl/queryFunction", method: 'get', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 请求首页已发布list
 * queryHomeLink
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.queryHomeLink = function(params) {
    return service({url: config.baseUrl + "/functionUrl/query", method: 'get', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}

/*
 * 提交保存
 * homeLinkSave
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.homeLinkSave = function(data) {
    return service({
        url: config.baseUrl + "/functionUrl/addFunctionUrl", 
        method: 'POST', 
        data: data,
        transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 请求首页已发布list
 * queryHomeLink
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.queryHomeLink = function(params) {
    return service({url: config.baseUrl + "/functionUrl/query", method: 'get', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}


/*------app版本参数管理------*/
/*
 * 获取app名称list
 * queryAppParam
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.queryAppParam = function(params) {
    return service({url: config.baseUrl + "/appParameter/queryApp", method: 'get', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 请求app版本参数管理list
 * queryParameterList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.queryParameterList = function(params) {
    return service({url: config.baseUrl + "/appParameter/query", method: 'get', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}

/*
 * APP版本参数添加
 * appParamsAdd
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.appParamsAdd = function(data) {
    return service({url: config.baseUrl + "/appParameter/save", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * APP版本参数修改
 * changeParameter
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.changeParameter = function(data) {
    return service({url: config.baseUrl + "/appParameter/update", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}

/***************岗位人员管理***************/
/*------岗位管理------*/

/*
 * 获取岗位管理表格数据
 * queryJobList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.queryJobList = function(params) {
    return service({url: config.baseUrl + "/masterRole/list", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 获取可接收工单类型选项
 * getOrderTypeOptions
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.getOrderTypeOptions = function(params) {
    return service({url: config.baseUrl + "/worktaskType/getList", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 获取岗位功能配置选项
 * getJobConfigOptions
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.getJobConfigOptions = function(params) {
    return service({url: config.baseUrl + "/appFunctionModule/list", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 新增/编辑岗位
 * jobManageSave
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.jobManageSave = function(data) {
    return service({url: config.baseUrl + "/masterRole/save", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}

/*------人员管理------*/
/*
 * 获取人员管理表数据
 * peopleManageList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.peopleManageList = function(params) {
    return service({url: config.baseUrl + "/master/list", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 获取岗位list
 * peopleManageList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.querPeopleRoles = function(params) {
    return service({url: config.baseUrl + "/masterRole/queryAll", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
} 
/*
 * 保存 新增或修改的 的人员管理
 * saveAddPerson
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.saveAddPerson = function(data) {
    return service({url: config.baseUrl + "/master/save", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 启用或者禁用账号
 * enableAccount
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.enableAccount = function(params) {
    return service({url: config.baseUrl + "/master/enable", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 下载二维码
 * downloadCode
 * @param {String} value
 * @return {Object} 请求后得到的数据对象
 */
api.downloadQRCode = function(value) {
    window.open(config.baseUrl + '/master/downloadQRCodes?masterPhones=' + value)
}


/***************物业账号管理***************/
/*------查询账户------*/

/*
 * 查询物业账号list
 * getPropertyList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.getPropertyList = function(option, id, params) {
    let url = config.baseUrl + "/users/"
    let method = 'GET'
    if (option === 'query') {
        url = url + 'query'
        method = 'GET'
    } else if (option === 'delete') {
        method = 'DELETE'
    }
    return service({url: url + id, method: method, params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*  
 * 获取物业账号可使用权限
 * getCallerForHouse
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.queryPropertyPermission = function (params) {
    return service({url: config.baseUrl + '/permissions/query', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}
/*  
 * 获取物业账号其他信息
 * queryPropertyMoreInfo
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.queryPropertyMoreInfo = function (
    id, 
    params = {}, 
    data = {}, 
    method = 'GET', 
    ContentType = 'application/json;charset=UTF-8'
    ){
        let url = config.baseUrl + '/users'
        if (id !== '') {
            url = url + '/' + id
        }
        let httpObject = {
            url: url, 
            method: method, 
            params: params, 
            data: data, 
            headers: { 'Content-Type': ContentType }
        }
        if (ContentType === 'application/x-www-form-urlencoded') {
            httpObject.transformRequest = [function (data, headers) {
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }]
        }
        return service(httpObject).then(res => {
            if (res.status == 200){
                return res.data
            }
    })
}

/*************** 物业公司管理***************/
/*------ 添加物业公司------*/

/*  
 * 添加添加物业公司
 * getCallerForHouse
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.addPropertyCompany = function (data) {
    return service({url: config.payPath + '/dataBasic/savePropertyCompany', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*------ 物业公司列表 ------*/
/*
 * 获取物业公司列表
 * queryPorpertyList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.queryPorpertyList = function(params) {
    return service({url: config.payPath + "/dataBasic/queryPropertyCompany", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 删除当前指定物业公司
 * deletePropertyCompany
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.deletePropertyCompany = function(data) {
    return service({
        url: config.payPath + "/dataBasic/removePropertyCompany", 
        method: 'POST', 
        data: data,
        transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
    }).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*------ 小区所属物业列表 ------*/
/*
 * 获取物业公司列表
 * queryCommunityPropertyCompany
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.queryBingdingCompany = function(params) {
    return service({url: config.payPath + "/dataBasic/queryCommunityPropertyCompany", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 编辑修改 所属关系列表 单独项
 * saveBindingCompany
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.saveBindingCompany = function(data) {
    return service({
        url: config.payPath + "/dataBasic/saveCommunityPropertyCompany", 
        method: 'POST', 
        data: data,
        transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}


/***************米到家分销管理***************/
/*------业务员管理------*/

/*
 * 获取物业公司列表
 * getPropertyCompany
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.getPropertyCompany = function(params) {
    return service({url: config.payPath + "/clerk/getPropertyCompany", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 获取业务员列表
 * queryByPage
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.queryByPage = function(data) {
    return service({ url: config.payPath + "/clerk/queryByPage", method: 'POST', data: data,}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 更新以及修改业务员列表 禁用启用状态 以及 物业公司
 * updateFobidden
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.updateFobidden = function(data) {
    return service({url: config.payPath + "/clerk/updateClerk", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}

/*------业绩查询------*/
/*
 * 业绩查询表格数据获取
 * queryOrderByPage
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.queryOrderByPage = function(data) {
    return service({url: config.payPath + "/clerk/queryOrderByPage", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 结转
 * orderSettle
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.orderSettle = function(data) {
    return service({url: config.payPath + "/clerk/orderSettle", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 扣除
 * deductBonus
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.deductBonus = function(data) {
    return service({url: config.payPath + "/clerk/deductBonus", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}

/*
 * 导出
 * exportOrder
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.exportOrder = function(paramsString) {
    let exportUrl = config.payPath + "/clerk/exportOrder?a=b" + paramsString
    window.open(exportUrl, '_parent', '')
}

/*------业绩查询------*/

/*
 * 业绩查询列表
 * queryRecordByPage
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.queryRecordByPage = function(data) {
    return service({url: config.payPath + "/clerk/queryRecordByPage", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 查询佣金总数
 * getTotalBonus
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.getTotalBonus = function(data) {
    return service({url: config.payPath + "/clerk/getTotalBonus", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 出账
 * checkRecord
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.checkRecord = function(data) {
    return service({url: config.payPath + "/clerk/checkRecord", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 导出
 * exportRecord
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.exportRecord = function(paramsString) {
    let exportUrl = config.payPath + "/clerk/exportRecord?a=b" + paramsString
    window.open(exportUrl, '_parent', '')
}

/*------各公司分享统计------*/
/*
 * 各公司分享统计列表
 * checkRecord
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.countByCompany = function(data) {
    return service({url: config.payPath + "/clerk/countByCompany", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 导出
 * exportCountByCompany
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.exportCountByCompany = function(paramsString) {
    let exportUrl = config.payPath + "/clerk/exportCountByCompany?" + paramsString
    window.open(exportUrl, '_parent', '')
}
/*
 * 根据公司id获取小区列表
 * getCommunityByCompanyId
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.getCommunityByCompanyId = function(params) {
    return service({url: config.payPath + "/clerk/getCommunityByCompanyId", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}

/*------管家分享统计------*/

/*
 * 管家分享统计
 * countByClerk
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.countByClerk = function(data) {
    return service({url: config.payPath + "/clerk/countByClerk", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 导出
 * exportCountByClerk
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.exportCountByClerk = function(paramsString) {
    let exportUrl = config.payPath + "/clerk/exportCountByClerk?" + paramsString
    window.open(exportUrl, '_parent', '')
}

/*------商品分享统计------*/

/*
 * 商品分享统计
 * countByProduct
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.countByProduct = function(data) {
    return service({url: config.payPath + "/clerk/countByProduct", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 导出
 * exportCountByProduct
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.exportCountByProduct = function(paramsString) {
    let exportUrl = config.payPath + "/clerk/exportCountByProduct?" + paramsString
    window.open(exportUrl, '_parent', '')
}

/*------各分销员佣金统计------*/

/*
 * 各分销员佣金统计
 * clerkCommissionCount
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.clerkCommissionCount = function(data) {
    return service({url: config.payPath + "/clerk/clerkCommissionCount", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 分销员佣金详细
 * clerkCommissionDetail
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.clerkCommissionDetail = function(data) {
    return service({url: config.payPath + "/clerk/clerkCommissionDetail", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 导出
 * exportClerkCommissionCount
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.exportClerkCommissionCount = function(paramsString) {
    let exportUrl = config.payPath + "/clerk/exportClerkCommissionCount?" + paramsString
    window.open(exportUrl, '_parent', '')
}

/*------各商品分佣统计------*/

/*
 * 各商品分佣统计
 * productCommissionCount
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.productCommissionCount = function(data) {
    return service({url: config.payPath + "/clerk/productCommissionCount", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 导出
 * exportProductCommissionCount
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.exportProductCommissionCount = function(paramsString) {
    let exportUrl = config.payPath + "/clerk/exportProductCommissionCount?" + paramsString
    window.open(exportUrl, '_parent', '')
}

/***************小区管理***************/
/*------小区查询------*/
/*
 * 查询小区管理list
 * getPropertyList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.queryCommunityList = function(option, id, options) {
    let url = config.baseUrl + "/communities"
    let method = 'GET'
    let serviceQuery = {
        url: url, 
        method: method, 
        params: {}, 
        data: {}
    }
    if (option === 'query') {
        serviceQuery.url = serviceQuery.url + '/query'
        serviceQuery.method = 'GET'
    } else if (option === 'delete') {
        serviceQuery.method = 'DELETE'
    } else if (option === 'update') {
        serviceQuery.url = serviceQuery.url + '/update'
        serviceQuery.method = 'POST'
    } else if (option === 'add') {
        serviceQuery.method = 'POST'
        serviceQuery.transformRequest = [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }]
        serviceQuery.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    if (serviceQuery.method == 'POST') {
        serviceQuery.data = options
    } else {
        serviceQuery.params = options
    }
    if (id !== '') {
        serviceQuery.url = serviceQuery.url + '/' + id
    }
    return service(serviceQuery).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 导出
 * exportCommunities
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.exportCommunities = function(paramsString) {
    let exportUrl = config.baseUrl + "/communities/export?" + paramsString
    window.open(exportUrl, '_parent', '')
}

/***************业主注册信息查询***************/
/*------业主注册信息查询------*/
/*
 * 查询业主注册信息查询list
 * queryHousesOwnerList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.queryHousesOwnerList = function(option, id, options) {
    let url = config.baseUrl + "/houses/"
    let method = 'GET'
    if (option === 'query') {
        url = url + 'query'
        method = 'GET'
    } else if (option === 'delete') {
        method = 'DELETE'
    } else if (option === 'update') {
        url = url + 'owners/'
        method = 'POST'
    }
    let params = {}
    let data = {}
    if (method == 'POST') {
        data = options
    } else {
        params = options
    }
    return service({url: url + id, method: method, params: params, data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 导出
 * exportHousesOwner
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.exportHousesOwner = function(paramsString) {
    let exportUrl = config.baseUrl + "/houses/export?a=b" + paramsString
    window.open(exportUrl, '_parent', '')
}

/*------绑定拉新明细------*/
/*
 * 获取绑定拉新明细列表
 * bindNewDetailList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.bindNewDetailList = function(params) {
    return service({url: config.baseUrl + "/houses/bindInfo", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 导出
 * exportBindInfo
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.exportBindInfo = function(paramsString) {
    let exportUrl = config.baseUrl + "/houses/exportBindInfo?a=b" + paramsString
    window.open(exportUrl, '_parent', '')
}

/*------注册拉新明细------*/

/*
 * 获取注册拉新明细列表
 * registerInfo
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.registerInfo = function(params) {
    return service({url: config.baseUrl + "/houses/registerInfo", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 导出
 * exportRegisterInfo
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.exportRegisterInfo = function(paramsString) {
    let exportUrl = config.baseUrl + "/houses/exportRegisterInfo?a=b" + paramsString
    window.open(exportUrl, '_parent', '')
}

/***************发布管理***************/
/*------ 综合查询------*/
/*
 * 获取发布类别
 * queryCategory
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.queryCategory = function(params) {
    return service({url: config.baseUrl + "/data/category/0", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 获取综合查询list
 * querySynthesisList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.querySynthesisList = function(type, params) {
    return service({url: config.baseUrl + '/' + type +"/query", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 获取综合查询list 单行对象内容
 * querySynthesisRow
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.querySynthesisRow = function(id, params) {
    return service({url: config.baseUrl + "/data/" + id, method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*------ 社区公告列表------*/
/*
 * 查询社区公告列表list
 * queryNoticesList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.queryNoticesList = function(option, id, options) {
    let url = config.baseUrl + "/notices"
    let method = 'GET'
    let params = {}
    let data = {}
    let serviceQuery = {
        url: url, 
        method: method, 
        params: params, 
        data: data
    }
    if (option === 'query') {
        serviceQuery.url = serviceQuery.url + '/query'
        serviceQuery.method = 'GET'
    } else if (option === 'delete') {
        serviceQuery.method = 'DELETE'
    } else if (option === 'update') {
        serviceQuery.url = serviceQuery.url + '/update'
        serviceQuery.method = 'POST'
    } else if (option === 'add') {
        serviceQuery.method = 'POST'
        serviceQuery.transformRequest = [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }]
        serviceQuery.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    if (serviceQuery.method == 'POST') {
        serviceQuery.data = options
    } else {
        serviceQuery.params = options
    }
    if (id !== '') {
        serviceQuery.url = serviceQuery.url + '/' + id
    }
    return service(serviceQuery).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 社区公告列表确认完成
 * updateNoticesState
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.updateNoticesState = function(params) {
    return service({url: config.baseUrl + "/notices/updateState", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}

/***************社区活动管理***************/
/*------活动主题设置------*/
/*
 * 获取活动主题list
 * queryAllActivity
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.queryAllActivity = function(params) {
    return service({url: config.payPath + "/communityActivityTheme/queryAllActivity", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 获取活动主题list
 * saveActivityTheme
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.saveActivityTheme = function(type, data) {
    let url = config.payPath
    if (type === 'add') {
        url = url + '/communityActivityTheme/addActitivityTheme'
    } else {
        url = url + '/communityActivityTheme/updateActivityTheme'
    }
    return service({url: url, method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*------活动管理------*/
/*
 * 获取活动管理list
 * queryCommunityActivity
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.queryCommunityActivity = function(data) {
    return service({url: config.payPath + "/communityActivity/query", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
} 
/*
 * 获取活动管理list
 * getActivityTheme
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.getActivityTheme = function(params) {
    return service({url: config.payPath + "/communityActivityTheme/getActivityTheme", method: 'GET', params: params}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 获取活动管理点击后的行详情
 * queryActivityDetail
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.queryActivityDetail = function(data) {
    return service({url: config.payPath + "/communityActivity/queryActivityDetail", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
} 
/*------报名情况------*/
/*
 * 获取报名情况list
 * queryActivityEnrolls
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.queryActivityEnrolls = function(data) {
    return service({url: config.payPath + "/communityActivity/queryActivityEnrolls", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}
/*
 * 导出
 * activityEnrollExport
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.activityEnrollExport = function(paramsString) {
    let exportUrl = config.payPath + "/communityActivity/activityEnrollExport?" + paramsString
    window.open(exportUrl, '_parent', '')
}
/*------留言审核------*/
/*
 * 查询活动评论
 * queryActivityComment
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.queryActivityComment = function(data) {
    return service({url: config.payPath + "/communityActivity/queryActivityComment", method: 'POST', data: data}).then(res => {
        if(res.status == 200){
            return res.data
        }
    })
}

/***************问卷调查***************/
/*------问卷调查------*/

/*  
 * 调查问卷列表数据
 * getQuestionList
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.getQuestionList = function (params) {
    return service({url: config.baseUrl + '/wj/list', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*  
 * 创建问卷
 * ceeateRequestion
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.ceeateRequestion = function (params) {
    return service({url: config.baseUrl + '/wj/getWJLoginUrl', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*  
 * 查看答题结果
 * lookDetail
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.lookDetail = function (params) {
    return service({url: config.baseUrl + '/wj/getWJResult', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}


/***************缴费管理***************/

/*------查询缴费------*/

/*
 * 获取列表数据
 * getPaymentList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.getPaymentList = function (params) {
    return service({url: config.baseUrl + '/payments/query', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*------对账查询------*/

/*
 * 获取列表数据
 * getPaymentCheckList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.getPaymentCheckList = function (params) {
    return service({url: config.baseUrl + '/payments/check', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}


/*
 * 查看详情
 * getDetail
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.getDetail = function (params) {
    return service({url: config.baseUrl + '/payments/detail', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*------查单调账------*/

/*
 * 获取列表数据
 * getBillList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.getBillList = function (params) {
    return service({url: config.baseUrl + '/payments/getBill', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 调账
 * changeState
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.changeState = function (params) {
    return service({url: config.baseUrl + '/payments/changeBill', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}


/*------荣盛券退款------*/

/*
 * 获取列表数据
 * getRsOrder
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.getRsOrder = function (params) {
    return service({url: config.baseUrl + '/payments/queryPayRisesun', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*------缴费设置------*/

/*
 * 获取列表数据
 * paymentStatus
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.paymentStatus = function (params) {
    return service({url: config.payPath + '/paymodeset/queryAllCommunityPayMode', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 暂停
 * timeOUt
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.timeOUt = function (params) {
    return service({url: config.payPath + '/paymodeset/suspendPayment', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 开通
 * open
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.open = function (params) {
    return service({url: config.payPath + '/paymodeset/openTianWenPaymode', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/***************缴费管理***************/

/*------新查询缴费------*/

/*
 * 获取列表数据
 * newGetPaymentList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.newGetPaymentList = function (params) {
    return service({url: config.payPath + '/payAdmin/queryPayment', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*------新对账查询------*/

/*
 * 获取列表数据
 * findPayBatchList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.findPayBatchList = function (params) {
    return service({url: config.payPath + '/payAdmin/queryPayBatchFlow', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 查看详情
 * findPayBatchDetail
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.findPayBatchDetail = function (params) {
    return service({url: config.payPath + '/payAdmin/queryPayBatchFlowDetail', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*------新对账统计------*/

/*
 * 获取列表数据
 * findPayGroupByCommunity
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.findPayGroupByCommunity = function (params) {
    return service({url: config.payPath + '/payAdmin/queryPayGroupByCommunity', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}


/***************首页/启动页管理***************/

/*------启动页管理------*/

/*
 * 获取列表数据
 * findStartApp
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.findStartApp = function (params) {
    return service({url: config.baseUrl + '/startPage/query', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}


/*
 * 删除列表数据
 * deleteStartImg
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.deleteStartImg = function (params) {
    return service({url: config.baseUrl + '/startPage/delete', GET: 'POST', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 添加首页启动页
 * addStartApp
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */
api.addStartApp = function (data) {
    return service({url: config.baseUrl + '/startPage/add', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*------首页banner管理 / 生活首页banner / 商城版块管理====> 首页banner------*/

/*
 * 获取banner列表数据
 * getBannerList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.getBannerList = function (params) {
    return service({url: config.baseUrl + '/banner/query', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * banner列表数据排序
 * toSort
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

api.toSort = function (data) {
    return service({url: config.baseUrl + '/banner/updateSort', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 删除banner列表数据
 * deleteBanner
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.deleteBanner = function (params) {
    return service({url: config.baseUrl + '/banner/delete', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 添加banner数据
 * addBanner
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

api.addBanner = function (data) {
    return service({
        url: config.baseUrl + '/banner/add', 
        method: 'POST', 
        data: data,
        transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * banner更改
 * changeBanner
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

api.changeBanner = function (data) {
    return service({url: config.baseUrl + '/banner/update', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*------首页广告位管理 / 生活首页广告位------*/

/*
 * 获取广告位管理列表数据
 * getManageList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.getManageList = function (params) {
    return service({url: config.baseUrl + '/ad/query', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 广告位管理列表数据排序
 * adToSort
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

api.adToSort = function (data) {
    return service({url: config.baseUrl + '/ad/updateSort', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 删除广告位管理列表数据
 * deleteAd
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.deleteAd = function (params) {
    return service({url: config.baseUrl + '/ad/delete', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 添加广告位管理列表数据
 * sendAd
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

api.sendAd = function (data) {
    return service({
        url: config.baseUrl + '/ad/add', 
        method: 'POST', 
        data: data,
        transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 广告位管理列表数据更改
 * changeAd
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

api.changeAd = function (data) {
    return service({url: config.baseUrl + '/ad/update', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*------首页功能入口------*/

/*
 * 获取首页功能入口数据
 * getIconList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.getIconList = function (params) {
    return service({url: config.baseUrl + '/function/queryFunction', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 更改图标
 * changeIcon
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.changeIcon = function (params) {
    return service({url: config.baseUrl + '/function/queryUrl', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 保存并发布
 * iconSave
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

api.iconSave = function (data) {
    return service({url: config.baseUrl + '/function/save', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*------首页弹窗设置------*/

/*
 * 弹窗列表查询
 * queryList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.queryList = function (params) {
    return service({url: config.baseUrl + '/questionnaireSetting/queryList', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 获取弹框详情
 * queryDetail
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.queryDetail = function (params) {
    return service({url: config.baseUrl + '/questionnaireSetting/queryDetail', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 删除列表数据
 * deleteModel
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.deleteModel = function (params) {
    return service({url: config.baseUrl + '/questionnaireSetting/delete', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 添加弹窗
 * addModel
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

api.addModel = function (data) {
    return service({url: config.baseUrl + '/questionnaireSetting/save', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 获取弹框详情
 * modelDetail
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.modelDetail = function (params) {
    return service({url: config.baseUrl + '/questionnaireSetting/queryDetail', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 编辑弹窗
 * updateModel
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

api.updateModel = function (data) {
    return service({url: config.baseUrl + '/questionnaireSetting/update', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/***************消息管理***************/

/*------系统消息------*/

/*
 * 获取消息列表
 * queryMessageList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.queryMessageList = function (params) {
    return service({url: config.baseUrl + '/platformMessage/list', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}


/*
 * 添加消息
 * addSystem
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.addSystem = function (data) {
    return service({url: config.baseUrl + '/platformMessage/save', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 删除列表
 * deleteSystem
 * @param {Object} id
 * @return {Object} 请求后得到的数据对象
 */

api.deleteSystem = function (id) {
    return service({url: config.baseUrl + '/platformMessage/delById/'+ id, method: 'POST'}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}
/***************数据统计***************/

/*------数据统计------*/

/*
 * 获取数据统计列表
 * getAccountList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.getAccountList = function (params) {
    return service({url: config.baseUrl + '/data/query', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/***************系统配置***************/

/*------新增系统参数------*/

/*
 * 新增系统参数
 * addParam
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

api.addParam = function (data) {
    return service({url: config.baseUrl + '/systemParameter/create', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*------系统列表------*/

/*
 * 获取参数列表
 * params
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

api.getParamsList = function (params) {
    return service({url: config.baseUrl + '/systemParameter/query', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 修改参数
 * changeParams
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

api.changeParams = function (data) {
    return service({url: config.baseUrl + '/systemParameter/modify', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 开启/关闭
 * setOline
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.setOline = function (params) {
    return service({url: config.baseUrl + '/systemParameter/isOnline', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*------平台缓存------*/

/*
 * 更新缓存
 * refreshPlatform
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

 
api.refreshPlatform = function (params) {
    return service({url: config.baseUrl + '/systemParameter/refresh', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}


/*------米到家岗位功能配置------*/

/*
 * 获取列表数据
 * riceToHome
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

 
api.riceToHome = function (params) {
    return service({url: config.baseUrl + '/appFunctionModule/list', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 编辑/添加功能模块及顺序
 * riceToHomeIcon
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

 
api.riceToHomeIcon = function (data) {
    return service({url: config.baseUrl + '/appFunctionModule/save', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 删除
 * deleteRiceHome
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

 
api.deleteRiceHome = function (data) {
    return service({url: config.baseUrl + '/appFunctionModule/delete', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*------员工工单预警------*/

/*
 * 获取列表数据
 * getEmployeeList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

 
api.getEmployeeList = function (params) {
    return service({url: config.baseUrl + '/pushTime/list', method: 'GET', params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 获取预警顺序
 * getSort
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.getSort = function (params) {
    return service({url: config.baseUrl + '/pushTime/getSort', method: 'GET',params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 获取预警岗位
 * getRoleList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */
api.getRoleList = function () {
    return service({url: config.baseUrl + '/masterRole/getRoleIdAndName', method: 'GET'}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 添加员工工单预警
 * addWarning
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

 
api.addWarning = function (data) {
    return service({url: config.baseUrl + '/pushTime/save', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 删除员工工单预警
 * deleteWarning
 * @param {Object} data
 * @return {Object} 请求后得到的数据对象
 */

 
api.deleteWarning = function (data) {
    return service({url: config.baseUrl + '/pushTime/delete', method: 'POST', data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*------报事报修类型设置------*/

/*
 * 获取报事报修类型列表
 * getReportList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.getReportList = function (params) {
    return service({url: config.baseUrl + '/worktaskType/getList', method: 'GET',params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*------报事类型细分类型------*/

/*
 * 获取报事类型细分类型
 * getWorktaskList
 * @param {Object} params
 * @return {Object} 请求后得到的数据对象
 */

api.getWorktaskList = function (params) {
    return service({url: config.baseUrl + '/worktaskType/querySecondType', method: 'GET',params: params}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 删除二级分类
 * delSecondType
 * @param {Object} id
 * @return {Object} 请求后得到的数据对象
 */

api.delSecondType = function (id) {
    return service({url: config.baseUrl + '/worktaskType/delSecondType?id=' + id, method: 'POST'}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

/*
 * 二级分类新增、修改
 * saveSecond
 * @param {Object} id
 * @return {Object} 请求后得到的数据对象
 */

api.saveSecond = function (data) {
    return service({url: config.baseUrl + '/worktaskType/saveSecond', method: 'POST',data: data}).then(res => {
        if (res.status == 200){
            return res.data
        }
    })
}

export default api