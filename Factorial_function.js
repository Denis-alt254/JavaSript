let num = 16;
let last = 2;
let i = 2;
var count = 1
let result = num/i;
var other;

const evenChecker = () => { 
    if (result != last){
        other = result/i
        count++
    }
    console.log("Result: ", other);
    console.log(num, "has", count + 1, "factors of integer", i, ".");
}

evenChecker();


//This is not complete i was trying to print the values of a number
