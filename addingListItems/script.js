const listItems=['item1','item2','item3','item4','item5'
] 

let orderdList= document.querySelector('.container ol'); 
const button= document.querySelector('.btn') 
button.addEventListener('click',(e)=>{ 
if(listItems.length<=0){
   document.querySelector('.container h3').innerHTML="all items have been added"
} 
else{
let item= document.createElement('li') 
item.innerHTML=listItems.shift() 
orderdList.append(item) 
}
})





