export default {
    install: function(Vue, options) {
        Vue.http.interceptors.push(function(request, next) {
            next(function(response) {
                if (response.data) {
                    // 如果状态是正确的，直接返回正确值
                    response.data = response.data.data
                } else {
                    // 如果状态是错误的，走error函数，不对数据处理
                    response.ok = false
                }
            })
        })
    }
}
