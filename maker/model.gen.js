import capitalize from "../utils/capitalize.js"
import fs from 'fs'
import pkg from 'inquirer';
import { data } from "../data/model.data.js";
import { failed, warning } from "../utils/console.js";
import { generate } from "../utils/generator.js";
import { question } from "../utils/question.js";

const { prompt } = pkg;


const GenModel = (modelName) => { // Gen refers to Generate

    const name = capitalize(modelName)
    const path = process.cwd()+'/models/'+name+'.js'
    
    if (!fs.existsSync(path)) {
        generate('models', name, data)
    } else {
        warning()
        prompt(question).then(ans => ans.type === 'yes' ? generate('models', name, data) : failed('Models'));
    }   
}

export default GenModel
