function sum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let output = sum(2, 3);

console.log(output);

let outputFnStore = sum;

console.log(outputFnStore(2, 3));

// What is a first-class-object or first class citizen

// a language is said to have first class functions if functios can be treated just like any other value (number, string, object etc)

// Pass a function as an argument

function sayHello() {
  console.log("Hello");
}

function execute(fn) {
  fn();
}

execute(sayHello);

// Since function are first-class, you can pass them to another function and return is form it

// Map function itrate each every element return is new element from it right
const arr = [1, 2, 3, 4];

const result = arr.map(function (num) {
  return num * 2;
});

console.log(result);

const filterOutput = arr.filter(function (num) {
  return num < 3;
});

console.log(filterOutput);

// Return a function from another function

function outer() {
  return function () {
    console.log("Inside inner");
  };
}

const fn = outer();

fn();

// Store functions inside the object

const obj = {
  name: "Arun",
  greet: function () {
    console.log(this.name);
  },
};

obj.greet();

// Why is this useful
// Because of first-class functions, javaScript supports powerful concepts like;

// callbacks
setTimeout(() => {
  console.log("After 2 seconds");
}, 2000);

// Higher order functions

function calculate(a, b, opration) {
  return opration(a,b);
}

function add(a, b) {
  return a + b;
}

console.log(calculate(2, 3, add));

// That's what first-class functions mean: functions are treated like ordinary values and can be assigned, passed, returned, and stored just like numbers or strings.
