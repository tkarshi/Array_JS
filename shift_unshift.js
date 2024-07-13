let todolist = [];

function remember(task) {
  todolist.push(task);
}

remember("Task 1");
remember("Task 2");
remember("Task 3");

console.log(todolist);

//get the first added task

// function getTask() {
//   return todolist.shift();
// }

// console.log(getTask());
// console.log(todolist);
// console.log(getTask());
// console.log(todolist);

//add the task in the first position

function addFirst(task) {
  todolist.unshift(task);
}

addFirst("Task 4");

console.log(todolist);
