const nums = [0,1,2,2,3,0,4,2]; // this is array given
const val = 2; // target value

var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++
    }
  }

  return k;
};

console.log(nums.slice(0,removeElement(nums, val)));

const arr = [10,20,30,40,50];

// slice(start, end); start-> include index and end is exclude indexed
console.log(arr.slice(1,2)); // Output -> 20
console.log(arr.slice(0,2)); // Output -> 10 , 20

// General definition of splice()

// splice() changes the contents of an array by removing, replacing, or adding elements in place.

// array.splice(start, deleteCount, item1, item2, ...)


console.log(arr.splice(1,2));
console.log(arr);



// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// let nums = [0,0,1,1,1,2,2,3,3,4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    let seen = {};

    for(let i = 0; i < nums.length; i++){
        let arrValue = nums[i];
        if(!seen[arrValue]){
            seen[arrValue] = true;
            nums[k] = nums[i]
            k++
        }
    }
    return k;
};

console.log(nums.slice(0,removeDuplicates(nums)));
