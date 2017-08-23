import Vue from 'vue'
import VueResource from 'vue-resource'
import VueResourceApi from './api'
import CAS from './cas'

// import authentication from './authentication'
import filter from './filter'


let options = {
    credentials: true,
    emulateHTTP: true,
    emulateJSON: true,
    timeout: 20000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
}

Vue.use(VueResource)

// 封装$api
Vue.use(VueResourceApi, options)
Vue.use(CAS)

// 过滤返回数据，方便使用
Vue.use(filter)



// 验证用户登录状态
// Vue.http.interceptors.push(authentication)
