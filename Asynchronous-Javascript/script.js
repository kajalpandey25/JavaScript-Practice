//  Synchronous

// function syncFunction1(){
//     console.log(1);
// }

// function syncFunction2(){
//     console.log(2);
// }
// function syncFunction3(){
//     console.log(3);
// }

// syncFunction1();
// syncFunction2();
// syncFunction3();

// The statements above will execute in order , outputing
// -> 1
// -> 2
// -> 3
// That's because it's written synchronously.

// Asynchronous

// function syncFunction1() {
//   console.log(1);
// }

// function asyncFunction2() {
//   setTimeout(function () {
//     // aTimeConsumingProcess();
//     console.log("async: " + 2);
//   }, 1000);
// }

// function syncFunction2() {
//   console.log(2);
// }
// function syncFunction3() {
//   console.log(3);
// }

// // event loop / taskque

// syncFunction1();
// syncFunction2();
// syncFunction3();
// asyncFunction2();

// callback
// function processUserInput(first_name, last_name, callback) {
//   var into_text = "Hi, I am " + first_name + " " + last_name + " ";

//   callback(into_text);
// }

// processUserInput("Kajal", "Pandey", function (a) {
//   console.log(a);
// });

// let value = 1;

// function doSomething(callback) {
//   // Simulating an asynchronous operation
//   setTimeout(() => {
//     value = 2;
//     callback();
//   }, 1000); // Simulating a 1-second delay
// }

// doSomething(() => {
//   console.log("Callback executed");
// });

// console.log(value); // This might output 1 before the asynchronous operation completes


// promises
// Example asynchronous function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation, e.g., fetching data from an API
    setTimeout(() => {
      const success = true; // Simulate success or failure

      if (success) {
        const data = { message: "Data fetched successfully!" };
        resolve(data); // Resolve the promise with the data
      } else {
        const error = new Error("Failed to fetch data");
        reject(error); // Reject the promise with an error
      }
    }, 2000); // Simulate a 2-second delay
  });
}

// Using the Promise
fetchData()
  .then((result) => {
    console.log(result.message); // Output: Data fetched successfully!
  })
  .catch((error) => {
    console.error(error.message); // Output: Failed to fetch data
  });
