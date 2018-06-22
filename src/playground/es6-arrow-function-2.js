//arguments object - no longer bound with arrow function

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 1001));

//this keyword - no longer bound

const user = {
    name: "Anita",
    cities: ['Valdosta', 'Magadan', 'Seattle'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((multiplied) => this.multiplyBy * multiplied);
    }
};
console.log(multiplier.multiply());