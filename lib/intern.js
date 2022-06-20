const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        //call parent constructor and add school
        super(name, id, email);

        this.school = school;
    }
    getSchool(){
        return this.school;
    }

    getRole(){ 
        return "Intern" 
    }
}
module.exports = Intern;