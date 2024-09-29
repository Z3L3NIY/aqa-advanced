function calculateRectangleArea(width, height) {
	return width * height;
}

let rectangleAreaFD = calculateRectangleArea(5, 10);

console.log("Rectangle Area: " + rectangleAreaFD);

const rectangleAreaFE = function (width, height) {
	return width * height;
};

console.log("Rectangle Area: " + rectangleAreaFE(3, 15));

const rectangleAreaAFE = (width, height) => {
	return width * height;
};

console.log("Rectangle Area: " + rectangleAreaAFE(20, 20));
