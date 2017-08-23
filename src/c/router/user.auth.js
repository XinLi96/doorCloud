export default (to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (!window.localStorage.token) {
            next({
                path: '/login',
                // query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
}