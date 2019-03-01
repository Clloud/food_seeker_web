import Vue from 'vue'
import Router from 'vue-router'
import TabBar from 'components/tab-bar/tab-bar'
import NavBar from 'components/nav-bar/nav-bar'

import My from 'pages/my/my'
import Search from 'pages/search/search'
import Register from 'pages/register/register'
import RegisterConfirm from 'pages/register/register-confirm'
import Login from 'pages/login/login'
import Restaurant from 'pages/restaurant/restaurant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/restaurant'
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
        'nav-bar': NavBar
      }
    },
    {
      path: '/register/confirm',
      components: {
        'default': RegisterConfirm,
        'nav-bar': NavBar
      }
    },
    {
      path: '/login',
      components: {
        'default': Login,
        'nav-bar': NavBar
      }
    },
    {
      path: '/restaurant',
      components: {
        'default': Restaurant
      }
    }
  ]
})
