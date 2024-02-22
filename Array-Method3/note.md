reverse =>
The method arr.reverse reverses the order of elements in arr.



split and join =>
Here’s the situation from real life. We are writing a messaging app, and the person enters the comma-delimited list of receivers: John, Pete, Mary. But for us an array of names would be much more comfortable than a single string. How to get it?

The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.

Split into letters =>
The call to split(s) with an empty s would split the string into an array of letters:


Arr.join => The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.


reduce/reduceRight =>
When we need to iterate over an array – we can use forEach, for or for..of.

When we need to iterate and return the data for each element – we can use map.

The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.

The syntax is:
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);

Arguments:

1. accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
2.ite m – is the current array item.
3. index – is its position.
4. array – is the array.

note => The method arr.reduceRight does the same, but goes from right to left.


Array.isArray =>
Arrays do not form a separate language type. They are based on objects.

-> So typeof does not help to distinguish a plain object from an array:

Note => …But arrays are used so often that there’s a special method for that: Array.isArray(value). It returns true if the value is an array, and false otherwise.



Most methods support “thisArg” =>
Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept an optional additional parameter thisArg.

That parameter is not explained in the sections above, because it’s rarely used. But for completeness we have to cover it.

Here’s the full syntax of these methods:

arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg is the optional last argument

The value of thisArg parameter becomes this for func