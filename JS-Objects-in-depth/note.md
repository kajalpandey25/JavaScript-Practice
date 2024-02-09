JS - Objects in depth 

Contain properties [key-value pairs]. Value can be of any type including primitives, objects, functions and arrays.

-> call(), apply()& bind()

1. What is call() & apply()?

In js call() & apply() executes the function and binds the (this) of the function to the first arguments of the call().

2. What is the diff b/w call() & apply()?

for arguments of the function in call() we pass comma-separated values but in apply() we pass in an array of the arguments.

3. What is the diff b/w call/apply vs bind?

In call/apply, the this is bound and the function is immediately called but in bind we bind the this keyword of the function and we get back a new function & it is not immediately executed.


4. Value vs Reference

Value Types: Number, string, boolean, undefined, null, symbol
Reference Types: object, function & array

note -> Primitives are copied by their value & Objects are copied by their reference.


5. Methods of object constructor

1. Object.keys -> Give us an array of all the properties of an object.
 2. Object.values
 3. Obkect.entries
 4. in keyword
 5. Object.assign


6. Built-in Object in javascript

Math, Sting, Date

1. Math => Math is a built-in object that has properties and method for mathematical constants and functions. Math is not a constructor. All properties and method of Math are static & we do not need to use the new keyword to use Math.

2. String => The String object is used to represent and manipute a sequence of characters. String can be created as perimitive, from string literals, or as objects, using the String() constructor.


3. Date => The Date() constructor creates Date objects. When called as a function, it returns a string representing the current time.

<!-- To get dates, you can use these four methods  -->

1. getFullYear
2. getMonth
3.getDate
4.getDay


-> JS- Essential ES6(2015+)

1. Arrow functions => An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:



