import spinner from 'src/core/spinner'
import fs from 'fs-extra'
import fspath from 'path'
import exec from 'src/core/exec'
import chalk from 'chalk'

export type CopyPath = {
  src: string
  dest: string
}

const createFolder = async (
  path: string,
  copyPaths: CopyPath[] = [],
  removePaths: string[] = []
) => {
  spinner.start('Creating folder')
  const folderExists = await fs.pathExists(path)
  if (folderExists) {
    spinner.fail(`Folder ${chalk.cyan(path)} is not empty`)
    process.exit(1)
  }
  for (const copyPath of copyPaths) {
    const { src, dest } = copyPath
    await fs.copy(src, fspath.join(path, dest))
  }
  if (copyPaths.length === 0) {
    await exec('mkdir', [path])
  }
  for (const removePath of removePaths) {
    const fullPath = fspath.join(path, removePath)
    await fs.remove(fullPath)
  }
  spinner.succeed()
}

export default createFolder
