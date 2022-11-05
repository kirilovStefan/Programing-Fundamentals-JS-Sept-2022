function movingTarget(input) {

    let targets = input
        .shift()
        .split(' ')
        .map(x => Number(x));

    let currentLine = input.shift();

    while (currentLine != 'End') {
        const lineArguments = currentLine.split(' ');
        const command = lineArguments[0];
        const index = Number(lineArguments[1]);
        const power = Number(lineArguments[2]);

        switch (command) {
            case 'Shoot':
                if (targets[index]) {
                    
                    targets[index] -= power;

                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;
            case 'Strike':
                const radius = power;
                const lowerIndex = index - radius;
                const upperIndex = index + radius;
                // let firstPart = targets.slice(0, index - radius);
                // let secondPart = targets.slice(index + power);
                // targets = firstPart.concat(secondPart);
                // if (lowerIndex >= 0 && lowerIndex <= targets.length && upperIndex >= 0 && upperIndex < targets.length) {

                // }

                if (targets[lowerIndex] && targets[upperIndex]) {
                    targets.splice(index - radius, radius * 2 + 1);
                } else {
                    console.log('Strike missed!');
                }
                break;
            case 'Add':
                if (targets[index]) {
                    targets.splice(index, 0, power);
                } else {
                    console.log('Invalid placement!');
                }
                break;
        }

        currentLine = input.shift();
    }
    console.log(targets.join('|'));
}
movingTarget(["1 2 3 4 5",

    "Strike 0 1",

    "End"]);