import { glob } from 'glob'

/**
 * Tìm kiếm các folder node_modules
 *
 * @param {string} searchPath vị trí folder gốc
 * @returns {Promise<string[]>} danh sách đường dẫn tới folder node_modules nằm trong folder gốc
 */
export const getMatchedPaths = async (searchPath: string): Promise<string[]> => {
  const pattern = '**/node_modules'

  let matchedPaths = await glob(pattern, { cwd: searchPath })
  matchedPaths = matchedPaths.filter(path => path.split('node_modules').length <= 2)
  return matchedPaths
}
