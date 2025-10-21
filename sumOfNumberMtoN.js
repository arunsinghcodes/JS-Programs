// write a function which will calucalte the sum of number between just like from 20 to 30;

const sumOfNumbersInRange = (n, m) => {
  let sum = 0;

  for (let i = n; i <= m; i++) {
    sum = sum + i;
  }

  return sum;
};

console.log(sumOfNumbersInRange(30, 40));
