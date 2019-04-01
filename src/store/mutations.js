import * as types from './mutation-types'

const mutations = {
  [types.SET_EMAIL] (state, email) {
    state.email = email
  },
  [types.SET_TOKEN] (state, token) {
    state.token = token
    try {
      localStorage.token = token
    } catch (e) { }
  },
  [types.SET_UID] (state, uid) {
    state.uid = uid
  },
  [types.SET_SEARCH_HISTORY] (state, history) {
    state.searchHistory = history
  },
  [types.SET_ASSOCIATE_RESTAURANT] (state, restaurant) {
    state.associateRestaurant = restaurant
  },
  [types.SET_RESTAURANTS] (state, restaurants) {
    state.restaurants = restaurants
  },
  [types.SET_REVIEWS] (state, reviews) {
    state.reviews = reviews
  },
  [types.SET_FOODS] (state, foods) {
    state.foods = foods
  },
  [types.SET_BANNERS] (state, banners) {
    state.banners = banners
  },
  [types.SET_DISCOVER] (state, discover) {
    state.discover = discover
  }
}

export default mutations
