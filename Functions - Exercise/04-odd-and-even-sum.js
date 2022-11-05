function oddAndEvenSum(number) {

    let numberString = number.toString();
    let numberLength = numberString.length;
    let evenSum = 0;
    let oddSum = 0;
    

    for(let index = 0; index < numberLength; index++) {
        
        let singleNumber = Number(numberString[index]);
        
        if (singleNumber % 2 === 0) {
            evenSum += singleNumber;
        } else {
            oddSum += singleNumber;
        }
    }   
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234);