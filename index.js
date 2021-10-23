const fs = require("fs");
const inquirer = require("inquirer");
const {generateHTML, generateManager, generateEngineer, generateIntern} = require("./src/main");
//const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");
const output = path.resolve(__dirname, "dist");
//const outputPath = path.join(output, "generatedTeam.html");



let team = ''

async function Prompt() {
    const { role, name, id,email } = await inquirer.prompt(
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
                let newManager = new Manager(name, id, email, response.officeNumber);
                let managerHTML = generateManager(newManager);
                team = team + managerHTML;

                if (response.addMember === "Yes") {
                    return Prompt()
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
                let newEngineer = new Engineer(name, id, email, response.github);
                let engineerHTML = generateEngineer(newEngineer);
                team = team + engineerHTML;
                if (response.addMember === "Yes") {
                    return Prompt()
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
                let newIntern = new Intern(name, id, email, response.school);
                let internHTML = generateIntern(newIntern);
                team = team + internHTML;
                if (response.addMember === "Yes") {
                    return Prompt()
                }
               
    })
}  

}


function writeToFile(data) {
    let content = generateHTML(data);
    let fileName = './dist/generatedTeam.html';
    fs.writeFile(fileName, content, function (err) {
        if(err){
            console.log(err)
        }else{
            console.log('success')
    }});

}
Prompt()

.then(function(){
writeToFile(team)
})

