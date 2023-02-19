import inquirer from "inquirer";
import fs from "fs/promises";

const licenses = ["Apache", "MIT", "Perl"];
const response = await inquirer.prompt([
  {
    name: "title",
    message: "What's title of your project?",
    type: "input",
  },  
  {
    name: "description",
    message: "Describe your project ",
    type: "input",
  },
  {
    name: "installation",
    message: "Provide installation guide , how to install",
    type: "input",
  },
  {
    name: "usage",
    message: "How to use the app ? ",
    type: "input",
  },
  {
    type: 'list',
    name: 'badge',
    message: 'Choose a license for your project:',
    choices: licenses,
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    name: "contribute",
    message: "How can we contribute ? ",
    type: "input",
  },
  {
    name: "tests",
    message: "Specify the test instructions",
    type: "input",
  },
  {
    name: "github",
    message: "Please link your GitHub profile?",
    type: "input",
  },
  {
    name: "email",
    message: "Please enter your email adress?",
    type: "input",
  },   
]);

function generateLicense(license) {
  if (response.badge === "mit") {
    return  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }else if (response.badge === "apache") {
    return  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";    
  }else if (response.badge === "perl") {
    return  "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";    
  }else{
    return "No license";    
  } 
};

let readmeText = `

${generateLicense(licenses)}

# Project title

${response.title}

## Description

${response.description}  

## Table of Contents
  
  * [Description of application](#Description)
  * [Installation instructions](#Installation)
  * [Usage of application](#Usage)
  * [How to contribute](#Contribute)
  * [Application Tests](#Tests)
  * [Questions](#Questions)
  * [Link to deployed application](#Deployed-application)
  * [Screenshots of deployed application](#Screenshots)

## Installation

  \`\`\`  
  ${response.installation}
  \`\`\`

## Usage

  \`\`\`
  ${response.usage}
  \`\`\`

## Contribute

  * ${response.contribute}

## Tests

  * ${response.tests}

## Questions

  - Send a message : [Cristian Mitu](${response.github})
  - :email: Email : ${response.email}  

## Deployed application

  * [GitHub repo link](https://github.com/cristianmitu/Readme-generator)

## Screenshots
  * [Running app](./assets/app_video.webm)
`;

console.log(response);
await fs.writeFile("README.md", readmeText);
console.log("success!");


