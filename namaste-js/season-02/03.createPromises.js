// In this episode we will talk about how to create the promises

// Creating the promises
// Error handling
// Promises Chaining

const cart = [
  { name: "Apple", price: 120 },
  { name: "Banana", price: 60 },
  { name: "Orange", price: 140 },
];

const promise = createOrder(cart); // This will return the orderId

promise.then(function (orderId) {
    console.log(orderId)
//   proceedToPayment(orderId);
});

function validateCart(){
    return true;
}

// producer part
function createOrder() {
  const pr = new Promise(function (resolve, reject) {
    // here we will write to create the logic of create the order api

    // createOrder
    // validateCart
    // orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = "12345";

    if (orderId) {
      resolve(orderId);
    }
  });

  return pr;
}
