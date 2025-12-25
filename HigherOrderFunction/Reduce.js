// when we need reduce where the we wanted some sort calucation or single value in this case we can use it

const ages = [23, 34, 14, 34, 44, 34, 35];

const sumAge = ages.reduce((acc, curr, arr) => {
  return (acc + curr);
}, 0);

console.log(sumAge);

// avgAge
const avgAge = ages.reduce((acc, curr, arr) => {
  return (acc + curr);
}, 0)/ ages.length;

console.log(avgAge);


// Find the max value in array

const values = [10, 50, 20];

const maxValue = values.reduce((acc, curr)=>{
    return curr > acc ? curr : acc;
 }, values[0]);


 console.log(maxValue);

//  let's dry run

//  steps  acc curr return
// start.   10.  -    -
// 10.      10   10  10
// 50       10   50  50
// 20       50   20  50