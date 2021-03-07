import fs from 'fs'
import pkg from 'inquirer';
import authRouteData from '../data/auth.route.data.js'
import { data } from "../data/cntlr.data.js";
import capitalize from '../utils/capitalize.js';
import { failed, initError, success, warning } from "../utils/console.js";
import { generate } from "../utils/generator.js";
import { question } from "../utils/question.js";

const { prompt } = pkg;


const GenCntlr = (cntlrName,data,callback) => { // Gen refers to Generate

    // const name = capitalize(modelName)
    const path = process.cwd()+'/controllers/'+cntlrName+'Controllers.js'
    const exist = fs.existsSync(path)
    const json = process.cwd() + 'package.json'

     if (fs.existsSync(json)) {
                           
    if (!exist) {
        generate('controllers', cntlrName, data)

    } else {
        warning()
        prompt(question).then(ans => ans.type === 'yes' ? generate('controllers', cntlrName, data) : failed('Controllers')).then(()=>callback && callback('user',authRouteData));

    }
    } else {
        initError()

    }
}

export default GenCntlr
