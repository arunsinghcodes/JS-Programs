// common js

// let name = "alpha";
// let age = 25;

// function sum(a, b){
//     return a + b;
// }

// this is common js way to export the name or functions from this file.
// module.exports = {name, age};
// module.exports = age;// this will override this 
// this is called default export

// module.exports = {
//     name, age , sum
// }

// this is old way of doing before 2015 before the ES6 came into the picture.

// In CommonJS, "exports" is shorcut for module exports.

// this is mordern way of exporting the file.
export const multiply = (a,b) => a *b;
export const divide = (a,b) => a % b;