const arr = [7, 1, 6, 4, 5, 8, 3];
let minimum = arr[0];
let maximum = arr[0];

const min = () => {
    for (let i = 1; i< arr.length; i ++){
        if(arr[i] < minimum){
            minimum = arr[i];
            console.log('Minimum = ', minimum);
        }
    }
}

const max = () => {
    for (let k = 1; k < arr.length; k++){
        if(arr[k] > maximum){
            maximum = arr[k];
            console.log('Maximum = ', maximum);
        }
    }
}
min()
max()

const asc = () => {
    for(let m = 0; m < arr.length; m++){
        for(let n = 0; n < arr.length ; n++){
            if(arr[m] < arr[n]){
                let temp = arr[n]
                arr[n] = arr[m];
                arr[m] = temp;
            }
        }    
        console.log("Step ", m, ":", arr);    
    }
}

console.log("Ascending Order:");
console.log("Array = ", arr);
asc();