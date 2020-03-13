const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const util = require("util");

// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

let managerArray = [];
let engineerArray = [];
let internArray = [];
let employeeData = [];




const adminOptions = [
    {
        type: "list",
        message: "Would you like to:",
        name: "adminOptions",
        choices: [
            'Add an employee to the team?',
            'Create the team HTML page?'
        ]
    }
]

const adminQuestions = [
    {
        type: "input",
        message: "Hello manager, what is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "confirm",
        message: "Are you a manager?",
        name: "position",
        choices: [
            'Yes',
            'No'
        ]
    }
];

const questions = [
    {
        type: "input",
        message: "What is the employee's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employee's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's email?",
        name: "email"
    },
    {
        type: "list",
        message: "What is the employee's title?",
        name: "title",
        choices: [
            'engineer',
            'intern'
        ]
    }
];

const managerQuestion = [
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }

];

const engineerQuestion = [
    {
        type: "input",
        message: "What is the employee's GithUb username?",
        name: "gitusername"
    }

];

const internQuestion = [
    {
        type: "input",
        message: "What school did the employee go to?",
        name: "school"
    }

];


