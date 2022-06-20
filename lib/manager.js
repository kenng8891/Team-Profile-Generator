const Employee = require('./employee');
//This class is an extension of Employee aka the Parent class, sub classes (child classes)
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //call the parent constructor add officenumber
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole(){ 
        return "Manager" 
    }
}
module.exports = Manager;