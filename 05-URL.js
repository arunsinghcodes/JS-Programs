// Handling relative URLs in JavaScript
// This module provides functions to handle relative URLs in JavaScript.        

/**
 * 
 * use URL constructor to resolve relative URLs against a base URL.
 * This is useful for converting relative paths to absolute URLs.
 * 
 */

const baseUrl = 'https://example.com/path/';

const relativeUrl = new URL('subpath/resource', baseUrl);
console.log(relativeUrl.href); // Outputs: "https://example.com/path/subpath/resource"