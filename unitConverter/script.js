const degreeInCelcius=20; 

function unitConverter(celcius){
    return (celcius*(9/5))+32
} 

const degreeInFahrenhite= unitConverter(degreeInCelcius) 
console.log(degreeInFahrenhite)