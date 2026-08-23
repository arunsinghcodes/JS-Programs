async function example() {
  return "Hello, Async-Await";
}

const dataPromises = await example();

console.log(dataPromises);

example()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
