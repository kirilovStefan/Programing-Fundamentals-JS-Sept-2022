function requiredReading(numberOfPage, pagesReadInHour, numberOfDays) {
    let totalTime = numberOfPage / pagesReadInHour;
    let requiredPerDay = totalTime / numberOfDays;
    console.log(requiredPerDay);
}
requiredReading(432,

    15 ,
    
    4);