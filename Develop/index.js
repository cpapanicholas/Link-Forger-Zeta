// TODO: Include packages needed for this application
var inquirer = require('inquirer')
inquirer
.prompt({

})
.then(answers => {


});
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide an ample description of your project:',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how to install your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide clear instructions on how to use your project:',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Explain how others can contribute:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'Unlicense', 'Other'],
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    },
    {
        type: 'input',
        name: '',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
