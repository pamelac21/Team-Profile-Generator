const fs = require('fs'); 
const inquirer = require('inquirer');
const generateHTML = require("./dist/generateHTML");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
