function checkOrder(available, ordered) {
    if(ordered > available && available >= 0) {
        return "Your order is too large, we don’t have enough goods.";
    }
    else if (ordered === 0  && available >= 0) {
        return "Your order is empty.";
    }
    else if (ordered <= available && ordered > 0) {
        return "Your order is accepted.";
    }
    else {
        return "Invalid data.";
    }
}

console.log(`available: -20, ordered: -30 - ${checkOrder(-20, -30)}`);
console.log(`available: -20, ordered: -10 - ${checkOrder(-20, -10)}`);
console.log(`available: -20, ordered: 0 - ${checkOrder(-20, 0)}`);
console.log(`available: -20, ordered: 10 - ${checkOrder(-20, 10)}`);
console.log(`available: 0, ordered: -10 - ${checkOrder(0, -10)}`);
console.log(`available: 0, ordered: 0 - ${checkOrder(0, 0)}`);
console.log(`available: 0, ordered: 10 - ${checkOrder(0, 10)}`);
console.log(`available: 20, ordered: -20 - ${checkOrder(20, -20)}`);
console.log(`available: 20, ordered: 0 - ${checkOrder(20, 0)}`);
console.log(`available: 20, ordered: 10 - ${checkOrder(20, 10)}`);
console.log(`available: 20, ordered: 30 - ${checkOrder(20, 30)}`);