// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = require("./utils/generateReadMe");
console.log(process.argv);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description for this project: ",
  },
  {
    type: "input",
    name: "install",
    message: "Which are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions/examples for usage?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of licenses should the project have?",
    choices: ["Apache", "GPL", "BSD 3-Clause", "MIT", "None"],
    default: ["CC0"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username? ",
    filter(val) {
      return `https://github.com/${val}`;
    },
  },
  {
    type: "input",
    name: "contributors",
    message: "List Contributors:",
  },
  {
    type: "input",
    name: "tests",
    message: "Input tests:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("YAY! You have now created your high-quality README file :)");
    }
  });
}

// TODO: Create a function to initialize app
const inquirerAnswers = inquirer.prompt(questions);

function init() {
  inquirerAnswers.then((data) => {
    console.log("Generating README file ...");
    writeToFile("README.md", generateReadMe(data));
  });
}

// Function call to initialize app
init();
