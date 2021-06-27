const Employee = require('../lib/Employee');

class Intern extends Employee {
  constructor(school) {
    super();
      this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.name + ' ' + this.email + ' ' + this.id + ' ' + this.school;
  }
}
module.exports = Intern;
