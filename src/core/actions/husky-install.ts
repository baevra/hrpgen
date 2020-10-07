import exec from 'src/core/exec'
import spinner from 'src/core/spinner'

export default async (path: string) => {
  process.chdir(path)
  spinner.start('Initializing husky')
  await exec('npm', ['i', '-D', 'husky'])
  await exec('git', ['add', '.'])
  await exec('git', ['commit', '-m', '"Add husky dependency"'])
  spinner.succeed()
}
