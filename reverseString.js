// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */

let s = ["h","e","l","l","o"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// var reverseString = function(s) {
//     let left = 0;
//     let right = s.length - 1;

//     while(left < right){
//         let temp = s[left];
//         s[left] = s[right];
//         s[right] = temp

//         left++;
//         right--;
//     }
// };

// This is 2 pointer way solve this problem


var reverseString = function(s) { 
    let left = 0; 
    let right = s.length - 1; 
    while(left < right){ 
        let temp = s[left]; 
        s[left] = s[right]; 
        s[right] = temp; 
        left++; 
        right--; 
    } 
};

// 1. Create an array of characters
let myArray = ['h', 'e', 'l', 'l', 'o'];

// 2. Call the function (modifies myArray directly)
reverseString(myArray);

// 3. Print the modified array to the console
console.log(myArray); 
// Output: [ 'o', 'l', 'l', 'e', 'h' ]

// 4. (Optional) Print it back as a single string
console.log(myArray.join('')); 
// Output: "olleh"
