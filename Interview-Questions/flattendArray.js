const arr = [1, [2, [3, 4], 5], 6];

// output [1,2,3,4,5,6];

// using resurion function we can get the final out here

function flattenAaay(arr){
    let result = [];

    for(let item of arr){
        if(Array.isArray(item)){
            result = result.concat(flattenAaay(item));
        }else{
            result.push(item);
        }
    }

    return result;
}

console.log(flattenAaay(arr));

