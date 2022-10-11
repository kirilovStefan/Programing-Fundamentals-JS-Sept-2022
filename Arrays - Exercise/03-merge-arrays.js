function mergeArrays(firstArray, secondArray) {
    
    let thirdArray = [];
    let firstArrLength = firstArray.length

    for (let first = 0; first < firstArrLength; first++) {

        if (first % 2 === 0) {
            thirdArray.push(Number(firstArray[first]) + Number(secondArray[first]));
        } else {
            thirdArray.push(firstArray[first] + secondArray[first]);
        }

    }
    console.log(thirdArray.join(' - '));
}
mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
    );