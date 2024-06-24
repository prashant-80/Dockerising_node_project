const express = require('express')
const app = express()

app.get('/home',(req,res)=>{
    res.json({message:'OK'})
})
app.listen(3001,()=>{
    console.log('started a server')
})