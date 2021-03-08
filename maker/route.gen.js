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
    const json = process.cwd() + '/package.json'
 
  
    if (fs.existsSync(json)) {
                           
        if (!exist) {
            generate('routes', routeName, data)
            importRouteToServer(routeName)
        } else {
            warning()
            prompt(question).then(ans => {
                if (ans.type === 'yes') {
                    generate('routes', routeName, data)
                    importRouteToServer(routeName)

                } else {
                    failed('Routes')
                }
            })
                // (ans.type === 'yes' ? )(generate('routes', routeName, data) importRouteToServer(routeName) ): failed('Routes'));
        }
    } else {
        initError()

    }
}

export default GenRoute



const importRouteToServer = (name) => {
    const data = fs.readFileSync('server.js').toString().split('\n')
   
    const string = `app.use('/${name}',${name}Routes)`

    const line = data.filter(x => x.includes('app.listen') && x)
  
    const index = data.indexOf(line[0])
  
    data.splice(index, 0, string)
    const text = data.join('\n')
    fs.writeFileSync('server.js', text)
}