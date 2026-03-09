// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// const combinedArr = [...arr1, ...arr2];
// console.log(combinedArr);

// const obj1 = {
//   a: 1,
//   b: 2,
// };

// const obj2 = {
//   c: 3,
//   d: 4,
// };

// const combineObj = { ...obj1, ...obj2 };

// console.log(combineObj);

// // Proxy

// const myObject ={
//     name: "Arun",
//     age: 26
// }

// const handler = {
//     get: function(target, prop, receiver){
//         console.log(`Someone access property ${prop}`);
//         return target[prop]
//     }

// }

// const proxiedObject = new Proxy(myObject, handler);

// console.log(proxiedObject.name);
// console.log(proxiedObject.age);

let a = 5;
let b = a;

a = 10;

console.log(b);
console.log(a);

let obj = {
  x: 1,
};

console.log("Before original object", obj);

let copyObj = obj;

copyObj.x = 99;

console.log("After updating object", obj);
console.log("CopyObj", copyObj);

let original = {
  a: 1,
  b: {
    c: 2,
  },
};

let shallow = { ...original };

shallow.b.c = 99;

console.log("original", original);
console.log("shallow", shallow);

//deep copy

let originalDeep = {
  a: 1,
  b: {
    c: 2,
  },
};

let originalDeepCopy = structuredClone(originalDeep);

originalDeepCopy.b.c = "Arun";

console.log("originalDeepCopy", originalDeepCopy);
console.log("originalDeep", originalDeep);

// JOSN.parse(JSON.stringify(obj))

let objJSON = {
  a: "Arun",
  b: "Singh",
  c: {
    d: 26,
  },
};

let deepCopyobjJSON = JSON.parse(JSON.stringify(objJSON));

((deepCopyobjJSON.c.d = 30), console.log(objJSON));
console.log(deepCopyobjJSON);

// const nums = [0,1,2,2,3,0,4,2];
// const val = 2;

// var removeElement = function (nums, val) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i];
//       k++
//     }
//   }

//   return k;
// };

// console.log(nums.slice(0,removeElement(nums, val)));

const arr = [1, 2, 33, 3, 433, 3, 3, 3, 3, 3, 5, 5, 6, 6];

const removeDuplicatesFromArray = (arr) => {
  const seen = {};

  const output = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (!seen[item]) {
      seen[item] = true;
      output.push(item);
    }
  }

  return output;
};

console.log(removeDuplicatesFromArray(arr));


const arrElm = [1, 2, 2, 3, 1, 4];

const removeDuplicateFunction = (arrElm) => {
  let output = [];

  for (let i = 0; i < arrElm.length; i++) {
    if (!output.includes(arrElm[i])) output.push(arrElm[i]);
  }

  return output;
};