function getTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json()
        })
        .then(todo => todo)
        .catch(error => console.error(error));
}

function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json()
        })
        .then(user => user)
        .catch(error => console.error(error));
}

const todoPromise = getTodo();
const userPromise = getUser();

const promiseAll = Promise.all([todoPromise, userPromise]);
const promiseRace = Promise.race([todoPromise, userPromise]);

promiseAll.then(result => console.log(result));
promiseRace.then(result => console.log(result));