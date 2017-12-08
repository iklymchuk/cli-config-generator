#!/usr/bin/env node

    cmd('npm install')    
    .then(function() {
        cmd('git --version');
    }).then(function() {
        cmd('npm -v');
    }).then(function() {
        cmd('node -v');
    }).then(function() {
        cmd('mkdir config');
    });

    function cmd(command) {
        var promise = new Promise(function(resolve, reject) {
            
            setTimeout(function (){
                
                var exec = require('child_process').exec;
                var child = exec(command, function(err, stdout, stderr) {
                    console.log(command);
                    console.log(stdout);
                    if (err) {
                        console.log(command.toUpperCase() + ' ERROR!');  
                        console.log(err);   
                        reject(err)                     
                    } else {
                        resolve(command)                                                   
                    }
                });
                
        }, 1000)
    })
    return promise;
}

