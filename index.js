const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const create = require('./utils/create');

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
        choices: ('MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'),
    },
    {
        type: 'input',
        name: '',
        message: '',
    },
    {
        type: 'input',
        name: '',
        message: '',
    },
    {
        type: 'input',
        name: '',
        message: '',
    },
    {
        type: 'input',
        name: '',
        message: '',
    },
    {
        type: 'input',
        name: '',
        message: '',
    },
    {
        type: 'input',
        name: '',
        message: '',
    },
];