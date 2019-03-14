import axios from 'common/js/http'

export default class Food {
  id = 0

  static getFoods (id, count = 30) {
    this.id = id
    return axios.get(`/restaurant/${id}/foods?per_page=${count}`)
      .then((data) => {
        return Promise.resolve(data)
      })
      .catch((error) => {
        if (error.error_code === 999) {
          return this.getFoods(this.id)
        } else {
          return Promise.reject(error)
        }
      })
  }
}
