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
  [types.SET_SEARCH_HISTORY] (state, history) {
    state.searchHistory = history
  },
  [types.SET_ASSOSIATE_RESTAURANT] (state, restaurant) {
    state.assosiateRestaurant = restaurant
  }
}

export default mutations
