// write the function of the factorial of n which will calculate the factorial of an numbers

const factorialOfNumber = (number) => {
  let factorial = 1;

  for (let i = number; i >= 1; i--) {
    factorial = factorial * i;
  }

  return factorial;
};

console.log(factorialOfNumber(6));
