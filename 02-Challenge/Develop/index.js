// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What the Title of the project',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Give a destailed description of what you app/project aims to do.',
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Installation instructions',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Usage guide',
          },
          {
            type: 'input',
            name: 'challenges',
            message: 'What challenes arose in building this app/project?',
          },
          {
            type: 'input',
            name: 'overcome',
            message: 'How did you overcome those challenges?',
          },
          {
            type: 'input',
            name: 'name',
            message: 'who contributed to the project?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Whats your email?',
          },
          {
            type: 'input',
            name: 'username',
            message: 'Enter your Github Username',
          },
          {
            type: 'checkbox',
            name: 'licence',
            message: 'What are the licences did you use?',
            choices: ['MIT', 'IBM', 'ISC', 'Mozilla', 'Apache 2.0'],
          }
            ];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log ('successfully generatd a ReadMe'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
