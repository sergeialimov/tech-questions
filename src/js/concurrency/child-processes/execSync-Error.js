const { execSync } = require('child_process')


try {
  execSync(`"${process.execPath}" -e "process.exit(1)"`)
} catch (err) {
  console.error(err)
}

try {
  execSync(`"${process.execPath}" -e "throw Error('kaboom')"`)
} catch (err) {
  console.error('CAUGHT ERROR:', err)
}

