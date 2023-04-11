const img= document.querySelector('img') 

let x=0 
let y=0 
const speed=10 

document.addEventListener('keydown',(e)=>{
  if(e.key==='ArrowLeft'){
    x-=speed;
  } 
  if(e.key==='ArrowRight'){
    x+=speed
  }  
  if(e.key==='ArrowUp'){
    y-=speed
  }  
  if(e.key==='ArrowDown'){
    y+=speed
  }  
  img.style.transform=`translate(${x}px,${y}px)`;

})