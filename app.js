//Task 1
// console.log("Hello WOrld");

//Task 2 Printing global variable
// console.log(global)

//Task 3 Directory Name
// console.log(__dirname);


//Task 4 File Name
// console.log(__filename);

//Task 5 process variable
// console.log(process);

// let first = process.argv[2];
// let last = process.argv[3];

// console.log(`Hello ${first} ${last}`);

//Task 6 Process Stdout and Stdin


process.stdout.write("Salim ALi\n");

process.stdin.on("data", data=>{
    process.stdout.write(`You write ${data}`);
    process.exit();
})

process.on("exit",()=>{
    console.log("You have been exited");
})

