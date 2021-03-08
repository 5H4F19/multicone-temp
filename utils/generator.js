import fs from 'fs'
import capitalize from './capitalize.js'
import { success } from './console.js'

export const generate = (type, name,data) => {
    let naming
    type === 'controllers' ? naming = name + 'Controllers': naming = name
    type === 'routes' ? naming = name + 'Routes': naming = naming
    
    fs.mkdir(type, () => { })
    fs.writeFile(`${type}/${naming}.js`, data(name), () => { }) 

    success(capitalize(type))
}
