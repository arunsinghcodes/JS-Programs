// Encoding and decoding URLs in JavaScript
// This module provides functions to encode and decode URLs in JavaScript.  

/**
 * 
 * use encodeURIComponent to encode a URL string.
 * This is useful for ensuring that special characters in the URL are properly encoded. 
 * 
 * use decodeURIComponent to decode a URL string.
 * This is useful for converting encoded characters back to their original form.
 * 
 */

const url = new URL('https://example.com/path?name=arun&city=New%20York');
const encodedUrl = encodeURIComponent(url.href);
console.log(encodedUrl); // Outputs: "https%3A%2F%2Fexample.com%2Fpath%3Fname%3Darun%26city%3DNew%2520York"
const decodedUrl = decodeURIComponent(encodedUrl);
console.log(decodedUrl); // Outputs: "https://example.com/path?name=arun&city=New York"
console.log(url.searchParams.get('city')); // Outputs: "New York"
console.log(url.searchParams.get('name')); // Outputs: "arun"
console.log(url.toString()); // Outputs: "https://example.com/path?name=arun&city=New%20York"
console.log(url.href); // Outputs: "https://example.com/path?name=arun  &city=New%20York"
console.log(url.origin); // Outputs: "https://example.com"
console.log(url.pathname); // Outputs: "/path"
console.log(url.port); // Outputs: ""
console.log(url.protocol); // Outputs: "https:"
console.log(url.search); // Outputs: "?name=arun&city=New%20York"
console.log(url.hash); // Outputs: ""
console.log(url.host); // Outputs: "example.com"
console.log(url.hostname); // Outputs: "example.com"
console.log(url.toString()); // Outputs: "https://example.com/path?name=arun&city=New%20York"
console.log(url.searchParams.toString()); // Outputs: "name=arun&city=New%20York"
console.log(url.searchParams.get('name')); // Outputs: "arun        "               