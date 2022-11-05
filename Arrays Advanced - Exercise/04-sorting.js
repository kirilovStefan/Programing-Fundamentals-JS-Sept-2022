function sorting(array) {

    let sortedArr = [...array.sort((a, b) => b - a)];
    let newArr = [];
    let flip = true;

    for (const i of array) {
        let temp = flip ? sortedArr.shift() : sortedArr.pop();

        newArr.push(temp);
        flip = !flip;
    }
    console.log(newArr.join(' '));    
    // return newArr.join(' ');

}
console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));