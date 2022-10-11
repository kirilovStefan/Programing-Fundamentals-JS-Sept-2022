function rounding(number, precision) {
    
    if (precision > 15) {
        precision = 15;
    }

    let numberToPrecision = number.toFixed(precision);
    console.log(parseFloat(numberToPrecision));
}
rounding(10.5,3);