function shootForTheWin(input) {


    let targets = input.shift().split(' ').map(x => Number(x));
    let currentLine = input.shift(); 
    
    while(currentLine != 'End') {
        let sequenceInteger = Number(currentLine);

        
        currentLine = input.shift();
    }
    
}
shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"]);