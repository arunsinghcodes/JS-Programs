// Manual AbortController in fetch where Automatically timeout

import axios from "axios";

const controller = new AbortController();
const timeout = setTimeout(() => controller.abort, 3000);

fetch("https://jsonplaceholder.typicode.com/posts", {
    signal: controller.signal
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Timeout or Error:", error));


  clearTimeout(timeout);


axios
  .get("https://jsonplaceholder.typicode.com/posts", {
    timeout: 3000
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log("Timeout or Error:", error.message));
