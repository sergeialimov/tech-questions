'use strict'

const { execSync, exec } = require('child_process')

const output = execSync(
  `node -e "console.log('subprocess stdio output')"`
)
console.log(output.toString())


console.log(execSync('ls').toString())



const out = execSync(
  `"${process.execPath}" -e "console.error('subprocess stdio output error')"`
)
console.log(out.toString())