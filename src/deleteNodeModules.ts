import { rm } from 'fs'
import { resolve } from 'path'

/**
 * Thực hiện việc xóa folder
 *
 * @param {string} paths danh sách đường dẫn
 * @param {string} searchPath vị trí của folder gốc
 */
export const deleteNodeModules = (paths: string[], searchPath: string) => {
  paths.forEach(path => {
    const resolvedPath = resolve(searchPath, path)

    // tương tự: rm -rf
    rm(resolvedPath, { recursive: true, force: true }, () => {
      console.log(`Deleted: ${path}`)
    })
  })
}
