const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(officeNumber) {
      super();

      this.officeNumber = officeNumber;
    }
  }
  
  //is extend necessary or prototype?
  
  Manager.prototype.getRole = function () {
    return this.officeNumber
  }

module.exports = Manager;