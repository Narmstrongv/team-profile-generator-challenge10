var inquirer = require('inquirer');




// TODO
// use a command line app that accepts user input for team (similar to Challenge 9?)
// 


//Big Picture
//inquirer
//4 classes - Employee, Manager, Engineer, Intern
//jest - test

//Class Example
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

inquirer
.prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


//CHECK PAST CHALLENGE NOTES



var Person = new Employee( 'Newton', 'cat', 'jamie@jamie.com')
// console.log(Person.getName());
// console.log(Person.getId());
// console.log(Person.getEmail());
console.log(Person.getRole());
