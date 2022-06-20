const inquirer = require("inquirer");
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const path = require("path");
const fs = require("fs");

const dist_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(dist_DIR, "team.html");

const render = require("./src/htmlrender");

//employee objects array
const employees = [];

//employees role
employeeType = () => {
    console.log("What is the employee's role?");
    return inquirer.prompt([
        {
            type: "list",
            message: "What is the Employee's role?",
            name: "role",
            choices: [
                'Engineer',
                'Intern'
            ],
        }
    ]).then(choice => {
        if (choice.role === 'Engineer') {
            addEngineer();
        } else {
            addIntern();
        }
    })
};

//engineer questions
addEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter engineer's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter engineer's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter engineer's github user name:",
            name: "github"
        }
    ]).then((engineerResults) => {
        engineerResults.role = "Engineer";
        const { name, id, email, github} = engineerResults;
        const newEngineer = new Engineer(name, id, email, github);
        employees.push(newEngineer);
        //ask if user wants to add another team member
        addEmployee();
    });
};

//intern questions
addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter intern's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter intern's school:",
            name: "school"
        }
    ]).then((internResults) => {
        internResults.role = "Intern";
        const { name, id, email, school} = internResults;
        const newIntern = new Intern(name, id, email, school);
        employees.push(newIntern);
        //ask if user wants to add another team member
        addEmployee();
    });
};

//add another employee yes or no prompt
addEmployee = () => {
    return inquirer.prompt([
        
        {
            type: "list",
            message: "Add another team member?",
            name: "add",
            choices: [
                "Yes",
                "No"
            ],
        }
    ]).then(choice => {
        if (choice.add === "Yes") {
            employeeType();
        } else {
            renderHtml();
        };
    });
};

// Manager questions

const init = () => {
   if(!fs.existsSync(dist_DIR))
   fs.mkdirSync(dist_DIR); //conditional check
    console.log("To Generate a Team, please answer the following prompts.");
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter manager's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "please enter manager's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "please enter manager's office number:",
            name: "officeNumber"
        },
    ]).then((managerResults) => {
        managerResults.role = "Manager";
        const { name, id, email, officeNumber} = managerResults;
        const newManager = new Manager(name, id, email, officeNumber);
        employees.push(newManager)
        employeeType();
    })
};

renderHtml = () => {
    const buildHTML = render(employees);
    fs.writeFile(outputPath, buildHTML, (err) => {
        if (err) {
            return console.log(err);
        } else {
            return console.log("Team HTML file created in dist folder!")
        };
    })
};

//initialize program and begin asking user questions
init();