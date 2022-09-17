const Employee = require("./Employee.js");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    
    // gets the Engineer's role
    getRole(){
        return "Engineer";
    }

    // gets the Engineer's github username
    getGithub(){
        return this.github;
    }
}

// export the class
module.exports = Engineer;