
// const pathMod = require("path");
// console.log(__filename);
// console.log(pathMod.basename(__filename));


// //Utility module
// const utilMod = require("util");
// console.log(utilMod);

// utilMod.log(pathMod.basename(__filename));

const first = require("./module/first");
first.bye();


const ran = require("./module/radom");
for(var i =0 ; i< 10 ; i++){
    console.log(ran.random(10));
}