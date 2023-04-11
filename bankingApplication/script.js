// function customerAccount(name,balance){
//     this.name=name; 
//     this.balance=balance;    
// }  
// customerAccount.prototype.withdraw=function(amount){
//     if(amount>this.balance){
//         console.log('InSufficient Amount');
//     } 
//     else{
//         this.balance-=amount
//     }
// } 
// customerAccount.prototype.deposit=function(amount){
//     this.balance+=amount
// } 
// const customer1= new customerAccount('tauhid',10000) 
// const customer2= new customerAccount('fareeza',15000)   
// console.log(customer1.balance)
// customer1.deposit(20000) 
// customer1.withdraw(100000) 

class Bank{
    constructor(name,balance){
        this.name=name 
        this.balance=balance 
    } 
    display(){
        console.log(this.name,this.balance)
    }
} 



