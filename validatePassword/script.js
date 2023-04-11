let email= document.getElementById('email') 
let form =document.querySelector('.input-form') 
let paragraph= document.querySelector('p') 
let password= document.getElementById('password') 

form.addEventListener('submit',(e)=>{ 

    
    if(email.value.includes('@') && password.value.length>=8){
        paragraph.innerText='Password Validation Successful' 
        paragraph.style.color='green'  
        email.value='' 
        password.value='' 
    } 
    else{
        paragraph.innerText='Invalid Email or Password'  
        paragraph.style.color='red'  
        email.value='' 
        password.value='' 
    } 
    e.preventDefault()  
    
}) 



 
