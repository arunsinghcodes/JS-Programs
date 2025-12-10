// 1. Write a function to check it an Object is empty or not

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));
console.log(isEmpty({ 1: 2 }));

// 2. Merge two Objects

function merageObj(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(merageObj({ a: 1, b: 2 }, { c: 3, d: 4 }));

// 3. clone an object (Shallow copy)

function shallowCopy(obj) {
  return { ...obj };
}

const original = {
  a: 1,
  b: 2,
};

const copy = shallowCopy(original);
console.log(copy);
console.log(copy === original);

// 4. Deep clone an object(Deep Copy)

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const originalDeep = {
  a: 1,
  b: {
    c: 2,
  },
};

const originalDeepCopy = deepCopy(originalDeep);
originalDeepCopy.b.c = 3;
console.log(originalDeep);
console.log(originalDeepCopy);

// 5. Count the properties in an Object

function countPropertiesInObj(obj) {
  return Object.keys(obj).length;
}

console.log(
  countPropertiesInObj({
    a: 1,
    b: {
      c: 2,
    },
  })
);

// 6. Get keys and values as separated arrays

const person = {
    name: "Arun",
    age: 26,
    city: "Hyderabad"
}

const keys = Object.keys(person);

const values = Object.values(person);

console.log("Keys: ", keys);
console.log("Values: ", values);


// 7. Check if an object has a properties

function checkObjectHasProperties(obj, key){
    return obj.hasOwnProperty(key);
}


console.log(checkObjectHasProperties({a: 1, b: 2}, "3")); // false
console.log(checkObjectHasProperties({a: 1, b: 2}, "b")); // True

// 8. Convert Object to array of [key, value] pairs

function convertObjectIntoArray(obj){
    return Object.entries(obj)
}

console.log(convertObjectIntoArray({a: 1, b: 2, c: 3}))

// 9. Get all the methods of an objects

function getAllMehtods(obj) {
    return Object.keys(obj).filter(key => typeof obj[key] === "function")
}

const objWithMethods ={
    a:1,
    b: 2,
    foo(){
        return "Foo"
    },
    bar(){
        return "bar"
    }
}

console.log(getAllMehtods(objWithMethods))


