function echoType(hello) {


    if (typeof hello === 'string') {
        console.log(typeof hello);
        console.log(hello);
    } else if (typeof hello === 'number') {
        console.log(typeof hello);
        console.log(hello);
    } else {
        console.log(typeof hello);
        console.log('Parameter is not suitable for printing');
    }
}
echoType(null);