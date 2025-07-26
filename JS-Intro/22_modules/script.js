// this is common js way to import the file.
// we can give any name to this variable.
// const { name, age, sum, multiply, divide } = require("./utility/math.js");
// const age = require("./math.js");

import { multiply, divide } from "./utility/math.js";




// console.log(name);
// console.log(age);
// console.log(sum(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));