// Extracting URL components from a URL string
// This module provides functions to extract components from a URL string.

/**
 * 
 * Retrieves parts like port, protocol, host, and pathname from a URL.
 * 
 */

const url = new URL('https://example.com:8080/path?name=arun#section1');
console.log(url.port); // Outputs: "8080"
console.log(url.protocol); // Outputs: "https:"
console.log(url.host); // Outputs: "example.com:8080"
console.log(url.pathname); // Outputs: "/path"                  