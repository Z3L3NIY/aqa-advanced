let averageGrade = 42;

if(0 <= averageGrade && averageGrade < 60) {
    console.log("Незадовільно");
}  else if (70 >= averageGrade && averageGrade >= 60) {
    console.log("Задовільно");
} else if (80 >= averageGrade && averageGrade >= 71) {
    console.log("Добре");
} else if (90 >= averageGrade && averageGrade >= 81) {
    console.log("Дуже добре");
} else if (100 >= averageGrade && averageGrade >= 91) {
    console.log("Відмінно");
} else {
    console.log("Value is not in 0-100 range");
}