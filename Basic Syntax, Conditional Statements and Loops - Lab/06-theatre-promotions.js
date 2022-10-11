function theatrePromotions(typeOfTheDay, agePerson) {
    let ticketPrice = 0;

    switch (typeOfTheDay) {
        case 'Weekday':
            if (0 <= agePerson && agePerson <= 18) {
                ticketPrice = 12;
                console.log(`${ticketPrice}$`);
            } else if (18 < agePerson && agePerson <= 64) {
                ticketPrice = 18;
                console.log(`${ticketPrice}$`);
            } else if (64 < agePerson && agePerson <= 122) {
                ticketPrice = 12;
                console.log(`${ticketPrice}$`);
            } else {
                console.log('Error!');
            }
            break;
        case 'Weekend':
            if (0 <= agePerson && agePerson <= 18) {
                ticketPrice = 15;
                console.log(`${ticketPrice}$`);
            } else if (18 < agePerson && agePerson <= 64) {
                ticketPrice = 20;
                console.log(`${ticketPrice}$`);
            } else if (64 < agePerson && agePerson <= 122) {
                ticketPrice = 15;
                console.log(`${ticketPrice}$`);
            } else {
                console.log('Error!');
            }
            break;
        case 'Holiday':
            if (0 <= agePerson && agePerson <= 18) {
                ticketPrice = 5;
                console.log(`${ticketPrice}$`);
            } else if (18 < agePerson && agePerson <= 64) {
                ticketPrice = 12;
                console.log(`${ticketPrice}$`);
            } else if (64 < agePerson && agePerson <= 122) {
                ticketPrice = 10;
                console.log(`${ticketPrice}$`);
            } else {
                console.log('Error!');
            }
            break;
    }
}
theatrePromotions('Holiday', 15);