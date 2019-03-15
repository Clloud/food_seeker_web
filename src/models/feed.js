import axios from 'common/js/http'

export default class Feed {
  perPage = 30

  static feedRestaurants (perPage = 30) {
    this.perPage = perPage
    return axios.get(`/feed/restaurants?per_page=${perPage}`)
      .then((data) => {
        return Promise.resolve(data)
      })
      .catch((error) => {
        if (error.error_code === 999) {
          return this.feedRestaurants(this.perPage)
        } else {
          return Promise.reject(error)
        }
      })
  }

  static feedFoods (perPage = 30) {
    this.perPage = perPage
    return axios.get(`/feed/foods?per_page=${perPage}`)
      .then((data) => {
        return Promise.resolve(data)
      })
      .catch((error) => {
        if (error.error_code === 999) {
          return this.feedFoods(this.perPage)
        } else {
          return Promise.reject(error)
        }
      })
  }

  static feedReviews (perPage = 30) {
    this.perPage = perPage
    return axios.get(`/feed/reviews?per_page=${perPage}`)
      .then((data) => {
        return Promise.resolve(data)
      })
      .catch((error) => {
        if (error.error_code === 999) {
          return this.feedReviews(this.perPage)
        } else {
          return Promise.reject(error)
        }
      })
  }

  static feedBanners () {
    return axios.get(`/feed/banners?count=3`)
      .then((data) => {
        return Promise.resolve(data)
      })
      .catch((error) => {
        if (error.error_code === 999) {
          return this.feedBanners()
        } else {
          return Promise.reject(error)
        }
      })
  }
}
