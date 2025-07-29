/**
 *
 * The Problem is here like we have an arr which consists with there will be repetative number as well
 * so You need to find the how many time number is repeted
 *
 * {
 * "2":3,
 * "3":1,.....
 * }
 *
 */

const arrOfNumber = [4, 5, 6, 3, 6, 5, 5, 8, 6, 3, 2, 6, 7, 4, 3, 3, 3];
const counts = {};

for (let i = 0; i < arrOfNumber.length; i++) {
  const count = arrOfNumber[i];
  console.log(count);
  if (counts[count] !== undefined) {
    counts[count] = counts[count] + 1;
  } else {
    counts[count] = 1;
  }
}

console.log(counts);
