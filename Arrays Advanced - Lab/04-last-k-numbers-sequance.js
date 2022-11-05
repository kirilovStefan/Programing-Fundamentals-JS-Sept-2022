function lastKNumbersSequence(arrayLength, groupLength) {
    

    let array = [1];
    
    for (let i = 1; i <= arrayLength - 1; i++) {
        let numbersToSum = array.slice(i - groupLength < 0 ? 0 : i - groupLength);

        let sum = numbersToSum.reduce((acc, val) => {
            acc += val
            return acc
        }, 0)

        array.push(sum);
    }

    return array.join(' ');
}    
console.log(lastKNumbersSequence(6, 3));

