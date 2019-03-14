import axios from 'common/js/http'

export default class Search {
  keyword = ''
  perPage = 30

  static searchUsers (keyword) {
    this.keyword = keyword
    return axios.get('/search/users?q=email:' + this.keyword)
      .then((data) => {
        return Promise.resolve(data)
      })
      .catch((error) => {
        if (error.error_code === 999) {
          return this.searchUsers(this.keyword)
        } else {
          return Promise.reject(error)
        }
      })
  }

  static searchRestaurants (keyword, perPage = 30) {
    this.keyword = keyword
    this.perPage = perPage
    return axios.get(`/search/restaurants?q=${keyword}&per_page=${perPage}`)
      .then((data) => {
        return Promise.resolve(data)
      })
      .catch((error) => {
        if (error.error_code === 999) {
          return this.searchRestaurants(this.keyword, this.perPage)
        } else {
          return Promise.reject(error)
        }
      })
  }

  static searchFoods (keyword, perPage = 30) {
    this.keyword = keyword
    this.perPage = perPage
    return axios.get(`/search/foods?q=${keyword}&per_page=${perPage}`)
      .then((data) => {
        return Promise.resolve(data)
      })
      .catch((error) => {
        if (error.error_code === 999) {
          return this.searchFoods(this.keyword, this.perPage)
        } else {
          return Promise.reject(error)
        }
      })
  }

  static searchReviews (keyword, perPage = 30) {
    this.keyword = keyword
    this.perPage = perPage
    return axios.get(`/search/reviews?q=${keyword}&per_page=${perPage}`)
      .then((data) => {
        return Promise.resolve(data)
      })
      .catch((error) => {
        if (error.error_code === 999) {
          return this.searchReviews(this.keyword, this.perPage)
        } else {
          return Promise.reject(error)
        }
      })
  }
}
