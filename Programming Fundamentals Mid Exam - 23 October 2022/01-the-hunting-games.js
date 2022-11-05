function theHuntingGames(input) {
    let [days, playersCount, groupEnergy, waterPerPerson, foodPerPerson, ...energyLostForDays] = input;

    let totalWater = playersCount * waterPerPerson * days;
    let totalFood = playersCount * foodPerPerson * days;

    for (let i = 0; i < days; i++) {
        groupEnergy -= energyLostForDays[i];

        if (groupEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }

        // Every second day
        if ((i + 1) % 2 === 0) {
            groupEnergy *= 1.05;
            totalWater *= 0.7;
        }

        // Every third day
        if ((i + 1) % 3 === 0) {
            totalFood -= totalFood / playersCount;
            groupEnergy *= 1.10;
        }
    }

    console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`)
}
theHuntingGames(["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"]);