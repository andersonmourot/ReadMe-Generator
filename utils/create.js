function createLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return '';
};

function createSection(license) {
  if (license !== "None") {
    return `## License
    
This project is licensed under the ${license} license.`;
  }
  return '';
};

function createBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
};


function create(data) {
    return `# ${data.title}
${createBadge(data.license)}

## Description
${data.description}

## Table of Contents

*[Installation](#installation)

*[Usage](#usage)
${createLink(data.license)}

*[Contributing](#contributing)

*[Tests](#tests)

*[Questions](#questions)

## Installation

Run the following commands to install the necessary dependencies:
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}
${createSection(data.license)}

## Contributing
${data.contributing}

## Tests
Use the following command to run tests:
\`\`\`
${data.test}
\`\`\`

## Questions
If you have any questions you can contact me at ${data.email}.
You can find my other work at [${data.github}](https://github.com/${data.github}/).`;
};

module.exports = create;