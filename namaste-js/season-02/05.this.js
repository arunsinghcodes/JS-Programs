"use strict";
// What is strict mode mean?
/*
In JavaScript, strict mode is a special mode that makes the language more stricter and safer by catching common mitstake and preventing some bad practices.

Why use Strict Mode?

Strict mode helps you:

Catch errors earlier

Write cleaner, more secure code

Avoid confusing JavaScript behaviors

Example of strict mode:

1. Prevent using undeclared variables
Without strict mode:
x = 10; // This will create a global variable

With strict mode:
"use strict";
x = 10; // This will throw an error because x is not declared -> x is not defined

2. Makes errors visible instead of silent
"use strict";
NaN = 5; // ❌ Error (was silent before)

3. Prevents duplicate function parameters
"use strict";
function sum(a, a, c) { // ❌ Error
  return a + a + c;
}


4. Changes how this behaves

In normal mode:

function show() {
  console.log(this); // window (in browser)
}
show();


In strict mode:

"use strict";
function show() {
  console.log(this); // undefined
}
show();

Where should you use it?

Modern JavaScript modules already use strict mode automatically

Older scripts should include it manually

You can apply it per file or per function


This helps avoid bugs caused by unexpected global objects

*/

// the is gloable space

console.log(this); // global Object == window in browsers, global in Node.js


// this inside function
function myFunc() {
  console.log(this); // undefined in strict mode, global object in non-strict mode
}
myFunc();

// if the value of this  keyword is undefined and null
// this keyword will be replaced with global object
// only in non-strict mode
// this substitution does not happen in strict mode

// this is called borrowing methods form the another object
const obj1 = {
  name: "Arun Singh",
  greet: function () {
    console.log("Hello " + this.name); // Arun Singh
  },
};

obj1.greet();

const obj2 = {
  name: "Namaste JavaScript",
};

obj1.greet.call(obj2); // Hello Namaste JavaScript

// obj2.greet = obj1.greet; // Method Borrowing

// obj2.greet(); // Hello Namaste JavaScript
