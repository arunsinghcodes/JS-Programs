// Write a function to remove duplicates from an array.

// Example:
// Input: [1, 2, 2, 3, 1]
// Output: [1, 2, 3]

// this is the element

const arrElm = [1, 2, 2, 3, 1, 4];

const removeDuplicateFunction = (arrElm) => {
  let output = [];

  for (let i = 0; i < arrElm.length; i++) {
    if (!output.includes(arrElm[i])) output.push(arrElm[i]);
  }

  return output;
};

console.log(removeDuplicateFunction(arrElm));

// Using Set

function removeDuplicateFunctionSet() {
  return [new Set(arrElm)];
}

console.log(removeDuplicateFunctionSet(arrElm));

// using filter + indexOf

function removeDuplicateFunctionFilterIndexOf(arrElm) {
  return arrElm.filter((item, index) => arrElm.indexOf(item) === index);
}

console.log(removeDuplicateFunctionFilterIndexOf(arrElm));

// Using an Object(Old school method)

function removeDuplicateFunctionObject(arrElm) {
  const seen = {};
  const result = [];

  for (let value of arrElm) {
    if (!seen[value]) {
      seen[result] = true;
      result.push(value);
    }
  }

  return result;
}

console.log(removeDuplicateFunctionObject(arrElm));

// Using reduce methods

const removeDuplicateFunctionWithReduce = (arrElm) => {
  return arrElm.reduce((acc, curr) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
};


console.log(removeDuplicateFunctionWithReduce(arrElm));

