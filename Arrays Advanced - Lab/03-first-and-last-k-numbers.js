function firstAndLastXNumbers(arrayOfNumbers) {
    let numberOfElements = arrayOfNumbers.shift();
    let startArray = arrayOfNumbers.slice(0, numberOfElements);
    let lastElementsStartingIndex = arrayOfNumbers.length - numberOfElements;
    let endArray = arrayOfNumbers.slice(lastElementsStartingIndex);

    return startArray.join(" ") + "\r\n" + endArray.join(" ");
}

console.log(firstAndLastXNumbers([3, 6, 7, 8, 9]));








// function firstAndLastXNumbers(arrayOfNumbers) {

//     let startArray = [];
//     let endArray = [];

//     let numberOfElements = arrayOfNumbers.shift();

//     for(let index = 0; index < numberOfElements; index++) {
//         let current = arrayOfNumbers[index];
//         startArray.push(current);
//     }

//     let lastElementsStartingIndex = arrayOfNumbers.length - numberOfElements;
      
//     for (let k = lastElementsStartingIndex; k < arrayOfNumbers.length; k++) {
//         let current = arrayOfNumbers[k];
//         endArray.push(current);
//     }

//     let startResult = startArray.join(' ');
//     let endResult = endArray.join(' ');

//     let result = startResult + ' \r\n' + endResult;
    
//     console.log(result);
// }