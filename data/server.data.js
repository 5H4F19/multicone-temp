export const serverData = () => {
    return`import express from 'express'
const app = express()

app.get('/', function(req, res){
  res.sendFile(process.cwd()+'/public/index.html');
});
app.listen(3000,()=>console.log('Server is running'))
`
}
