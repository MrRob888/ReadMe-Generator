// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// switch statement is being used to make the code abit more streamlined
// wasnt too sure why the code wans't working

const renderLicenseBadge = (data) => {

  switch(data === `${data.licence}`){
    case 'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;

    case 'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;

    case 'IBM':'[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    break;

    case 'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    break;

    case 'Mozilla': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    break;

    default: ''
  }
}
// }

// TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// const renderLicenseSection = (data) => {
//   renderLicenseBadge(data)
// }

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Challenges](#challenges)
  * [Overcome](#overcome)
  * [Contributors](#contributors)
  * [License](#license)
   
  ## Installation
${data.installation}
  ## Useage
${data.usage}
  ## Challenges
${data.challenges}
  ## Overcoming challenges
${data.overcome}
  ## Contributors
${data.name}
 ## Email
${data.email}
 ## Github Repo
https://github.com/${data.username}/${data.title}

 ## License
${data.licence}
`
};
// renderLicenseBadge(`${data.licence}`)

module.exports = generateMarkdown;
