const radius = [2, 3, 4, 6];

const calculateArea = (radius) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }

  return output;
};

console.log(calculateArea(radius));

const calculateCircumefernace = (radius) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }

  return output;
};

console.log(calculateCircumefernace(radius));

const calculateDiameter = (radius) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }

  return output;
};

console.log(calculateDiameter(radius));


//! Here we have big issue we are repeating ourself alot same things