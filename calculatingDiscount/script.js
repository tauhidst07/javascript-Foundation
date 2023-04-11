function calculatePercentageDiscount(oringinalPrice,discountedPrice){
   let discount=((oringinalPrice-discountedPrice)*100)/oringinalPrice 
   return discount.toFixed(2)
} 
 const price= 1500; 
 const discountedPrice= 1240; 
 const percentageDiscount=calculatePercentageDiscount(price,discountedPrice) 

 console.log(percentageDiscount) 

