class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // gets the Employee's name
    getName(){
        return this.name;
    }

    // gets the Employee's ID
    getId(){
        return this.id;
    }

    // gets the Employee's email
    getEmail(){
        return this.email;
    }

    // gets the Employee's role
    getRole(){
        return "Employee";
    }
}

// export the class
module.exports = Employee;