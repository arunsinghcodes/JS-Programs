const str = "Arun Kumar Singh";
const counts = {};

for (let i = 0; i < str.length; i++) {
  const count = str[i];
  if (count === " ") {
    continue;
  }
  if (counts[count] !== undefined) {
    counts[count] = counts[count] + 1;
  } else {
    counts[count] = 1;
  }
}

console.log(counts);
