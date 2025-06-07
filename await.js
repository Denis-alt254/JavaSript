

// async function myFunction(){
//     let myPromise = new Promise((resolve) =>{
//         setTimeout(() =>{resolve("I love you!");}, 3000)
//     });
//     console.log(await myPromise);
// };

// myFunction();

async function  myFile() {
    try {
        let response = await fetch('text.txt');
        if(!response.ok)throw new Error("File not found");
        let data = await response.text();
        console.log(`Data = ${data}`);
    } catch (error) {
        console.log(error.message);
    }
}

myFile();