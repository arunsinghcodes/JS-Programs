// Let's write a which  the frequency Count on string

const randomStr = "Today is saturday, and deep diving into JavaScript, Yeah";
const counts = {};

// Step 1:  Count frequencies

for (let i = 0; i < randomStr.length; i++) {
  const count = randomStr[i];
  if (count === " " || count === ",") {
    continue;
  }
  if (counts[count] !== undefined) {
    counts[count] += 1;
  } else {
    counts[count] = 1;
  }
}

// step 2: Convert object to array manually (with for...in loop)

const entries = [];
for (let key in counts) {
  entries.push([key, counts[key]]);
}

// step 3: Manual sorting with nested for loop (bubble sort style)

for (let i = 0; i < entries.length; i++) {
  for (let j = i + 1; j < entries.length; j++) {
    // First sort by frequency (desc)
    if (entries[j][1] > entries[i][1]) {
      const temp = entries[i];
      entries[i] = entries[j];
      entries[j] = temp;
    }

    // If same frequency, sort alphabetically
    else if (entries[j][1] === entries[i][1] && entries[j][1] < entries[i][0]) {
      const temp = entries[i];
      entries[i] = entries[j];
      entries[j] = temp;
    }
  }
}

// step 4: Print results
for (let i = 0; i < entries.length; i++) {
  console.log(entries[i][0] + ": " + entries[i][1]);
}
