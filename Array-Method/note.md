Array Method => Array provide a lot of methods.
To make things easier, in this chapter they are split into groups.

-> Add/remove items
We already know methods that add and remove items from the begining or the end:

1. arr.push(...items) - add items to the end

2. arr.pop() - extracts an items from the end

3. arr.shift() - extracts an items from the begining

4. arr.unshift(...items) - adds items to the begining


 here are a few others.

Splice => 
How to delete an elements from the array?
The array are objects, so we can try to use delete:

The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

The syntax is:
arr.splice(start[, deleteCount, elem1, ..., elemN])
It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.
