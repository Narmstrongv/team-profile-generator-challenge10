var inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./src/html-template');

const profileDataArgs = process.argv.slice(2);
console.log(profileDataArgs);

const [name, github] = profileDataArgs;
console.log(name, github);

const pageHTML = generatePage(name, github);

fs.writeFile('./dist/index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Index.html created!');
});



//Big Picture
//inquirer
//4 classes - Employee, Manager, Engineer, Intern
//jest - test

// inquirer
// .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });


//CHECK PAST CHALLENGE NOTES


//what does below do?
//var Person = new Employee( 'John', 'cat', 'jamie@jamie.com')
// console.log(Person.getName());
// console.log(Person.getId());
// console.log(Person.getEmail());
//console.log(Person.getRole());
