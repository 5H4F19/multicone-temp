import fs from 'fs'
import {exec} from "child_process";
import ora from 'ora'
import colors from 'colors'
import { packageData } from './data/package.data.js';
import { serverData } from './data/server.data.js';


export const makeFile =(name, ans) => {
    
  const json = packageData(name)
  const data = serverData(ans)
  const spinner = ora(`${colors.bold(`Creating your new ${colors.cyan('multicone')} application at`)} ${colors.underline(colors.brightGreen(process.cwd()+'/'+name))}\n\n`).start();
  
  fs.mkdir(name,()=>{})
  fs.writeFile(`${name}/package.json`, json,()=>{})
  fs.writeFile(`${name}/server.js`, data, () => { })
      

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
        spinner.succeed(`${colors.bold('Created Succesfully at')}${process.cwd()+'/'+name}\n`)
        console.log(`Inside that directory,you can run several commands:`);
        console.log(`\n\n     ${colors.cyan('npm start')}\n\tStarts the development server`);
        console.log(`\n     ${colors.cyan('multicone make:model <name>')}\n\tCreates a model`);
        console.log(`\n     ${colors.cyan('multicone make:controller <name>')}\n\tCreates a controller`);
        console.log(`\n     ${colors.cyan('multicone make:auth <name>')}\n\tIntegretes authentication system\n`);

        // console.log(` ---------------------------------------------------------------------------------`);
        // console.log(`|                                                                                  |`);
        // console.log(`${colors.america('|   00   00   00   00   00     000000   00   00000   000000   000    00   000000   |')}`);
        // console.log(`|   000 000   00   00   00       00     00   00      00  00   00 0   00   00       |`);
        // console.log(`|   00 0 00   00   00   00       00     00   00      00  00   00  0  00   0000     |`);
        // console.log(`|   00   00   00   00   00       00     00   00      00  00   00   0 00   00       |`);
        // console.log(`|   00   00   0000000   00000    00     00   00000   000000   00    000   000000   |`);
        // console.log(`|                                                                                  |`);
        // console.log(` ----------------------------------------------------------------------------------`);

        

      console.log(`\n\nWe suggest that you begin by typing:\n\n${colors.cyan('    cd')} ${name}\n${colors.cyan('    npm start')}\n\n`);
      spinner.stop()
      
  }
    });


    
}