
const fs= require("fs");   
const path=require("path"); 
const { json } = require("stream/consumers");

const filePath=path.join(__dirname,"temp.json"); 
 function add(dataNew){  
    fs.readFile(filePath,"utf-8",(err,data)=>{
        if(err){
            console.log("went wrong",err);
        }  
        console.log("creent data:",data)
        const arr=JSON.parse(data); 
        arr.push(dataNew);
        fs.writeFile(filePath,JSON.stringify(arr),(err)=>{
            if(err){
                console.log("cant write",err);
            } 
            else{
                console.log("sucess");
            }
        }) 
    }) 
   
 }
function read(){
    fs.readFile(filePath,"utf-8",(err,data)=>{
        if(err){
            console.log("went wrong",err);
        } 
        console.log(data)
    })
}  
const data={
    name:"ansari", 
    age:"22"
} 
// add(data)
read();