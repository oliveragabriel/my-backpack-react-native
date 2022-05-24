var token = require('basic-auth-token');

export default class Authentication {
  constructor() {
    this.session = {}
  }

  SetToken(n, id) {
    let str = token(n, id)
    this.session[str] = id;
    console.log(this.session)
  }
}