const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");
const { assertEnumDefaultedMember } = require("@babel/types");
const output = path.resolve(__dirname, "lib");
const outputPath = path.join(output, "generatedTeam.html");

let engineer = [];
let intern = [];
let manager = [];
let employees = { manager, engineer, intern };
let team = []

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
                },
                {
                    type: "list",
                    name: "addMember",
                    message: "Add another team member?",
                    choices: ["Yes", "No"]
                } 
            ])
            .then((response) => {
                manager.push(new Manager(response.name, response.id, response.email, response.officeNumber))
                if (response.addMember === "Yes") {
                    return Prompt()
                } else {
                    generateHTML()
                }
            })

    } else if (role === "Engineer") {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "github",
                    message: "Github username?"
                },
                {
                    type: "list",
                    name: "addMember",
                    message: "Add another team member?",
                    choices: ["Yes", "No"]
                } 
            ])
            .then((response) => {
                engineer.push(new Engineer(response.name, response.id, response.email, response.github))
                if (response.addMember === "Yes") {
                    return Prompt()
                } else {
                    generateHTML()
                }
                })
            

    } else if (role === 'Intern') {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "school",
                    message: "Intern's school?"
                },
                {
                    type: "list",
                    name: "addMember",
                    message: "Add another team member?",
                    choices: ["Yes", "No"]
                }    
            ])
            .then((response) => {
                intern.push(new Intern(response.name, response.id, response.email, response.school))
                if (response.addMember === "Yes") {
                    return Prompt()
                } else {
                    generateHTML()
                }
               
    })
}  

}
Prompt()

function generateHtml() {
    var page = render(employees);

    if (!fs.existsSync(output)) {
        fs.mkdirSync(output);
    }
    //create the file html
    fs.writeFile(outputPath, page, function (err) {
        if (err) throw err;
    });
}



