#!/usr/bin/env node
function clone(project = "Test") {
    setTimeout(function (){
        
    }, 1000)
    console.log(`git clone ${project} project`);
}
clone(process.argv[2]);