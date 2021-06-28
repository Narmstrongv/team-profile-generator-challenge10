var inquirer = require('inquirer');
const fs = require('fs');
const htmlGenerator = require('./src/html-template')

const Manager = require("./lib/Manager");

const teamArray = []
//this holds team as you create them

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





inquirer
.prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      validate: (userInput) => {
        if (userInput !== "") {
          return true
        } else {
          return "Please enter your name."
        }
      }
    },

    {
    type: "input",
    name: "id",
    message: "What is your ID?",
    },

    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },

    {
      type: "input",
      name: "officeNumber",
      message: "What is your officeNumber?",
    },

    // {
    //   type: "list",
    //   name: "jobLiking",
    //   message: "Do you like your job?",
    //   choices: ["Yes", "No", "Not sure"],
    //   default: "Not sure"
     
    // }

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    //console.log(answers.name);
    var manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    console.log(manager);
    teamArray.push(manager);
    console.log("teamArray", teamArray);
    //doing this will help you understand/remember what the console logs do

    
  }).then(() => {
    var templateAns = htmlGenerator(teamArray);
    console.log(templateAns);
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


//Big Picture
//inquirer
//4 classes - Employee, Manager, Engineer, Intern
//jest - test

//what does below do?
//var Person = new Employee( 'John', 'cat', 'jamie@jamie.com')
// console.log(Person.getName());
// console.log(Person.getId());
// console.log(Person.getEmail());
//console.log(Person.getRole());
