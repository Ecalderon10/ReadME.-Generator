// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license !== "Null") {
    if (license === "MIT") {
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    }
    if (license === "GPLv3") {
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    }
    if (license === "Mozilla Public License 2.0") {
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
    }
    if (license === "Apache 2.0") {
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    }
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "Null") {
    if (license === "MIT") {
      return `![License: ${license}](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    }
    if (license === "GPLv3") {
      return `![License: ${license}](https://www.gnu.org/licenses/gpl-3.0)`;
    }
    if (license === "Mozilla Public License 2.0") {
      return `![License: ${license}](https://opensource.org/licenses/MPL-2.0)`;
    }
    if (license === "Apache 2.0") {
      return `![License: ${license}](https://opensource.org/licenses/Apache-2.0)`;
    }
  }
  return "";
}



function renderLicenseSection (license) {
  if(license !== "None") {
    return `### License 
    This project is licensed with ${license}`;
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseLink(data.license)}

  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[License] 
  -[Test Instructions](#test-instructions)
  -[Contact Information](#conact-information)


### Description

${data.description}


### Installation


${data.installation}


### Usage

${data.usage}


### Contribution

${data.contribution}
${renderLicenseSection(data.lisence)}


### License

${data.license}

### Test Instructions

${data.test}


### Conact Information
[Github Profile] (https://github.com/${data.username})
[Email] ${data.email}

`;
}

module.exports = generateMarkdown;
