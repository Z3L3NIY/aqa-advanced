function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator can not be zero");
    }
    else if (isNaN(numerator) || isNaN(denominator)) {
        throw new Error("Denominator or denominator is not a number");
    }
    return numerator/denominator;
}

try {
    console.log(divide(10, 2));
}
catch (error) {
    console.error(error.message);
}
finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(13, 0));
}
catch (error) {
    console.error(error.message);
}
finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(7, "two"));
}
catch (error) {
    console.error(error.message);
}
finally {
    console.log("Робота завершена");
}