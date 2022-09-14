const Intern = require("../lib/Intern.js");

describe("Intern properties", () => {
    it("Intern has school property", () => {
        const intern = new Intern("Sarah", "4", "sjmichael99@gmail.com", "UCLA");
        const expectedSchool = "UCLA";

        expect(intern.school).toBe(expectedSchool);
    });
});

describe("Intern methods", () => {
    it("getSchool should return school property", () => {
        const intern = new Intern("Sarah", "4", "sjmichael99@gmail.com", "UCLA");
        const expectedSchool = "UCLA";

        expect(intern.getSchool()).toBe(expectedSchool);
    });

    it("getRole should return Intern instead of Employee", () => {
        const intern = new Intern("Sarah", "4", "sjmichael99@gmail.com", "UCLA");
        const expectedRole = "Intern";

        expect(intern.getRole()).toBe(expectedRole);
    });
});