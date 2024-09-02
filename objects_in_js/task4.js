const person = {
    firstName: "some_name",
    lastName: "some_surname",
    age: 665
};
person.email = `${person.firstName}_${person.lastName}${person.age}@gmail.com`;
delete person.age;
console.log(person);