const Employee = require('../lib/Employee');

class Engineer extends Employee {
  constructor(github) {
    super();
      this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return this.name + ' ' + this.email + ' ' + this.id + ' ' + this.github;
  }
}
module.exports = Engineer;


