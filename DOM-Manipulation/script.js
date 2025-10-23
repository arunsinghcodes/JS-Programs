console.log("Hello, World");

/*
5 Phase of DOM manipulation

1. DOM ✅
2. Selection of HTML element ✅
3. How to change or manipulate HTML ✅
4. CSS -> how we can change the css with JavaScript 
5. Event lister (How to lissten the event)

What is DOM?
Document object model


*/

// this the way of selecting the DOM
let h1 = document.querySelector("h1");

h1.addEventListener("mouseenter", () => {
  h1.style.backgroundColor = "red";
  h1.style.cursor = "pointer";
  console.log("Added the event listener on the h1 tag");
});

h1.addEventListener("mouseleave", () => {
  h1.style.backgroundColor = "green";
  console.log("Added the event listener on the h1 tag");
});

h1.style.backgroundColor = "green";

// Here we are change the content
let innerHTML = (h1.innerHTML = "I am doing DOM Manipulation");
console.log("innerHTML", innerHTML);
let textContent = (h1.textContent = "Hello from the textContent");
console.log("textContent", textContent);

console.log(h1);

let b = document.querySelector("h2");
b.style.backgroundColor = "yellow";

console.log(b);

// Event listener

const btn = document.getElementById("callBtn");
function btnCall() {
  btn.addEventListener("click", (event) => {
    console.log("Hello");
  });
}

let box = document.getElementById("box");

let magicBtnExpand = document.getElementById("magicBtnExpand");
let magicBtnShrink = document.getElementById("magicBtnShrink");

magicBtnExpand.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
  box.style.scale = "1.0";
});

magicBtnShrink.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
  box.style.scale = "0.5";
});
