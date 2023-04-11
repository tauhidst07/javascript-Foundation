
const paragraphText= document.querySelector('p').innerText.split(' ') 
let newHtml=``
for (word of paragraphText){
    console.log(word) 
   if(word.length>8){
    word= `<span>${word}</span>`; 
   } 
   newHtml+=word+' ';
}

document.querySelector('p').innerHTML= newHtml; 
const span=document.querySelectorAll('span')
span.forEach((element)=>{
    element.style.backgroundColor='yellow'
})

