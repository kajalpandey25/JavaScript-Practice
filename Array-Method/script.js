
// Array 

// let arr = [1,2,3,4,5];

// console.log(arr);  // find the whole elements
// console.log(arr[0]); // find the 1st elements 
// console.log(arr[4]); // find the last elements
// console.log(arr.length);  //find the length of array

// arr.push(6);
// console.log(arr.push(6));
// arr.pop();
// arr.shift()
// arr.unshift(0)
// console.log(arr);


// How to delete an elements from the array?
// The array are objects, so we can try to use delete:

// let Arr = ["I", "Go", "Home"];
// delete Arr[1]; // remove "go"
// console.log(Arr);

// alert(Arr[1]) ; // undefined

// // now Arr = ["I", "Home"];
// alert(Arr.length); //3

// We don't use delete method in array because the elements was removed , but the array still has 3 elements, we can see that arr.length == 3.


// splice 
// It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

// This method is easy to grasp by examples.

// Let’s start with the deletion:

// example-1
// let arr2 = [10,20,30,40,50,60];

// arr2.splice(1, 2); // from index 1 remove 2 element
// alert( arr2 ); // [10,40,50,60]
// console.log(arr2);

// example -2
// let arr3 = ["I", "study", "JavaScript", "right", "now"];

// // remove 3 first elements and replace them with another
// arr3.splice(0, 3, "Let's", "dance");

// alert( arr3 ) // now ["Let's", "dance", "right", "now"]
// console.log(arr3);

// example-3
// let arr4 = [0,1,2,3,4,5];
// arr4.splice(1,2, "kajal", "rani", "sonam");
// alert(arr4);
// console.log(arr4);

// Here we can see that splice returns the array of removed elements:

// let Array = ["I", "study", "JavaScript", "right", "now"];

// // remove 2 first elements
// let removed = Array.splice(0, 2);

// alert( removed ); // "I", "study" <-- array of removed elements
// console.log(Array);

// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

// example-1
// let Array2 = ["I", "study", "JavaScript"];

// // from index 2
// // delete 0
// // then insert "complex" and "language"
// Array2.splice(2, 0, "complex", "language");

// alert( Array2 ); // "I", "study", "complex", "language", "JavaScript"
// console.log(Array2);


// example-2

// let enjoy = ["I", "Am", "Going", "To","Shopping", "Mall"];
// enjoy.splice(4,0, "Very", "Big");
// alert(enjoy);
// console.log(enjoy);


// Negative indexes allowed:-
// Here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, like here:

let myArr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
myArr.splice(-1, 0, 3, 4);

alert( myArr ); // 1,2,3,4,5
console.log(myArr);