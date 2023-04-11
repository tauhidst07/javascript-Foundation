
function billSplitter(costOfEachdish,noOfpeople){
    return {totalCost:costOfEachdish*noOfpeople,
        billForEachPerson: costOfEachdish
    }
} 


customerBill=billSplitter(500,4) 

console.log(customerBill)