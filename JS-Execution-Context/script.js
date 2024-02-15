var firstName = 'Kajal';
var lastName = "Pandey";

function getFullName(){

}

var getFirstName = function(){

}

var getLastName = function(){

}


// creation phase
function sayName(){
    console.log('Name:', myVar);

    function sayAge(){
        myVar= 22;
        console.log('Age:', myVar);
    }
    sayAge();
}

var myVar = "Kajal";
sayName();
console.log(myVar);