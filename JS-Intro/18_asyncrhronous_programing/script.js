// this synchrouns program is here

console.log("Program is startig here");

console.log("Some operation is going one");

// for(let i = 0; i<=50000; i++){
//     console.log("task", i)
// }

console.log("Program is ended here");


// asynchrouns program

console.log("Stat task");

setTimeout(()=>{
    console.log("Doing some task here")
}, 3000)

setTimeout(()=>{
    console.log("Kapde dhul gye");
}, 7000);

setTimeout(()=>{
    console.log("Chawal Ban gye");
}, 3000);

setTimeout(()=>{
    console.log("Sabji ban gya hai")
},6000);

console.log("Task Ended");


/**
 * 
 * 
 * Callbacks
 * 
 * Callback Hell
 * 
 * Promises
 * 
 * promises Chaining
 * 
 * Async Await
 * 
 * 
 */

//=> All indian mothers are by default asynchronus in nature

//=> JavaScript is by default synchronus in nature.


/**
 * 
 * 
 * 
 * Feature ======>  Synchronous =======> Asynchronous
 * Execution flow.   Line by line.        Skip long tasks, come back later
 * Blocking           Yes                 No
 * Use cases.        Simple Task, calculations.    API Calls, DB Queries, Timmers
 * 
 * 
 */


