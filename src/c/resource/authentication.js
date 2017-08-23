export default {
	install: function(Vue, options) {
		Vue.http.interceptors.push(function(request, next) {
			next(function(response) {
				if (response.data.error_code == 401 && this.$route.path !== '/login') {
					this.$router.push({
						path: '/login',
						query: { redirect: this.$route.fullPath }
					})
				}
			})
		})
	}
}