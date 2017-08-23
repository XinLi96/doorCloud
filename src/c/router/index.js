import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// import userAuth from './user.auth'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes,
})

// 用户认证
// router.beforeEach(userAuth)

export default router