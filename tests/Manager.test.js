const Manager = require("../lib/Manager.js");

describe("Manager properties", () => {
    it("Manager has office number property", () => {
        const manager = new Manager("Devin", "1", "devnyugen@gmail.com", "201");
        const expectedRoomNumber = "201";

        expect(manager.officeNumber).toBe(expectedRoomNumber);
    });
});

describe("Intern methods", () => {
    it("getRole should return Manager instead of Employee", () => {
        const manager = new Manager("Devin", "1", "devnyugen@gmail.com", "201");
        const expectedRole = "Manager";

        expect(manager.getRole()).toBe(expectedRole);
    });
});