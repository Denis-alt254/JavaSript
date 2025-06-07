// const prompt = require("prompt-sync")();

// let name = prompt("Enter your name:")
// console.log("Hello "+ name + " !");

//Other way

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter yourname: ", function(name){
    console.log(`Hello ${name}`);
    rl.close();
});