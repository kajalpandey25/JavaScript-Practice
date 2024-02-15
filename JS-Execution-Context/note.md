Execution Context->
1. Whenever a code runs in js, it runs inside an execution context.
2. The execution context is a wrapper to help manage the code that is running.
3. An execution context can contain things beyond what you have written in your code like a (global)object, the this variable, and a reference to the outer (lexical) variables environment.

-> Any code outside a function is in the global scope.
-> Variables and functions written in the global scope, sits on the global object.

===> The Execution context has two phases

1. CREATION PHASE: The code is parsed line by line. Grammar of your code is validated, scops are setup & variable and function declarations are initialized in the memory as a key-value pair.

2. EXECUTION PHASE: The real assignment and axecution happens at this phase.


NOTE==>
1. Return from a function, return the control of the program to the place where the function was invoked.

2. The scope chain is formed based on the lexical scope, meaning the place where the variable.