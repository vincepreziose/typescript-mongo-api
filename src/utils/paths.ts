import * as path from 'path'

const basePath = (): string => {
  return path.join(__dirname, '/../..')
}

const dbPath = (): string => {
  return path.join(__dirname, '/../../db')
}

export {
  basePath,
  dbPath
}
