export const data = (name) => {
    return`import express from "express"
const ${name}Routes = express.Router()
/*
@@ You can make routes as following:

${name}Routes
    .route('/')
    .get({method})
    .put({method})
    .post({method})
*/
export default ${name}Routes`
}