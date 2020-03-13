const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Inquirer = require("inquirer");
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


let init =
    async function adminStart() {

        await Inquirer
            .prompt(adminQuestions)

            .then(async function (userData) {
                let managerInfo = {
                    'name': userData.name,
                    'id': JSON.parse(userData.id),
                    'email': userData.email,
                    'role': 'employee',
                    'title': 'manager',
                    'officeNumber': '',
                    'gitname': '',
                    'github': '',
                    'school': ''

                }
                if (position = true) {
                    employeeData.push(managerInfo)
                    newEmployee()
                }
            })
    }
let secondAdmin =
    async function adminNext() {
        await Inquirer
            .prompt(adminChoices)
            .then(async function (answers) {
                if (answers.adminchoice === 'Add an employee to the team?') {
                    employeeInfo.length = 0;
                    input()
                }
                if (answers.adminchoice === 'Create the team HTML page?') {
                    createteam()
                }
            })
    };

let input =
    async function initialize() {
        await Inquirer
            .prompt(questions)

            .then(async function (userData) {
                let userInfo = {
                    'name': userData.name,
                    'id': JSON.parse(userData.id),
                    'email': userData.email,
                    'role': 'employee', // DEFAULT
                    'title': userData.title,
                    'officeNumber': '',
                    'gitname': '',
                    'github': '',
                    'school': ''
                }
                employeeData.push(userInfo)
                newEmployee()
            })
    };

let newEmployee =
    async function employeeprofile() {
        const name = employeeInfo[0].name;
        const id = employeeInfo[0].id;
        const email = employeeInfo[0].email;
        const role = employeeInfo[0].role;

        const employee = new Employee(name, id, email, role)
        classBuilder()
    };



let classBuilder =
    async function bytitle() {

        if (employeeInfo[0].title === "manager") {
            buildManager()
        }
        if (employeeInfo[0].title === "engineer") {
            buildEngineer()
        }
        if (employeeInfo[0].title === "intern") {
            buildIntern()
        }
    };

async function buildManager() {

    await Inquirer
        .prompt(managerQuestion)

        .then(async function (userData) {
            let managerAns = {
                'officeNumber': JSON.parse(userData.officeNumber)
            }
            employeeInfo[0].officeNumber = managerAns.officeNumber;

            const name = employeeInfo[0].name;
            const id = employeeInfo[0].id;
            const email = employeeInfo[0].email;
            const role = employeeInfo[0].role;
            const officeNumber = employeeInfo[0].officeNumber;

            const manager = new Manager(name, id, email, officeNumber)
            managerArr.push(manager);

        })

    secondAdmin()
};

async function buildEngineer() {
    await Inquirer
        .prompt(engineerQuestion)

        .then(async function (userData) {
            let engineerInfo = {
                'gitname': userData.gitname
            }
            employeeInfo[0].gitname = engineerInfo.gitname;
            const name = employeeInfo[0].name;
            const id = employeeInfo[0].id;
            const email = employeeInfo[0].email;
            const role = employeeInfo[0].role;
            const gitname = employeeInfo[0].gitname;
            const github = employeeInfo[0].github;

            const engineer = new Engineer(name, id, email, gitname, github)

            engineerArr.push(engineer)


        })
    next()

};




init();