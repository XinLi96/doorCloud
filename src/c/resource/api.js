import config from '../config'
import { assign } from 'lodash'

function install(Vue, options) {
    Vue.prototype.$api = Vue.api = function(key, params) {
        key = key.split('.')
            //api模块,当前模块api对象集合
        let module = require('../../apis/' + key[0])
            //当前api配置
        let api = module[key[1]]

        //如果没有对应的api模块抛出错误`
        if (!api) throw new Error("找不到API模块：" + key)

        //当前部署环境对应的api接口服务器,如果没有配置默认使用当前域名
        let host = module['$URL'] && module['$URL'][config.environment] || config.apiBaseURL

        //准备传给http的选项
        options = options || {}

        if (api.url.charAt() != '/') {
            api.url = '/' + api.url
        }

        options.url = host + api.url
        options.method = api.method && api.method.toUpperCase() || 'GET'

        // 根据请求类型设置参数
        if (params) {
            options[options.method == 'POST' || options.method == 'PUT' ? 'body' : 'params'] = params
        }
        //按照全局CONFIG,API配置里的CONFIG,直接传进来的CONFIG从后往前的优先级循序合并配置
        assign(options, api.options)

        //调用$http请求
        let http = this.$http || Vue.http
        return http(options).then(function(response) {
            return api.source ? response : response.data
        })

    }
}

export default {
    install
}