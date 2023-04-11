const addTodo= document.querySelector('input[type="text"]')  
const todoItems=document.querySelector('.todo-items') 
document.querySelector('.todo-input').addEventListener('submit',(e)=>{
 e.preventDefault(); 
 const newTodo= document.createElement('li'); 
 newTodo.innerHTML=`<span>${addTodo.value}</span>
 <div class="todo-buttons">
     <button class="done btn"> Done</button>
     <button class="remove btn">remove
     </button>
 </div>`  

 todoItems.appendChild(newTodo); 
 addTodo.value=''

})  

todoItems.addEventListener('click',(e)=>{
    if(e.target.classList.contains('remove')){
        e.target.parentNode.parentNode.remove()
    } 
    if(e.target.classList.contains('done')){
        e.target.parentNode.previousElementSibling.style.textDecoration='line-through'
    }
})