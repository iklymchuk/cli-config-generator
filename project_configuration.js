#!/usr/bin/env node

const inquirer = require("inquirer");
let fs = require('fs');
let config = {};

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your env?:",
        default: "test"
    }
]).then((answers) => {
    config.env = answers.name;
    console.log(`"env:": "${answers.name}"`);

}).then(() => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your host?:",
            default: "localhost"
        }
    ]).then((answers) => {
        config.host = answers.name;        
        console.log(`"host": "${answers.name}"`);

    }).then(() => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your port?:",
                default: "3000"
            }
        ]).then((answers) => {
            config.port = answers.name;                    
            console.log(`"port": "${answers.name}"`);
            
        }).then(() => {
            const content = JSON.stringify(config);
           
                fs.writeFile('./config/config.json', content, 'utf8', function (err) {
                    if (err) {
                        return console.log(err);
                    }
                })
        })
    })
});