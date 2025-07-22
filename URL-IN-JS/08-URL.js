// making the api request with the URL constructor and fetch API
// This module provides functions to construct URLs dynamically in JavaScript.  

/**
 * Combine the URL and fetch for makeing API requests.
 * 
 * 
 */

const url = new URL('https://example.com/data');
url.searchParams.set('id', '123');

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
console.log(url.href); // Outputs: "https://example.com/data?id=123"

// This demonstrates how to construct a URL with query parameters for an API request.
// The URL is dynamically built using the URL constructor and URLSearchParams.
// The fetch function is then used to make a request to the constructed URL, which can be
// useful for API calls or other network requests.
// The URL is logged to the console, showing the complete URL with query parameters.
// This approach is useful for dynamically constructing URLs based on user input or application state.
// The URL constructor and URLSearchParams make it easy to build and manipulate URLs in a structured way.
// This is particularly useful in web applications where URLs may need to be constructed based on user actions
// or application logic.
// The example shows how to set query parameters using the URLSearchParams API, which is a          



