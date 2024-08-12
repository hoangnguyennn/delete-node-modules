import { select } from '@inquirer/prompts'

const ALL = 'All'
const PARTIAL = 'Partial'
const NONE = 'None'

export const DELETE_POLICY = {
  ALL,
  PARTIAL,
  NONE
}

export const selectDeletePolicy = async () => {
  const answer = await select({
    message: 'Please select delete policy:',
    choices: [
      {
        name: ALL,
        value: ALL,
        description: 'Delete all of the matched folders'
      },
      {
        name: PARTIAL,
        value: PARTIAL,
        description: 'Delete a partial of matched folders'
      },
      {
        name: NONE,
        value: NONE,
        description: 'Do not delete any matched folders'
      }
    ]
  })

  return answer
}
