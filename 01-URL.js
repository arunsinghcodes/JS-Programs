// creating and parsing URLs in JavaScript
// This module provides functions to create and parse URLs in JavaScript.

const url = new URL('https://example.com/path?name=arun');

console.log(url.hash); // Outputs: ""
console.log(url.host); // Outputs: "example.com"
console.log(url.hostname); // Outputs: "example.com"
console.log(url.href); // Outputs: "https://example.com/path?name=arun"
console.log(url.origin); // Outputs: "https://example.com"
console.log(url.pathname); // Outputs: "/path"
console.log(url.port); // Outputs: ""
console.log(url.protocol); // Outputs: "https:"
console.log(url.search); // Outputs: "?name=arun"
console.log(url.searchParams.get('name')); // Outputs: "arun"
console.log(url.toString()); // Outputs: "https://example.com/path?name=arun"   