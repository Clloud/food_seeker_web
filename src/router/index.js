import Vue from 'vue'
import Router from 'vue-router'
import TabBar from 'components/tab-bar/tab-bar'

import My from 'pages/my/my'
import Search from 'pages/search/search'
import Register from 'pages/register/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/search'
    },
    {
      path: '/my',
      components: {
        'default': My,
        'tab-bar': TabBar
      }
    },
    {
      path: '/search',
      components: {
        'default': Search,
        'tab-bar': TabBar
      }
    },
    {
      path: '/register',
      components: {
        'default': Register,
        'tab-bar': TabBar
      }
    }
  ]
})
