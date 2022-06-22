const { exec, execSync } = require('child_process')

exec(
  `"${process.execPath}" -e "console.log('A'); throw Error('B')"`,
  (err, stdout, stdin) => {
    console.log('err', err)
    console.log('stdout', stdout)
    console.log('stdin', stdin)
  }
)
