import { Argv } from 'yargs'
import { existsSync, lstatSync } from 'fs'
import { getMatchedPaths } from './getMatchedPaths'
import { deleteNodeModules } from './deleteNodeModules'
import { DELETE_POLICY, selectDeletePolicy } from './selectDeletePolicy'
import { selectFoldersToDelete } from './selectFoldersToDelete'

/**
 * Các options có thể sử dụng với command, hiện tại command k có options
 */
export type ArgvOptions = {}

export default async (argv: Awaited<Argv<ArgvOptions>['argv']>) => {
  let source = argv._[0]

  if (typeof source === 'undefined') {
    source = '.'
    console.warn('Warn: source is not provided. Default: "."')
  }

  if (typeof source !== 'string') {
    console.log('Error: source must be a string')
    process.exit(1)
  }

  if (!existsSync(source)) {
    console.log(`Error: ${source} doesn't exists`)
    process.exit(1)
  }

  const stats = lstatSync(source)
  const isDirectory = stats.isDirectory()

  if (!isDirectory) {
    console.log('Error: source must be a directory path')
    process.exit(1)
  }

  const matchedPaths = await getMatchedPaths(source)

  if (matchedPaths.length === 0) {
    return console.log('No node_modules folders found.')
  }

  matchedPaths.sort()
  console.log(matchedPaths)

  const deletePolicy = await selectDeletePolicy()

  if (deletePolicy === DELETE_POLICY.NONE) {
    return console.log('Deletion cancelled.')
  }

  if (deletePolicy === DELETE_POLICY.ALL) {
    return deleteNodeModules(matchedPaths, source)
  }

  const foldersToDelete = await selectFoldersToDelete(matchedPaths)
  deleteNodeModules(foldersToDelete, source)
}
