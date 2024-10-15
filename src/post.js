
const User = require("./user");

class Post {

  #publicationNumber = 0;
  #subscribers = [];

  constructor(name) {
    this.name = name;
    
  }

  get summary() {
    return `${this.name} publication number ${this.#publicationNumber}`;
  }

  getSubscribers() {
    return this.#subscribers.map(subscriber => subscriber.name).join(",");
  }

  attach(user) {
    if (!(user instanceof User) || this.#subscribers.includes(user)) {
      return;
    }

    this.#subscribers.push(user);
  }

  detach(user) {
    this.#subscribers = this.#subscribers.filter(subscriber => subscriber !== user);
  }

  publish() {
    this.#publicationNumber++;
    return this.#subscribers.map(subscriber => subscriber.notify(this));
  }

}

module.exports = Post;
