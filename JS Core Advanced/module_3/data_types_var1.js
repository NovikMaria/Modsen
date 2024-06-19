const table = {
    composition: "wood",
    "type of tree": "oak",
    numberOfLegs: 3,
};

const chair = {
    composition: "wood",
    "type of tree": "pine",
    numberOfSeats: 3,
};

console.log(table.composition === chair.composition); //вывело true, значения эквивалентны
console.log(table["type of tree"] === chair["type of tree"]); //вывело false, значения не эквивалентны
console.log(table.numberOfLegs === chair.numberOfSeats); //вывело true, значения эквивалентны