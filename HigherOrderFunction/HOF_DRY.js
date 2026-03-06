const radius = [2, 3, 4, 6];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumferenace = (radius) => {
  return 2* Math.PI * radius;
};

const diameter = (radius) => {
  return 2* radius;
};

const calculate = (radius, logic) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumferenace));
console.log(calculate(radius, diameter));
