const color1= prompt("Choose First Color  from 'red' 'blue' 'yellow'").toUpperCase() 
const color2=prompt("Choose Second Color  from 'red' 'blue' 'yellow'").toUpperCase()  

console.log(color1,color2)

function colorMixer(color1,color2){
    if ((color1==='RED' && color2==='BLUE') || (color1==='BLUE' && color2==='RED')){
        return 'purple'; 
    } 

    else if((color1==='RED' && color2==='YELLOW') || (color1==='YELLOW' && color2==='RED')){
        return 'orange';
    } 
    else if((color1==='BLUE' && color2==='YELLOW') || (color1==='YELLOW' && color2==='BLUE')){
        return 'green';
    } 
    else{
        return -1;
    }
 } 
 

switch(colorMixer(color1,color2)){
    case 'purple':
        console.log("puprle")
        break 
    case 'orange':
        console.log("orange")
        break    
    case 'green':
        console.log("green")
        break  
    default:
        console.log("invalid color combination")             
}
