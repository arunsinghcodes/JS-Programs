import axios from "axios";

// While POST call diff with them

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "New Post",
    body: "This is new POST",
    userId: 2323,
  }),
})
  .then((repsonse) => repsonse.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error.message));

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "New Post with Axois",
    body: "This is new with Axois",
    userId: 23233,
  })
  .then((repsonse) => console.log(repsonse.data))
  .catch((error) => console.error("Error:", error.message));
