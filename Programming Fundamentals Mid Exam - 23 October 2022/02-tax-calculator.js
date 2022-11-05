function taxCalculator(input) {
    let carsData = input[0].split(">>");
    let totalTax = 0;

    carsData.forEach(carData => {
        let [type, years, kilometers] = carData.split(" ");
        let tax;

        switch (type) {
            case "family": {
                tax = (50 - years * 5) + Math.floor(kilometers / 3000) * 12;
                break;
            }
            case "heavyDuty": {
                tax = (80 - years * 8) + Math.floor(kilometers / 9000) * 14;
                break;
            }
            case "sports": {
                tax = (100 - years * 9) + Math.floor(kilometers / 2000) * 18;
                break;
            }
            default: {
                console.log("Invalid car type.");
                return;
            }
        }

        totalTax += tax;
        console.log(`A ${type} car will pay ${(tax).toFixed(2)} euros in taxes.`);
    })

    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`)
}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);