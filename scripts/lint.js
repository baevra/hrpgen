const spawn = require('cross-spawn')
const chalk = require('chalk')
const { logConsole } = require('./utils')

process.env.NODE_ENV = 'production'
process.env.BABEL_ENV = 'production'

logConsole(chalk.green('Linting...'), false)

const command = 'eslint'
const args = [
  '.',
  '--ext',
  'ts,js',
  '--max-warnings=0',
  ...process.argv.slice(2)
]

const result = spawn.sync(command, args, { stdio: 'inherit' })
process.exit(result.status)
