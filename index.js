const inquirer = require("inquirer");
const fs = require('fs');
const cardTemplates = require('./src/card-template.js');

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

let mainBody = ``;

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

const managerQuestion = [{
    type: "input",
    message: "What is this person's office number?",
    name: "managerOfficeNumber",
}]

const engineerQuestion = [{
    type: "input",
    message: "What is this person's Github username?",
    name: "engineerGithub",
}]

const internQuestion = [{
    type: "input",
    message: "What school does this person go to?",
    name: "internSchool",
}]

// initialize terminal by asking questions about project manager
function initialize(){
    const managerQuestions = questionsArray.concat(managerQuestion);
    
    inquirer
    .prompt(managerQuestions)
    .then((response) => {
        console.log(response);
        const projectManager = new Manager(response.employeeName, response.employeeId, response.employeeEmail, response.managerOfficeNumber);
        const generatedCard = cardTemplates.generateManagerCard(projectManager);
        mainBody += generatedCard;

        askForAdditionalMember();
    })
}

// function that asks user if they want to add another person in the group
// if yes, ask for engineer or intern
// if no, create HTML file
function askForAdditionalMember(){
    inquirer
    .prompt({
        type: "list",
        message: "Would you to like to add another member to this group?",
        name: "isAdding",
        choices: ["Yes", "No"],
    })
    .then((response) => {
        if (response.isAdding === "Yes"){
            askEngineerOrIntern();
        } else{
            writeHTMLFile();
        }
    });
}


function askEngineerOrIntern(){
    inquirer
    .prompt({
        type: "list",
        message: "Are they an engineer or an intern?",
        name: "engOrInt",
        choices: ["Engineer", "Intern"],
    })
    .then((response) => {
        if (response.engOrInt === "Engineer"){
            createEngineerCard();
        } else{
            createInternCard();
        }
    });
}


function createEngineerCard(){
    const engineerQuestions = questionsArray.concat(engineerQuestion);
    
    inquirer
    .prompt(engineerQuestions)
    .then((response) => {
        console.log(response);
        const projectEngineer = new Engineer(response.employeeName, response.employeeId, response.employeeEmail, response.engineerGithub);
        const generatedCard = cardTemplates.generateEngineerCard(projectEngineer);
        mainBody += generatedCard;

        askForAdditionalMember();
    })
}


function createInternCard(){
    const internQuestions = questionsArray.concat(internQuestion);
    
    inquirer
    .prompt(internQuestions)
    .then((response) => {
        console.log(response);
        const projectIntern = new Intern(response.employeeName, response.employeeId, response.employeeEmail, response.internSchool);
        const generatedCard = cardTemplates.generateInternCard(projectIntern);
        mainBody += generatedCard;

        askForAdditionalMember();
    })
}


function writeHTMLFile(){
    const htmlFile =   `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Project Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header class="bg-info m-2 p-4">
            <h1 class="text-white text-center">My Team</h1>
        </header>

        <main class="row mx-5 p-5 justify-content-around">
            ${mainBody}
        </main>

        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    </body>
</html>
`
    fs.writeFile('./dist/index.html', htmlFile, (err) =>
    err ? console.error(err) : console.log("Successfully created HTML file!"));

    createCssFile();
}


function createCssFile(){
    const cssData = `
.card{
    max-width: 300px;
    box-shadow: 0.5em 0.5em 0.9em gray;
}    
`
    fs.writeFile('./dist/style.css', cssData, (err) =>
    err ? console.error(err) : console.log("Successfully created CSS file!"));
}


initialize();