let arr=[2,3,4,5,6,7,8,9,10,12,14,15] 

function checkDivisibility(arr){
    for( value of arr){
        if(value%2===0){
            continue
        } 
        if(value%3===0){
            console.log(value)
        }
    } 
} 
checkDivisibility(arr)