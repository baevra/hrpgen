import { CommanderStatic } from 'commander'
import fspath from 'path'
import spawn from 'cross-spawn'
import spinner from 'src/core/spinner'

export const action = async (path: string) => {
  path = fspath.resolve(path)
  try {
    // await createFolder(path)
  } catch (error) {
    spawn.sync('rm', ['-rf', path])
    spinner.fail(error.message)
  }
}

const register = (program: CommanderStatic) => {
  program
  .command('jsonrpc <path>')
  .description('generate jsonrpc models')
  .action(action)
}

export default register
