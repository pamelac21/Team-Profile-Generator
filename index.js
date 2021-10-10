const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./dist/generateHTML");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let engineer = [];
let intern = [];
let manager = [];
let employees = { manager, engineer, intern };

const questions = [
  {
    type: "input",
    name: "name",
    message: "Employee's name?",
  },
  {
    type: "input",
    name: "id",
    message: "Employee's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "Employee's email?",
  },
  {
    type: "list",
    name: "role",
    message: "Employee's role?",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const managerQ = [
    {
        type: "input",
        name: "officeNumber",
        message: "Manager's office number?"
    }
]

const engineerQ = [
    {
        type: "input",
        name: "github",
        message: "Github username?" 
    }
]

const internQ = [
    {
        type: "input",
        name: "school",
        message: "Intern's school?"
    }
]


