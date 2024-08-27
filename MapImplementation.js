function customMap(arr,callback){ 
    const result=[];
   for(let i=0;i<arr.length;i++){
    result[i]=callback(arr[i]);
   } 
   return result;
} 

const arr =[1,2,3,4];  

const res = customMap(arr,(value)=>{
    return value*2;
}) 
const res2= arr.map((value)=>{
    return value*2;
})
 
console.log(res); 
console.log(res2);