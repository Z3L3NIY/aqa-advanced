function isAdult(age) {
	if (age >= 18) {
		return true;
	}
	return false;
}

let age1 = 25;
let age2 = 15;

console.log(`Is adult at age of ${age1}: ${isAdult(age1)}`);
console.log(`Is adult at age of ${age2}: ${isAdult(age2)}`);
