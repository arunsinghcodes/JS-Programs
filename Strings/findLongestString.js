/*
let str = "I Love JavaScript Programing Language";

output = "Programing"

*/

// Pure without using builtIn Methods
 
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

// BuiltIn methods

let result = str.split(" ").reduce((longestWord, current) => {
  return current.length > longestWord.length ? current : longestWord;
});

console.log(result);
