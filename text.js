var arr = ["A","B","C","D"];
// if input is 1 output should be B,C,D
// if input is 3 output should be D,A,B
// if input is 0 output should be A,B,C

 function print(arr, input){
   if(input == 3){
    let text = arr.splice(1,3);
   console.log(text);
   }else if(input == 1){
    let  text = arr.splice(1,3);
     console.log(text);
   }else if(input == 0){
     let  text = arr.splice(0,3);
     console.log(text);
   }
 }
 
 console.log(print(arr,3));

// this is the example of array rotation function which will take the arr and input 
function getOutput(arr, input) {
  let result = [];
  for (let i = 1; i <= 3; i++) {
    result.push(arr[(input + i) % arr.length]);
  }
  return result;
}

// Example
const arr = ["A", "B", "C", "D"];

console.log(getOutput(arr, 1)); // ["B", "C", "D"]
console.log(getOutput(arr, 3)); // ["D", "A", "B"]
console.log(getOutput(arr, 0)); // ["A", "B", "C"]