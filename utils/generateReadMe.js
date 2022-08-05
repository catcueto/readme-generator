const { title } = require("process");

// TODO: Create function that will render license badge
function licenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";

    case "Apache":
      return "![Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";

    case "GPL":
      return "![GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)";

    case "BSD 3-Clause":
      return "![BSD](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";

    case "None":
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateReadMe(data) {
  return `# ${data.title}
  ${licenseBadge(data.license)}
  
## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install, run \`\`\`${data.install}\`\`\` in the command line. 

## Usage

${data.usage}
  
## Contributing

Special thanks to: ${data.contributors}

## Tests

${data.tests}


## License

This README file is licensed with ${data.license}


## Questions

 You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).

`;
}

module.exports = generateReadMe;
