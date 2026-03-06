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

const users = [
  {firstName: "Arun", lastName: "Singh", age: 26},
  {firstName: "Smii", lastName: "Singh", age: 25},
  {firstName: "Narendra", lastName: "Modi", age: 75},
  {firstName: "Amit", lastName: "Saha", age: 80},
  {firstName: "Doland", lastName: "Trump", age: 80},
]

const output = users.reduce(function(acc, curr) {
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age]
  }else{
    acc[curr.age] = 1;
  }
  return acc;
},{})


console.log(output);