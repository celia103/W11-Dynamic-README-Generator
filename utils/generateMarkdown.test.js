const generateMarkdown = require("./generateMarkdown");

const data = {
  name: "Chisom Udonsi",
  email: "udonsichisom02@gmail.com",
  GitHub: "TheAce74",
  GitHubRepo: "https://github.com/TheAce74/DynamicREADMEGenerator",
  title: "DynamicREADMEGenerator",
  description: "It generates awesome markdown files",
  installation:
    "Clone the repo and navigate to the DynamicREADMEGenerator directory, then run 'npm install'",
  usage:
    "Run the start script i.e. npm start, and follow the instructions that come up",
  credits: ["Celia Chan"],
  collaboratorGitHub: ["celia103"],
  collaboratorEmail: ["celiayych@gmail.com"],
  test: "Run the test script via npm test",
};

describe("generateMarkdown function", () => {
  describe("it should return the following text", () => {
    it("should return the name", () => {
      expect(generateMarkdown(data)).toContain(data.name);
    });

    it("should return the email", () => {
      expect(generateMarkdown(data)).toContain(data.email);
    });

    it("should return the GitHub username", () => {
      expect(generateMarkdown(data)).toContain(data.GitHub);
    });

    it("should return the GitHub repo", () => {
      expect(generateMarkdown(data)).toContain(data.GitHubRepo);
    });

    it("should return the title", () => {
      expect(generateMarkdown(data)).toContain(data.title);
    });

    it("should return the description", () => {
      expect(generateMarkdown(data)).toContain(data.description);
    });

    it("should return the installation", () => {
      expect(generateMarkdown(data)).toContain(data.installation);
    });

    it("should return the usage", () => {
      expect(generateMarkdown(data)).toContain(data.usage);
    });

    it("should return the credits", () => {
      expect(generateMarkdown(data)).toContain(data.credits[0]);
    });

    it("should return the collaboratorGitHub", () => {
      expect(generateMarkdown(data)).toContain(data.collaboratorGitHub[0]);
    });

    it("should return the collaboratorEmail", () => {
      expect(generateMarkdown(data)).toContain(data.collaboratorEmail[0]);
    });

    it("should return the test", () => {
      expect(generateMarkdown(data)).toContain(data.test);
    });
  });
});
