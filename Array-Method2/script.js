// ----------------- Iterate:forEach-----------------

// The syntax:
// arr.forEach(function(item, index, array) {
//   // ... do something with item
// });

// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// Example-1
let arr = [0,1,2,3,4,5];
arr.forEach(function(item, index, array){
console.log(`${item} is at index: ${index}`);
});

// for each element call alert
arr.forEach(alert);

// -----------------Searching in array-------------------
let Arr = [0, 1, 2, 3, 4, 5, 10];

// Using arr.includes
console.log(Arr.includes(3)); // true
console.log(Arr.includes(8)); // false

// Using arr.indexOf
console.log(Arr.indexOf(1)); // 1
console.log(Arr.indexOf(100)); // -1

// Using arr.lastIndexof
console.log(Arr.lastIndexOf(10)); // 6
console.log(Arr.lastIndexOf(15)); // -1

// The includes method handles NaN correctly
const Arr1 = [NaN];
alert(Arr1.indexOf(NaN)); // -1 (wrong, should be 0)
alert(Arr1.includes(NaN)); // true (correct)

// -------------------------find and findIndex/findLastIndex-----------------------------

// find method
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);

alert(user.name); // John

// findIndex method
// Find the index of the first John
let student = [
    {id: 1, name: "Kajal"},
    {id: 2, name: "Lovely"},
    {id: 3, name: "Rani"},
    {id: 4, name: "Kajal"}
  ];

  // Find the index of the first John
  alert(student.findIndex(user => user.name == 'Kajal')); // 0

  // Find the index of the last John
  alert(student.findLastIndex(user => user.name == 'Kajal')); // 3

//   -------------------filter---------------------

let emp = [
    {id: 1, name: "Komal"},
    {id: 2, name: "Abhi"},
    {id: 3, name: "Khushi"}
  ];

  // returns array of the first two users
  let someUsers = emp.filter(item => item.id < 3);

  alert(someUsers.length); // 2

//   Transform an array
//---------------Map method  -----------------------

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

let sqArr = [0,1,2,3,4,5].map(function(item){
    return item*item
});
console.log(sqArr); // 0,1,4,9,16,25

let plusOneArr = [10,20,30,40].map(function(item){
    return item+1;
});
console.log(plusOneArr); // 11,21,31,41

// --------------------- sort------------------------------

let a = [0, 11, 22, 2, 5, 6, 10, 50];

// The method reorders the content of a
a.sort();
alert(a); // 0,10,11,2,22,5,50,6
console.log(a);

let b = ["c", "b", "d", "a"];
b.sort();
alert(b); // a,b,c,d
console.log(b);

// Did you notice anything strange in the outcome?

// The order became 0,10,11,2,22,5,50,6. Incorrect. But why?

// The items are sorted as strings by default.

// Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "2" > "11".

// To use our own sorting order, we need to supply a function as the argument of arr.sort().

// The function should compare two arbitrary values and return:

// function compare(a, b) {
//   if (a > b) return 1; // if the first value is greater than the second
//   if (a == b) return 0; // if values are equal
//   if (a < b) return -1; // if the first value is less than the second
// }

let compareNum = [0, 11, 22, 2, 5, 6, 10, 50];
compareNum.sort(function (a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
});
console.log(compareNum);

let student1 = [
  { id: 5, score: 75, name: "Sonam" },
  { id: 9, score: 99, name: "Lovely" },
  { id: 2, score: 100, name: "Kajal" },
  { id: 1, score: 90, name: "Sonali" },
];

student1.sort((a, b) => {
  if (a.id > b.id) return 1;
  if (a.id === b.id) return 0;
  if (a.id < b.id) return -1;
});
console.log(student1);
student1.sort((a, b) => {
  if (a.score > b.score) return 1;
  if (a.score === b.score) return 0;
  if (a.score < b.score) return -1;
});
console.log(student1);


// --------------------A comparison function may return any number-------------------------
let d = [ 1, 2, 15 ];

d.sort(function(a, b) { return a - b });
console.log(d);

// -----------------------Arrow functions for the best-------------------------
let A = [0,5,6,9,2];
A.sort((a,b) => a-b);
console.log(A);

// --------------------------Use localeCompare for strings---------------------------

let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)
console.log(countries);

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)
console.log(countries);
