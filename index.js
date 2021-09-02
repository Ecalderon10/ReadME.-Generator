// TODO: Include packages needed for this application
// Packages below: Inquirer, fs
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("../utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter your github usernamme...",
    name: "username",
  },
  {
    type: "input",
    message: "Please enter your email address..",
    name: "userEmail",
  },

  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a breif decription for your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "Are there any installastion instructions for your project? If yes, please type them here.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please type any usage instructions for your project.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Do you have any contribution guidelines? If yes, please type them here.",
    name: "contribution",
  },
  {
    type: "input",
    message:
      "Do you have test instructions for your project? If yes, please type them here",
    name: "test",
  },
  {
    type: "input",
    message:
      "Please provide instructions on how best to reach you if other developers have questions regaurding your project.",
    name: "questions",
  },
  {
    type: "list",
    message: "What type of license does your project use?",
    choices: ["MIT", "GPLv3", "Mozilla Public License 2.0", "Apache 2.0"],
    name: "license",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return generateMarkdown(data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdownData = generateMarkdown(data);
    fs.writeFile("ReadME.md", markdownData, (err) => {
      err ? console.log(err) : console.log("File was written!!"
      );
    });
  });
}

// Function call to initialize app
init();
