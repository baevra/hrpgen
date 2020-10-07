import exec from 'src/core/exec'
import spinner from 'src/core/spinner'

export default async (path: string) => {
  process.chdir(path)
  spinner.start('Initializing git')
  await exec('git', ['init'])
  await exec('git', ['add', '.'])
  await exec('git', ['commit', '-m', '"Initial commit"'])
  spinner.succeed()
}
