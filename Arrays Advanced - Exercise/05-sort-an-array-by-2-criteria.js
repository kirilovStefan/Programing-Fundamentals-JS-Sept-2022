function sortArray(array) {

    let sortedArray = array.sort((a, b)=> a.length - b.length || a.localeCompare(b));
    console.log(sortedArray.join('\r\n')); 

}
sortArray(['test',
    'Deny',
    'omen',
    'Default']);