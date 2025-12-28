const arr  = [1,2,2,3,4,4,5,5,5,6];

const seen = {}; // Dictonary mantaing 
const output = []; // showing the output


for(let i=0; i<arr.length; i++) {
    // i = 0 to true, 
    const item = arr[i];
    if(!seen[item]) {
        seen[item] = true;
        output.push(item);
    }
}

for(const item of arr) {
    if(!seen[item]) {
        seen[item] = true;
        output.push(item);
    }
}

console.log(output); // [1, 2, 3, 4, 5, 6]      