const express = require('express')
const app = express()

app.get('/home',(req,res)=>{
  res.send("Back end is working")
})

app.listen(5000,()=>{
    console.log("Public server running on port 5000")
})