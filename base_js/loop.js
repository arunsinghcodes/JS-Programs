// loops within loops

for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        console.log(i,j);
    }
}

let arr = [1,2,3,4,5];

let duoble = arr.map((i) => i * 2);

console.log(arr);
console.log(duoble);

let filter = arr.filter((el) => el < 2);

console.log(arr);
console.log(filter);

let reduce = arr.reduce((acc, crr) =>{
    return acc + crr;
},0)

console.log(reduce)