
const randomNumber = ((max,min)=>{
    return Math.round(Math.random()*(max-min)+min)
})(100,1) 

console.log(randomNumber)