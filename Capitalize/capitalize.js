
let userName= prompt("enter username");

function capitalize(userName){
    userName[0] === userName[0].toUpperCase() ? userName=userName : userName= userName[0].toUpperCase()+userName.slice(1); 
    return userName;
} 

console.log(capitalize(userName))