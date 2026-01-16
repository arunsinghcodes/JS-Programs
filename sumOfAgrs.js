function sum(...args) {
  const total = args.reduce((acc, crr) => {
   return acc + crr;
  }, 0);

  return total;
}

console.log(sum(100, 200, 300, 400));
