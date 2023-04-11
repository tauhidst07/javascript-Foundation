const h1= document.querySelector('h1')
const button= document.querySelector('.btn') 
let clicked=false
button.addEventListener('click',(e)=>{ 

if(!clicked){
 h1.innerText='PW Skills'  
 clicked=true
} 
else{
    h1.innerText='The most affordable learning  Platform' 
    clicked=false
}
})