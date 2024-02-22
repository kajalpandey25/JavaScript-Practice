// -------------------reverse-------------------
let arr = [1, 2, 3, 4, 5];
arr.reverse();

console.log(arr); // 5,4,3,2,1

let student = ["Kajal", "Sonam", "Lovely", "Khushi"];
student.reverse();
console.log(student);



// --------------------split and join--------------------------

let str = "John, Mary, Pete";
str.split(", ")
console.log(str);

let names = 'Bilbo, Gandalf, Nazgul';

let arr1 = names.split(', ');

for (let name of arr1) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}

// The split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:

let arr2 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr2); // Bilbo, Gandalf
console.log(arr2);


// ------------------- split into letters -----------------------

let str1 = "my name is kajal pandey";
console.log(str1.split(""));

// ----------------- arr.join---------------------

let Arr = ["Kajal", "Abhi", "Khushi", "Atharva"];
console.log(Arr.join('--')); //  glue the array into a string using ;


// -------------------- reduce / reduceRight ---------------------

let Arr1 = [1, 2, 3, 4, 5];

let result = Arr1.reduce((sum, current) => sum + current, 0);

console.log(result); // 15

// ----------------------Array.isArray---------------------
console.log(typeof{});
console.log(typeof[]);
console.log(typeof(""));
console.log(typeof(5));
console.log(typeof(true));

// Array.isArray
console.log((Array.isArray({}))); // false
console.log((Array.isArray([]))); // true



// --------------------------Most methods support “thisArg”-----------------------------

// For example, here we use a method of army object as a filter, and thisArg passes the context:

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };
  
  let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];
  
  // find users, for who army.canJoin returns true
  let soldiers = users.filter(army.canJoin, army);
  
  console.log((soldiers.length)); // 2
  console.log((soldiers[0].age)); // 20
  console.log((soldiers[1].age)); // 23