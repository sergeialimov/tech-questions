'use strict'

const { env } = require('process')
const { spawn } = require('child_process')

function exercise (myEnvVar) {
  // TODO return a child process with
  // a single environment variable set 
  // named MY_ENV_VAR. The MY_ENV_VAR 
  // environment variable's value should 
  // be the value of the myEnvVar parameter 
  // passed to this exercise function
  
  const sp = spawn(process.execPath, [ '-p', 'process.env' ])
  sp.stdout.pipe(process.stdout)

  return require('child_process').spawnSync(process.argv[0], ['child.js'], { env: { MY_ENV_VAR: myEnvVar }})
}

module.exports = exercise
