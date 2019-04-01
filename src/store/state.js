// 从缓存中获取token
let token = ''
try {
  if (localStorage.token) {
    token = localStorage.token
  }
} catch (e) { }

export default {
  email: '',
  token: token,
  uid: 0,
  searchHistory: [],
  associateRestaurant: null,
  restaurants: [],
  reviews: [],
  foods: [],
  banners: [],
  discover: []
}
