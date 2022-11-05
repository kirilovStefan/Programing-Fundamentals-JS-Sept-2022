function bombNumbers(sequence, bombInformation) {

    // Проверявам дали има 4 в масива и махам 2 числа от ляво и дяско на 4-ката
    // 1 4 2 4 2 2 2 9
    // 1 2 9
    let [ bombNumber, bombPower ] = bombInformation;
    let detonationPosition = sequence.indexOf(bombNumber);
    let deleteCount = bombPower * 2 + 1;

    while (detonationPosition !== -1) {
        
        let startingBombDetonitionIndex = (detonationPosition - bombPower < 0) 
            ? 0 
            : detonationPosition - bombPower;

        if (detonationPosition - bombPower  < 0) {
            deleteCount -= Math.abs(detonationPosition - bombPower);
        }

        sequence.splice(startingBombDetonitionIndex, deleteCount);
        detonationPosition = sequence.indexOf(bombNumber);
    }

    // sum sequence and return it
    return sequence.reduce((acc, val) => acc += val, 0);
}
console.log(bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]));