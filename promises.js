

function myDisplayer(post){
    console.log(`Result: ${post}`);
}

let myPromise = new Promise((mySuccess, myFailure) =>{
    let x = 3;

    if (x == 2){
        mySuccess("OK");
    }else{
        myFailure("false");
    }
});

myPromise.then(
    (value) =>{myDisplayer(value);},
    (error) =>{myDisplayer(error);}
);