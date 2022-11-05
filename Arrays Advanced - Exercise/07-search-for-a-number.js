function searchForANumber(arr1, arr2) {
    let [ elementsCount, deleteCount, searchNumber] = arr2;

    let modifyArray = arr1.slice(0, elementsCount);
    
    modifyArray.splice(0, deleteCount);
    let numberCount = modifyArray.filter((x) => x === searchNumber).length;
    
    console.log(`Number ${searchNumber} occurs ${numberCount} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);