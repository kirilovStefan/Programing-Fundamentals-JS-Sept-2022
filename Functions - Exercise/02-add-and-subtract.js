function addAndSubstract(firstNumber, secondNumber, lastNumber) {

    function sum(firstNum, secondNum) {
        let sumOfTwo = firstNum + secondNum;
        return sumOfTwo;
    }
    let sumOfTwoNumbers = sum(firstNumber, secondNumber);

    function subtract(sumOfTwoNumbers, lastNum) {
        return sumOfTwoNumbers - lastNum;
    }
    let totalResult = subtract(sumOfTwoNumbers, lastNumber);
    console.log(totalResult);
}
addAndSubstract(23, 6, 10);




