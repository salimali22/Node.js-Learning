const fs = require("fs");
const pathMod = require("path")
let myFiles = fs.readdirSync(__dirname)
console.log(myFiles);
console.log(pathMod.resolve(pathMod.dirname(myFiles[2]),pathMod.basename(myFiles[2])));
let filepath = pathMod.resolve(pathMod.dirname(myFiles[2]),pathMod.basename(myFiles[2]));
let data = fs.readFileSync(filepath,"UTF-8");
// console.log(data)

// console.log(fs.readdirSync(myFiles[myFiles.indexOf("module")]));

fs.writeFileSync("FileList.csv",String(myFiles));