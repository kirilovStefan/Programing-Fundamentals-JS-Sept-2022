function concertToObject(jsonString) {
    let person = JSON.parse(jsonString);

    let props = Object.keys(person);

    for (const prop of props) {
        console.log(`${prop}: ${person[prop]}`);
        
    }
}
concertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
// concertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
