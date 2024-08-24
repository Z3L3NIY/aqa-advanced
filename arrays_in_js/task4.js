const numbers = [10, 1, 2, 3, 4, 5, 3, 6, 7, 4, 8, 9, 10, 4, 10];
let twinNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers.includes(numbers[i], i + 1) && !twinNumbers.includes(numbers[i])) {
        twinNumbers.push(numbers[i]);
    }
}

console.log(twinNumbers);