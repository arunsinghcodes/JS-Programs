// Manipulating URLs in JavaScript
// This module provides functions to manipulate URLs in JavaScript.

/**
 * Access, add, or modfiy  query parameters in a URL with URLSearchParams.
 */

const url = new URL('https://example.com/path?name=arun');
console.log(url.searchParams.get('name')); // Outputs: "arun"
url.searchParams.set('name', 'john');
console.log(url.searchParams.get('name')); // Outputs: "john"
url.searchParams.append('age', '30');
console.log(url.searchParams.toString()); // Outputs: "name=john&age=30"
url.searchParams.delete('age');
console.log(url.searchParams.toString()); // Outputs: "name=john"   