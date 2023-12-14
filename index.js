
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?"
    },
    {
        type: 'input',
        name: 'description', 
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project.',
        choices: ['MIT', 'Apache 2.0', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    }
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Successfully wrote to ' + fileName);
});
}


function init() {
    inquirer.prompt(questions).then(answers => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
});
}


init();
