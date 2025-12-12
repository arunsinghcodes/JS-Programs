console.log("Namaste");

// console.log("JavaScript");

console.log("Season 2");

// JavaScript is single thread programing language, It excutes one task at a time.

// let suppose it wanted to perform the asyncronus operation like i wanted to print this JavaScript after the 5sec

// this can be done with the help of callBacks

setTimeout(function () {
  console.log("JavaScript");
}, 5000);

// let's create the cart of the e-commerce application

const cart = ["shoes", "pants", "kurta"];

/*

0. CreateOrder API
1. proceedToPayment API
2. showOrderSummay API
3. updateWallet API

*/

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function(){
        api.updateWallet(function(){
            console.log("Order completed successfully!!")
        })
    });
  });
});

// This structure is called callback hell and payamid of doom.
// Inversion of controll is a desgin principle that helps  to avoid callBack hell by technique like promise or async/await
