import express from 'express'

const app = express()

app.get('/', function(req, res){
    res.sendFile(process.cwd() + '/public/index.html');
});

// open('http://127.0.0.1:8080', {app: ['google chrome', '--incognito']}) 
app.listen(8080, () => {
    console.log(process.cwd());
})