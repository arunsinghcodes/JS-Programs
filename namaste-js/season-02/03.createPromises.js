// In this episode we will talk about how to create the promises

// Creating the promises
// Error handling
// Promises Chaining

// Home work there are 4 aync methods createOrder , proccedToPayment , showOrderSummary, updateWallet

const cart = [
  { name: "Apple", price: 120 },
  { name: "Banana", price: 60 },
  { name: "Orange", price: 140 },
];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((error) => {
    console.log(error.message);
  });

function validateCart() {
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
      setTimeout(() => {
        resolve(`Pls note your orderId for future reffernce ${orderId}`);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId) {
      resolve("Payment is successfully recived!");
    } else {
      reject(new Error("Unbale to procced payment!!"));
    }
  });
}
