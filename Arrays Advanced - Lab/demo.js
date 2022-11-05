function demo() {
    // let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    // return arr.slice(-4).reduce(((acc, val) => acc += val), 0)

    let arr = ["Ivan", "Petar", "Gosho", "Qnko", "Kris", "Stefan", "Valentin", 'ajj', 'zqq'];
    return arr.filter(name => !name.includes("n")).map((name) => name.toLocaleLowerCase()).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join(' ');
}

console.log(demo());