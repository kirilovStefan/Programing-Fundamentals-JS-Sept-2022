function main(cars) {
    class Person {
        constructor(name, age, skinColor) {
            this.name = name;
            this.age = age;
            this.skinColor = skinColor;
        }
    }

    class Car {
        constructor(model, country, color, mileage, owner) {
            this.model = model;
            this.country = country;
            this.color = color;
            this.mileage = mileage;
            this.owner = owner;
        }

        toString() {
            console.log(`This model is ${this.model} created in ${this.country}. The color is ${this.color} and the mileages is ${this.mileage}! The owner is ${this.owner.name} and he is ${this.owner.age}, he has ${this.owner.skinColor} skin!`);
        }

        compareTo(otherCar) {
            if (this.mileage < otherCar.mileage) {
                console.log(`${this.model} has less mileage than ${otherCar.model}`);
            } else if (this.mileage > otherCar.mileage) {
                console.log(`${this.model} has more mileage than ${otherCar.model}`);
            } else {
                console.log(`${this.model} has equal mileage to ${otherCar.model}`);
            }
        }

        drive(moreMileage) {
            this.mileage += moreMileage;
        }

        painting(anotherColor) {
            this.color = anotherColor;
        }
    }

    let toyota = new Car('Toyota', 'Japan', 'green', 100000);

    let anotherPerson = new Person('Peter', 28, 'Black');
    let mercedes = new Car('Mercedes Benz', 'Germany', 'black mat', 75000, anotherPerson);

    let person = new Person('Ivan', 22, 'White');
    toyota.owner = person;

    toyota.toString();
    mercedes.toString();

    toyota.compareTo(mercedes);
    mercedes.compareTo(toyota);
    mercedes.drive(25000);
    mercedes.compareTo(toyota);
    mercedes.painting('green');
    mercedes.toString();

}
main(['Toyota | Japan | green | 100000', 'Mercedes Benz | Germany | black mat | 75000']);