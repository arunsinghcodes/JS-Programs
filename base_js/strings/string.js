let str = "Arun Kumar Singh";
// input Arun
// output nurA;

// this is with inbuilt methods
function reverseString(str) {
  let resevseStr = str.split("").reverse().join("");
  console.log(resevseStr);
}

reverseString(str);

// this without inbuilt methods

function reverse(str) {
  let resevseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    resevseStr = resevseStr + str[i];
  }
  return resevseStr;
}

console.log(reverse(str));

function anotherWayReverse(str) {
  let resevseStr = "";

  for (let i = 0; i < str.length; i++) {
    resevseStr = str[i] + resevseStr;
  }

  return resevseStr;
}

console.log(anotherWayReverse(str));
