function sumFirstandLastElements(array) {

    let firstEl = array[0];
    let lastElIndex = array.length - 1;
    let lastEl = array[lastElIndex];

    return Number(firstEl) + Number(lastEl);
}
console.log(sumFirstandLastElements(['20', '30', '40']));