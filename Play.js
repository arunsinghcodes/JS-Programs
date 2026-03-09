const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: 3,
  d: 4,
};

const combineObj = { ...obj1, ...obj2 };

console.log(combineObj);


// Proxy

const myObject ={
    name: "Arun",
    age: 26
}

const handler = {
    get: function(target, prop, receiver){
        console.log(`Someone access property ${prop}`);
        return target[prop]
    }
    
}

const proxiedObject = new Proxy(myObject, handler);

console.log(proxiedObject.name);
console.log(proxiedObject.age);