// dinary search algorithm

function binarySearch(arr, target){
    let start = 0;
    let end = arr.length -1;
    console.log("arr = ",arr);
    console.log("end = ",end)
    let mid;

    while(end >= start){
        mid = Math.floor((start + end)/2);  
        console.log(mid);

        if (arr[mid] == target)
            return mid;

        if (arr[mid] > target)
            end = mid - 1;
        else
            start = mid + 1;
    
    }
    return -1;
}

arr = new Array(2, 4, 6, 7, 8, 9);
target = 8;
try {
    result = binarySearch(arr, target);
    if(result == -1)
        console.log("Element is not found in the array")
        else
        console.log("Element is found in index ", result);
} catch (error) {
    console.error({message: error});
} finally{
    console.log("fail to execute");
}
//console.log(result)
