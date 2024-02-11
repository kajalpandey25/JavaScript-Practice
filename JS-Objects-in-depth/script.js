// 1.Grouping related variables

// let account = {
//     name: 'kajal',
//     type: 'Simple Sovling',
//     balance: 10000,
//     active: true,
// }

// 2. Adding & removing properties and methods after creating an object(dynamic objects)
// Add property using(.)
// account.newPropertyOne = "Something";
// Add property using([])
// account['newPropertyTwo'] = "Anything";

// delete property
// delete account.type;
// delete account['active']

// console.log(account);

//3. Passing into a function as an argument
// can be passes to a function as an arguments

// let account = {
//     name: 'kajal',
//     type: 'Simple Sovling',
//     balance: 10000,
//     active: true,
// }
// function printAccountDetails(obj) {
//     console.log('Name:', obj.name, 'Type: ', obj.type, 'Active: ', obj.active, 'Balance: ', obj.balance);

// }
// printAccountDetails(account);

// 4. Objects can store functions with their associated data.

// let Account = {
//     name: 'Sonam',
//     type: 'Simple Sovling',
//     balance: 5000,
//     active: true,
//     print: function (){
//       console.log('Name: ', this.name, 'Type: ', this.type, 'Active: ', this.active, 'Balance: ', this.balance);
//     }
// };
// Account.print();

// As our application grows, we need diff ways to create obj. How to create multiple accounts? For example.

// function createAccount(accountName, accountType, accountBalance, isActive){
//     let account1 = {
//         name: accountName,
//         type: accountType,
//         balance: accountBalance,
//         active: isActive,
//         print: function (){
//             console.log('Name: ', this.name, 'Type: ', this.type, 'Active: ', this.active, 'Balance: ', this.balance);
//           }

//     }
//     return account1;
// };

// const acc1 = createAccount('Kajal', 'Saving', 10000, true);
// console.log(acc1);
// acc1.print();

// const acc2 = createAccount('Khushi', "Premium", 20000, true);
// console.log(acc2);
// acc2.print();

// Factory Functions:-
// A factory function is a design pattern in programming that is used to create objects.

// problems with this factory function: if we have 5000 user obj, we have 5000 copies of the print() function.

// function createUsers(firstName, lastName){
//   let user = {};

//   user.firstName = firstName;
//   user.lastName = lastName;

//   user.sayFullName = function(){
//     console.log(firstName, lastName);
//   }
//   return user;
// }

// let user1 = createUsers('Kajal', 'Pandey');
// console.log(user1);
// user1.sayFullName();

// let user2 = createUsers('Sonali', 'Pandey');
// console.log(user2);
// user2.sayFullName();

// Constructor function(new):

// function Account(accountName, accountType, accountBalance, isActive) {
//   // let this = {}
//   this.name = accountName;
//   this.type = accountType;
//   this.balance = accountBalance;
//   this.active = isActive;
//   this.print = function(){
//     console.log('Name: ', this.name, 'Type: ', this.type, 'Active: ', this.active, 'Balance: ', this.balance);
//   }
//   // return this
// }

// const acc1 = new Account('Kajal', 'Saving', 10000, true);
// const acc2 = new Account ('Sonam', 'Premium', 20000, true);

// console.log(acc1);
// console.log(acc2);
// acc1.print();
// acc2.print();

// Exercise: Create a factory function & a construction function that creates a circle Object, takes in radius , and gives us a method to print the area of the circle.

// Factory Function
// function createCircle(radius) {
//   return {
//       radius: radius,
//       calculateArea: function() {
//           return Math.PI * Math.pow(this.radius, 2);
//       }
//   };
// }

// // Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.calculateArea = function() {
//       return Math.PI * Math.pow(this.radius, 2);
//   };
// }

// // Example usage with the factory function
// const circle1 = createCircle(5);
// console.log("Circle 1 Area:", circle1.calculateArea());

// // Example usage with the constructor function
// const circle2 = new Circle(7);
// console.log("Circle 2 Area:", circle2.calculateArea());

// call(), apply() & bind()
// function sayHello(favSubject, favFood) {
//   console.log('Hello from', this.name);
//   console.log('I love', favSubject, '&', favFood);
// }

// sayHello.call({name:'Kajal'}, 'Maths', 'Pizza');

// sayHello.apply({name:'Kajal'}, ['Computer', 'Momos']);

// const sayHelloToSwapnil = sayHello.bind({name: 'Swapnil'});
// sayHelloToSwapnil('JavaScript', 'Sweets');

// Value vs Reference

// let x = 10;
// let y = x; // value copied by value

// x = 20;

// console.log('x: ', x); //20
// console.log('y: ', y); //10

