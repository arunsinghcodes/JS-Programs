// callback hamesa ak function hota hai ye yaad rkho tm
// Callback function hota hai jisko hm as a argumnet pass ker rhe hote hai
// HOD (Higer order function) waisa function hota hai ki apne ander ek function(yani ku callback) le rha hota hai.

// Example: 01
// function hod(name, callback){
//     callback(name);
// }

// function printName(name){
//     console.log("Hello, ", name);
// }

// Example:02

// hod("Arun Kumar Singh", printName);

// function calculate(a, b, callback) {
//   callback(a, b);
// }

// function add(a, b) {
//   console.log(a + b);
// }

// function substract(a, b) {
//   console.log(a - b);
// }

// function multiply(a,b) {
//   console.log(a * b);
// }

// calculate(2,3, add);
// calculate(2,3, substract);
// calculate(4,5, multiply);
