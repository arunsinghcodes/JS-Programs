// write the start patterns
// to build the logic of building block or memory block
// here what is mostly use here like loops only that makes thinks workig
// this is not going to ask any interview not at all but where it is going to ask like TCS, infoys etc
// but the is the most important part here to build logic and full understanding how loops works here.

// most of the patterns works with  nested loops  nothing else most of time

// the two loops are basically outer loop and inner loop here

// -> outloop for lines

/**
 *
 * outer loops is these lines
 *    ->*****
 *    ->*****
 *    ->*****
 *    ->*****
 *
 * inner  loops is these lines
 *    |||||
 *    *****
 *    *****
 *    *****
 *    *****
 */

// pattern 1

/**
 
* * * * * *
* * * * * *
* * * * * *
* * * * * *

 */

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5; j++) {
    row = row + "*";
  }
  console.log(row);
}

console.log("Pattern: 2");

/**
  
*
**
***
****
*****
******
*******

 
 */

{
  for (let i = 0; i < 7; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
