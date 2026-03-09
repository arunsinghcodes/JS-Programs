const arr = [34,53,3];

function findLargest(arr) {
  // your solution here
  if (arr.length === 0) return null;
  if(!Array.isArray(arr)) return false;

  // for checking the NAN , infinite number etc
  for (const item of arr) {
    if (!Number.isFinite(item)) {
      return false;
    }
  }
  let largest = arr[0]; // this will we have provied the first element as a largest number here 
  for (let i = 1; i <= arr.length; i++){ // we checking the from the 2nd element of the array 
    if (largest < arr[i]) // we are checking the weather the element is greater or not if yes then assigning the element to the largest 
      largest = arr[i];
  }
  return largest;
}

console.log(findLargest(arr));