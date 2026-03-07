/*

Function Currying in JavaScript is a technique where a function that normally takes multiple arguments is transformed into a series of functions, each taking one argument at a time.

Instead of calling a function with all parameters at once, you call a chain of functions, each supplying the next argument.

*/

/*
Currying converts a function with multiple arguments into a sequence of functions that take one argument at a time. It helps with partial application, code reuse, and function composition, which are important concepts in functional programming.
*/

const multiply = (x,y) =>{
    return x * y;
}

console.log(multiply(2,3));

const multiplyWithCurry = x => y => {
return x * y
}

console.log(multiplyWithCurry(2)(3));

// Ex
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(add(2)(3)(4)); // 9