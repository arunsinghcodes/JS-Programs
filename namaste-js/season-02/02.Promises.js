// const promise = new Promise((resolve, reject) => {
//   const isAuthenticated = false;
//   if (isAuthenticated) {
//     resolve("Logged in sucessfully!");
//   } else {
//     reject("You are not authenticated");
//   }
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let's understand the promises

const cart = [
  { name: "Apple", price: 120 },
  { name: "Banana", price: 60 },
  { name: "Orange", price: 140 },
];

// createOrder(cart); 
// orderId: 1232 => This will give to us here and these api is ayncronus we dont know how much it's going to take time to complete the order

// const promsie = createOrder(cart);

// {data: undefined} => with data value undefined at initially after some time it will fill with actual data later in the time.
// {data: orderDetails} with data value

// Here we attaching the callback function to the promise object here

// promise.then((orderId) =>{
//     console.log("Order created successfully with orderId: orderId");
//     proccedToPayment(orderId)
// })

const GITHUB_URL = "https://api.github.com/users/arunsinghcodes";

const users = fetch(GITHUB_URL);

console.log(users); // Output: Promise {<pending>}


result.then(response => {
    // console.log(response.json()); // Output: Response object
    return response.json(); // Return a promise that resolves to the JSON data
}).then(data =>{
    console.log(data); // Output: Parsed JSON data from the response
})

/*
 
promise =>
    A promise is an object that represents the eventual completion or failure of an asynchronous operations and it's resulting value.

Prototype => Promise.prototype.then
PromiseState => "Pending" | "fulfilled" | "Rejected"
PromiseResult => "undifined" | "value" | "error"

Createing a promise
Error handling in promise
Promise Chaining

*/





