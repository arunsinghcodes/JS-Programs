// Geven an array of numbers, return the count of element that are even integers(divisible by 2). the value 0 as even


// const arr = [1,2,3,4,5, 6];

// function countEvens(arr){
//     let count = [];
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] % 2 === 0){
//             count.push(arr[i]);
//         }
//     }

//     return count.length;
// }

// console.log(countEvens(arr));


function capitalizeWords(sentence) {
    // Your implementation
    // return sentence
    // .trim()
    // .toLowerCase() 
    // .split(/\s+/)
    // .map(word =>
    //   word.charAt(0).toUpperCase() + word.slice(1)
    // )
    // .join(' ');
    console.log(sentence.trim().toLowerCase().split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)));
}

//For the purpose of user debugging.
capitalizeWords("Hello world");