// let a = {value: 10};
// let b = a; //Object copied by reference

// b.value = 20;

// console.log('a: ', a); // {value: 20}
// console.log('b: ', b); // {value: 20}

// Methods of object constructor
// 1. Object.keys
// let obj = {x: 1, y: 2}

// console.log(Object.keys(obj));

// // 2. Object.values

// console.log(Object.values(obj));

// // 3. Object.entries

// console.log(Object.entries(obj));

// // in keyword

// console.log(('x' in obj));

// Object.assign

// let obj1 = {x: 1, y: 2}

// let obj2 = {};

// Object.assign(obj2, obj1);
// console.log(obj2);

// Built-in function
// 1. Math

// console.log(Math.floor(45.99995)) //45
// console.log(Math.ceil(7.004)); //8
// console.log(Math.max(1,3,2)); //3
// console.log(Math.min(2,3,1)); //1
// console.log(Math.PI); // 3.141592653589793

// function getRandomIntInclusive(min,max){
//     min = Math.ceil(min);
//     max= Math.floor(max);
//     return Math.floor(Math.random() * (max+min+1) + min);
// }

// 2. String

// console.log("This is a string"); // This is a string
// console.log(String("this is a string")); // this is a string
// console.log(new String("a new string")); // String {'a new string'}

// method

// String1.length;
// String1.inclusion();
// String1.startsWith();
// String1.endsWith();
// String1.indexOf();
// String1.replace();
// String1.toUpperCase();
// String1.toLowerCase();
// String1.trim();
// String1.split();

// let str1 = "Math, Science, English";
// console.log(str1.split(",  "));
// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());
// console.log(str1.length);
// console.log(str1.includes("English"));
// console.log(str1.startsWith("Math"));
// console.log(str1.endsWith("English"));
// console.log(str1.indexOf());
// console.log(str1.trim());

// 3. Date

// const date1 = new Date('December 17, 1995 03:24:00');
// // Sun Dec 17 1995 03:24:00 GMT...

// const date2 = new Date('1995-12-17T03:24:00');
// // Sun Dec 17 1995 03:24:00 GMT...

// console.log(date1 === date2);
// // Expected output: false

// console.log(date1 - date2);
// // Expected output: 0

// syntax

// new Date()
// new Date(value)
// new Date(dateString)
// new Date(dateObject)

// new Date(year, monthIndex)
// new Date(year, monthIndex, day)
// new Date(year, monthIndex, day, hours)
// new Date(year, monthIndex, day, hours, minutes)
// new Date(year, monthIndex, day, hours, minutes, seconds)
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

// Date()

// const now = new Date();
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toISOString());

// const date1 = new Date('Sep 09 2021 11:15');
// const date2 = new Date(2021, 0, 10, 11, 0);

// Arrow Functions

// Regural function
// function greet(greeting, name) {
//   return `${greeting}, from ${name}`;
// }
// console.log(greet('Hello', 'Khushi'));

// Arrow function
// let newGreet = (greeting, name)=>{
//     return `${greeting}, from ${name}`;
// }
// console.log(newGreet('Hello', 'Kajal'));

// Object shorthand

// const UserData = (name, email)=>({
//     name,
//     email
// })

// let vs const vs var

// function scopeTest() {
//   var outerVar = "outer var";
//   let outerLet = "outer let";

//   if (true) {
//     var innerVar = "inner var"; // function scoped
//     let innerLet = "inner let"; // block scope
//   }

//   console.log(innerVar);
//   console.log(innerLet);
// }

// scopeTest();


// const 

// const user = {
//     name:'Kajal'
// }

// user.name = "Khushi";
// console.log(user);

// const users = ['a', 'b', 'c']
// users.push('d');
// console.log(users);

// Rest operator

// function doSomething(first, second, ...rest) {
//   console.log(first, second, rest);    
// }

// doSomething('one', 'two', 'three', 'four', 'five');

// Spread operator

// let arr = [1,3,5,7,9];
// console.log(...arr);

// let user = {
//     firstName : 'Kajal',
//     lastName:'Pandey'
// }
// console.log({
//     ...user, fullName:`${user.firstName} ${user.lastName}`
// });


//  Destructuring Arrays and Objects 

// const arr = [1,3,5,7,9];
// // const [first, second, ...rest] = arr;
// // console.log(first, second, rest);

// let first = arr[0];
// let second = arr[1]
// console.log(first, second);

let user = {
    firstName: 'Kajal',
    lastName:'Pandey', 
    age:38,
    posts:[
        {title: 'Post 1', comments: 10},
        {title: 'Post 2', comments: 11}
    ]
}

// const {firstName: first, lastName, age-40, ...rest} = user;
// console.log(first, lastName, age, rest);