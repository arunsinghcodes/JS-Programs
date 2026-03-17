// fetch vs axios Differnce

import axios from "axios";

// fetch requires .json() to parse the response.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// Axios Automatically parse JSON
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => console.log(response.data))
  .catch((error) => console.log("Error:", error));
