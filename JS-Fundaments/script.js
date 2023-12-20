//  Variables
// 3 ways to declare a varoables - var, let, const

// var firstName; // Declaretion and auto-initialization
// firstName = "Kajal"; //Assignment
// console.log(firstName);

// Primitives type
// let myVar;
// // myVar = "Kajal";
// // myVar = 35;
// // myVar = true;
// // myVar = null;
// myVar = 35;
// console.log(typeof(myVar));
// console.log(myVar);

// Non Primitives type

// 1. Object
// user1
// let firstName = "Kajal";
// let lastName = "Pandey";
// let favSubject = "Javascript";

// function sayUserDetails(){
//     console.log(`$(firstName) $(secondName) loves $(favSubject)`);
// }

// user2
// let firstName1 = "Khushi";
// let lastName1 = "Pandey";
// let favSubject1 = "Typescript";

// let user = {
//     firstName : "Kajal",
//     secondName : "Pandey",
//     favSubject : "Javascript",
//     sayUserDetails: function(){
//         console.log(`${this.firstName} ${this.secondName} loves ${this.favSubject}`);
//     }
// }

// user.sayUserDetails();


// Array 

// let myArr = [
//     'Kajal',
//     30,
//     true,
//     false,
//     {greet: 'Hello'},
//     ['one', 'two'],
//     null,
//     undefined
// ]
// console.log(myArr);


// Function

// function greet(name, greeting){
//     console.log(`${greeting} from ${name}`);
// }

// greet('Kajal', 'Hello!');

// Operators

// let x = 10;
// console.log(x++);
// console.log(++x);
// console.log(x);

// console.log(x+=5);
// console.log(x-=5);

// let x = 10;
// let y = "10";

// console.log(typeof x , typeof y);
// console.log(x === y);

// let marks= 100;
// let state = marks > 50 ? 'pass' : 'fail';
// console.log(state);


let HTML = true;
let CSS = false;
let JS = true;

// advanced skills
let React = true;
let Angular = false;
let Vue = false;

let isJuniorDeveloper = HTML && CSS && JS;
let isSeniorDeveloper = React || Angular || Vue;

// if they are not junior && they are not sernior they are rejected
// let isRejected = !isJuniorDeveloper && !isSerniorDeveloper;

// not (either junior or sernior) they are rejected
let isRejected = !(isJuniorDeveloper || isSeniorDeveloper);

console.log('isJuniorDeveloper: ', isJuniorDeveloper);
console.log('isSeniorDeveloper: ', isSeniorDeveloper);
console.log('isRejected: ', isRejected);

// Return Falsey value
// Examples =:
let a = false;
let b= 0;
let c = null;

let z = a || b || c;
console.log(z); // null

// Return Truthy value
let A1 = false;
let B1= true;
let C1 = "Kajal";

let Z = A1 || B1 || C1;
console.log(Z); // Kajal

let x1 = "Kajal";
let y1 = "Sonam";
let z1 = "Ambuj"
// let y1 = null;
// let z1 = 0;

let Z1 = x1 && y1 && z1;
console.log(Z1);







