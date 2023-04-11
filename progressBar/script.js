
const progressBar= document.getElementById('progress')  
const totalHeight=document.documentElement.scrollHeight-window.innerHeight 
 


window.addEventListener('scroll',()=>{
    const scrollPercentage= Math.round((window.scrollY/totalHeight)*100)  
    progressBar.value=scrollPercentage

}) 

