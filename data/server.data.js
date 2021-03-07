export const serverData = (ans) => {
    return`import express from 'express'
    const app = express()
    app.listen(3000,()=>console.log('${ans.nothing}'))
    `
}
