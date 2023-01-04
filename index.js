//Require all of the dependencies
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const create = require('./utils/create');

// This const holds all of the prompts, which are the questions the user is asked
const prompts = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contribution to the repo?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
];


//Functions to write the data into a file to create the ReadME
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

function run() {
    inquirer.prompt(prompts).then((inquirerResponses) => {
        console.log('Generating ReadMe');
        writeToFile('README.md', create({...inquirerResponses}));
    });
};

run();