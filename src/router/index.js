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
import MyReview from 'pages/my-review/my-review'
import Reviews from 'pages/reviews/reviews'
import Review from 'pages/review/review'
import Foods from 'pages/foods/foods'
import Comments from 'pages/comments/comments'

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
      path: '/restaurant/:id/reviews',
      component: Reviews
    },
    {
      path: '/restaurant/:id/foods',
      component: Foods
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
      path: '/my/reviews',
      component: MyReview
    },
    {
      path: '/review/:id',
      component: Review
    },
    {
      path: '/review/:id/comments',
      component: Comments
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
