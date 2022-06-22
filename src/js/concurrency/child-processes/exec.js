const { exec, execSync } = require('child_process')

execSync(
  `"${process.execPath}" -e "console.log('A');console.error('B')"`,
  (err, stdout, stderr) => {
    console.log('err', err)
    console.log('subprocess stdout: ', stdout.toString())
    console.log('subprocess stderr: ', stderr.toString())
  }
)