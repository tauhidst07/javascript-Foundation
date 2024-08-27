
function cutomFilter(arr,callback){
    const result=[]; 
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i])){
            result.push(arr[i]);
        }
    } 
    return result
}


const arr=[1,2,4,5,6,7]; 

const res=cutomFilter(arr,(value)=>{
  return value>5; 
})
  
// const res=arr.filter((value)=>{
//     return value>5;
// })
console.log(res)