const http = require("http");
const fs = require("fs");

const port = 8080;
const host = "127.0.0.1"

const server = http.createServer((req,res)=>{
console.log(req.url);
res.writeHead(200,{"Content-Type":'text/html'})
res.write("<h4>This is me</h4>");
res.write(`Request URL ${req.url}`)
res.end();
})

server.listen(port,host,()=>{
    console.log("Ready");
})