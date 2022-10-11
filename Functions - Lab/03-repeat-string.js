function repeatString(text, repeat) {

    let someText = '';

    for (let i = 0; i < repeat; i++) {
        someText += text;
        
    }
    return someText;
}
let repeatedString = repeatString("abc", 3);
console.log(repeatedString);