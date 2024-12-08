require('dotenv').config()
const express = require('express')

const app = express();

const port = 4000;

app.get('/',(req, res)=>{
    res.send("Hello world!")
})

app.get('/twitter', (req, res)=>{
    res.send("Ashish")
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login in google</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`);
    
})