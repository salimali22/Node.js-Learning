const number = Math.floor(Math.random()*10+1);
process.stdout.write("Guess the number between 1-10 \n");
process.stdin.on("data",data=>{
if(data==number){
    process.exit();
}
else{
    process.stdout.write("Wrong Guess Try Again! \n");
}
})

process.on("exit",()=>{
    process.stdout.write("Hurray correct Guess");
})
