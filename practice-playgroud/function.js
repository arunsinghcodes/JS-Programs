var x = 1;
fnOne();
fnTwo();
console.log(x);

function fnOne(){
    var x = 10;
    console.log(x);
}

function fnTwo(){
    var x = 100;
    console.log(x);
}

// Function Statement AKA Function Declaration
function a(){
    console.log("A Called!!");
}

// Function Expression : here function act like a value 

let funExp = function(){
    console.log("This is function expression!!");
}


// ========= above both are ways to create the functions 

// What is the differnce between them that is hositing 

// Function Declaration
// Anonymous Function -> Function without a name is called the Anonymous function
// Where we use this anonymous function used as value when we needed that time we use the anonymous function

// function (){

// }

// Named Function Expression
// like we are giving the name the anonymous functions

let namefunExp = function xyz(params1, params2){
    console.log("This is function expression!!");
}

namefunExp(args1, args);

// Difference between Paramenters And Arguments
// First Class Functions
// Arrow Functions
