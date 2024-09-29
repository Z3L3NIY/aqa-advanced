const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copyNumbersList = numbersList.map((x) => x);

function compareNumbers(a, b) {
	return a - b;
}

copyNumbersList.sort(compareNumbers);

console.log(numbersList);
console.log(copyNumbersList);
