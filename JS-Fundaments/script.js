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

// let HTML = true;
// let CSS = false;
// let JS = true;

// // advanced skills
// let React = true;
// let Angular = false;
// let Vue = false;

// let isJuniorDeveloper = HTML && CSS && JS;
// let isSeniorDeveloper = React || Angular || Vue;

// // if they are not junior && they are not sernior they are rejected
// // let isRejected = !isJuniorDeveloper && !isSerniorDeveloper;

// // not (either junior or sernior) they are rejected
// let isRejected = !(isJuniorDeveloper || isSeniorDeveloper);

// console.log('isJuniorDeveloper: ', isJuniorDeveloper);
// console.log('isSeniorDeveloper: ', isSeniorDeveloper);
// console.log('isRejected: ', isRejected);

// // Return Falsey value
// // Examples =:
// let a = false;
// let b= 0;
// let c = null;

// let z = a || b || c;
// console.log(z); // null

// // Return Truthy value
// let A1 = false;
// let B1= true;
// let C1 = "Kajal";

// let Z = A1 || B1 || C1;
// console.log(Z); // Kajal

// let x1 = "Kajal";
// let y1 = "Sonam";
// let z1 = "Ambuj"
// // let y1 = null;
// // let z1 = 0;

// let Z1 = x1 && y1 && z1;
// console.log(Z1);

// if ...else

// let marks = 85;

// // marks < 50 : fail
// // marks 51-70 : C
// // marks 71-80 : B
// // marks 81-100 : A

// if (marks < 50) {
//   console.log("fail");
// } else if (marks >= 50 && marks <= 70) {
//   console.log("C Grade");
// } else if (marks >= 71 && marks <= 80) {
//   console.log("B Grade");
// } else {
//   console.log("A Grade");
// }

// Switch ...case

// let skillLevel = "advanced"; // beginner, intermediate, advanced, expert

// switch (skillLevel) {
//   case "beginner":
//     console.log(45000);
//     break;

//   case "intermediate":
//     console.log(75000);
//     break;
//   case "advanced":
//     console.log(100000);
//     break;

//   default:
//     console.log(150000);
//     break;
// }

// For Loop

// for (let i = 0; i < 5; i++) {
//   console.log("Hello Kajal!");
// }

// while loop
// let i = 0;
// while (i < 5) {
//   console.log("Hello World");
//   i++;
// }

// example-> In the console, log all odd numbers in between 1-10

// for(let i = 1; i<= 10; i++){
//     if(i%2 !==0){
//         console.log(i);
//     }
// }

// do ...while loop

// let i = 0; // external loop counter

// do{
//     if(i % 2 !==0){
//         console.log(i); //Statement executed at least once
//     }
//         i++; // increment expression
//     } while (i <= 20) ; // condition expresion

// For ..in loop with object

// const student = {
//     firstName: 'Kajal',
//     rank: 1,
//     age: 22
// }

// for(let key in student){
//     console.log(key);
//     console.log(student[key]);
// }

// For ..in loop with arrays

// const subjects = ['Javascript', 'html', 'css', 'c++'];

// for(let index in subjects){
//     console.log(index);
//     console.log(subjects[index]);
// }

// for ..of

const subjects = ["Javascript", "html", "css", "c++"];

for (let subject of subjects) {
  console.log(subject);
}

// break
let i = 1;
while (i <= 10) {
  if (i === 7) {
    break; // jump out of the loop
  }

  if (i === 2) {
    i++;
    continue; // jump out of the iteration
  }
  console.log(i);
  i++;
}
