const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);

      this.officeNumber = officeNumber;
    }

    getRole() {
      return "Manager";
    }

    //return engineer & intern
    //in other corresponding file

    getOfficeNumber() {
      return this.officeNumber;
    }

  }

module.exports = Manager;