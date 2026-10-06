// 1. Object.freeze vs Object.seal

let person1 = {
  name: "Arun",
  age: 27,
};

let person2 = {
  name: "Rahul",
  age: 34,
};

person1 = Object.freeze(person1);
person2 = Object.seal(person2);

person1.age = 31;
person2.age = 43;

person1.location = "US";
person2.location = "UK";

console.log(person1.location, person1.age);
console.log(person2.location, person2.age);

// 4. typeof with Arrow Functions

function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());

// 5. Sparse Arrays
const numbers = [1, 2, 3];
numbers[10] = 11;

console.log(numbers);

// Explanation
// JavaScript creates empty slots between index 3 and 9.

// This is called a sparse array.

var b = 1;

if (true) {
  function a() {}
  var b = 10;
}

console.log(b);
