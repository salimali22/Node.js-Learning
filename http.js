const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 8080;
const host = "localhost"
// console.log(fs.readFileSync("./index.html","UTF-8"));
const server = http.createServer((req, res) => {
    // console.log(req.url);
    const filename = url.parse(req.url).pathname;
    console.log(filename);
    fs.readFile("." + filename, "UTF-8", (error, file) => {
        if (error) {
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            res.end(`<h1>Not Found</h1>`);
        }
        else {
            // console.log(file);
            res.writeHead(200, { "Content-Type": 'text/html' });
            // res.write(`<script>alert('hello');</script>`);
            res.write(file);
        }

        // res.write("<h1>Not working</h1>");
        // res.write(`Request URL ${req.url}`) 
        res.end();
    })


})

server.listen(port, host, () => {
    console.log("Ready");
})