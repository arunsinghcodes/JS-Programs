// shortening  Longs URLs in JavaScript
// This module provides functions to shorten long URLs in JavaScript.   

const longUrl = 'https://example.com/path/to/resource?query=long&with=multiple&parameters=that&make=it&very=long';


// use api like Bitly or TinyURL to shorten long URLs
// Here, we simulate the shortening process by truncating the URL.
function shortenUrl(url) {
    if (url.length > 50) {
        return url.slice(0, 20) + '...';
    }
    return url;
}   

console.log(shortenUrl(longUrl)); // Outputs: "https://example.com/path/to/resource?query=long&with=multiple&parameters=that&make=it&very..."