import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/login'
import LoginSub from '@/login/sublogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      children: [
        {
          path: '/login/:type',
          name: 'loginsub',
          component: LoginSub
        }
      ]
    }
  ]
})
