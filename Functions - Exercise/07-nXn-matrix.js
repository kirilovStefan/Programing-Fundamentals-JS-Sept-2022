function matrix(number) {

    let rowGeneration = () => {
        let singleRow = '';

        for (let k = 1; k <= number; k++) {
            singleRow += `${number} `;
        }
        return singleRow;
    }

    for (let i = 1; i <= number; i++) {
        console.log(rowGeneration());
    }
}
matrix(3);