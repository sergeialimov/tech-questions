const { execFile } = require('child_process')

const controller = new AbortController()
const { signal } = controller

console.log('signal', signal)

const child = execFile('node', ['--version'], { signal }, (error) => {
  console.log(error) // an AbortError
})

// controller.abort()

console.log('signal', signal)