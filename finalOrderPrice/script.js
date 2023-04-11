const cart = [
    { unitPrice: 1000, quantity: 2 }, { unitPrice: 500, quantity: 3 }, {
        unitPrice: 1200,
        quantity: 1
    }, { unitPrice: 1000, quantity: 2 }, { unitPrice: 600, quantity: 4 }, { unitPrice: 800, quantity: 5 }, { unitPrice: 700, quantity: 3 }
]

const calculateCost = (cart) => {
    let totalCost = 0;
    for (item of cart) {
        totalCost += (item.unitPrice * item.quantity)
    }
    return totalCost
}

console.log(calculateCost(cart))