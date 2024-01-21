// function to generate markdown for README
function generateMarkdown(data) {
	// define section names and titles
	const sectionNames = [
		"installation",
		"usage",
		"credits",
		"license",
		"badge",
		"features",
		"contribute",
		"test",
	];

	const titleMap = {
		installation: "Installation",
		usage: "Usage",
		credits: "Credits",
		license: "License",
		badge: "Badges",
		features: "Features",
		contribute: "How to Contribute",
		test: "Tests",
	};

	// function to generate badge based on license
	function generateBadge(license) {
		let badgeURL = "";

		switch (license) {
			case "MIT License":
				badgeURL =
					"![MIT License](https://img.shields.io/badge/License-MIT-FFC107.svg)";
				break;
			case "Apache License 2.0":
				badgeURL =
					"![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-4CAF50.svg)";
				break;
			case "GNU General Public License v3.0":
				badgeURL =
					"![GNU GPL v3.0](https://img.shields.io/badge/License-GPLv3-2196F3.svg)";
				break;
			case 'BSD 2-Clause "Simplified" License':
				badgeURL =
					'![BSD 2-Clause "Simplified" License](https://img.shields.io/badge/License-BSD%202--Clause-FF5252.svg)';
				break;
			case 'BSD 3-Clause "New" or "Revised" License':
				badgeURL =
					'![BSD 3-Clause "New" or "Revised" License](https://img.shields.io/badge/License-BSD%203--Clause-9C27B0.svg)';
				break;
			case "Boost Software License 1.0":
				badgeURL =
					"![Boost Software License 1.0](https://img.shields.io/badge/License-Boost%201.0-FF9800.svg)";
				break;
			case "Creative Commons Zero v1.0 Universal":
				badgeURL =
					"![CC0](https://img.shields.io/badge/License-CC0%201.0-00BCD4.svg)";
				break;
			case "Eclipse Public License 2.0":
				badgeURL =
					"![EPL 2.0](https://img.shields.io/badge/License-EPL%202.0-FF5722.svg)";
				break;
			case "GNU Affero General Public License":
				badgeURL =
					"![GNU AGPL](https://img.shields.io/badge/License-AGPLv3-009688.svg)";
				break;
			case "GNU Lesser General Public License":
				badgeURL =
					"![GNU LGPL](https://img.shields.io/badge/License-LGPL%20v3-E91E63.svg)";
				break;
			case "Mozilla Public License 2.0":
				badgeURL =
					"![MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-3F51B5.svg)";
				break;
			case "The Unlicense":
				badgeURL =
					"![The Unlicense](https://img.shields.io/badge/License-Unlicense-CDDC39.svg)";
				break;

			default:
				badgeURL = "";
				break;
		}

		return badgeURL ? `${badgeURL}` : "";
	}

	// generate badges for the provided data
	const badge = generateBadge(data.license);
	const topLangBadge = `![Top Language](https://img.shields.io/github/languages/top/${data.GitHub}/${data.GitHubRepo})`;
	const langCountBadge = `![Language Count](https://img.shields.io/github/languages/count/${data.GitHub}/${data.GitHubRepo})`;

	data.badge = badge;

	// generate table of contents	
	const tableOfContents = sectionNames
		.map((section) => {
			// Check if the section has a non-N/A answer
			if (data[section] && data[section] !== "N/A") {
				return `- [${titleMap[section]}](#${titleMap[section]
					.toLowerCase()
					.split(" ")
					.join("-")})`;
			}
			return ""; // Return an empty string if N/A or no answer
		})
		.filter((section) => section !== "") // Filter out empty strings
		.join("\n");

	const creditList =
		data.credits.length === 0 || data.credits[0] === "N/A"
			? ""
			: data.credits
					.map(
						(credit, index) =>
							`- ${data.credits[index]} - [GitHub Profile](https://github.com/${
								data.collaboratorGitHub[index]
									? data.collaboratorGitHub[index].toLowerCase().split(" ").join("-")
									: ""
							})`
					)
					.join("\n");

	const contactList =
		data.credits.length === 0 || data.credits[0] === "N/A"
			? ""
			: data.credits
					.map(
						(credit, index) =>
							`- ${data.credits[index]} - [GitHub Profile](https://github.com/${
								data.collaboratorGitHub[index]
							}) - [Email](${data.collaboratorEmail[index]
								.toLowerCase()
								.split(" ")
								.join("-")})`
					)
					.join("\n");

	const usageImageSec =
		data.usageImage && data.usageImage !== "N/A"
			? `![${data.usageImage}](assets/images/${data.usageImage})`
			: "";

	// generate the final markdown content							
	return `
# ${data.title}

${data.description && "## Description"}
${data.description}

## Table of Contents
${tableOfContents}
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}
${usageImageSec}

## Credits
${
	data.credits === "N/A"
		? ""
		: `- ${data.name} - [GitHub Profile](https://github.com/${data.GitHub})`
}
${data.credits === "N/A" ? "" : creditList}

## License
${data.license}

## Badges
${badge} ${topLangBadge} ${langCountBadge}

## Features
${data.features}

## How to Contribute
[${data.contributeText}](${data.contribute})

## Tests
${data.test}

## Questions
If you have any questions or need further clarification, feel free to open an issue or contact the maintainers directly:
- ${data.name} -[GitHub Profile](https://github.com/${data.GitHub}) -[Email](${
		data.email
	})
${data.credits.length === 0 || data.credits[0] === "N/A" ? "" : contactList}

`;
}

module.exports = generateMarkdown;
