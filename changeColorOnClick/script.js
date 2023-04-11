console.log('hello')
const colors=[
    '#FF5733','#FFC433','#B8FF33','#33FF58','#33FF9F','#33FFF0','#073834'
] 


document.querySelector('button').addEventListener('click',(e)=>{ 
console.log(e) 
 const color= colors[Math.floor(Math.random()*colors.length)]
 document.body.style.backgroundColor=color; 
 e.pageX=300
}) 