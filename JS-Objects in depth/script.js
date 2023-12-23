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
function createCircle(radius) {
  return {
      radius: radius,
      calculateArea: function() {
          return Math.PI * Math.pow(this.radius, 2);
      }
  };
}

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.calculateArea = function() {
      return Math.PI * Math.pow(this.radius, 2);
  };
}

// Example usage with the factory function
const circle1 = createCircle(5);
console.log("Circle 1 Area:", circle1.calculateArea());

// Example usage with the constructor function
const circle2 = new Circle(7);
console.log("Circle 2 Area:", circle2.calculateArea());
