// run as node node fork.js child
// keep node version fresh to be able to use an AbortController

if (process.argv[2] === 'child') {
  setTimeout(() => {
    console.log(`Hello from ${process.argv[2]}`)
  }, 1_000)
} else {
  const { fork } = require('child_process')
  const controller = new AbortController()
  const { signal } = controller;
  const child = fork(__filename, ['child'], { signal })

  child.on('error', (err) => {
    // this will be called with err being a AbortError if controller aborts
  })
  controller.abort()
}