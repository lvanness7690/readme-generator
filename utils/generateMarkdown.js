
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  let badge = '';
  switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache':
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD':
      badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
}
return badge;
}

function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }
  let link = '';
  switch (license) {
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache 2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GPL 3.0':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'BSD 3':
      link = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
}
  return link;
}

function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `
  ## License
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}


function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

${renderLicenseSection(data.license)}

## Questions
For questions, please contact me at [${data.email}](mailto:${data.email}). You can also find more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
