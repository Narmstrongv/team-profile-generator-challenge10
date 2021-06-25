class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // getName() {
    //     return this.name;
    // }

    // getId() {
    // }

    // getEmail() {
    //     return this.email;
    // }

    getRole() {
      //returns 'Employee' class
      return this.name + ' ' + this.email + ' ' + this.id
     

    }
}

module.exports = Employee;