// constructing  URLs Dynamically in JavaScript
// This module provides functions to construct URLs dynamically in JavaScript.  

/**
 * Combine the URL and fetch for makeing API requests.
 * 
 * 
 */


const base = 'https://api.example.com';
const endpoint = '/api';
const  query = {id: '123', type: 'user'};

const url = new URL(`${base}${endpoint}`);

Object.entries(query).forEach(([key, value]) => {
  url.searchParams.set(key, value);
});

console.log(url.toString()); // Outputs: "https://api.example.com/api?id=123&type=user" 