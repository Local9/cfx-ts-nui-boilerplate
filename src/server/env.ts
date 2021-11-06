import path from 'path'

global.__filename = GetResourcePath(GetCurrentResourceName())
global.__dirname = path.dirname(__filename)