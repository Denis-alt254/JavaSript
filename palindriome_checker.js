var word = "bbbb";
var i;
let count = 0;

const checker = () => {
    for(i = 1; i <= word.length-1; i++){
        if(word[0] === word[i]){
            console.log("same")
            count++            
        }else{
        console.log('different')
        count++
        }
        
    }
}

checker();
console.log('count: ',count);