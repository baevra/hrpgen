const spawn = require('cross-spawn')
const chalk = require('chalk')
const { logConsole } = require('./utils')

process.env.NODE_ENV = 'test'
process.env.BABEL_ENV = 'test'

logConsole(chalk.green('Running tests...'), true)

const command = 'jest'
const args = [
  '--config=./jest/config/index.js',
  ...process.argv.slice(2)
]

const result = spawn.sync(command, args, { stdio: 'inherit' })
process.exit(result.status)
