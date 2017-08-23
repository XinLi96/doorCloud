export default {
    install: function(Vue, options) {
        Vue.http.interceptors.push(function(request, next) {
            request.headers['X-Requested-With'] = 'XMLHttpRequest'
            next(function(response) {
                if (response.data.status == 999) {
                    const locations = decodeURIComponent(response.body.location)
                    const urlI = locations.split('?').length
//              	alert(response.body.location + encodeURIComponent('?backurl=' + encodeURIComponent(window.location.href)))
                    if (urlI > 2) {
                        window.location.href = response.body.location + encodeURIComponent('&backurl=' + encodeURIComponent(window.location.href))
                    } else {
                        window.location.href = response.body.location + encodeURIComponent('?backurl=' + encodeURIComponent(window.location.href))
                    }
                }

            })
        })
    }
}
