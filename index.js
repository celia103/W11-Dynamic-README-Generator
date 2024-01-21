const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
	{
		type: "input",
		name: "name",
		message: "What is your name?",
	},
	{
		type: "input",
		name: "email",
		message: "What is your email?",
	},
	{
		type: "input",
		name: "GitHub",
		message: "What is your GitHub username?",
	},
	{
		type: "input",
		name: "GitHubRepo",
		message: "What is the GitHub repository?",
	},
	{
		type: "input",
		name: "title",
		message: "Enter the title of your project:",
	},
	{
		type: "input",
		name: "description",
		message: "Provide a brief description of your project.",
	},
	{
		type: "input",
		name: "installation",
		message: "What are the steps required to install your project?",
	},
	{
		type: "input",
		name: "usage",
		message: "Provide instructions and examples for use.",
	},
	{
		type: "input",
		name: "usageImage",
		message:
			"Put example screenshot in `assets/images` folder in your repository. Provide the file name ONLY.",
	},
	{
		type: "input",
		name: "credits",
		message: "List your collaborator(s), if any. (Separate with commas)",
		filter: (input) => input.split(",").map((item) => item.trim()),
	},
	{
		type: "input",
		name: "collaboratorGitHub",
		message: "What are their GitHub username?",
		filter: (input) => input.split(",").map((item) => item.trim()),
	},
	{
		type: "input",
		name: "collaboratorEmail",
		message: "What are their emails?",
		filter: (input) => input.split(",").map((item) => item.trim()),
	},
	{
		type: "list",
		name: "license",
		message: "Choose a license for your project.",
		choices: [
			"MIT License",
			"Apache License 2.0",
			"GNU General Public License v3.0",
			'BSD 2-Clause "Simplified" License',
			'BSD 3-Clause "New" or "Revised" License',
			"Boost Software License 1.0",
			"Creative Commons Zero v1.0 Universal",
			"Eclipse Public License 2.0",
			"GNU Affero General Public License",
			"GNU Lesser General Public License",
			"Mozilla Public License 2.0",
			"The Unlicense",
		],
	},
	{
		type: "input",
		name: "features",
		message: "List features, if any.",
	},
	{
		type: "input",
		name: "contribute",
		message: "Provide guideline link for how to contribute it, if any.",
	},
	{
		type: "input",
		name: "contributeText",
		message: "Provide guideline name",
	},
	{
		type: "input",
		name: "test",
		message: "Provide instructions on running tests.",
	},
];

// function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		if (err) {
			console.error(err);
		} else {
			console.log(`Successfully generated!`);
		}
	});
}

// function to initialize program
function init() {
	inquirer.prompt(questions).then((data) => {
		const fileName = `${data.title.toLowerCase().split(" ").join("")}-README.md`;
		const markdownContent = generateMarkdown(data);
		writeToFile(fileName, markdownContent);
	});
}

// function call to initialize program
init();
