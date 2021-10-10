const fs = require("fs");
const inquirer = require("inquirer");
//const generateHTML = require("./src/generateHTML");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


let engineer = [];
let intern = [];
let manager = [];
let employees = { manager, engineer, intern };

async function Prompt() {
    const { role } = await inquirer.prompt(
        [
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
        ]);
    if (role === "Manager") {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "officeNumber",
                    message: "Manager's office number?"
                }
            ])
            .then(({officeNumber, anotherEntry}) => {
                manager.push(new Manager(employee, id, email, officeNumber))
                 console.log(employees)
                if (anotherEntry) {
                    return Prompt();
                }
            })

    } else if (role === "Engineer") {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "github",
                    message: "Github username?"
                }
            ]);

    } else if (role === 'Intern') {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "school",
                    message: "Intern's school?"
                }
            ]);
    }
}
Prompt()

.then(data => {
    return generateHTML(employees)
})
.then(pageHTML => {
    return writeFile(pageHTML)
})


