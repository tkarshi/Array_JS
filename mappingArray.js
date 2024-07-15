let people = [
  {
    id: 1,
    name: "John",
    age: 30,
  },
  {
    id: 2,
    name: "Anne",
    age: 40,
  },
  {
    id: 1,
    name: "Ken",
    age: 50,
  },
];

// function map(array, transform) {
//   let mapped = [];
//   for (let element of array) {
//     mapped.push(transform(element));
//   }
//   return mapped;
// }

// console.log(map(people, (p) => p.name));

console.log(people.map((p) => p.name));
