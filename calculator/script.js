
const num1= Number(prompt("enter first number")) 
const num2= Number(prompt("enter second number")) 

const operator=prompt("choose operator from these \n '+' '-' '*' '/' ") 

switch (operator){
    case '+':
        console.log(`${num1} + ${num2}: `,(num1+num2)) 
        break
    case '-':
        console.log(`${num1} - ${num2}: `,(num1-num2)) 
        break 
    case '*':
        console.log(`${num1} * ${num2}: `,(num1*num2))  
        break 
    case '/':
        console.log(`${num1} / ${num2}: `,(num1/num2))   
        break 
    default:
        console.log("invalid operator")         
} 

console.log(typeof num1)