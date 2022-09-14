const Engineer = require("../lib/Engineer.js");

describe("Engineer properties", () => {
    it("Engineer has github username property", () => {
        const engineer = new Engineer("Ethan", "3", "echang431@hotmail.com", "echang431");
        const expectedGithub = "echang431";

        expect(engineer.github).toBe(expectedGithub);
    });
});

describe("Engineer methods", () => {
    it("getGithub should return github property", () => {
        const engineer = new Engineer("Ethan", "3", "echang431@hotmail.com", "echang431");
        const expectedGithub = "echang431";

        expect(engineer.getGithub()).toBe(expectedGithub);
    });

    it("getRole should return Engineer instead of Employee", () => {
        const engineer = new Engineer("Ethan", "3", "echang431@hotmail.com", "echang431");
        const expectedRole = "Engineer";

        expect(engineer.getRole()).toBe(expectedRole);
    });
});