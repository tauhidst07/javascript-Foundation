
const userName= prompt('enter your name:').toUpperCase()

let vowelCount=0 
for(character of userName){
    if(character==='A' || character==='E' || character === 'I' || character==='O'|| character==='U'){
        vowelCount++;
    }
}; 

console.log(`number of vowel in ${userName}: `,vowelCount) 

