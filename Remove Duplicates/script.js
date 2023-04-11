let noOfitems=Number(prompt('enter no of items'))
let arr= new Array(noOfitems)
for(let i=0; i<arr.length;i++){
  arr[i]=prompt('enter items in cart')
 }
console.log('original arr:',arr) 
function removeDuplicates(temparr){ 
    for(let i=0; i<temparr.length;i++){ 
        console.log("i: ",i);
       for(let j=i+1;j<temparr.length;j++){
        if(temparr[i]===temparr[j]){
            temparr.splice(j,1)
        }
       }
    } 
    return temparr;
}
let newArray= removeDuplicates(arr)
console.log('modified Array:',newArray)
