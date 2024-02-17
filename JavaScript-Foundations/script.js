let developers_array = [
  {
    first: "Kajal",
    last: "Pandey",
    dept: "Full-Stack",
    commite: 10,
  },
  {
    first: "Khushi",
    last: "Pandey",
    dept: "Frontend",
    commite: 8,
  },
  {
    first: "Sonam",
    last: "Tiwari",
    dept: "Backend",
    commite: 12,
  },
];

// .map()
// let mapped_array = developers_array.map(function (item){
//     return `${item.first} ${item.last} ${item.dept} ${item.commite}`;
// })
// console.log(mapped_array);

// .filter()
// let filter_array = developers_array.filter(function(item){
//     return item.dept === "Full-Stack"
// });
// console.log(filter_array);

// .reduce()
let reduce_array = developers_array.reduce(
  function (acc, item) {
    item.dept === "Backend"
      ? acc.Backend.push(item.first)
      : acc.Frontend.push(item.first);
    return acc;
  },
  { Frontend: [], Backend: [] }
);

console.log(reduce_array);

// Example: Summing up elements in an array using reduce
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0); // 0 is the initial value for the accumulator

// console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

// Example: Concatenating strings in an array using reduce
// const words = ["Hello", " ", "World", "!"];

// const concatenatedString = words.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, "");

// console.log(concatenatedString); // Output: Hello World!
