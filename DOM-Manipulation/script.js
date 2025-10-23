console.log("Hello, World");

/*
5 Phase of DOM manipulation

1. DOM ✅
2. Selection of HTML element ✅
3. How to change or manipulate HTML 
4. CSS -> how we can change the css with JavaScript
5. Event lister (How to lissten the event)

What is DOM?
Document object model


*/

// this the way of selecting the DOM
let h1 = document.querySelector("h1");

// Here we are change the content
let innerHTML = h1.innerHTML = "I am doing DOM Manipulation";
console.log("innerHTML",innerHTML)
let textContent = h1.textContent = "Hello from the textContent";
console.log("textContent",textContent)

console.log(h1);

let b = document.querySelector("p");

console.log(b)