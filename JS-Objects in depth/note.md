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



