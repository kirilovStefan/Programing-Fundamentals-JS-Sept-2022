
function cats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.walkedDistance = 0;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
        walk(meters) {
            this.walkedDistance += meters
        }
    }
    for (const catInfo of array) {
        let [name, age] = catInfo.split(' ');
        let newCat = new Cat(name, age);
        newCat.meow();
        newCat.walk(10);
        console.log(newCat.walkedDistance);
    }
}
cats(['Mellow 2', 'Tom 5']);
// cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
