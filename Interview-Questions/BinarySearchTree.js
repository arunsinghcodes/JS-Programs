const arr = [1, 3, 5, 7, 9, 11];
const target = 9;

function binarySearch(arr, target) {
  let left = 0; // this is pointing to the 1st index of an array
  let right = arr.length - 1; // this is pointing ti the last index of the an array

  while (left <= right) { // check if left is less the or equal to right 
    let mid = Math.floor((left + right) / 2); // then find the mid and 

    if (arr[mid] === target) return mid; // this will return the mide index of the that. is the found in the array

    if (arr[mid] < target) { // if the arr[mid] less then target
      left = mid + 1; // this will retrun right side of the array
    } else { 
      right = mid - 1; // this is reurn the left side to array
    }
  }

  return -1; // Not found -> if element does not exist the any array.
}

console.log(binarySearch(arr, target));

