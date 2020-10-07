const clearConsole = () => {
  process.stdout.write(
    process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
  )
}

const logConsole = (message, clear = false) => {
  if (clear) {
    clearConsole()
  }
  console.log(message)
}

module.exports = {
  clearConsole,
  logConsole
}
