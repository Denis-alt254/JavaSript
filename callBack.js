
function myDisplayer(node){
    console.log(`Result = ${node}`);
}

function myCalculator(num1, num2, callBack){
    const sum = num1 + num2;
    callBack(sum);
}

myCalculator(23, 4, myDisplayer);