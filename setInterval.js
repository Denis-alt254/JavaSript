

setInterval(myFunction, 1000);

function myFunction(){
    var d = new Date();
    // d.getHours();
    // d.getMinutes();
    // d.getSeconds();
    console.log(`Time is: ${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`);
}