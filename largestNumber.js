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
  let largest = arr[0];
  for (let i = 1; i <= arr.length; i++){
    if (largest < arr[i])
      largest = arr[i];
  }
  return largest;
}

console.log(findLargest(arr));