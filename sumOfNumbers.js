// Calculate sum of first ‘n’ numbers.

const sumOfNumbers = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
};

console.log(sumOfNumbers(10));


// what we are doing here like 

// creating the function

// here we need to have some variable to store the value do what we did here

// have some value at inital that is zero ok then

// took the for loop what we are doing here we have initilazed the vale with zero and took the conditon till n value and doing increment after each
// and every itration

// i = 0 => 0 <= 10 => sum = 0 + 0; so i = 0 and sum = 0;
// i = 1 => 1 <= 10 => sum = 0 + 1; so i = 1 and sum = 1;
