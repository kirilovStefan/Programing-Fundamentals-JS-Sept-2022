function sumDigits(number) {

    let numberDigit = number.toString();
    let sum = 0;
   
    for (let i = 0; i < numberDigit.length; i++) {
        sum += Number(numberDigit[i]);
    }
    console.log(sum);
}
sumDigits(97561);