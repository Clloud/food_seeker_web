import axios from 'common/js/http'

export default class restaurant {
  id = 0

  static getRestaurant (id) {
    this.id = id
    return axios.get(`/restaurant/${id}`)
      .then((data) => {
        return Promise.resolve(data)
      })
      .catch((error) => {
        if (error.error_code === 999) {
          return this.getRestaurant(this.id)
        } else {
          return Promise.reject(error)
        }
      })
  }
}
