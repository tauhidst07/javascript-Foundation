const carRent={
    economy:4000,
    midSize:10000, 
    luxury:20000
} 

function claculateRent(carType,noOfDays){
  return carRent[carType]*noOfDays
} 

const carType= 'midSize' 
const noOfDays= 10 
const totalCost=claculateRent(carType,noOfDays) 

console.log(totalCost)