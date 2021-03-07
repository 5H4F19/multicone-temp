import fs from 'fs'
import {exec} from "child_process";
import ora from 'ora'
import colors from 'colors'
import genModel from './maker/model.gen.js'



const packageData = (name) => {
    return `{
  "name": "${name}",
  "version": "1.0.0",
  "description": "Multicone app",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "inquirer": "^8.0.0",
    "ora": "^5.3.0"
  }
}
`}

export const makeFile = async(name, ans) => {
    let mode = ''
    const json = packageData(name)
    const data = `
    import express from 'express'
    const app = express()
    app.listen(3000,()=>console.log('${ans.nothing}'))
    `
    fs.mkdir(name,()=>{})

    fs.writeFile(`${name}/package.json`, json,()=>{})

  fs.writeFile(`${name}/server.js`, data, () => { })
   
    
        const spinner = ora(`${colors.bold(`Creating your new ${colors.cyan('multicone')} application at`)} ${colors.underline(colors.brightGreen(process.cwd()+'/'+name))}\n\n`).start();
    
        exec(`cd ${name} && npm install`, (error, stdout, stderr) => {
  
        if (error) {
            console.log(`\n\n${error.message}]`);
          
        }
        if (stderr) {
            console.log(`${stderr}`);
        
        }
            if (stdout) {
            console.log(`${stdout}\n\n`);
            spinner.color = 'yellow'
            spinner.succeed(`${colors.bold('Created Succesfully')}\n`)
            console.log(`We suggest that you begin by typing:\n\n${colors.cyan('  cd')} ${name}\n${colors.cyan('  npm start')}\n\n`);
            spinner.stop()
            
        }
         });
   

    
}
