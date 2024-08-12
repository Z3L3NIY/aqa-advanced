let averageGrade = 42;

switch (true) {
	case (0 <= averageGrade && averageGrade < 60):
		console.log("Незадовільно");
		break;
	case (70 >= averageGrade && averageGrade >= 60):
        console.log("Задовільно");
		break;
    case (80 >= averageGrade && averageGrade >= 71):
        console.log("Добре");
	    break;
    case (90 >= averageGrade && averageGrade >= 81):
        console.log("Дуже добре");
        break;
    case (100 >= averageGrade && averageGrade >= 91):
        console.log("Відмінно");
        break;
	default:
		console.log("Value is not in 0-100 range");
}