function order(order, count) {

    const coffeePrice = 1.50;
    const waterPrice = 1.00;
    const cokePrice = 1.40;
    const snacksPrice = 2.00;

    let totalPrice = 0;

    switch (order) {
        case 'coffee':
            totalPrice = coffeePrice * count;
            break;
        case 'water':
            totalPrice = waterPrice * count;
            break;
        case 'coke':
            totalPrice = cokePrice * count;
            break;
        case 'snacks':
            totalPrice = snacksPrice * count;
            break;
    }
    console.log(totalPrice.toFixed(2));
}
order("water", 5);