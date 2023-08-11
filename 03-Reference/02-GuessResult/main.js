const user = { name: 'Jack', role: 'ADMIN' };
const admin = { name: 'Jack', role: 'ADMIN' };
console.log(user === admin); // * false

const todo = {
    task: 'Do hw',
    complete: 'false',
    due_date: '13-08-2023',
};

const newTodo = new Object(todo)
// let newTodo = {}

// for(let x in todo) {
//     newTodo[x] = todo[x]
// }
// console.log(newTodo)

let newTodo2 = {}

Object.assign(newTodo2, todo)

console.log(newTodo2)
