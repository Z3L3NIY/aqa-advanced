const car1 = {
    brand: "Toyota",
    model: "Corollal",
    year: 1966
};

const car2 = {
    brand: "Ford",
    model: "F-150",
    year: 1975
};
/*
const car2 = {
    brand2: "Ford",
    model2: "F-150",
    year2: 1975
};
*/

const car3 = {...car1, ...car2};
console.log(car3);