import util from 'util'
import childProcess from 'child_process'

export default async (cmd: string, args: string[]) => {
  const exec = util.promisify(childProcess.exec)
  await exec(
    [cmd, ...args].join(' '),
    { maxBuffer : 5 * 1024 * 1024 }
  )
}
