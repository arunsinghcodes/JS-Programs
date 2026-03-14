// Manual Error Handling in fetch

import axios from "axios";

fetch("https://jsonplaceholder.typicode.com/invalid-url")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log("Inside .then");
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error.message));

axios
  .get("https://jsonplaceholder.typicode.com/invalid-url")
  .then((response) => console.log(response.data))
  .catch((error) => {
    console.error("Axios Error: ", error.response?.status);
  });
