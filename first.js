// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function isSameCategory(transaction,spents){
    for(let i=0; i<spents.length;i++){
        if(spents[i].category == transaction.category){
            return true;
        }
    } 
    return false;
 }
 
 function calculateTotalSpentByCategory(transactions) { 
   const spents=[];  
   let obj={};
   transactions.forEach((transaction)=>{ 
     const isSame = isSameCategory(transaction,spents);  
     if(isSame){ 
     spents.forEach((spent)=>{
         if(spent.category == transaction.category){
           spent.totalSpent+=transaction.price;
         }
       })
     } 
     else{
       obj.category=transaction.category; 
       obj.totalSpent=transaction.price; 
       spents.push(obj);
     }
   })
   return spents;
 }
 const transactions = [
   {
     id: 1,
     timestamp: 1656076800000,
     price: 10,
     category: 'Food',
     itemName: 'Pizza',
   },
   {
     id: 2,
     timestamp: 1656105600000,
     price: 20,
     category: 'Food',
     itemName: 'Burger',
   },
   {
     id: 3,
     timestamp: 1656134400000,
     price: 30,
     category: 'Food',
     itemName: 'Sushi',
   },
 ];  
//  console.log(calculateTotalSpentByCategory(transactions)); 

function print(req,res){
  console.log("hello"); 
  next()
} 
print()