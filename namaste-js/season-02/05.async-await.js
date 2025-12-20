/*

What is async?
what is await?
How async-await works behind the scenes?
Example of using async-await
Error Handling in async-await
Interview Questions

Async-await vs Promises.then/.catch

*/

// Async awalys functions return a promise
// Await makes JavaScript wait until that promise settles and returns its result

// Example of using async-await

// async function fetchData() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchData();

// this is example of retrurning value from async function, this value will be wrapped in promise
async function example() {
  return "Hello, Async-Await!";
}

const dataPromises = example();
console.log(dataPromises); // Promise { 'Hello, Async-Await!' }

dataPromises.then((data) => {
  console.log(data); // Hello, Async-Await!
});

// this is example of returning promise from async function, the same promise will be returned
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved!");
  }, 2000);
});

async function asyncFunction() {
  return p;
}

asyncFunction().then((data) => {
  console.log(data); // Promise Resolved!
});

// how to to use asyn-await with together with combo,

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 Resolved!");
  }, 2000);
});

// without async-await 
function getData() {
  promise1.then((data) => {
    console.log(data); // Promise 1 Resolved!
  });
}

getData();

// with async-await this is cleaner
async function getDataAsync() {
  const data = await promise1;
  console.log(data); // Promise 1 Resolved!
}

getDataAsync();

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 Resolved!");
  }, 3000);
});

async function fetchAllData() {
  const result1 = await promise1;
  console.log(result1); // Promise 1 Resolved!

  const result2 = await promise2;
  console.log(result2); // Promise 2 Resolved!
}

fetchAllData();


// await keyword can only be used inside async functions
// If you try to use await outside of an async function, you'll get a syntax error
