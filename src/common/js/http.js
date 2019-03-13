import axios from 'axios'
import router from 'router/index'
import * as types from 'store/mutation-types'
import store from 'store/index'
import state from 'store/state'

axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'http://localhost:5000/v1'
axios.defaults.baseURL = 'http://api.foodadvisor.top/v1'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  if (state.token) {
    config.auth = {
      username: state.token,
      password: ''
    }
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  if (error.response && error.response.status === 401) {
    // clear token
    store.commit(types.SET_TOKEN, '')
    // redirect to login page
    router.currentRoute.path !== '/login' &&
      router.replace({
        path: '/login',
        query: { redirect: router.currentRoute.path }
      })
  }
  return Promise.reject(error.response.data)
})

export default axios
