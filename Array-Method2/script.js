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