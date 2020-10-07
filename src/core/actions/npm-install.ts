import chalk from 'chalk'
import exec from 'src/core/exec'
import spinner from 'src/core/spinner'

export type NPMArgs = {
  path: string
  packages: string[]
  devpackages: string[]
  message?: string
}

export default async (args: NPMArgs) => {
  const message = args.message || 'Installing dependencies'
  process.chdir(args.path)
  spinner.start(message)
  for (const pack of args.packages) {
    spinner.start(`Installing ${chalk.cyan(pack)}`)
    await exec('npm', ['i', '-E', pack])
  }
  for (const pack of args.devpackages) {
    spinner.start(`Installing ${chalk.cyan(pack)}`)
    await exec('npm', ['i', '-D', pack])
  }
  spinner.succeed(message)
}
