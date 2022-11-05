function palindromeInteger(array) {

    let numberArrayLength = array.length;

    for (let index = 0; index < numberArrayLength; index++) {
        let numberAsString = (array[index]).toString();
        let reversedString = numberAsString.split('').reverse().join('');

        if (numberAsString === reversedString) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindromeInteger([123, 323, 421, 121]);