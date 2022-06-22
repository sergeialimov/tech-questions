const util = require('util')

const execFile = util.promisify(require('child_process').execFile)

async function getVersion() {
  const { stdout } = await execFile('node', ['--version'])
  console.log(stdout)
}
getVersion()
