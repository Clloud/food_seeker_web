import axios from 'common/js/http'

export default class User {
  static register (account, secret, type, nickname) {
    axios.post('/user', {
      account: account,
      secret: secret,
      type: type,
      nickname: nickname
    })
      .then((data) => {
        console.log(data)
      })
  }
}
