const express = require("express");
const app = express();

const port = 3000;

app.get("/",(req,res)=>{
    res.send("Keep Working");
})

app.listen(port,()=>{
    return console.log("Ready and Running");
})