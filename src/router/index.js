import Vue from 'vue'
import Router from 'vue-router'
import Register from 'views/register/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/register'
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
