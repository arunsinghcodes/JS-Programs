const arr = [1, [2, [3, 4], 5], 6];

// output [1,2,3,4,5,6];

// using resurion function we can get the final out here

function flattenAaay(arr){
    let result = [];

    for(let item of arr){
        if(Array.isArray(item)){
            result = result.concat(flattenAaay(item));
        }else{
            result.push(item);
        }
    }

    return result;
}

console.log(flattenAaay(arr));

// this is Revision code
function flattenAarryNow(arr){
    let result = [];

    for(let item of arr){
        if(Array.isArray(item)){
            result = result.concat(flattenAarryNow(item));
        }else{
            result.push(item)
        }
    }

    return result
}


console.log(flattenAarryNow(arr));


// according to level


const flatten = (arr, level) => {
  let output = [];

  for (let item of arr) {
    if (Array.isArray(item) && level > 0) {
      output = output.concat(flatten(item, level - 1));
    } else {
      output.push(item);
    }
  }

  return output;
};

const sampleArray = [
  1,
  [2, [3, [4, [5, [6]]]]],
  7,
  [8, [9, 10, [11, [12]]]]
];

console.log(flatten(sampleArray, 2));

