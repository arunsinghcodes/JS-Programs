/*

for Loops

*/

for (let i = 1; i <= 10; i++) {
  console.log(`${i} I Love My India from For Loop`);
}

// let i = 1;
// while(i<=10){
//     console.log(`${i} I Love My India from While Loop`);
//     i++;
// }

// do {
//   console.log(`${i} I Love My India from Do While Loop`);
//   i++;
// } while (i <= 10);

// for...in loop
// that mostly we use with Object

const obj = {
  name: "Arun",
  age: 26,
  city: "Hyderabad",
  state: "Telengana",
  pinCode: 500084,
  company: ["TestUnity", "DataGroker", "DAZN"],
};

for (let key in obj) {
  console.log(obj[key]);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let element of arr) {
  console.log(element);
}

arr.forEach((element) => {
  console.log(element, "from the forEach Loop");
});


for (let [index, value] of arr.entries()) {
  console.log(index, value);
}
