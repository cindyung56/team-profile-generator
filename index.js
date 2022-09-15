const inquirer = require("inquirer");
const fs = require('fs');

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const questionsArray = [
    {
        type: "input",
        message: "What is this person's name?",
        name: "employeeName",
    },
    {
        type: "input",
        message: "What is this person's ID?",
        name: "employeeId",
    },
    {
        type: "input",
        message: "What is this person's email address?",
        name: "employeeEmail"
    },
]

const managerQuestion = {
    type: "input",
    message: "What is this person's office number?",
    name: "managerOfficeNumber",
}

const engineerQuestion = {
    type: "input",
    message: "What is this person's Github username?",
    name: "engineerGithub",
}

const internQuestion = {
    type: "input",
    message: "What school does this person go to?",
    name: "internSchool",
}

