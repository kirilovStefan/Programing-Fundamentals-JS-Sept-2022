function magicSum(arr, magicNum) {

    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let firstEl = arr[i];
        let secondEl = 0;

        for (let j = i + 1; j < arrLength; j++) {

            secondEl = arr[j];
            if (firstEl + secondEl === magicNum) {
                console.log(`${firstEl} ${secondEl}`);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27);