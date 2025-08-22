// A code that auto update a value

let value = 4;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('How much did you buy? ', (amount) => {
    var result = value-amount;
    console.log(`${result} items present in stock.`);
});