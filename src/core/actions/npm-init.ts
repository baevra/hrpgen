import fs from 'fs-extra'
import fspath from 'path'
import merge from 'lodash/merge'
import spinner from 'src/core/spinner'

const npminit = async (path: string, config: any = {}) => {
  spinner.start('Initializing npm')

  const initConfig = {
    name: fspath.basename(path),
    version: '0.0.0',
    description: '',
    author: 'Baevra',
    license: 'ISC',
    scripts: {},
    dependencies: {},
    devDependencies: {}
  }
  const finalConfig = merge(initConfig, config)
  const filePath = fspath.join(path, './package.json')
  const options = { spaces: 2 }

  await fs.writeJSON(filePath, finalConfig, options)
  spinner.succeed()
}

export default npminit
