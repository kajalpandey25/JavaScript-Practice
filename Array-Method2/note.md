Iterate: forEach =>
The arr.forEach method allows to run a function for every element of the array.

The syntax:
arr.forEach(function(item, index, array) {
  // ... do something with item
});


Searching in array =>
Now let’s cover methods that search in an array.

indexOf/lastIndexOf and includes:-

The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

1. arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.

2. arr.includes(item, from) – looks for item starting from index from, returns true if found.


find and findIndex/findLastIndex =>
Imagine we have an array of objects. How do we find an object with the specific condition?

<!-- find method  -->
Here the arr.find(fn) method comes in handy.

The syntax is:
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});

=> The function is called for elements of the array, one after another:

item is the element.
index is its index.
array is the array itself.
Note => If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.


<!-- findIndex method -->
The arr.findIndex method has the same syntax, but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

<!-- findLastIndex method -->
The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.


filter => The find method looks for a single (first) element that makes the function return true.

If there may be many, we can use arr.filter(fn).

The syntax is similar to find, but filter returns an array of all matching elements:
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});


Transform an array =>
Let’s move on to methods that transform and reorder an array.

1. map =>
The arr.map method is one of the most useful and often used.

It calls the function for each element of the array and returns the array of results.

The syntax is:
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});


sort(fn) =>
The call to arr.sort() sorts the array in place, changing its element order.

It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.

1. A comparison function may return any number =>
Actually, a comparison function is only required to return a positive number to say “greater” and a negative number to say “less”.

2. Arrow functions for the best ->
Remember arrow functions? We can use them here for neater sorting:

arr.sort( (a, b) => a - b );
This works exactly the same as the longer version above.

3. Use localeCompare for strings =>
Remember strings comparison algorithm? It compares letters by their codes by default.

For many alphabets, it’s better to use str.localeCompare method to correctly sort letters, such as Ö.