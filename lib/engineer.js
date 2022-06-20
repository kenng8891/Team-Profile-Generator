//call employee.js
const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        //add github to existing engineer profile
        super(name, id, email);

        this.github = github;
    }
    getGithub(){
        return this.github;
    }

    getRole(){ 
        return "Engineer" 
    }
}

module.exports = Engineer;