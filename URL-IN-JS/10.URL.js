// URL path Normalization in JavaScript
// This module provides functions to normalize URL paths in JavaScript. 

/**
 * 
 * Use libraries like path or URL APIs for consitent paths.
 * 
 * 
 */

const url = new URL('https://example.com/path/../path2/./resource');
console.log(url.pathname); // Outputs: "/path2/resource"    