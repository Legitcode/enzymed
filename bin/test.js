#! /usr/bin/env node
var childProcess = require('child_process')
var path = require('path')

var babel = path.resolve(__dirname, '../node_modules/babel/register')

childProcess.exec("mocha \""+ process.argv[2] +"\" --compilers js:" + babel, function (error, stdout, stderr) {
   console.log(stdout);
   console.error(stderr);
 });
