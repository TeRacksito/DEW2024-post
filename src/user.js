class User {
  constructor(name) {
    this.name = name;
  }

  read(content) {
    return `${this.name} is reading ${content}`;
  }

  notify(post) {
    return this.read(post.summary);
  }
}

module.exports = User;
