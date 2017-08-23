import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/mainPage'
import loginPage from '@/components/loginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: loginPage
    },{
      path: '/login',
      name: 'loginPage',
      component: loginPage
    }
  ]
})
