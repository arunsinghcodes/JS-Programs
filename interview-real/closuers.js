function outer() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const fn = outer();

console.log(fn());
console.log(fn());
console.log(fn());

// Questions:

// Why does count persist?
// --- The count variable persists because the inner function forms a closure that holds a live reference to count, not just a static snapshot of its value
// What is a closure?
// Where is count stored?