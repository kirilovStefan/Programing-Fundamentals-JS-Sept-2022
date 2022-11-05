function listOfProducts(arrayOfProducts) {

    let numberedArray = arrayOfProducts.sort().join('\r\n');
    for (let i = 0; i < arrayOfProducts.length; i++) {

        console.log(`${i + 1}.${arrayOfProducts[i]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);