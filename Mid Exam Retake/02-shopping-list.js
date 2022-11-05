function shopingList(input) {
    let rawList = input.shift()
    let commands = input.slice();
    let shoppingList = rawList.split('!');
    let currentLine = commands.shift();

    while (currentLine != 'Go Shopping!') {
        let currentCommand = currentLine.split(' ');
        let command = currentCommand[0];
        let firstArguments = currentCommand[1];
        let secondArguments = currentCommand[2];

        switch (command) {
            case 'Urgent':
                if (!shoppingList.includes(firstArguments)) {
                    shoppingList.unshift(firstArguments);
                }
                break;
            case 'Unnecessary':
                let itemIndex = shoppingList.indexOf(firstArguments);

                if (itemIndex > -1) {
                    shoppingList.splice(itemIndex, 1);
                }
                break;
            case 'Correct':
                let changeItem = shoppingList.indexOf(firstArguments);

                if (changeItem > -1) {
                    shoppingList[changeItem] = secondArguments;
                }
                break;
            case 'Rearrange':
                let removeItem = shoppingList.indexOf(firstArguments);

                if (removeItem > -1) {
                    let element = shoppingList[removeItem];
                    shoppingList.splice(removeItem, 1);
                    shoppingList.push(element);
                }
                break;
        }
        currentLine = commands.shift();
    }
    console.log(shoppingList.join(', '));
}
shopingList(["Milk!Pepper!Salt!Water!Banana",

"Urgent Salt",

"Unnecessary Grapes",

"Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"]);