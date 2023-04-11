const rows=7
let string=''
for(let i=0; i<rows;i++){
    for(let j=0; j<rows-i;j++){
        string+='* '
    } 
    for(let space=0; space<i;space++){
        string+=' '
    }
    string+='\n' 
}
console.log(string)