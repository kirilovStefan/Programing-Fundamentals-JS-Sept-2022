function distinctArray(array) {

    let noRepeatArray = [...new Set(array)];
    console.log(noRepeatArray.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);