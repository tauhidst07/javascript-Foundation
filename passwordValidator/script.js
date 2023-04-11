
let passwrod = prompt('enter a passwrod')
let confirmPassword = prompt('confirm password')

if(passwrod === confirmPassword){
    console.log('Password Matched. Password validation Successful.')
} 
else{
    console.log("Password didn't match. Password validation unsuccessful")
}