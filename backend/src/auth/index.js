var token = require('basic-auth-token');

export default class Authentication {
  constructor() {
    this.session = {}
  }

  SetToken(n, id) {
    let str = token(n, id);
    this.session[str.toString()] = id;
    console.log(this.session)
    return str;
  }
}