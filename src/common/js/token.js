import axios from './http'
import store from 'store/index'
import * as types from 'store/mutation-types'

export default class Token {
  static verify () {
    axios.post('token/secret', {
      token: store.state.token
    })
      .then((data) => {
        console.log(data)
      })
  }

  static get (account, password, type) {
    axios.post('/token/auth', {
      account: account,
      password: password,
      type: type
    })
      .then((data) => {
        console.log(data)
        store.commit(types.SET_TOKEN, data.token)
      })
  }
}
