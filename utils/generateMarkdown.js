// function to generate markdown for README
function generateMarkdown(data) {
	const sectionNames = Object.keys(data).filter(
		(key) =>
			key !== "title" &&
			key !== "description" &&
			key !== "name" &&
			key !== "email" &&
			key !== "GitHub" &&
			key !== "usageImage" &&
			key !== "collaboratorGitHub" &&
			key !== "collaboratorEmail" &&
			key !== "contributeText"
	);

	const titleMap = {
		installation: "Installation",
		usage: "Usage",
		credits: "Credits",
		license: "License",
		features: "Features",
		contribute: "How to Contribute",
		test: "Tests",
	};

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
		(data.credits.length === 0) || (data.credits[0] === "N/A")
			? ""
			: data.credits
					.map(
						(credit, index) =>
							`- [${data.credits[index]} GitHub](https://github.com/${(
								data.collaboratorGitHub[index] || ""
							)
								.toString()
								.toLowerCase()
								.split(" ")
								.join("-")})`
					)
					.join("\n");

	const contactList =
    (data.credits.length === 0) || (data.credits[0] === "N/A")
			? ""
			: data.collaboratorEmail
					.map(
						(email, index) =>
							`- [${data.credits[index]} Email](${email
								.toLowerCase()
								.split(" ")
								.join("-")})`
					)
					.join("\n");

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
![${data.usageImage}](assets/images/${data.usageImage})

## Credits
${
	data.credits === "N/A"
		? ""
		: `- [${data.name} GitHub](https://github.com/${data.GitHub})`
}
${data.credits === "N/A" ? "" : creditList}

## License
${data.license}

## Features
${data.features}

## How to Contribute
[${data.contributeText}](${data.contribute})

## Tests
${data.test}

## Questions
If you have any questions or need further clarification, feel free to open an issue or contact the maintainers directly:
- [${data.name} Email](${data.email})
${data.credits.length === 0 || data.credits[0] === "N/A" ? "" : contactList}


`;
}

module.exports = generateMarkdown;
