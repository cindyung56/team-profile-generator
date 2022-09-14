const Employee = require("../lib/Employee");

describe("Employee properties", () => {
    it("Should store name property", () => {
        const employee = new Employee("John", "1", "johnmon@gmail.com");
        const expectedName = "John";

        expect(employee.name).toBe(expectedName);
    });

    it("Should store id property", () => {
        const employee = new Employee("John", "1", "johnmon@gmail.com");
        const expectedId = "1";

        expect(employee.id).toBe(expectedId);
    });

    it("Should store email property", () => {
        const employee = new Employee("John", "1", "johnmon@gmail.com");
        const expectedEmail = "johnmon@gmail.com";

        expect(employee.email).toBe(expectedEmail);
    });
});

describe("Employee methods", () => {
    it("getName should return employee name", () => {
        const employee = new Employee("John", "1", "johnmon@gmail.com");
        const expectedName = "John";

        expect(employee.getName()).toBe(expectedName);
    });

    it("getId should return employee id", () => {
        const employee = new Employee("John", "1", "johnmon@gmail.com");
        const expectedId = "1";

        expect(employee.getId()).toBe(expectedId);
    });

    it("getEmail should return employee email", () => {
        const employee = new Employee("John", "1", "johnmon@gmail.com");
        const expectedEmail = "johnmon@gmail.com";

        expect(employee.getEmail()).toBe(expectedEmail);
    });

    it("getRole should return Employee", () => {
        const employee = new Employee("Mika", "2", "miiiika@yahoo.com");
        const employeeRole = "Employee";

        expect(employee.getRole()).toBe(employeeRole);
    });
});