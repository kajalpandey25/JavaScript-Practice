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
