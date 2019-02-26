import Vue from 'vue'
import Router from 'vue-router'
import Register from 'pages/register/register'

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
