function sum(...args) {
  const total = args.reduce((acc, crr) => {
    return acc + crr;
  }, 0);

  return total;
}

console.log(sum(100, 200, 300, 400));

function sumOfTotalNumbers(...args) {
  const total = args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return total;
}

console.log(sumOfTotalNumbers(100, 200, 300, 400));
