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
    },
    {
        type: 'input',
        name: 'description',
    },
    {
        type: 'input',
        name: 'installation',
    },
    {
        type: 'input',
        name: 'usage',
    },
    {
        type: 'input',
        name: 'contributions',
    },
    {
        type: 'input',
        name: 'license',
    },
    {
        type: 'input',
        name: 'githubUsername',
    },
    {
        type: 'input',
        name: 'email',
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
