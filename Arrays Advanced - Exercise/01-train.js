function train(array) {

    let currentPassengerInWagon = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());


    for (let command of array) {
        let currentCommand = command.split(' ');

        if (currentCommand[0] === 'Add') {
            currentPassengerInWagon.push(Number(currentCommand[1]));
        } else {
            for (let j = 0; j < currentPassengerInWagon.length; j++) {

                if (currentPassengerInWagon[j] + Number(currentCommand[0]) <= maxCapacity) {
                    currentPassengerInWagon[j] += Number(currentCommand[0]);
                    break;
                }
            }
        }
    }
    console.log(currentPassengerInWagon.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);