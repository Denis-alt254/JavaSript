// This is a fizzbuzz, it checks if a number is divisible by 3 or 5

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (num) => {
    if(num%3 == 0){
        console.log("Fizz")
    }else if(num%5 == 0){
        console.log("Buzz")
    }else if ((num%3 == 0) && (num%5 == 0)){
        console.log("FizzBuzz")
    }else{
        console.log("Not divisiple by either 3 or 5")
    }

    rl.close()
})