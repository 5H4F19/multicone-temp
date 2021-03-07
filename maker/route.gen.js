import fs from 'fs'
import pkg from 'inquirer';
import { failed, initError, success, warning } from "../utils/console.js";
import { generate } from "../utils/generator.js";
import { question } from "../utils/question.js";

const { prompt } = pkg;


const GenRoute = (routeName, data) => { // Gen refers to Generate

    // const name = capitalize(modelName)
    const path = process.cwd() + '/routes/' + routeName + 'Routes.js'
    const exist = fs.existsSync(path)
    const json = process.cwd() + 'package.json'
  
    if (fs.existsSync(json)) {
                           
        if (!exist) {
            generate('routes', routeName, data)
        } else {
            warning()
            prompt(question).then(ans => ans.type === 'yes' ? generate('routes', routeName, data) : failed('Routes'));
        }
    } else {
        initError()

    }
}

export default GenRoute
