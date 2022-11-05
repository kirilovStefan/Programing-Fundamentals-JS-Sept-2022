function negativeOrPositiveNumber(oldArray) {

    let newArray = [];
    let oldArrayLength = oldArray.length;
    
    for (let i = 0; i < oldArrayLength; i++) {
        let currentElement = Number(oldArray[i]);
       
        if (currentElement < 0) {
            newArray.unshift(currentElement);
        } else {
            newArray.push(currentElement)
        }
    }
    return newArray.join("\r\n");
}
console.log(negativeOrPositiveNumber(['7', '-2', '8', '9']));