import { checkbox } from '@inquirer/prompts'

export const selectFoldersToDelete = async (folders: string[]) => {
  const answer = await checkbox({
    message: 'Please select folders to delete',
    choices: folders.map(folder => ({ name: folder, value: folder }))
  })

  return answer
}
