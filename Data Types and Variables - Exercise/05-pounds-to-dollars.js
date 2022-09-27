function poundsToDollars(britishPounds) {
    
    const poundsValue = 1.31;
    let poundsToDollars = britishPounds * poundsValue;
    console.log(poundsToDollars.toFixed(3));
}
poundsToDollars(80);