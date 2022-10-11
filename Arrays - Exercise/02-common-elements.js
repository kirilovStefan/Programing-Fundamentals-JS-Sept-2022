function commonElements(firstArray, secondArray) {

    for (let firstIndex = 0; firstIndex < firstArray.length; firstIndex++) {

        for (let secondIndex = 0; secondIndex < secondArray.length; secondIndex++) {

            if (firstArray[firstIndex] === secondArray[secondIndex]) {
                console.log(firstArray[firstIndex]);
            }

        }
    }

}
commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);

    // Short solution at this task ---->

    // for (const elements of firstArray) {

    //     if (secondArray.includes(elements)) {
    //         console.log(elements);
    //     }
    // }