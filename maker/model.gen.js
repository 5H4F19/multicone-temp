import capitalize from "../utils/capitalize.js"
import fs from 'fs'
import pkg from 'inquirer';
import authCntlrData from '../data/auth.cntlr.data.js'
import { failed, initError, warning } from "../utils/console.js";
import { generate } from "../utils/generator.js";
import { question } from "../utils/question.js";
import GenRoute from "./route.gen.js";

const { prompt } = pkg;

const GenModel = (modelName,data,callback) => { // Gen refers to Generate

    const name = capitalize(modelName)
    const path = process.cwd() + '/models/' + name + '.js'
    const json = process.cwd() + 'package.json'

    if (fs.existsSync(json)) {
        
    if (!fs.existsSync(path)) {
        generate('models', name, data)
    } else {
        warning()
        prompt(question).then(ans => ans.type === 'yes' ? generate('models', name, data) : failed('Models')).then(()=> callback && callback('user',authCntlrData));
    }
    } else {
        initError()

    }
    return`yes`
}

export default GenModel
