/*
These are the promises api's when ever we wanted to do the parallel api call we use generally


Promise.all - done
Promise.allSettled - done
Promise.race
Promise.any




*/

// =========================================== Start ==============================================

// if all the promises are resloved.
// if any one of the promise is rejected then the entire promise will be rejected
// it will give the array of results of all the promises
// it will wait for all the promises to be resolved
// it is used when we wanted to do the parallel api call and we wanted all the api call to be successful
// it is used when we wanted to aggregate the results of multiple api calls

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve("P1 resolved"), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject("P2 resolved"), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve("P3 resolved"), 6000)),
// ]).then((results) => {
//   console.log("Promise.all results:", results);
// });

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve("P1"), 3000)),
// ]).then((result) => console.log("Promise.all results", result));

// if any one of the promises is rejected then the all the promise is rejected
// it will give the error of the first rejected promise
// it will not wait for the other promises to be resolved or rejected
// it will immediately reject the all promise when any one of the promise is rejected
// it is used when we wanted to fail fast mechanism
// it is used when we wanted to do the parallel api call and if any one of the api call is failed then we wanted to fail the all api call
// The out will be the same error as P2 rejected

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve("P1 resolved"), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => reject("P2 rejected"), 4000)),
//   new Promise((resolve) => setTimeout(() => resolve("P3 resolved"), 6000)),
// ]).then((results) => {
//   console.log("Promise.all results:", results);
// }).catch((error) => {
//   console.log("Promise.all error:", error);
// });

// =========================================== End ===============================================

// =========================================== Start ==============================================

// if we wanted to know the status of all the promises whether they are resolved or rejected
// it will give the status of all the promises
// it will wait for all the promises to be settled either resolved or rejected
// it will give the array of objects with status and value or reason

Promise.allSettled([
  new Promise((resolve) => setTimeout(() => resolve("P1 resolved"), 2000)),
  new Promise((_, reject) => setTimeout(() => reject("P2 rejected"), 4000)),
  new Promise((resolve) => setTimeout(() => resolve("P3 resolved"), 6000)),
]).then((results) => {
  console.log("Promise.allSettled results:", results);
});

// =========================================== End ===============================================

// =========================================== Start ==============================================

// if we wanted the result of the first resolved promise
// it will give the result of the first resolved promise
// it will not wait for the other promises to be resolved or rejected
// it is used when we wanted to get the fastest response from multiple api calls
// it is used when we wanted to do the parallel api call and we wanted the first successful api call result
// it is used in scenarios like fetching data from multiple mirrors and using the fastest one
// it is also used in scenarios like loading resources from multiple CDNs and using the first one that responds
// it is also used in scenarios like implementing timeout for an API call by racing the API call against a timeout promise
// it is also used in scenarios like fetching data from multiple sources and using the first one that responds
// it is also used in scenarios like implementing fallback mechanisms by racing primary and secondary API calls
// it is also used in scenarios like optimizing user experience by loading content from multiple sources and using the fastest one
// it will help in reducing latency by utilizing multiple sources and using the first one that responds
// it will help in improving reliability by providing fallback options in case of failures
// it will help in enhancing performance by leveraging multiple sources for faster response times
// it will help in achieving better user experience by minimizing wait times and providing quicker access to content
// it will help in optimizing resource utilization by distributing requests across multiple sources and using the fastest one
// it will help in implementing robust error handling by providing alternative options in case of failures
// it will help in achieving higher availability by utilizing multiple sources and ensuring continuous access to content
// it will help in improving scalability by distributing requests across multiple sources and handling increased load effectively
// it will help in enhancing flexibility by allowing dynamic selection of sources based on response times
// it will help in achieving better fault tolerance by providing multiple options for data retrieval
// it will help in optimizing network usage by minimizing redundant requests and utilizing the fastest source
// it will help in achieving better overall system performance by leveraging multiple sources for data retrieval
// it will help in improving user satisfaction by providing quicker access to content and minimizing wait times
// it will help in achieving better business outcomes by enhancing user experience and optimizing resource utilization

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => reject("P1 reject"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject("P2 reject"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject("P3 reject"), 6000)),
]).then((result) => {
  console.log("Promise.race result:", result);
});

// if we wanted the result of the first fulfilled promise
// it will give the result of the first fulfilled promise
// it will not wait for the other promises to be resolved or rejected
// it is used when we wanted to get the fastest successful response from multiple api calls
// it is used when we wanted to do the parallel api call and we wanted the first successful api call result
// it is used in scenarios like fetching data from multiple mirrors and using the fastest one
// it is also used in scenarios like loading resources from multiple CDNs and using the first one that responds

// Promise.race([
//   new Promise((resolve) => setTimeout(() => resolve("P1 resolved"), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve("P2 resolved"), 4000)),
//   new Promise((resolve, reject) => setTimeout(() => reject("P3 rejected"), 6000)),
// ]).then((result) => {
//   console.log("Promise.race result:", result);
// });

// =========================================== End ===============================================

// =========================================== Start ==============================================

// if all the promises are rejected then the entire promise is rejected
// it will give the error of the first rejected promise
// it will not wait for the other promises to be resolved or rejected
// it is used when we wanted to fail fast mechanism for fulfilled promises
// it is used when we wanted to do the parallel api call and if all the api call is failed then we wanted to fail the all api call  \
// it is used in scenarios like fetching data from multiple sources and using the first one that responds successfully

// if all the promises got reject it will give aggregateErros
// Promise.any([
//   new Promise((_, reject) => setTimeout(() => reject("P1 rejected"), 2000)),
//   new Promise((_, reject) => setTimeout(() => reject("P2 resolved"), 4000)),
//   new Promise((_, reject) => setTimeout(() => reject("P3 resolved"), 6000)),
// ]).then((result) => {
//   console.log("Promise.any result:", result);
// });

// it will wait for first setelled success value
// Promise.any([
//   new Promise((_, reject) => setTimeout(() => reject("P1 rejected"), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve("P2 resolved"), 4000)),
//   new Promise((_, reject) => setTimeout(() => reject("P3 rejected"), 6000)),
// ]).then((result) => {
//   console.log("Promise.any result:", result);
// });

// setTimeout(() => {
//   resolve(`Payment processed for orderId: ${orderId}`);
// }, 3000);
