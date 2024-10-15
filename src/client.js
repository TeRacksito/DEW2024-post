const User = require("./user");

class Client extends User {
  constructor(name) {
    super(name);
    this.billing = 0;
  }

  notify(paidPost) {
    if (paidPost.price !== undefined) {
      this.billing = Number((this.billing + paidPost.price).toFixed(2));
    }
    
    return `${this.name} is reading ${paidPost.summary}`;
  }
}

module.exports = Client;
