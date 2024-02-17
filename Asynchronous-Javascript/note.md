Synchronous => A bunch of code statements in sequence.

-> Each statement in our code is executed one after the other.
-> Each statement has to wait for the previous one to finish executing.

ASynchronous => Here comes the power of Asynchronicity. To simulate an asynchronous-non-blocking behavior, we can use a webAPI method called setTimeout().


setTimeout() takes in a function as an argument and runs it in an asynchronous-non-blocking way!.

so, now the function2 does not block the function3 from getting executed.

Event loop => 
JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.


Callback => The function processUserinput() is defined with a parameter intended for callback.

some sort of processing happens inside the function. In our case an into text is formed.

And once the processing is done, the callback function is invoked. 

Promises=>
1. Much cleaner way to handle asynchronous operations in js.
2. It's easier to manage and reason than nested callbacks.
3. It provides better & intuitive flow of controls in an asynchronous logic.
4. Provides a better way to handle errors.

note => As soon as we invoke a function that returns a promise, we get back a promise object immediately.

A Promise can be in one of three states:

1. Pending: The initial state; the promise is neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully, and the promise has a resulting value.
3. Rejected: The operation failed, and the promise has a reason for the failure.

Summary =>
1. A chain of then's are useful when data of one promise is required to invoke an another promise.

2. Promise.all for all or nothing use cases.

3. Promise.allSettled to run multiple unreleted.

4. Promise.race if we need the first one to win be it fullfilled or rejected.

5. Promise.any if we need the first fulfilled one to win.
