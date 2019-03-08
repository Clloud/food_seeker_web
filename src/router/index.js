import Vue from 'vue'
import Router from 'vue-router'
import TabBar from 'components/tab-bar/tab-bar'

import Search from 'pages/search/search'
import Restaurant from 'pages/restaurant/restaurant'
import My from 'pages/my/my'
import Register from 'pages/register/register'
import RegisterConfirm from 'pages/register/register-confirm'
import Login from 'pages/login/login'
import Setting from 'pages/setting/setting'
import AddReview from 'pages/add-review/add-review'
import Review from 'pages/review/review'
import MyReview from 'pages/my-review/my-review'

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
      component: Register
    },
    {
      path: '/register/confirm',
      component: RegisterConfirm
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/restaurant/:id',
      component: Restaurant
    },
    {
      path: '/restaurant/:id/review',
      component: Review
    },
    {
      path: '/add-review',
      component: AddReview
    },
    {
      path: '/my/setting',
      component: Setting
    },
    {
      path: '/my/review',
      component: MyReview
    }
  ]
})
