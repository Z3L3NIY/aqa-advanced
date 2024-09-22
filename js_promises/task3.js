async function getTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const todoPromise = getTodo();
const userPromise = getUser();

const promiseAll = Promise.all([todoPromise, userPromise]);
const promiseRace = Promise.race([todoPromise, userPromise]);

promiseAll.then(result => console.log(result));
promiseRace.then(result => console.log(result));