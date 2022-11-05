function houseParty(array) {
    let guestList = [];

    for (let i = 0; i < array.length; i++) {
        let currentCommand = array[i];
        currentCommand = currentCommand.split(" ");
        let name = currentCommand[0]
        if (currentCommand[2] === "going!") {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        } else {
            if (guestList.includes(name)) {
                guestList.pop(name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guestList.join("\n"));
}
houseParty(['Allie is going!',

    'George is going!',

    'John is not going!',

    'George is not going!']);