/*
Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
Зробіть деструктуризацію в циклі
*/
const arrUsers = [
    {
        name: "some_name", 
        email: "some_name@gmail.com", 
        age: 665
    },
    {
        name: "another_name", 
        email: "another_name@gmail.com", 
        age: 21
    },
    {
        name: "third_name", 
        email: "third_name@gmail.com", 
        age: 9999
    }
];

for (const user of arrUsers) {
    console.log(user);
}

for (const { name, email, age } of arrUsers) {
    console.log(`Name: ${name}, email: ${email}, age: ${age}`);
  }