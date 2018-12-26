import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/user/login'
import DailyReport from '@/views/dailyReport'
import Register from '@/views/user/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dailyReport',
      name: 'dailyReport',
      component: DailyReport
    }
  ]
})
