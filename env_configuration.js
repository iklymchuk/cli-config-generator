#!/usr/bin/env node

new Promise(function(resolve, reject) {
    
      setTimeout(() => resolve(1), 1000); 
    
    }).then(function(result) {
        var exec = require('child_process').exec;
        var child = exec('npm install', function(err, stdout, stderr) {
            console.log("npm install");
            console.log(stdout);
        });
    
    }).then(function(result) {
        var exec = require('child_process').exec;
        var child = exec('git --version', function(err, stdout, stderr) {
            console.log("git --version");
            console.log(stdout);
        });

    }).then(function(result) { 
        var exec = require('child_process').exec;
        var child = exec('npm -v', function(err, stdout, stderr) {
            console.log("npm -v");
            console.log(stdout);
        });
    
    }).then(function(result) {
    
        var exec = require('child_process').exec;
        var child = exec('node -v', function(err, stdout, stderr) {
            console.log("node -v");
            console.log(stdout);
        });

    }).then(function(result) {
        var exec = require('child_process').exec;
        var child = exec('mkdir config', function(err, stdout, stderr) {
            console.log("config folder was created");
            console.log(stdout);
        });
    
    });