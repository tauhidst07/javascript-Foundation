const quantityOfProductCart=[2,3,4,5,6,7] 

function fixBug(arr){
   return arr.map(element=>element*2)
} 

const newCart=fixBug(quantityOfProductCart) 
console.log(newCart)