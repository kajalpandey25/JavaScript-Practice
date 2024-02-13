// Accessing Dom Elements

// let itemOne = document.getElementsByClassName('item-one');
// console.log(itemOne);

// let itemTwo = document.getElementById('item-2');
// console.log(itemTwo);

// let itemsList1 = document.getElementsByTagName('div');
// console.log(itemsList1);

// let itemOne_1 = document.querySelector('#item-1');
// console.log(itemOne_1);

let itemList2 = document.querySelectorAll('.item');
console.log(itemList2);

itemList2.forEach((element)=>{
    console.log(element);
});

let itemList2Arr1 = Array.from(itemList2)
console.log(itemList2Arr1);

let itemList2Arr2 = [...itemList2];
console.log(itemList2Arr2);

