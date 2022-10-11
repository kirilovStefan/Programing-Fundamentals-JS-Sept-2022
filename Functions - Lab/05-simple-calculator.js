function simpleCalculator(numOne, numTwo, operator) {

    let totalSum = 0;

    switch (operator) {

        case 'multiply':
            totalSum = numOne * numTwo;
            break;
        case 'divide':
            totalSum = numOne / numTwo;
            break;
        case 'add':
            totalSum = numOne + numTwo;
            break;
        case 'subtract':
            totalSum = numOne - numTwo;
            break;
    }
    console.log(totalSum);
}
// simpleCalculator(5, 5, 'multiply');
simpleCalculator(40,

    8,
    
    'divide');