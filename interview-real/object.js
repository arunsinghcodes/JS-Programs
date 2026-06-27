// Interview Questions

const obj = {
  name: "Arun Kumar Singh",
  age: 26,
  contactNumber: {
    number1: 8427825355,
    number2: 7903500984,
  },
};

// output: ["Arun Kumar Singh", 26, 8427825355, 7903500984]

// Write a function which will return a output like this

const printResult = (obj) => {
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      result = result.concat(printResult(obj[key]));
    } else {
      result.push(obj[key]);
    }
  }

  return result;
};

console.log(printResult(obj));

console.log(3 > 2 > 1);
