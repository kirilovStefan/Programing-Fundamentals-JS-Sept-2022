function chat(input) {
    let history = [];

    let currentCommand = input.shift().split(" ");
    let instruction = currentCommand.shift();

    while (instruction !== "end") {
        switch (instruction) {
            case "Chat": {
                history.push(currentCommand[0]);
                break;
            }
            case "Edit": {
                history = history.map(x => {
                    if (x === currentCommand[0]) {
                        return currentCommand[1];
                    }

                    return x;
                })
                break;
            }
            case "Spam": {
                history = [...history, ...currentCommand];
                break;
            }
            case "Delete": {
                history = history.filter(x => x !== currentCommand[0]);
                break;
            }
            case "Pin": {
                let messageIndex = history.indexOf(currentCommand[0]);
                if (messageIndex === -1) break;

                let message = history.splice(messageIndex, 1)[0];
                history = [...history, message];
                break;
            }
            default: {
                continue;
            }
        }
        currentCommand = input.shift().split(" ");
        instruction = currentCommand.shift();
    }

    history.forEach(message => {
        console.log(message);
    })
}
chat(["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"]);