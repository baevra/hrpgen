const spawn = require('cross-spawn')
const chalk = require('chalk')
const fs = require('fs-extra')
const { logConsole } = require('./utils')

process.env.NODE_ENV = 'production'
process.env.BABEL_ENV = 'production'

logConsole(chalk.green('Building...'), false)

fs.removeSync('build')

const command = 'babel'
const args = [
  'src',
  '--out-dir',
  'build',
  '--extensions',
  '.ts',
  ...process.argv.slice(2)
]

const result = spawn.sync(command, args, { stdio: 'inherit' })

const filter = (src) => {
  const stats = fs.statSync(src)
  return !stats.isFile() || /templates/.test(src)
}
fs.copySync('src', 'build', { filter })

process.exit(result.status)
