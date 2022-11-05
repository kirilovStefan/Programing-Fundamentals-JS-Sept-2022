function smallestTwoNumbers(array) {

    let smallestElements = array.sort((a, b) => a - b).slice(0, 2).join(' ');
    return smallestElements;
}
console.log(smallestTwoNumbers([30, 15, 50, 5]));