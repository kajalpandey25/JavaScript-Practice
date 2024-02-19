
// ----------------- Iterate:forEach-----------------

// The syntax:
// arr.forEach(function(item, index, array) {
//   // ... do something with item
// });

// for each element call alert
// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// Example-1
// let arr = [0,1,2,3,4,5];
// arr.forEach(function(item, index, array){
// console.log(`${item} is at index: ${index}`);
// });

// // for each element call alert
// arr.forEach(alert);


// -----------------Searching in array-------------------
let Arr = [0,1,2,3,4,5,10];

// Using arr.includes
console.log(Arr.includes(3)); // true
console.log(Arr.includes(8)); // false 

// Using arr.indexOf
console.log(Arr.indexOf(1)); // 1
console.log(Arr.indexOf(100)); // -1

// Using arr.lastIndexof
console.log(Arr.lastIndexOf(10)); // 6
console.log(Arr.lastIndexOf(15)); // -1
