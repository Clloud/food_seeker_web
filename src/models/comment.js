import axios from 'common/js/http'

export default class Comment {
  id = 0
  perPage = 30

  static getComments (id, perPage = 30) {
    this.id = id
    this.perPage = perPage
    return axios.get(`/restaurant/${id}/foods?per_page=${perPage}`)
      .then((data) => {
        return Promise.resolve(data)
      })
      .catch((error) => {
        if (error.error_code === 999) {
          return this.getFoods(this.id, this.perPage)
        } else {
          return Promise.reject(error)
        }
      })
  }

  static addComment (comment) {
    this.comment = comment
    return axios.post('/comment', comment)
      .then((data) => {
        return Promise.resolve(data)
      })
      .catch((error) => {
        if (error.error_code === 999) {
          return this.addComment(this.comment)
        } else {
          return Promise.reject(error)
        }
      })
  }
}
