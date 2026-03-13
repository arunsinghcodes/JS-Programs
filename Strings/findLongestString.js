/*
let str = "I Love JavaScript Programing Language";

output = "Programing"

*/

let str = "I Love JavaScript Programming Language";

let words = str.split(" ");
let longest = words[0];

console.log(words);

for (let word of words) {
  if (word.length > longest.length) {
    longest = word;
  }
}

console.log(longest);


