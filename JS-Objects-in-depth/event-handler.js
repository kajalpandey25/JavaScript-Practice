let grandparent = document.querySelector(".grandparent");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");


grandparent.addEventListener('click', function(e){
    console.log('Grandparent clicked 1');
    console.log(e.target);
    // grandparent.style.color = "red";
})
parent.addEventListener('click', function(e){
    console.log('Parent clicked 1');
    // console.log(e.target);
    // e.stopPropagation();
    // e.preventDefault();
    e.stopImmediatePropagation();
    // parent.style.color = "blue";
})

child.addEventListener('click', function(e){
    console.log('Child clicked 1');
    // console.log(e.target);
    // child.style.color = "red";
})

parent.addEventListener('click', function(e){
    console.log('Parent clicked and handled again');
    // console.log(e.target);
    // e.stopPropagation();
    // e.preventDefault();
    // e.stopImmediatePropagation();
    // parent.style.color = "blue";
})