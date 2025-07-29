// all these are follow the async behaviour always
// setTimeout();
// setInterval();
// fetch();
// axios();


console.log("1st Task");

setTimeout(()=>{
    console.log("2nd Task")
},5000);

console.log("3rd Task");

setTimeout(()=>{
    console.log("4nd Task")
},2000);

console.log("5th Task");

setTimeout(()=>{
    console.log("6th Task")
},1000);