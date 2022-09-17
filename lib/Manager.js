const Employee = require("./Employee.js");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // gets the Employee's role
    getRole(){
        return "Manager";
    }
}

// export the class
module.exports = Manager;