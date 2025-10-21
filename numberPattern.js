// print the number pattern of nth number
// 1
// 12
// 123
// 1234
// 12345

const patternNumber = (number) => {
  let result = "";
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      result = result + j;
      console.log("Inside J loop",result ,i, j)
    }
    result = result + "\n";
     console.log("Inside I loop", result,i)
  }

  return result;
};

console.log(patternNumber(6));
